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
                let data = [
                    {
                        "supplierid" : "SUP1001",
                        "vendorid": "VEN2001",
                        "acmid" : "ACM0001",
                        "erpid" : "ERP3001"
                    },
                    {
                        "supplierid" : "SUP1002",
                        "vendorid": "VEN2002",
                        "acmid" : "ACM0002",
                        "erpid" : "ERP3002"
                    },
                    {
                        "supplierid" : "SUP1003",
                        "vendorid": "VEN2003",
                        "acmid" : "ACM0003",
                        "erpid" : "ERP3003"
                    },
                    {
                        "supplierid" : "SUP1004",
                        "vendorid": "VEN2004",
                        "acmid" : "ACM0004",
                        "erpid" : "ERP3004"
                    }
                ];
                let omodel = new JSONModel(data);
                this.getView().setModel(omodel, "myModel")

            },
            onTableRowPress:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            }
        });
    });
