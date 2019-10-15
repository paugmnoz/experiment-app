import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class EditorBStore {

    @observable tool:number = 0;
    @observable modifiyingBack = true;
    @observable backgroundColor = 0;
    @observable spectroColor = 0;

    @observable rNum = 0;
    @observable gNum = 0;
    @observable bNum = 0;

    @observable brightValStore = 85;
    @observable contrastValStore = 85;

    @observable getRNum(){
        return this.rNum;
    }

    @observable getGNum(){
        return this.gNum;
    }

    @observable getBrightValStore(){
        return this.brightValStore;
    }

    @observable getContrastValStore(){
        return this.contrastValStore;
    }

    @observable getBNum(){
        return this.bNum;
    }

    @action setBrightValStore(value: number) {
        this.brightValStore = value;
    }

    @action setContrastValStore(value: number) {
        this.contrastValStore = value;
    }

    @action setRNum(value: number) {
        this.rNum = value;
    }

    @action setGNum(value: number) {
        this.gNum = value;
    }

    @action setBNum(value: number) {
        this.bNum = value;
    }

    @observable getModifyingBack() {
        return this.modifiyingBack;
    }

    @action setModifyingBack(value: boolean) {
        this.modifiyingBack = value;
    }

    @observable getBackgroundColor() {
        return this.backgroundColor;
    }

    @action setBackgroundColor(value: number) {
        this.backgroundColor = value;
        console.log('exdi');
    }

    @observable getSpectroColor() {
        return this.spectroColor;
    }

    @action setSpectroColor(value: number) {
        this.spectroColor = value;
        console.log('exdi');
    }

    @observable getTool() {
        return this.tool;
    }

    @action setTool(value: number) {
        this.tool = value;
        console.log('exdi');
    }
}

export const editorBStore = new EditorBStore();