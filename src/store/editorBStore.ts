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

    @observable getColorWheelOn() {
        return this.colorWheelOn;
    }

    @action setColorWheelOn(value: boolean) {
        this.colorWheelOn = value;
    }

    @observable getRNumBack() {
        return this.rNumBack;
    }

    @observable getGNumBack() {
        return this.gNumBack;
    }

    @observable getBNumBack() {
        return this.bNumBack;
    }

    @action getRNumSpectro() {
        return this.rNumSpectro;
    }

    @action getGNumSpectro() {
        return this.gNumSpectro;
    }

    @action getBNumSpectro() {
        return this.bNumSpectro;
    }

    @observable getBrightValStore() {
        return this.brightValStore;
    }

    @observable getContrastValStore() {
        return this.contrastValStore;
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

    @observable getModifyingSpectro() {
        return this.modifiyingSpectro;
    }

    @action setModifyingSpectro(value: boolean) {
        this.modifiyingSpectro = value;
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