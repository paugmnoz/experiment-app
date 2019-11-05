import * as React from 'react';
import '../GeneralSpectrogramB/GeneralSpectrogramB.scss';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

@observer
export class GeneralSpectrogramB extends React.Component {

    render() {
        return <div className="gen-spectro-section">
            <img className="range-probability" src="./assets/Tagging/range-probability.png" width="320px" />
            <span className="spectro-section">
                <div className="time">
                    <img src="./assets/time-bar.jpg" alt="" width="949px" />
                </div>
                <div className="spectro-viz">
                    <div className="specie-rectangle"
                        style={{
                            backgroundColor: taggingStore.speciesArray[taggingStore.specieIndex].rectColor,
                            width: taggingStore.speciesArray[taggingStore.specieIndex].width,
                            left: taggingStore.speciesArray[taggingStore.specieIndex].posX,
                            borderColor: taggingStore.speciesArray[taggingStore.specieIndex].color,
                        }}></div>
                    <img src="./assets/Tagging/general.png" alt="" />
                </div>
                <div className="marks">
                    <div className="mark-timeline">
                        {taggingStore.speciesArray.map((specie) => {
                            return <div className="specie-mark"
                                style={{
                                    backgroundColor: specie.color,
                                    width: specie.width,
                                    left: specie.posX,
                                    opacity: (taggingStore.specieIndex == specie.index) || (taggingStore.specieIndex == 0) ? 1 : 0.4
                                }}
                                onClick={() => {
                                    if (taggingStore.specieIndex == specie.index && taggingStore.specieMarkSelected == true) {
                                        taggingStore.specieMarkSelected = false;
                                        taggingStore.specieIndex = 0;
                                        console.log('estado: ' + taggingStore.specieMarkSelected, 'index: ' + taggingStore.specieIndex)
                                    } else {
                                        taggingStore.specieIndex = specie.index;
                                        taggingStore.specieMarkSelected = true;
                                    }
                                }}></div>;
                        })}
                    </div>
                    <div className="suggestion-cont"
                        style={{
                            height: (taggingStore.specieMarkSelected) ? 120 : 0,
                            backgroundColor: (taggingStore.specieMarkSelected) ? '#E6E6E6' : 'rgba(255, 255, 255, 0)'
                        }}>
                        <div className="mark-card" style={{
                            left: (taggingStore.speciesArray[taggingStore.specieIndex].posX < 669.291) ? taggingStore.speciesArray[taggingStore.specieIndex].posX : 669.292,
                            height: (taggingStore.specieMarkSelected) ? 105 : 0,
                            padding: (taggingStore.specieMarkSelected) ? 15 : 0,
                            backgroundColor: (taggingStore.specieMarkSelected) ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0)'
                        }}>
                            <span className="bird-info-section" style={{
                                display: (taggingStore.specieMarkSelected) ? 'flex' : 'none'
                            }}>
                                <div className="bird-photo-cont" style={{
                                    display: (taggingStore.specieMarkSelected) ? 'flex' : 'none'
                                }}>
                                    <img src={taggingStore.speciesArray[taggingStore.specieIndex].photo} />
                                </div>
                                <div className="info-mark-card" style={{
                                    display: (taggingStore.specieMarkSelected) ? 'flex' : 'none'
                                }}>
                                    <div className="sci-and-percentage">
                                        <h4 className="percentage" style={{
                                            color: taggingStore.speciesArray[taggingStore.specieIndex].color
                                        }}>{' ' + taggingStore.speciesArray[taggingStore.specieIndex].percentage + '% '}</h4>
                                        <h4 className="sci-name">{' - ' + taggingStore.speciesArray[taggingStore.specieIndex].scientificName + ''}</h4>
                                    </div>
                                    <p>{taggingStore.speciesArray[taggingStore.specieIndex].commonName}</p>
                                </div>
                            </span>
                            <div className="card-btns" style={{
                                display: (taggingStore.specieMarkSelected) ? 'flex' : 'none'
                            }}>
                                <span className="actions">
                                    <span className="tooltip">
                                        <button>
                                            <img src="./assets/Tagging/tick.png" height="28px" width="28px" alt="" />
                                        </button>
                                        <span className="tooltiptextUp">Validar sugerencia</span>
                                    </span>
                                    <span className="tooltip">
                                        <button>
                                            <img src="./assets/Tagging/question.svg" height="28px" width="28px" alt="" />
                                        </button>
                                        <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                    </span>
                                    <span className="tooltip">
                                        <button>
                                            <img src="./assets/Tagging/cancel.png" height="28px" width="28px" alt="" />
                                        </button>
                                        <span className="tooltiptextUp">No es esta especie</span>
                                    </span>
                                </span>
                                <div className="explore">
                                    <span className="tooltip">
                                        <button>
                                            <img src="./assets/Tagging/play-audio.svg" height="28px" width="28px" alt="" 
                                            onClick={()=>{
                                                taggingStore.playBirdSong(taggingStore.speciesArray[taggingStore.specieIndex].audio);
                                            }}/>
                                        </button>
                                        <span className="tooltiptextUp">Escuchar canto</span>
                                    </span>
                                    <span className="tooltip">
                                        <button>
                                            <img src="./assets/Tagging/vision.png" height="35px" width="35px" alt="" />
                                        </button>
                                        <span className="tooltiptextUp">Explorar canto</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>;
    }

}
