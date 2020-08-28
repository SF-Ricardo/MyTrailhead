import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    world = '名字的修改';
    flag = true;
    handleChange(event) {
        this.world = event.target.value;
    }

    CheckBoxChange(event){
        this.flag = event.target.checked;
    }

    firstName = '';
    lastName = '';

    updateName(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }

    AccountList = [
        {
            Id:'1',
            Name:'zhangsan',
            age:14,
            job:'工程师'
        },
        {
            Id:'2',
            Name:'李四',
            age:19,
            job:'画家'
        },
        {
            Id:'3',
            Name:'王五',
            age:17,
            job:'木匠'
        }
    ];
}