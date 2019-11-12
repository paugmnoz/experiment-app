import * as React from 'react';
import './TestDashboard.scss';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { dashboardStore } from '../../store/DashboardStore';

import { SpectroEditor } from '../FinalAtoms/SpectroEditor/SpectroEditor';
import { SpectroEditorA } from '../FirstTest/SpectroEditorA/SpectroEditorA';
import { TagSound } from '../FinalAtoms/TagSound/TagSound';

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
            <div className={(dashboardStore.isCounting) ? 'soft-handlers undisplay' : 'soft-handlers'}>
                <h1>Interfaz: {dashboardStore.actualAtom}</h1>
                {
                    (!dashboardStore.isCounting) ? (<button onClick={() => dashboardStore.handleStart('a')}>Empezar</button>) :
                        (<button className="finish" onClick={() => dashboardStore.handleEnd('a')}>He terminado</button>)
                }
                <button className="save" onClick={this.downloadTxtFile}>Guardar</button>
                <button className="next" disabled={dashboardStore.isCounting} onClick={() => dashboardStore.handleNext('a')}>Siguiente</button>
            </div>
            <section className="interface">
                <button onClick={() => dashboardStore.handleEnd('a')}>Terminar</button>
                <TagSound />
            </section>
        </div>
    }
}