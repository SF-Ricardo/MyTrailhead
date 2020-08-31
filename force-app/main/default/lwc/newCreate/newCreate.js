import { LightningElement,track } from 'lwc';

import Name_Field from '@salesforce/schema/News__c.Name';
import Level_FIELD from '@salesforce/schema/News__c.Level__c';
import Sendtime_FIELD from '@salesforce/schema/News__c.sendTime__c';
import Active_FIELD from '@salesforce/schema/News__c.Active__c';

import AddNewsRecord from '@salesforce/apex/NewsController.AddNewsRecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class NewCreate extends LightningElement {
    @track error;

    @track newRecord = {
        Level : Level_FIELD,
        Name : Name_Field,
        Sendtime : Sendtime_FIELD,
        Active : Active_FIELD
    };

    handleNameChange(event) {
        this.newRecord.Name = event.target.value;
        window.console.log('Name ==> '+this.newRecord.Name);
    }

    // handleLevelChange(event) {
    //     this.newRecord.Level = event.target.value;
    //     window.console.log('Level ==> '+this.newRecord.Level);
    // }

    // handleSendtimeChange(event) {
    //     this.newRecord.Sendtime = event.target.value;
    //     window.console.log('Sendtime ==> '+this.newRecord.Sendtime);
    // }

    handleActiveChange(event) {
        this.newRecord.Active = event.target.checked;
        window.console.log('Active ==> '+this.newRecord.Active);
    }

    handleSave() {
        console.log("===>>> " + this.newRecord);
        AddNewsRecord({objnews:this.newRecord}).then(result => {
            this.newRecord = {};
            window.console.log('result ===> '+result);
            // Show success messsage
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'New Created Successfully!!',
                variant: 'success'
            }),);
        }).catch(error => {
            this.error = error.message;
        });
    }
}