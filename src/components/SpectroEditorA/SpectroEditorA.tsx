import * as React from 'react';
import './SpectroEditorA.scss';
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import { taggingStore } from '../../store/TaggingStore';
import { observer } from 'mobx-react';
import * as CSS from 'csstype';
import { observable } from 'mobx';
import Slider from 'rc-slider';

@observer
export class SpectroEditorA extends React.Component {

    @observable brightVal = 1;
    @observable contrastVal = 1;


    onBrightChange(value) {
        console.log(value)
        this.brightVal = value;
        document.getElementById('spectro')
    };
    onBrightInputChange(value) {
        console.log(value)
        this.brightVal = parseFloat(value);
    }
    onBrightAfterChange = (value) => {
        console.log(value);
    };

    onContrastChange(value) {
        console.log(value)
        this.contrastVal = value;
        document.getElementById('spectro')
    };
    onContrastInputChange(value) {
        console.log(value)
        this.contrastVal = parseFloat(value);
    }
    onContrastAfterChange = (value) => {
        console.log(value);
    };


    render() {
        const ContrastBrightness: CSS.Properties = {
            filter: 'brightness(' + this.brightVal + ') ' + 'contrast(' + this.contrastVal + ')',
        }
        return <div className="editor-cont">
            <ToolsMenu />
            <section className="editor-section">
                <div className="left">
                    <span className="spectrogram">
                        <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/original-gray-spectrum.png" alt="" />
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
                            <div className="edit-header">
                                <h3>Edición de brillo y contraste</h3>
                                <img src="./assets/dark-x-close.svg" className="close" height="15px" alt="" />
                            </div>
                            <p>Modifica el brillo y contrate del espectrograma para resaltar la energía de los sonidos.</p>
                            <span className="bcEditOption">
                                <p>Brillo</p>
                                <Slider
                                    defaultValue={1}
                                    value={this.brightVal}
                                    onChange={(e) => this.onBrightChange(e)}
                                    min={0}
                                    max={2}
                                    step={0.1}
                                    trackStyle={{ backgroundColor: '#AFEA7D', height: 6 }}
                                    handleStyle={{
                                        borderColor: '#fff',
                                        height: 20,
                                        width: 20,
                                        marginLeft: -10,
                                        marginTop: -7,
                                        backgroundColor: '#3BC57F',
                                    }}
                                    railStyle={{ backgroundColor: '#C4C4C4', height: 6 }}
                                />
                                <input type="text" defaultValue={this.brightVal + ''}
                                    value={this.brightVal}
                                    onChange={(e) => this.onBrightInputChange(e.target.value)}
                                    name="" id="" />
                            </span>
                            <span className="bcEditOption">
                                <p>Contraste</p>
                                <Slider
                                    defaultValue={1}
                                    value={this.contrastVal}
                                    onChange={(e) => this.onContrastChange(e)}
                                    min={0}
                                    max={2}
                                    step={0.1}
                                    trackStyle={{ backgroundColor: '#AFEA7D', height: 6 }}
                                    handleStyle={{
                                        borderColor: '#fff',
                                        height: 20,
                                        width: 20,
                                        marginLeft: -10,
                                        marginTop: -7,
                                        backgroundColor: '#3BC57F',
                                    }}
                                    railStyle={{ backgroundColor: '#C4C4C4', height: 6 }}
                                />
                                <input type="text" defaultValue={this.contrastVal + ''}
                                    value={this.contrastVal}
                                    onChange={(e) => this.onContrastInputChange(e.target.value)}
                                    name="" id="" />
                            </span>
                        </span> : ""
                    }


                </div>
            </section>
        </div>
    }
}