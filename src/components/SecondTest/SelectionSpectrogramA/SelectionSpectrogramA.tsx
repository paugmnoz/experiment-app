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

                    </span>
                    <span className={((taggingStore.selectedMark2) ? "mark selected" : "mark") /* + ((taggingStore.isSomethingSelected && !taggingStore.selected2) ? " prevent-hover" : "")*/}
                        onClick={() =>
                            taggingStore.selectMarkSuggestion("./assets/audio-samples/filteredSipia.wav", 2)}>
                        <img src="./assets/marks/ai-mark-suggestion.svg"
                            width="17px" alt=""
                            className="mark-icon" />

                    </span>
                </div>
                <div className="time">
                    <img src="./assets/Tagging/time.png" alt="" width="398px" />
                </div>
                <div className="spectro-viz">
                    <img src="./assets/Tagging/selection.png" height="200px" width="397px" alt="" />
                </div>
            </span>
            <span className="suggestions">
                <h1 >Especies sugeridas de la selección</h1>
                <hr/>
                <br/>
                <span className="down">
                    <div id="hafferia"
                        className={((taggingStore.selectedMark1) ? "suggested-specie selected" : "suggested-specie")}
                        onClick={() =>
                            taggingStore.selectMarkSuggestion("./assets/audio-samples/filteredHafferia.wav", 1)}
                    >
                        <span className="spectrogram">
                            <img src="./assets/Tagging/hafferia_filtered.png" alt="" />
                        </span>
                        <p className="sci-name-style bold">Hormiguero de Zeledón</p>
                        <p className="sci-name-style gray-text _14px">Hafferia zeledoni</p>
                        <p className="green-text _12px">98% coincidencia</p>
                        <span className="tooltip exploreaction">
                            <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                            <span className="tooltiptextUp">Explorar canto</span>
                        </span>      
                    </div>
                    <div id="sipia"
                        className={((taggingStore.selectedMark2) ? "suggested-specie selected" : "suggested-specie")}
                        onClick={() =>
                            taggingStore.selectMarkSuggestion("./assets/audio-samples/filteredSipia.wav", 2)}
                    >
                        <span className="spectrogram">
                            <img src="./assets/Tagging/sipia_filtered.png" alt="" />
                        </span>
                        <p className="sci-name-style bold">Hormiguero de Zeledón</p>
                        <p className="sci-name-style gray-text _14px">Sipia berlepschi</p>
                        <p className="green-text _12px">85% coincidencia</p>
                        <span className="tooltip exploreaction">
                            <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                            <span className="tooltiptextUp">Explorar canto</span>
                        </span>                    </div>
                </span>

            </span>
        </div>
    }
}