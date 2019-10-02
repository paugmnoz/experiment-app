import * as React from 'react';
import './SpectroEditorA.scss';
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import { taggingStore } from '../../store/TaggingStore';
import { observer } from 'mobx-react';

@observer
export class SpectroEditorA extends React.Component {
    render() {
        return <div className="editor-cont">
            <ToolsMenu />
            <section className="editor-section">
                <div className="left">
                    <span className="spectrogram">
                        <img src="./assets/Editor/original-gray-spectrum.png" alt="" />
                    </span>
                </div>
                <div className="right">
                    {
                        (taggingStore.colorEditionStatus) ? <span className="color-atom">
                            <div className="edit-header">
                                <h3>Edición de color</h3>
                                <img src="./assets/dark-x-close.svg" className="close" height="15px" alt="" />
                            </div>
                            <p>Escoge una escala de color para visualizar la energía del sonido.</p>
                            <span className={(taggingStore.scale1Selected) ? "color-scale-option selected" : "color-scale-option unselected"}>
                                <img onClick={() => taggingStore.onScaleSelection('gray')} src="./assets/Editor/colorscale/gray.png" alt="" />
                                <p className="green-text">Seleccionado</p>
                                <button className="dark-button" onClick={() => taggingStore.onScaleSelection('gray')}>Seleccionar</button>
                            </span>
                            <span className={(taggingStore.scale2Selected) ? "color-scale-option selected" : "color-scale-option unselected"}>
                                <img onClick={() => taggingStore.onScaleSelection('2')} src="./assets/Editor/colorscale/2.png" alt="" />
                                <p className="green-text">Seleccionado</p>
                                <button className="dark-button" onClick={() => taggingStore.onScaleSelection('2')}>Seleccionar</button>
                            </span>
                            <span className={(taggingStore.scale3Selected) ? "color-scale-option selected" : "color-scale-option unselected"}>
                                <img onClick={() => taggingStore.onScaleSelection('3')} src="./assets/Editor/colorscale/3.png" alt="" />
                                <p className="green-text">Seleccionado</p>
                                <button className="dark-button" onClick={() => taggingStore.onScaleSelection('3')}>Seleccionar</button>
                            </span>
                            <span className={(taggingStore.scale4Selected) ? "color-scale-option selected" : "color-scale-option unselected"}>
                                <img onClick={() => taggingStore.onScaleSelection('4')} src="./assets/Editor/colorscale/4.png" alt="" />
                                <p className="green-text">Seleccionado</p>
                                <button className="dark-button" onClick={() => taggingStore.onScaleSelection('4')}>Seleccionar</button>
                            </span>
                            <span className={(taggingStore.scale5Selected) ? "color-scale-option selected" : "color-scale-option unselected"}>
                                <img onClick={() => taggingStore.onScaleSelection('5')} src="./assets/Editor/colorscale/5.png" alt="" />
                                <p className="green-text">Seleccionado</p>
                                <button className="dark-button" onClick={() => taggingStore.onScaleSelection('5')}>Seleccionar</button>
                            </span>
                            <span className={(taggingStore.scale6Selected) ? "color-scale-option selected" : "color-scale-option unselected"}>
                                <img onClick={() => taggingStore.onScaleSelection('6')} src="./assets/Editor/colorscale/6.png" alt="" />
                                <p className="green-text">Seleccionado</p>
                                <button className="dark-button" onClick={() => taggingStore.onScaleSelection('6')}>Seleccionar</button>
                            </span>
                            <span className={(taggingStore.scale7Selected) ? "color-scale-option selected" : "color-scale-option unselected"}>
                                <img onClick={() => taggingStore.onScaleSelection('7')} src="./assets/Editor/colorscale/7.png" alt="" />
                                <p className="green-text">Seleccionado</p>
                                <button className="dark-button" onClick={() => taggingStore.onScaleSelection('7')}>Seleccionar</button>
                            </span>
                        </span> : (taggingStore.contrastEditionStatus) ? <span className="contrast-atom">
                            contrast
                            </span> : ""
                    }


                </div>
            </section>
        </div>
    }
}