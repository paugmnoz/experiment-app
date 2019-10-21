import { observable, action, computed } from 'mobx';
var XenoCanto = require('xeno-canto');

class TaggingStore {
    @observable playingAudio = false;
    @observable audioPos = 0;

    @observable mouseX = 0;
    @observable mouseY = 0;

    @observable commonName;
    @observable sciName;

    @action setMousePos(x: any, y: any) {
        this.mouseX = x;
        this.mouseY = y;
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
                this.comparedMicro1Activated = true;
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
                if(this.comparedMicro1Activated  && 
                    this.comparedMicro2Activated  &&
                    this.comparedMicro3Activated && 
                    this.comparedMicro4Activated && 
                    this.comparedMicro5Activated && 
                    this.comparedMicro6Activated) {
                        this.comparedMicro1Activated = true;
                        this.comparedMicro2Activated = false;
                        this.comparedMicro3Activated = false;
                        this.comparedMicro4Activated = false;
                        this.comparedMicro5Activated = false;
                        this.comparedMicro6Activated = false;
                } else {
                this.comparedMicro1Activated = true
                this.comparedMicro2Activated = true;
                this.comparedMicro3Activated = true;
                this.comparedMicro4Activated = true;
                this.comparedMicro5Activated = true;
                this.comparedMicro6Activated = true;
                }
                break;
        }
    }

    @action onChangeVolume(val) {
        this.volume = val;
    }

    //EDITOR A

    @observable colorEditionStatus: boolean = false;
    @observable contrastEditionStatus: boolean = false;



    @action onColorEdit() {
        this.colorEditionStatus = true;
        this.contrastEditionStatus = false;
    }

    @observable scaleNameSelected = 'gray';

    @observable scale1Selected = true;
    @observable scale2Selected = false;
    @observable scale3Selected = false;
    @observable scale4Selected = false;
    @observable scale5Selected = false;
    @observable scale6Selected = false;
    @observable scale7Selected = false;

    @action onScaleSelection(scale: string) {
        switch (scale) {
            case 'gray':
                this.scale1Selected = true;
                this.scale2Selected = false;
                this.scale3Selected = false;
                this.scale4Selected = false;
                this.scale5Selected = false;
                this.scale6Selected = false;
                this.scale7Selected = false;
                break;
            case '2':
                this.scale1Selected = false;
                this.scale2Selected = true;
                this.scale3Selected = false;
                this.scale4Selected = false;
                this.scale5Selected = false;
                this.scale6Selected = false;
                this.scale7Selected = false;
                break;
            case '3':
                this.scale1Selected = false;
                this.scale2Selected = false;
                this.scale3Selected = true;
                this.scale4Selected = false;
                this.scale5Selected = false;
                this.scale6Selected = false;
                this.scale7Selected = false;
                break;
            case '4':
                this.scale1Selected = false;
                this.scale2Selected = false;
                this.scale3Selected = false;
                this.scale4Selected = true;
                this.scale5Selected = false;
                this.scale6Selected = false;
                this.scale7Selected = false;
                break;
            case '5':
                this.scale1Selected = false;
                this.scale2Selected = false;
                this.scale3Selected = false;
                this.scale4Selected = false;
                this.scale5Selected = true;
                this.scale6Selected = false;
                this.scale7Selected = false;
                break;
            case '6':
                this.scale1Selected = false;
                this.scale2Selected = false;
                this.scale3Selected = false;
                this.scale4Selected = false;
                this.scale5Selected = false;
                this.scale6Selected = true;
                this.scale7Selected = false;
                break;
            case '7':
                this.scale1Selected = false;
                this.scale2Selected = false;
                this.scale3Selected = false;
                this.scale4Selected = false;
                this.scale5Selected = false;
                this.scale6Selected = false;
                this.scale7Selected = true;
                break;
        }
    }
    
    @action onContrastEdit() {
        this.contrastEditionStatus = true;
        this.colorEditionStatus = false;
    }

    //XENO CANTO

    @action xenoSearch(birdName) {
        let birdSearch = new XenoCanto();
    
        birdSearch.search("bearded bellbird", function(self){
            console.log("numRecordings: " + self.entity.numRecordings);
            console.log("numSpecies: " + self.entity.numSpecies);
            // inspect more properties ..
        });
    }
    
}



export const taggingStore = new TaggingStore();