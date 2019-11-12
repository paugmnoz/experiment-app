import * as React from 'react';
import './_spectroEditor.scss';
import ToolsMenu from '../../subcomponents/ToolsMenu/ToolsMenu';
import { taggingStore } from '../../../store/TaggingStore';
import { observer } from 'mobx-react';
import * as CSS from 'csstype';
import { observable } from 'mobx';
import Slider from 'rc-slider';
import ColorEditor from './ColorEditor';
import ContrastEditor from './ContrastEditor';

@observer
export class SpectroEditor extends React.Component {


    constructor(props){
        super(props);
       // taggingStore.xenoSearch('a')
    }



    render() {
        const ContrastBrightness: CSS.Properties = {
            filter: 'brightness(' + taggingStore.brightVal + ') ' + 'contrast(' + taggingStore.contrastVal + ')',
        }
        return <div className="editor-cont">
            <ToolsMenu />
            <section className="editor-section">
                <div className="left">
                    <span className="spectrogram">
                        {
                            (taggingStore.scale1Selected) ? 
                            <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/original-gray-spectrum.png" alt="" />
                            : (taggingStore.scale2Selected) ? 
                            <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/2.png" alt="" />
                            :  (taggingStore.scale3Selected) ? 
                            <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/3.png" alt="" />
                            :  (taggingStore.scale4Selected) ? 
                            <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/4.png" alt="" />
                            :  (taggingStore.scale5Selected) ? 
                            <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/5.png" alt="" />
                            :  (taggingStore.scale6Selected) ? 
                            <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/6.png" alt="" />
                            :  (taggingStore.scale7Selected) ? 
                            <img id="spectro" style={ContrastBrightness}
                            src="./assets/Editor/7.png" alt="" />
                            : ''
                        }
                       
                    </span>
                </div>
                <div className="right">
                    {
                        (taggingStore.colorEditionStatus) ? <ColorEditor></ColorEditor> 
                        : (taggingStore.contrastEditionStatus) ? <ContrastEditor></ContrastEditor> : ""
                    }

                </div>
            </section>
        </div>
    }
}