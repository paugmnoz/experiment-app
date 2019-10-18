/*require('wavesurfer.js');*/

import * as React from 'react';
import { taggingStore } from '../../store/TaggingStore';
import './IdentifySoundB.scss';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { relative, isAbsolute } from 'path';
/*import Wavesurfer from 'react-wavesurfer';*/

@observer export class IdentifySoundB extends React.Component {

    @observable showTagOption = false;
    @observable mouseX: any;
    @observable mouseY: any;

    constructor(props) {
        super(props);
    }

    selectOnlyThis(id: any) {
        /*for (var i = 1;i <= 4; i++)
        {
            document.getElementById("Check" + i).checked = false;
        }
        document.getElementById(id).checked = true;*/
    }


    render() {

        return <section >
            <div className="card-header">
                <h1>Selección</h1>
                <img className="close-icon" src="./assets/icons/close.svg" alt="" />
            </div>
            <div className="card-section">
                <img className="spectro"
                    src="./assets/espectogramaB.png" alt="" width="580" />
            </div>
            <div className="card-section" id="card-for-tagging">
                <div className="card-items-head">
                    <span className="description-items-col">
                        <p><span className="text-title">Fecha:</span> 28 Julio 2019</p>
                        <p><span className="text-title">Hora:</span> 06:36 AM</p>
                        <p><span className="text-title">Duración:</span> 5s</p>
                    </span>
                    <div className="card-item" style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <span className="text-title">Especies estudiando</span>
                        <div className="imgs-array">
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-1.png"
                                    onClick={() => {
                                        taggingStore.birdClick(1)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Electron platyrhynchum</span>
                            </span>
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-2.png"
                                    onClick={() => {
                                        taggingStore.birdClick(2)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Piranga rubra</span>
                            </span>
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-3.png"
                                    onClick={() => {
                                        taggingStore.birdClick(3)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Mitrephanes phaeocercus</span>
                            </span>
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-4.png"
                                    onClick={() => {
                                        taggingStore.birdClick(4)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Capito maculicoronatus</span>
                            </span>
                        </div>
                    </div>
                </div>
                <span className="input-row card-item">
                    <span className="input-col "> <p className="text-title"> Nombre Común</p> <input type="text" value={taggingStore.commonName} /></span>
                    <span className="input-col "> <p className="text-title"> Nombre Científico</p> <input type="text" value={taggingStore.sciName} /></span>
                    <span className="input-col "><p className="text-title">Tipo de canto</p>
                        <select className="song-type">
                            <option>Canto</option>
                            <option>Llamador</option>
                            <option>Cortejo</option>
                        </select></span>
                </span>
                <span className="input-col card-item"> <p className="text-title"> Anotación/Comentario:</p> <textarea style={{ height: 50 }}> </textarea></span>
                <p className="card-item">Marcar como:</p>
                <div className="save-options">
                    <label className="card-item"><input type="checkbox" ref="Check1" name="myCheckbox" onClick={() => { this.selectOnlyThis(this) }}></input>Seguro</label>
                    <label className="card-item"><input type="checkbox" ref="Check2" name="myCheckbox" onClick={() => { this.selectOnlyThis(this) }}></input>Pendiente</label>
                    <label className="card-item"><input type="checkbox" ref="Check3" name="myCheckbox" onClick={() => { this.selectOnlyThis(this) }}></input>Duda</label>
                    <button className="green-button" style={{}}>Guardar</button>
                </div>
            </div>
            <div className="card-section">
                <p className="hint-text">¿Alguna duda sobre el canto? Verifica con cantos de Xeno-Canto</p>
                <span className="input-row search card-item">
                    <p className="text-title">Buscar en Xeno-Canto:</p> <input type="text" />
                    <button className="green-button">Buscar</button>
                </span>
            </div>
        </section>
    }
}