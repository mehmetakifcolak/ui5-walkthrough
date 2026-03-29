import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
  public static readonly metadata = {
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
    manifest: "json"
  };
}
