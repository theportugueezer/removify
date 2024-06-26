({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            
            {label: 'Product Name', fieldName: 'Salesforce_Link__c', type: 'url', 
             typeAttributes: {label: { fieldName: 'Service_Product_Name__c' }, target: '_blank'}, editable: false},

            
         
            {label: 'Monthly Fee', fieldName: 'Monthly_Fee__c', type: 'currency', editable: true},
            {label: 'Minimum Term', fieldName: 'Minimum_Term__c', type: 'number', editable: true},

            {label: 'Price Per Standard Review', fieldName: 'Price_Per_Standard_Review__c', type: 'currency', editable: true},
            {label: 'Price Per Premium Review', fieldName: 'Price_Per_Premium_Review__c', type: 'currency', editable: true},
            {label: 'Purchased', fieldName: 'Purchased__c', type: 'checkbox', editable: true}

            // add other columns that you want to display
        ]);
        helper.getOpportunityProducts(component);
    },

    handleSave : function(component, event, helper) {
        helper.saveDataTable(component, event.getParam('draftValues')).then($A.getCallback(function(result){
            // to dismiss the page-level message
            $A.get('e.force:refreshView').fire();
            // clear the draft values from the datatable
            component.find("oppProductTable").set("v.draftValues", null);
            helper.getOpportunityProducts(component);

        }));
    },
})
