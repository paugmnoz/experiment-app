import * as React from 'react';
import '../GeneralSpectrogramB/GeneralSpectrogramB.scss';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

@observer
export class GeneralSpectrogramB extends React.Component {

    render() {
        return <div className="gen-spectro-section">
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
                            height: (taggingStore.specieMarkSelected) ? 100 : 0,
                            backgroundColor: (taggingStore.specieMarkSelected) ? '#E6E6E6' : 'rgba(255, 255, 255, 0)'
                        }}>
                        <div className="mark-card" style={{
                            height: (taggingStore.specieMarkSelected) ? 93 : 0,
                            padding: (taggingStore.specieMarkSelected) ? 15 : 0,
                            backgroundColor: (taggingStore.specieMarkSelected) ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0)'
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
                                    <h4 className="percentage">{'' + taggingStore.speciesArray[taggingStore.specieIndex].percentage + '% -'}</h4>
                                    <h4 className="sci-name">{taggingStore.speciesArray[taggingStore.specieIndex].scientificName}</h4>
                                </div>
                                <p>{taggingStore.speciesArray[taggingStore.specieIndex].commonName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>;
    }

}
