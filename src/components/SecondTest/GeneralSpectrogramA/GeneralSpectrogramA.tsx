import * as React from 'react';
import '../GeneralSpectrogramA/GeneralSpectrogramA.scss';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

@observer
export class GeneralSpectrogramA extends React.Component {

    render() {

        return <div className="gen-spectro-section-A" >
            <span className="spectro-section">
                <div className="marks">
                    <span className={((taggingStore.selected1) ? "mark selected" : "mark") /* + ((taggingStore.isSomethingSelected && !taggingStore.selected1) ? " prevent-hover" : "")*/}
                        onClick={() =>
                            taggingStore.selectMark("./assets/audio-samples/vireon.wav", 1)}>
                        <img src={"./assets/marks/" + ((taggingStore.verified) ? "ai-mark-verified" : "ai-mark-suggestion") + ".svg"}
                            width="17px" alt=""
                            className="mark-icon" />
                        <div className="bird-photo-cont">
                            <img src="./assets/birds/vireolaniusleucotis.jpg" alt="" />
                        </div>
                        <div className="mark-info" onClick={(e) => e.preventDefault}>
                            <span className="info">
                                <p className="bold" onClick={() => console.log("hols")}>
                                    Vireón coronigrís</p>
                                <p className="sci-name-style gray-text _14px">Vireolanius leucotis</p>
                                <p className="green-text _12px">98% coincidencia</p>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="30px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                            </span>

                            <span className="actions">
                                <span className="tooltip">
                                    <img src="./assets/Tagging/tick.png"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Validar sugerencia</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/question.svg"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/cancel.png" height="20px" width="20px" alt="" />
                                    <span className="tooltiptextUp">No es esta especie</span>
                                </span>
                            </span>
                        </div>
                    </span>
                    <span className={((taggingStore.selected2) ? "mark selected" : "mark") /* + ((taggingStore.isSomethingSelected && !taggingStore.selected2) ? " prevent-hover" : "")*/}
                        onClick={() =>
                            taggingStore.selectMark("./assets/audio-samples/sipia.wav", 2)}>
                        <img src="./assets/marks/ai-mark-suggestion.svg"
                            width="17px" alt=""
                            className="mark-icon" />
                        <div className="bird-photo-cont">
                            <img src="./assets/birds/sipianigricauda.jpg" alt="" />
                        </div>
                        <div className="mark-info" onClick={(e) => e.preventDefault}>
                            <span className="info">
                                <p className="bold" onClick={() => console.log("hols")}>
                                    Hormiguero de Esmeraldas</p>
                                <p className="sci-name-style gray-text _14px">Sipia nigricauda</p>
                                <p className="green-text _12px">98% coincidencia</p>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="30px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                            </span>

                            <span className="actions">
                                <span className="tooltip">
                                    <img src="./assets/Tagging/tick.png"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Validar sugerencia</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/question.svg"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/cancel.png" height="20px" width="20px" alt="" />
                                    <span className="tooltiptextUp">No es esta especie</span>
                                </span>
                            </span>
                        </div>
                    </span>
                    <span className={(taggingStore.selected3) ? "mark selected" : "mark"}
                        onClick={() =>
                            taggingStore.selectMark("./assets/audio-samples/sipia2.wav", 3)}>
                        <img src="./assets/marks/ai-mark-suggestion.svg"
                            width="17px" alt=""
                            className="mark-icon" />
                        <div className="bird-photo-cont">
                            <img src="./assets/birds/sipianigricauda.jpg" alt="" />
                        </div>
                        <div className="mark-info" onClick={(e) => e.preventDefault}>
                            <span className="info">
                                <p className="bold" onClick={() => console.log("hols")}>
                                    Hormiguero de Esmeraldas</p>
                                <p className="sci-name-style gray-text _14px">Sipia nigricauda</p>
                                <p className="green-text _12px">98% coincidencia</p>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="30px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                            </span>

                            <span className="actions">
                                <span className="tooltip">
                                    <img src="./assets/Tagging/tick.png"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Validar sugerencia</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/question.svg"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/cancel.png" height="20px" width="20px" alt="" />
                                    <span className="tooltiptextUp">No es esta especie</span>
                                </span>
                            </span>
                        </div>
                    </span>
                    <span className={(taggingStore.selected4) ? "mark selected" : "mark"}
                        onClick={() =>
                            taggingStore.selectMark("./assets/audio-samples/vireon2.wav", 4)}>
                        <img src="./assets/marks/ai-mark-suggestion.svg"
                            width="17px" alt=""
                            className="mark-icon" />
                        <div className="bird-photo-cont">
                            <img src="./assets/birds/vireolaniusleucotis.jpg" alt="" />
                        </div>
                        <div className="mark-info" onClick={(e) => e.preventDefault}>
                            <span className="info">
                                <p className="bold" onClick={() => console.log("hols")}>
                                    Vireón coronigrís</p>
                                <p className="sci-name-style gray-text _14px">Vireolanius leucotis</p>
                                <p className="green-text _12px">98% coincidencia</p>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="30px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                            </span>

                            <span className="actions">
                                <span className="tooltip">
                                    <img src="./assets/Tagging/tick.png"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Validar sugerencia</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/question.svg"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/cancel.png" height="20px" width="20px" alt="" />
                                    <span className="tooltiptextUp">No es esta especie</span>
                                </span>
                            </span>
                        </div>
                    </span>
                    <span className={(taggingStore.selected5) ? "mark selected" : "mark"}
                        onClick={() =>
                            taggingStore.selectMark("./assets/audio-samples/hafferia.wav", 5)}>
                        <img src="./assets/marks/ai-mark-suggestion.svg"
                            width="17px" alt=""
                            className="mark-icon" />
                        <div className="bird-photo-cont">
                            <img src="./assets/birds/hafferiazeledoni.jpg" alt="" />
                        </div>
                        <div className="mark-info" onClick={(e) => e.preventDefault}>
                            <span className="info">
                                <p className="bold" onClick={() => console.log("hols")}>
                                Hormiguero de Zeledón</p>
                                <p className="sci-name-style gray-text _14px">Hafferia zeledoni</p>
                                <p className="green-text _12px">98% coincidencia</p>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="30px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                            </span>

                            <span className="actions">
                                <span className="tooltip">
                                    <img src="./assets/Tagging/tick.png"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Validar sugerencia</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/question.svg"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/cancel.png" height="20px" width="20px" alt="" />
                                    <span className="tooltiptextUp">No es esta especie</span>
                                </span>
                            </span>
                        </div>
                    </span>
                    <span className={(taggingStore.selected6) ? "mark selected" : "mark"}
                        onClick={() =>
                            taggingStore.selectMark("./assets/audio-samples/sipia3.wav", 6)}>
                        <img src="./assets/marks/ai-mark-suggestion.svg"
                            width="17px" alt=""
                            className="mark-icon" />
                        <div className="bird-photo-cont">
                            <img src="./assets/birds/sipiaberlepschi.jpg" alt="" />
                        </div>
                        <div className="mark-info" onClick={(e) => e.preventDefault}>
                            <span className="info">
                                <p className="bold" onClick={() => console.log("hols")}>
                                Hormiguero Colimocho</p>
                                <p className="sci-name-style gray-text _14px">Sipia berlepschi</p>
                                <p className="green-text _12px">98% coincidencia</p>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/vision.png" height="auto" width="30px" alt="" />
                                    <span className="tooltiptextUp">Explorar canto</span>
                                </span>
                            </span>

                            <span className="actions">
                                <span className="tooltip">
                                    <img src="./assets/Tagging/tick.png"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Validar sugerencia</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/question.svg"
                                        onClick={() => taggingStore.updateMark()}
                                        height="20px"
                                        width="20px" alt="" />
                                    <span className="tooltiptextUp">Pedir opinión a la comunidad</span>
                                </span>
                                <span className="tooltip">
                                    <img src="./assets/Tagging/cancel.png" height="20px" width="20px" alt="" />
                                    <span className="tooltiptextUp">No es esta especie</span>
                                </span>
                            </span>
                        </div>
                    </span>
                </div>
                <div className="time">
                    <img src="./assets/time-bar.jpg" alt="" width="949px" />
                </div>
                <div className="spectro-viz">
                    <img src="./assets/Tagging/general.png" alt="" />
                </div>
            </span>
        </div>
    }
}