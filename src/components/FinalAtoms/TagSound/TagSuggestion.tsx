import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

interface tagSuggestionProps {
    name: string;
    date: string;
}

class TagSuggestion extends Component<tagSuggestionProps> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <div className="cards-cont">
            <div className="suggest-card-cont">
                <div className="ai-section">
                    <div className="column-wrapper">
                        <div className="coincidence-header">
                            <h2>87% DE COINCIDENCIA TOTAL</h2>
                        </div>
                        <span className="main-spec">
                            <img className="spec-img" src="./assets/Tagging/ai/colimocho-spec.jpg" alt="" />
                            <img className="lens-img"
                                onClick={() => taggingStore.onSpecZoomView('./assets/Tagging/ai/colimocho-spec.jpg', '//www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC428690-Stub-tailed%20Antbird_SanCipriano_Co_1sep2017_FSchmitt.mp3')}
                                src="./assets/Tagging/lens.svg" alt="" />
                        </span>
                    </div>
                    <div className="row suggestion-info">
                        <div className="bird-info">
                            <div className="row">
                                <div className="bird-photo-cont">
                                    <img src="./assets/birds/sipiaberlepschi.jpg" alt="" />
                                </div>
                                <h3 className="yellow-text">#1</h3>
                            </div>
                            <p className="sci-name-style gray-text _12px">Passeriformes > Thamnophilidae </p>
                            <p className="bold  _14px">Hormiguero Colimocho</p>
                            <p className="sci-name-style gray-text _14px">Sipia berlepschi</p>

                            <div className="suggestion-actions">

                                <span className="match-perc">
                                    <span className="play" onClick={() => taggingStore.playBirdSong('//www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC428690-Stub-tailed%20Antbird_SanCipriano_Co_1sep2017_FSchmitt.mp3')}>
                                        <img className="play-img" src="./assets/Tagging/play-audio.svg"
                                            height="25px" alt="" />
                                        <p>Reproducir canto</p>
                                    </span>
                                    <div className="actions-wrapper">
                                        <span className="action-btn">
                                            <span className="tooltip">
                                                <img src="./assets/Tagging/tick.png"
                                                    onClick={() => taggingStore.updateMark()}
                                                    height="20px"
                                                    width="20px" alt="" />
                                                <span className="tooltiptextUp">Validar sugerencia</span>
                                            </span>
                                        </span>
                                        <span className="action-btn">
                                            <span className="tooltip">
                                                <img src="./assets/Tagging/question.svg"
                                                    onClick={() => taggingStore.updateMark()}
                                                    height="20px"
                                                    width="20px" alt="" />
                                                <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                            </span>
                                        </span>
                                        <span className="action-btn">

                                            <span className="tooltip">
                                                <img src="./assets/Tagging/cancel.png" height="20px" width="20px" alt="" />
                                                <span className="tooltiptextUp">No es esta especie</span>
                                            </span>
                                        </span>

                                    </div>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-section ai-sources">
                    <p className={(taggingStore.isUnfoldedReference) ? 'unfolded' : ''}
                     onClick={() => taggingStore.onDisplayOtherSings()}> 
                     <div className="arrow-down"></div> 
                     Ver otros cantos de esta especie encontrados en eBird:</p>
                    {
                        (taggingStore.isUnfoldedReference) ?   <span className="row">
                        <article className="spec">
                            <img className="spectro-img" src="./assets/Tagging/ai/colimocho-spec-2.jpg" height="150px" alt="" />
                            <span className="play" onClick={() => taggingStore.playBirdSong('//www.xeno-canto.org/sounds/uploaded/BSFIBFUGKW/XC405735-Stub_tailed_Antbird_Anchicay%C3%A1_20171127_172446.mp3')}>
                                <img className="play-img" src="./assets/Tagging/play-audio.svg" height="20px" alt="" />
                                <p className="_14px"> Reproducir canto</p>
                            </span><p className=" _14px">Buenaventura, Colombia</p>
                            <p className="gray-text _14px">Iván Lau</p>
                            <img className="lens-img"
                                onClick={() => taggingStore.onSpecZoomView('./assets/Tagging/ai/colimocho-spec-2.jpg', '//www.xeno-canto.org/sounds/uploaded/BSFIBFUGKW/XC405735-Stub_tailed_Antbird_Anchicay%C3%A1_20171127_172446.mp3')}
                                src="./assets/Tagging/lens.svg" alt="" />
                        </article>
                        <article className="spec">
                            <img className="spectro-img" src="./assets/Tagging/ai/colimocho-spec-3.jpg" height="150px" alt="" />
                            <span className="play" onClick={() => taggingStore.playBirdSong('//www.xeno-canto.org/sounds/uploaded/UZXDJEAXMH/XC262105-61.085.02.Stub-tailed_Antbird.mp3')}>
                                <img className="play-img" src="./assets/Tagging/play-audio.svg" height="20px" alt="" />
                                <p className="_14px"> Reproducir canto</p>
                            </span>
                            <p className=" _14px">Esmeraldas, Ecuador</p>
                            <p className="gray-text _14px">Olaf Jahn</p>
                            <img className="lens-img"
                                onClick={() => taggingStore.onSpecZoomView('./assets/Tagging/ai/colimocho-spec-3.jpg', '//www.xeno-canto.org/sounds/uploaded/UZXDJEAXMH/XC262105-61.085.02.Stub-tailed_Antbird.mp3')}
                                src="./assets/Tagging/lens.svg" alt="" />
                        </article>
                        <article className="spec">
                            <img className="spectro-img" src="./assets/Tagging/ai/colimocho-spec-4.jpg" height="150px" alt="" />
                            <span className="play" onClick={() => taggingStore.playBirdSong('//www.xeno-canto.org/sounds/uploaded/CLKPHLYUHA/MyrBer3IV.mp3')}>
                                <img className="play-img" src="./assets/Tagging/play-audio.svg" height="20px" alt="" />
                                <p className="_14px"> Reproducir canto</p>
                            </span>
                            <p className=" _14px">Nariño, Colombia</p>
                            <p className="gray-text _14px">Todd Mark</p>
                            <img className="lens-img"
                                onClick={() => taggingStore.onSpecZoomView('./assets/Tagging/ai/colimocho-spec-4.jpg', '//www.xeno-canto.org/sounds/uploaded/CLKPHLYUHA/MyrBer3IV.mp3')}
                                src="./assets/Tagging/lens.svg" alt="" />
                        </article>
                    </span> : ''
                    }
                  
                </div>
            </div>
            <span className="next-card">
                <img src="./assets/Tagging/right-arrow.svg" width="25px" alt="" />
            </span>
            <span className={(taggingStore.isSomethingZoomed) ? "zoomed-spectro" : "zoomed-spectro undisplay"} >
                <div className='spectro-card'>
                    <img className="spec-img" src={taggingStore.zoomedSpeImgUrl} alt="" />

                    <span className="play" onClick={() => taggingStore.playBirdSong(taggingStore.zoomedSpeAudioUrl)}>
                        <img className="play-img" src="./assets/Tagging/play-audio.svg" height="20px" alt="" />
                        <p className="_14px"> Reproducir canto</p>
                    </span>
                    <img className="close-img"
                        onClick={() => taggingStore.onExitZoomView()}
                        src="./assets/dark-x-close.svg" alt="" />
                </div>
            </span>
        </div>;
    }


};

export default observer(TagSuggestion);