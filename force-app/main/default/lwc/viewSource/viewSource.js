import { LightningElement,api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL = 'https://www.baidu.com';

    @api source

    get sourceURL(){
        return this.baseURL + this.source;
    }
}