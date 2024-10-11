sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.supplier.controller.View1", {
            onInit: function () {

            },
            onTableRowPress: function (oEvent) {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);


                let oSelectedItem = oEvent.getSource();
                let oBindingContext = oSelectedItem.getBindingContext();
                let sID = oBindingContext.getProperty("ID");


                oRouter.navTo("RouteView2", {
                    ID: sID
                });
            }

        });
    });
