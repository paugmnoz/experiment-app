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

    @action handlePosChange(e: any) {
        this.audioPos = e.originalArgs[0]
    }
    @action birdClick(value: number) {
        switch (value) {
            case 1:
                this.commonName = 'Barranquero bocon'
                this.sciName = 'Electron platyrhynchum'
                break;
            case 2:
                this.commonName = 'Piranga Roja'
                this.sciName = 'Piranga rubra'
                break;
            case 3:
                this.commonName = 'Mosquero moñudo'
                this.sciName = 'Mitrephanes phaeocercus'
                break;
            case 4:
                this.commonName = 'Torito cabeciblanco'
                this.sciName = 'Capito maculicoronatus'
                break;
        }

    }

    //COMPARE SECTION
    @observable comparedMicro1Activated = true;
    @observable comparedMicro2Activated = false;
    @observable comparedMicro3Activated = false;
    @observable comparedMicro4Activated = false;
    @observable comparedMicro5Activated = false;
    @observable comparedMicro6Activated = false;

    @observable isPrincipal1 = true;
    @observable isPrincipal2 = false;
    @observable isPrincipal3 = false;
    @observable isPrincipal4 = false;
    @observable isPrincipal5 = false;
    @observable isPrincipal6 = false;

    @observable volume = 10;

    @action activateMicro(micro: string) {
        switch (micro) {
            case '1':
                this.comparedMicro1Activated = !this.comparedMicro1Activated
                break;
            case '2':
                this.comparedMicro2Activated = !this.comparedMicro2Activated
                break;
            case '3':
                this.comparedMicro3Activated = !this.comparedMicro3Activated
                break;
            case '4':
                this.comparedMicro4Activated = !this.comparedMicro4Activated
                break;

            case '5':
                this.comparedMicro5Activated = !this.comparedMicro5Activated
                break;
            case '6':
                this.comparedMicro6Activated = !this.comparedMicro6Activated
                break;
            case 'all':
                this.comparedMicro1Activated = !this.comparedMicro1Activated
                this.comparedMicro2Activated = !this.comparedMicro2Activated
                this.comparedMicro3Activated = !this.comparedMicro3Activated
                this.comparedMicro4Activated = !this.comparedMicro4Activated
                this.comparedMicro5Activated = !this.comparedMicro5Activated
                this.comparedMicro6Activated = !this.comparedMicro6Activated
                break;
        }
    }

    @action onChangeVolume(val) {
        this.volume = val;
    }
}



export const taggingStore = new TaggingStore();