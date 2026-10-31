sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("jsonmodel9.controller.View1", {
        onInit: function() {
            var oData =   {
                employee: {
                    name: "Jaspal",
                    age: 26,
                    city: "BBSR"
                }
            };
            this.getView().setModel(new JSONModel(oData));

            this.byId("formJS").bindElement("/employee");

            this.byId("vboxJS").bindElement("/employee");
        }
    });
});