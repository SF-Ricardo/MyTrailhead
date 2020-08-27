import { LightningElement,wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const COLUMS = [
    {label:'Account Name',fieldName:NAME_FIELD.fieldApiName,type:'text'},
    {label:'AnnualRevenue',fieldName:REVENUE_FIELD.fieldApiName,type:'currency'},
    {label:'Industry',fieldName:INDUSTRY_FIELD.fieldApiName,type:'text'}
];

export default class AccountList extends LightningElement {
    columns = COLUMS;
    @wire(getAccounts)
    accounts;
}