import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Dialog from "sap/m/Dialog";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class HelloPanel extends Controller {
  public onInit(): void {
    const oModel = new JSONModel({ recipient: { name: "World" } });
    this.getView()!.setModel(oModel);
  }

  public onShowHello(): void {
    const oBundle = (this.getView()!.getModel("i18n") as ResourceModel)
      .getResourceBundle() as ResourceBundle;
    const sRecipient = (this.getView()!.getModel() as JSONModel)
      .getProperty("/recipient/name") as string;
    const sMsg = oBundle.getText("helloMsg", [sRecipient]) ?? "";
    MessageToast.show(sMsg);
  }

  public async onOpenDialog(): Promise<void> {
    const oDialog = await this.loadFragment({
      name: "ui5.walkthrough.view.HelloDialog"
    });
    (oDialog as Dialog).open();
  }

  public onCloseDialog(): void {
    (this.byId("helloDialog") as unknown as { close(): void }).close();
  }
}
