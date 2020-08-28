import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'; // 对象名
import NAME_FIELD from '@salesforce/schema/Account.Name'; // 文本
import Active from '@salesforce/schema/Account.Active__c'; // 下拉表
import NumberOfEmployees from '@salesforce/schema/Account.NumberOfEmployees'; // 数字
import OwnerName from '@salesforce/schema/Account.Owner.Name'; // lookup
import queryAcc from '@salesforce/apex/AccountDemo.QueryAccount';

export default class AccountQueryDemo extends LightningElement {
    objectApiName = ACCOUNT_OBJECT.fieldApiName;
    Name = NAME_FIELD.fieldApiName;
    Active = Active.label;
    NumberOfEmployees = NumberOfEmployees.fieldApiName;
    OwnerId = OwnerName.Name.label;

    @wire(queryAcc)
    accounts;
    // accounts = [
    //     {
    //         id:'0X001',
    //         Name:'zhangsan'
    //     },{
    //         id:'0X002',
    //         Name:'里斯'
    //     },{
    //         id:'0X003',
    //         Name:'赵高'
    //     }
    // ];
}