import * as React from 'react';
import './IdentifySoundA.scss';
import { taggingStore } from '../../store/TaggingStore';
import Wavesurfer from 'react-wavesurfer';


export class IdentifySoundA extends React.Component {

    render(){
        return <section>  
            <div className="card-header">
                <h1>Selección</h1>
                <img className="close-icon" src="./assets/icons/close.svg" alt=""/>
            </div>
            <div className="card-section">
            <img src="./assets/espectogramaB.png" alt="" />
      { /*     <Wavesurfer
          audioFile={'./assets/Anchicaya_LaLocaTrocha_2019.06.22_07.50.35_1.mp3'}
          pos={taggingStore.audioPos}
          onPosChange={taggingStore.handlePosChange}
    playing={taggingStore.playingAudio}/>*/}
        
            </div>
            <div className="card-section">
                <span className="description-items-row">
                <p><span className="text-title">Fecha:</span> 28 Julio 2019</p>
                <p><span className="text-title">Hora:</span> 06:36 AM</p>
                <p><span className="text-title">Duración:</span> 5s</p>
                </span>
          
            <div className="form-section">
                <span>

                <span className="input-row card-item">
                <p className="text-title">Especie:</p> <input type="text"/>
            </span>
            <span className="input-row card-item">
                <p className="text-title">Tipo de canto:</p> 
                <select>
                <option>Canto</option>
                <option>Llamador</option>
                <option>Cortejo</option>
                </select>
            </span>
            <p className="green-link card-item">Agregar anotación o comentario</p>
                </span>
            <span className="actions">
                <p>Marcar como:</p>
                <select>
                <option>Pendiente</option>
                <option>Duda</option>
                <option>Seguro</option>
                </select>
                <br/>
                <br/>
                <button className="dark-button">Guardar</button>
            </span>
            </div>
          
            </div>
            <div className="card-section">
                <p className="hint-text">¿Alguna duda sobre el canto? Verifica con cantos de Xeno-Canto</p>
                <span className="input-row search card-item">
                <p className="text-title">Buscar en Xeno-Canto:</p> <input type="text"/>
                <button className="green-button">Buscar</button>
                </span>
            </div>
        </section>
    }
}