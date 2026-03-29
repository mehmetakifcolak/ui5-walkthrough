import MockServer from "sap/ui/core/util/MockServer";

const mockserver = {
  init(): void {
    const oMockServer = new MockServer({
      rootUri: sap.ui.require.toUrl("ui5/walkthrough") + "/V2/Northwind/Northwind.svc/"
    });

    const oUrlParams = new URLSearchParams(window.location.search);

    MockServer.config({
      autoRespond: true,
      autoRespondAfter: Number(oUrlParams.get("serverDelay")) || 500
    });

    const sPath = sap.ui.require.toUrl("ui5/walkthrough/localService");
    oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
    oMockServer.start();
  }
};

export default mockserver;
