import { observable, action, computed } from 'mobx';

class TaggingStore {
    @observable playingAudio = false;
    @observable audioPos = 0;

    @observable posXCard = 0;
    @observable posYCard = 0;

    @observable commonName = ''
    @observable sciName = ''

    @action setMousePos(x: any, y: any) {
        this.posXCard = x;
        this.posYCard = y;
    }

    @action handleTogglePlay() {
          this.playingAudio = !this.playingAudio;
      }
    
    @action handlePosChange(e:any) {
          this.audioPos = e.originalArgs[0]
      }
    @action birdClick(){
        this.commonName = 'Hormiguero de Zeledón'
        this.sciName = 'Hafferia zeledoni'
    }
}



export const taggingStore = new TaggingStore();