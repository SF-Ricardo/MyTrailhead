import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ID_FIELD from '@salesforce/schema/AccountId';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import queryAccount from '@salesforce/apex/AccountDemo.QueryAccount';

export default class AccountQueryDemo extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fileds = [ID_FIELD,NAME_FIELD];

    // @wire(queryAccount)
    // accounts
}