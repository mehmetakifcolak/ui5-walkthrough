import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import { SearchField$SearchEvent, SearchField$LiveChangeEvent } from "sap/m/SearchField";

import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/ListBinding";
import UIComponent from "sap/ui/core/UIComponent";
import Event from "sap/ui/base/Event";
import ObjectListItem from "sap/m/ObjectListItem";
import Table from "sap/m/Table";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class InvoiceList extends Controller {
  public onInit(): void {
    const oViewModel = new JSONModel({ currency: "EUR" });
    this.getView()!.setModel(oViewModel, "view");
  }
  onFilterInvoices(event: SearchField$SearchEvent): void {
    this._filterList(event.getParameter("query") as string);
  }

  onLiveFilterInvoices(event: SearchField$LiveChangeEvent): void {
    this._filterList(event.getParameter("newValue") as string);
  }

  private _filterList(sQuery: string): void {
    const oTable = this.byId("invoiceList") as Table;
    const oBinding = oTable.getBinding("items") as ListBinding;
    const aFilters = sQuery
      ? [new Filter("ProductName", FilterOperator.Contains, sQuery)]
      : [];
    oBinding.filter(aFilters);
  }

  onPress(event: Event): void {
    const item = event.getSource() as ObjectListItem;

    const router = UIComponent.getRouterFor(this);
    router.navTo("detail", {
        invoicePath: window.encodeURIComponent(item.getBindingContext("invoice")!.getPath().substring(1))
    });
  }     
}
