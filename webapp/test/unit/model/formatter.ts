import formatter from "ui5/walkthrough/model/formatter";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

QUnit.module("Formatting functions", {});

QUnit.test("Should return the translated texts", (assert) => {
  const oResourceModel = new ResourceModel({
    bundleUrl: sap.ui.require.toUrl("ui5/walkthrough/i18n/i18n.properties"),
    supportedLocales: [""],
    fallbackLocale: ""
  });

  const oControllerMock = {
    getOwnerComponent() {
      return {
        getModel() {
          return oResourceModel;
        }
      };
    }
  };

  const fnIsolatedFormatter = formatter.statusText.bind(oControllerMock as any);

  assert.strictEqual(fnIsolatedFormatter("A"), "New", "Status A is correct");
  assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "Status B is correct");
  assert.strictEqual(fnIsolatedFormatter("C"), "Done", "Status C is correct");
  assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "Unknown status returns itself");
});
