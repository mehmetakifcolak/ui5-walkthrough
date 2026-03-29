import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class InvoiceList extends Controller {
  public onInit(): void {
    const oViewModel = new JSONModel({ currency: "EUR" });
    this.getView()!.setModel(oViewModel, "view");
  }
}
