import React, { Component } from 'react';
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import '../SpectroEditorB/SpectroEditorB.scss';
import ColorWheelEditor from '../SpectroEditorB/ColorWheelEditor';
import BrightContrastEditor from '../SpectroEditorB/BrightContrastEditor';
import { dashboardStore } from '../../store/DashboardStore';
import { editorBStore } from '../../store/editorBStore';
import { observer } from 'mobx-react';
//import Spectogram from '../SpectroEditorB/Spectogram';
import p5 from 'p5';
//import P5Wrapper from 'react-p5-wrapper';

@observer
export class SpectroEditorB extends React.Component {

    render() {
        
        return (

        <div>
            <ToolsMenu />
            <section className="spectro-editor-b">
                <section className="editor-section">
                    <div className="left">
                        <span className="spectrogram">
   <svg className="duotone-filter" xmlns="http://www.w3.org/2000/svg" key={"" + editorBStore.rNumSpectro + "" + editorBStore.rNumBack + ""}>
       <filter id="duotone-1" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feColorMatrix type="matrix" result="gray"
    values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0">
    </feColorMatrix>

    <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
            <feFuncR type="table" tableValues={editorBStore.rNumSpectro/255 + " " + editorBStore.rNumBack/255}></feFuncR>
            <feFuncG type="table" tableValues={editorBStore.gNumSpectro/255 + " " + editorBStore.gNumBack/255}></feFuncG>
            <feFuncB type="table" tableValues={editorBStore.bNumSpectro/255 + " " + editorBStore.bNumBack/255}></feFuncB>
            {editorBStore.colorWheelOn
            ?<feFuncA type="table" tableValues="0 1"></feFuncA>
            :<feFuncA type="table" tableValues="0 0"></feFuncA>}
        </feComponentTransfer>
    <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
       </filter>
   </svg>
        <div className="spectro-div">
        <img src="./assets/Editor/original-gray-spectrum-B.png" alt="" width="770" className="spectro" 
        style={{
            filter: 'brightness('+ editorBStore.brightValStore +'%)' + 'contrast('+ editorBStore.contrastValStore +'%)' + 'url(#duotone-1)'
        }}/>
        <img src="./assets/Editor/timeline-B.png" alt="" width="770" />
        </div>
                            {/*<Spectogram/>*/}
                        </span>

                    </div>
                </section>
                <div className="color-wheel-editor-cont"
                    style={{
                        display: editorBStore.tool === 1 && dashboardStore.actualAtom == '1B' ? 'flex' : 'none'
                    }}>
                    <ColorWheelEditor />
                </div>
                <div className="bright-contrast-editor-cont"
                    style={{
                        display: editorBStore.tool === 2 && dashboardStore.actualAtom == '1B' ? 'flex' : 'none'
                    }}>
                    <BrightContrastEditor />
                </div>
            </section>
        </div>
        );    
    }
}
