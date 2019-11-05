import * as React from 'react';
import './SelectionSpectrogramB.scss';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

@observer
export class SelectionSpectrogramB extends React.Component {

    render() {

        return <div className="selected-spectro-section" >
            <span className="up">

                <div className="time">
                    <img src="./assets/Tagging/time.png" alt="" width="398px" />
                </div>
                <div className="spectro-viz">
                    <img src="./assets/Tagging/selection.png" height="200px" width="397px" alt="" />
                </div>
                <div className="marks">
                    <div className="mark-timeline">
                        <div className="specie-mark"
                            style={{
                                backgroundColor: taggingStore.speciesArray[5].color,
                                width: 230,
                                left: (396.99 * (((taggingStore.speciesArray[5].finishTime * 4) / 19) - ((17.154 * 4) / 19))),
                            }}></div>
                    </div>
                </div>
            </span>
            <div className="suggestions">
                <span className="section-title-ai">
                    <h1 >Especies sugeridas de los cantos encontrados en la selección</h1>
                </span>
                <span className="down">
                    <div id="sipia">
                        <span className="filtered-spectrogram">
                            <div className="filtered-title">TRAMO ORIGINAL FILTRADO</div>
                            <img src="./assets/atom2B-assets/filtered1.png" alt="" />
                            <p>Se han encontrado 4 especies <br></br> diferentes con coincidencias con <br></br> este tramo de audio.</p>
                        </span>
                    </div>

                    <div className="suggestions-cont">

                        {taggingStore.suggestionsArray[0].map((suggestion) => {
                            return <div className="specie-suggested">
                                <span className="specie-card">
                                    <div className="percentage-title"
                                        style={{
                                            backgroundColor: suggestion.color,
                                        }}>{suggestion.percentage + '% DE COINCIDENCIA'}</div>
                                    <img className="spectrogram" src={suggestion.spectrogramImg} alt=""
                                        style={{
                                            border: 'solid 3px ' + suggestion.color,
                                        }} />
                                    <div className="percentage-sci">
                                        <h2 className="percentage"></h2>
                                        <h2 className="sci-name"></h2>
                                    </div>
                                    <h2 className="common-name"></h2>
                                    <p className="coincidence"></p>
                                </span>
                            </div>;
                        })}
                    </div>
                </span>

            </div>
        </div>
    }
}