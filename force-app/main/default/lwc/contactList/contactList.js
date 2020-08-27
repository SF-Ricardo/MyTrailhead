import { LightningElement,wire } from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMS = [
    {label:'FirstName',fieldName:FIRSTNAME_FIELD.fieldApiName,type:'text'},
    {label:'LastName',fieldName:LASTNAME_FIELD.fieldApiName,type:'text'},
    {label:'Email',fieldName:EMAIL_FIELD.fieldApiName,type:'text'}
];

export default class ContactList extends LightningElement {
    columns = COLUMS;
    @wire(getContacts)
    contactlists
}