import * as React from 'react';
import './TestDashboard.scss';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { taggingStore } from '../../store/TaggingStore'
import { dashboardStore } from '../../store/DashboardStore';

import { SpectroEditorA } from '../FirstTest/SpectroEditorA/SpectroEditorA';
import { SpectroEditorB } from '../../components/FirstTest/SpectroEditorB/SpectroEditorB';
import { CompareAudiosA } from '../FirstTest/CompareAudiosA/CompareAudiosA';
import { CompareAudiosB } from '../FirstTest/CompareAudiosB/CompareAudiosB';
import { IdentifySoundA } from '../../components/FirstTest/IdentifySoundA/IdentifySoundA';
import { IdentifySoundB } from '../../components/FirstTest/IdentifySoundB/IdentifySoundB';

import { GeneralSpectrogramA } from '../../components/SecondTest/GeneralSpectrogramA/GeneralSpectrogramA';
import { GeneralSpectrogramB } from '../SecondTest/GeneralSpectrogramB/GeneralSpectrogramB';
import { SelectionSpectrogramA } from '../SecondTest/SelectionSpectrogramA/SelectionSpectrogramA';
import { SelectionSpectrogramB } from '../SecondTest/SelectionSpectrogramB/SelectionSpectrogramB';
import { AITaggingA } from '../SecondTest/AITaggingA/AITaggingA';
import { AITaggingB } from '../SecondTest/AITaggingB/AITaggingB';

@observer export class TestDashboard extends React.Component {

    @observable x = 0;
    @observable y = 0;

    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(dashboardStore.data)], { type: 'text/plain' });
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
        dashboardStore.setMousePos(this.x, this.y);
        //console.log("uyy", this.x  + ", " + this.y);
    }

    render() {

        return <div className="cont" onMouseMove={this._onMouseMove.bind(this)}>
            <div className={(!dashboardStore.isCounting) ? 'overlay' : 'overlay started'}></div>
            <div className="soft-handlers">
                <h1>ATOMO: {dashboardStore.actualAtom}</h1>
                {
                    (!dashboardStore.isCounting) ? (<button onClick={() => dashboardStore.handleStart('a')}>Empezar</button>) :
                        (<button className="finish" onClick={() => dashboardStore.handleEnd('a')}>He terminado</button>)
                }
                <button className="save" onClick={this.downloadTxtFile}>Guardar</button>
                <button className="next" disabled={dashboardStore.isCounting} onClick={() => dashboardStore.handleNext('a')}>Siguiente</button>
            </div>

            <div className={(dashboardStore.displayWheelAtom) ? 'SpectroA atom' : 'SpectroA atom undisplay'}>
                {/*<SpectroEditorB display={(dashboardStore.displayWheelAtom) ? 'inherit' : 'none'}></SpectroEditorB>*/}
            </div>

            {
                (dashboardStore.actualAtom == '1A') ? (
                    <div className="SpectroA atom">
                        {<GeneralSpectrogramA/>}
                        {/*<SpectroEditorA/>*/}
                    </div>
                ) : (dashboardStore.actualAtom === '1B') ? (
                    <GeneralSpectrogramB/>
                    /*dashboardStore.setWheelDisplay()*/
                ) : (dashboardStore.actualAtom === '2A') ? (
                    <div className="SpectroA atom">
                        {<SelectionSpectrogramA />}
                        {/*<CompareAudiosA />*/}
                    </div>
                ) : (dashboardStore.actualAtom === '2B') ? (
                    <div className="SpectroA atom">
                        {<SelectionSpectrogramB />}
                        {/*<CompareAudiosB />*/}
                    </div>
                ) : (dashboardStore.actualAtom === '3A') ? (
                    <div className="tagging atom">
                        {<AITaggingA />}
                        {/*<IdentifySoundA />*/}
                    </div>
                ) : (dashboardStore.actualAtom === '3B') ? (
                    <div className="tagging atom">
                        {<AITaggingB />}
                        {/*<IdentifySoundB />*/}
                    </div>
                ) : ('TERMINAMOS')

            }
        </div>
    }
}

const Comp = (props) => {
    console.log(props.position);
    return null;
}