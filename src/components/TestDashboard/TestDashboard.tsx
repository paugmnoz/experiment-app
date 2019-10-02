import * as React from 'react';
import './TestDashboard.scss';
import { IdentifySoundB } from '../../components/IdentifySoundB/IdentifySoundB';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { taggingStore } from '../../store/TaggingStore'
import { IdentifySoundA } from '../IdentifySoundA/IdentifySoundA';
import { dashboardStore } from '../../store/DashboardStore';
import { CompareAudiosB } from '../CompareAudiosB/CompareAudiosB';
import { CompareAudiosA } from '../CompareAudiosA/CompareAudiosA';
import { SpectroEditorB } from '../SpectroEditorB/SpectroEditorB';
import { SpectroEditorA } from '../SpectroEditorA/SpectroEditorA';

@observer export class TestDashboard extends React.Component {

    @observable x = 0;
    @observable y = 0;
    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(dashboardStore.data)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }
    constructor(props) {
        super(props);
      }

    _onMouseMove(e) {
        this.x = e.nativeEvent.offsetX;
        this.y = e.nativeEvent.offsetY;

        taggingStore.setMousePos(this.x, this.y);
     }

     
    render(){
        return <div className="cont" onMouseMove={this._onMouseMove.bind(this)}>
            <div className="soft-handlers">
                <h1>ATOMO: {dashboardStore.actualAtom}</h1>
                {
                    (!dashboardStore.isCounting) ? ( <button onClick={() => dashboardStore.handleStart('a')}>Empezar</button> ) :
                    (<button  onClick={() => dashboardStore.handleEnd('a')}>He terminado</button>)
                }
                <button className="save"  onClick={this.downloadTxtFile}>Guardar</button>
                <button className="next" onClick={() => dashboardStore.handleNext('a')}>Siguiente</button>
            </div>
            {
               (dashboardStore.actualAtom == '1A') ? (
                    <div className="compareAudiosA atom">
                        <SpectroEditorA/>
                    </div>
                   ) : (dashboardStore.actualAtom === '1B') ? (
                    <div className="SpectroA atom">
                    <SpectroEditorB/>
                    </div>
                ): (dashboardStore.actualAtom === '2A') ? (
                    <div className="SpectroA atom">
                    <CompareAudiosA/>
                    </div>
                ): (dashboardStore.actualAtom === '2B') ? (
                    <div className="SpectroA atom">
                    <CompareAudiosB/>
                    </div>
                ): (dashboardStore.actualAtom === '3A') ? (
                    <div className="identifySoundA atom">
                    <IdentifySoundA/>
                    </div>
                ): (dashboardStore.actualAtom === '3B') ? (
                    <div className="identifySoundA atom">
                    <IdentifySoundB/>
                    </div>
                ):('TERMINAMOS')
                
            }     
        </div>
    }
}