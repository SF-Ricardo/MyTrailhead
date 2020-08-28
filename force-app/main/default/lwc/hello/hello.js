import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    world = '中文翻译效果呢';

    handleChange(event) {
        this.world = event.target.value;
    }
}