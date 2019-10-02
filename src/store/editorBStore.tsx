import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class EditorBStore {

    @observable tool:number = 0;
    @observable modifiyingBack = true;
    @observable backgroundColor = 0;
    @observable spectroColor = 0;


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