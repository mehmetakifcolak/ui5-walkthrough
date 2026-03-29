import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Controller from "sap/ui/core/mvc/Controller";

const formatter = {
  statusText(this: Controller, sStatus: string): string {
    const oResourceBundle = (this.getOwnerComponent()!.getModel("i18n") as ResourceModel)
      .getResourceBundle() as ResourceBundle;
    switch (sStatus) {
      case "A":
        return oResourceBundle.getText("invoiceStatusA") ?? sStatus;
      case "B":
        return oResourceBundle.getText("invoiceStatusB") ?? sStatus;
      case "C":
        return oResourceBundle.getText("invoiceStatusC") ?? sStatus;
      default:
        return sStatus;
    }
  }
};

export default formatter;
