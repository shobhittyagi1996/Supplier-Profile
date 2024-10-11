sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/UIComponent"
    ],
    function (BaseController, JSONModel, UIComponent) {
        "use strict";

        return BaseController.extend("com.sap.supplier.controller.View2", {
            onInit: function () {
                let oRouter = UIComponent.getRouterFor(this);
                oRouter
                    .getRoute("RouteView2")
                    .attachPatternMatched(this._getMatchedRoute, this);




            },

            _getMatchedRoute: function (oEvent) {
                debugger
                let ID = oEvent.getParameters().arguments.ID;
                let sPath = `/supplierProfileT('${ID}')`;
                this.getView().bindElement(sPath);
                
              }



        });
    }
);
