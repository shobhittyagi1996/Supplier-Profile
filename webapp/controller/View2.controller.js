sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.sap.supplier.controller.View2", {
        onInit: function() {
        },
        itemValidationCallback: function (oItemInfo) {
            const { oItem, iTotalItemsForUpload } = oItemInfo;
            var oUploadSetTableInstance = this.byId("UploadSetTable");
            var oSelectedItems = oUploadSetTableInstance.getSelectedItems();
            var oSelectedItemForUpdate = oSelectedItems.length === 1 ? oSelectedItems[0] : null;
            if (oSelectedItemForUpdate && oSelectedItemForUpdate.getFileName() === "-" && iTotalItemsForUpload === 1) {
                return new Promise((resolve) => {
                    if (oSelectedItemForUpdate) {
                        var oContext = oSelectedItemForUpdate.getBindingContext();
                        var data = oContext && oContext.getObject ? oContext.getObject() : {};

                        /* Demonstration use case of Setting the header field if required to be passed in API request headers to
                                inform backend with document type captured through user input */
                        oItem.addHeaderField(new CoreItem(
                            {
                                key: "existingDocumentID",
                                text: data ? data.id : ""
                            }
                        ));
                    }
                    resolve(oItem);
                });
            } else {
                var oItemPromise = new Promise((resolve, reject) => {
                    this.oItemsProcessor.push({
                        item: oItem,
                        resolve: resolve,
                        reject: reject
                    });
                });
                if (iTotalItemsForUpload === 1) {
                    this.openFileUploadDialog();
                } else if (iTotalItemsForUpload === this.oItemsProcessor.length) {
                    this.openFileUploadDialog();
                }
                return oItemPromise;
            }
        },
      });
    }
  );
  