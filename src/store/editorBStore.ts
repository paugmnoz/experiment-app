import { observable, action, computed } from 'mobx';

class EditorBStore {

    @observable colorWheelOn: boolean = false;

    @observable tool: number = 0;
    @observable modifiyingSpectro = true;
    @observable backgroundColor = 0;
    @observable spectroColor = 0;

    @observable rNumBack = 0;
    @observable gNumBack = 0;
    @observable bNumBack = 0;

    @observable rNumSpectro = 0;
    @observable gNumSpectro = 0;
    @observable bNumSpectro = 0;

    @observable brightValStore = 85;
    @observable contrastValStore = 85;

    @action setColorWheelOn(value: boolean) {
        this.colorWheelOn = value;
    }

    @action setBrightValStore(value: number) {
        this.brightValStore = value;
    }

    @action setContrastValStore(value: number) {
        this.contrastValStore = value;
    }

    @action setRNumBack(value: number) {
        this.rNumBack = value;
    }

    @action setGNumBack(value: number) {
        this.gNumBack = value;
    }

    @action setBNumBack(value: number) {
        this.bNumBack = value;
    }

    @action setRNumSpectro(value: number) {
        this.rNumSpectro = value;
    }

    @action setGNumSpectro(value: number) {
        this.gNumSpectro = value;
    }

    @action setBNumSpectro(value: number) {
        this.bNumSpectro = value;
    }

    @action setModifyingSpectro(value: boolean) {
        this.modifiyingSpectro = value;
    }

    @action setBackgroundColor(value: number) {
        this.backgroundColor = value;
        console.log('exdi');
    }

    @action setSpectroColor(value: number) {
        this.spectroColor = value;
        console.log('exdi');
    }

    @action setTool(value: number) {
        this.tool = value;
        console.log('exdi');
    }
}

export const editorBStore = new EditorBStore();