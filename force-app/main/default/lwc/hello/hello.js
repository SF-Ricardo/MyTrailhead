import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    world = '文本变更';
    flag = true;
    handleChange(event) {
        this.world = event.target.value;
    }

    CheckBoxChange(event){
        this.flag = event.target.checked;
    }
}