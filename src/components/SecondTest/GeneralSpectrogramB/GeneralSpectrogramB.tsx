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
                                onClick={() => { taggingStore.specieIndex = specie.index; }}></div>;
                        })}
                    </div>
                    <div className="suggestion-cont">
                        <div className="mark-card">
                            <div className="bird-photo-cont">
                                <img src="./assets/birds/vireolaniusleucotis.jpg" />
                            </div>
                            <div className="info-mark-card">
                                <h4>{taggingStore.speciesArray[taggingStore.specieIndex].scientificName}</h4>
                                <p>{taggingStore.speciesArray[taggingStore.specieIndex].commonName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>;
    }

}
