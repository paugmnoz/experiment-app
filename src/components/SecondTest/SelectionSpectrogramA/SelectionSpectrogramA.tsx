import * as React from 'react';
import './SelectionSpectrogramA.scss';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

@observer
export class SelectionSpectrogramA extends React.Component {

    render() {

        return <div className="selected-spectro-section" >
            <span className="up">
                <div className="marks">
                    <span className={((taggingStore.selectedMark1) ? "mark selected" : "mark") /* + ((taggingStore.isSomethingSelected && !taggingStore.selected1) ? " prevent-hover" : "")*/}
                        onClick={() =>
                            taggingStore.selectMarkSuggestion("./assets/audio-samples/filteredHafferia.wav", 1)}>
                        <img src={"./assets/marks/" + ((taggingStore.verified) ? "ai-mark-verified" : "ai-mark-suggestion") + ".svg"}
                            width="17px" alt=""
                            className="mark-icon" />
                            <div className="bird-photo-cont">
                            <img src="./assets/birds/hafferiazeledoni.jpg" alt="" />
                        </div>
                    </span>
                    <span className={((taggingStore.selectedMark2) ? "mark selected" : "mark") /* + ((taggingStore.isSomethingSelected && !taggingStore.selected2) ? " prevent-hover" : "")*/}
                        onClick={() =>
                            taggingStore.selectMarkSuggestion("./assets/audio-samples/filteredSipia.wav", 2)}>
                        <img src="./assets/marks/ai-mark-suggestion.svg"
                            width="17px" alt=""
                            className="mark-icon" />
                            <div className="bird-photo-cont">
                            <img src="./assets/birds/sipiaberlepschi.jpg" alt="" />
                        </div>
                    </span>
                </div>
                <div className="time">
                    <img src="./assets/Tagging/time.png" alt="" width="398px" />
                </div>
                <div className="spectro-viz">
                    <img src="./assets/Tagging/selection.png" height="200px" width="397px" alt="" />
                </div>
            </span>
            <div className="suggestions">
                <span className="section-title-ai">
                    <h1 >Especies sugeridas de los cantos encontrados en la selección</h1>
                </span>
                <span className="down">
                    <div id="hafferia"
                        className={((taggingStore.selectedMark1) ? "suggested-specie selected" : "suggested-specie")}
                        
                    >
                        <span className="spectrogram">
                            <img src="./assets/Tagging/hafferia_filtered.png" alt="" />
                        </span>

                        <span className="row-span">
                        <img src="./assets/Tagging/play-audio.svg"
                        onClick={() =>
                            taggingStore.selectMarkSuggestion("./assets/audio-samples/filteredHafferia.wav", 1)}
                        alt="" />
                            <div>
                            <p className=" bold  _14px">Hormiguero de Zeledón</p>
                        <p className="sci-name-style gray-text _14px">Hafferia zeledoni</p>
                        <p className="green-text _12px">98% coincidencia</p>
                            </div>
                        
                         </span>
                        
                        <span className="tooltip exploreaction">
                            <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                            <span className="tooltiptextUp">Explorar canto</span>
                        </span>      
                    </div>
                    <div id="sipia"
                        className={((taggingStore.selectedMark2) ? "suggested-specie selected" : "suggested-specie")}
                       
                    >
                        <span className="spectrogram">
                            <img src="./assets/Tagging/sipia_filtered.png" alt="" />
                        </span>

                        <span className="row-span">
                        <img src="./assets/Tagging/play-audio.svg"
                        onClick={() =>
                            taggingStore.selectMarkSuggestion("./assets/audio-samples/filteredSipia.wav",2)}
                        alt="" />
                            <div>
                      
                            <p className="bold  _14px">Hormiguero Colimocho</p>
                        <p className="sci-name-style gray-text _14px">Sipia berlepschi</p>
                        <p className="green-text _12px">85% coincidencia</p>
                            </div>
                        
                         </span>
                        <span className="tooltip exploreaction">
                            <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                            <span className="tooltiptextUp">Explorar canto</span>
                        </span>                    </div>
                </span>

            </div>
        </div>
    }
}