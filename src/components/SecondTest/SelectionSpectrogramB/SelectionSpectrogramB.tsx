import * as React from 'react';
import './SelectionSpectrogramB.scss';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

@observer
export class SelectionSpectrogramB extends React.Component {

    render() {

        return <div className="selected-spectro-section" >
            <span className="up">
                <div className="spectro-cont">
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
                </div>
                <img className="range-probability" src="./assets/Tagging/range-probability.png" width="310px" height="74px" />
            </span>
            <div className="suggestions">
                <span className="section-title-ai">
                    <h1 >Especies sugeridas de los cantos encontrados en la selección</h1>
                </span>
                <span className="down">
                    <div className="species-reel-section">
                        <span className="bird-suggest-section">
                            <div id="sipia">
                                <span className="tooltip exploreaction">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                                <span className="tooltip play-audio">
                                    <img src="./assets/Tagging/play-audio.svg" height="auto" width="35px" alt=""
                                        onClick={() => {
                                            taggingStore.playBirdSong('./assets/audio-samples/Atom2B/filteredSipia.wav');
                                        }} />
                                    <span className="tooltiptextUp">Reproducir canto</span>
                                </span>
                                <span className="filtered-spectrogram">
                                    <div className="filtered-title">TRAMO ORIGINAL FILTRADO</div>
                                    <img src="./assets/atom2B-assets/filtered1.png" alt="" />
                                    <p>Se han encontrado 4 especies <br></br> diferentes con coincidencias con <br></br> este tramo de audio.</p>
                                </span>
                            </div>

                            <div className="suggestions-cont">

                                {taggingStore.suggestionsArray[0].map((suggestion) => {
                                    return <div className="specie-suggested">
                                        <span className="tooltip exploreaction">
                                            <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                                            <span className="tooltiptextUp">Explorar canto</span>
                                        </span>
                                        <span className="tooltip play-audio">
                                            <img src="./assets/Tagging/play-audio.svg" height="auto" width="35px" alt=""
                                                onClick={() => {
                                                    taggingStore.playBirdSong(suggestion.audio);
                                                }} />
                                            <span className="tooltiptextUp">Reproducir canto</span>
                                        </span>
                                        <span className="specie-card">
                                            <div className="percentage-title"
                                                style={{
                                                    backgroundColor: suggestion.color,
                                                }}>{suggestion.percentage + '% DE COINCIDENCIA'}</div>
                                            <img className="spectrogram" src={suggestion.spectrogramImg} alt=""
                                                style={{
                                                    border: 'solid 3px ' + suggestion.color,
                                                }} />
                                            <div className="specie-card-down">
                                                <div className="bird-info">
                                                    <img className="bird-photo" src={suggestion.birdPhoto} alt="" />
                                                    <div className="bird-text">
                                                        <div className="position-sci">
                                                            <h2 className="position">{'#' + suggestion.position + '-'}</h2>
                                                            <h2 className="sci-name">{suggestion.scientificName}</h2>
                                                        </div>
                                                        <h2 className="common-name">{suggestion.commonName}</h2>
                                                    </div>
                                                </div>
                                                <p className="coincidence" style={{
                                                    color: suggestion.color,
                                                }}>{suggestion.coincidences}</p>
                                            </div>
                                        </span>
                                    </div>;
                                })}
                            </div>
                        </span>
                        {/*SPAN DIVSION*/}
                        <span className="bird-suggest-section">
                            <div id="hafferia">
                                <span className="tooltip exploreaction">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                                <span className="tooltip play-audio">
                                    <img src="./assets/Tagging/play-audio.svg" height="auto" width="35px" alt=""
                                        onClick={() => {
                                            taggingStore.playBirdSong('./assets/audio-samples/Atom2B/filteredHafferia.wav');
                                        }} />
                                    <span className="tooltiptextUp">Reproducir canto</span>
                                </span>
                                <span className="filtered-spectrogram">
                                    <div className="filtered-title">TRAMO ORIGINAL FILTRADO</div>
                                    <img src="./assets/atom2B-assets/filtered2.png" alt="" />
                                    <p>Se han encontrado 4 especies <br></br> diferentes con coincidencias con <br></br> este tramo de audio.</p>
                                </span>
                            </div>

                            <div className="suggestions-cont">

                                {taggingStore.suggestionsArray[1].map((suggestion) => {
                                    return <div className="specie-suggested">
                                        <span className="tooltip exploreaction">
                                            <img src="./assets/Tagging/vision.png" height="auto" width="45px" alt="" />
                                            <span className="tooltiptextUp">Explorar canto</span>
                                        </span>
                                        <span className="tooltip play-audio">
                                            <img src="./assets/Tagging/play-audio.svg" height="auto" width="35px" alt=""
                                                onClick={() => {
                                                    taggingStore.playBirdSong(suggestion.audio);
                                                }} />
                                            <span className="tooltiptextUp">Reproducir canto</span>
                                        </span>
                                        <span className="specie-card">
                                            <div className="percentage-title"
                                                style={{
                                                    backgroundColor: suggestion.color,
                                                }}>{suggestion.percentage + '% DE COINCIDENCIA'}</div>
                                            <img className="spectrogram" src={suggestion.spectrogramImg} alt=""
                                                style={{
                                                    border: 'solid 3px ' + suggestion.color,
                                                }} />
                                            <div className="specie-card-down">
                                                <div className="bird-info">
                                                    <img className="bird-photo" src={suggestion.birdPhoto} alt="" />
                                                    <div className="bird-text">
                                                        <div className="position-sci">
                                                            <h2 className="position">{'#' + suggestion.position + '-'}</h2>
                                                            <h2 className="sci-name">{suggestion.scientificName}</h2>
                                                        </div>
                                                        <h2 className="common-name">{suggestion.commonName}</h2>
                                                    </div>
                                                </div>
                                                <p className="coincidence" style={{
                                                    color: suggestion.color,
                                                }}>{suggestion.coincidences}</p>
                                            </div>
                                        </span>
                                    </div>;
                                })}
                            </div>
                        </span>
                        {/*FIN DEL DOWN*/}
                    </div>
                </span>

            </div>
        </div>
    }
}