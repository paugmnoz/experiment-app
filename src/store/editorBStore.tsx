import { observable, action, computed } from 'mobx';

class EditorBStore {
    
    @observable tool:number = 0;

    @observable getTool() {
        return this.tool;
    }

    @action setTool(value: number) {
        this.tool = value;
        console.log('exdi');
    }
}

export const editorBStore = new EditorBStore();