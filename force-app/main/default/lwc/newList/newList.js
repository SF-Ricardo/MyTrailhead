import { LightningElement, wire } from 'lwc';

import getNewList from '@salesforce/apex/NewsController.getNewList';

export default class NewList extends LightningElement {
    @wire(getNewList)
    newList;
}