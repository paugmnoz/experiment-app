import * as React from 'react';
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
import P5Wrapper from './P5Wrapper';
import P5Sketch from './P5Sketch';

@observer
export class SpectroEditorB extends React.Component {

    render() {
        return <div>
            <ToolsMenu />
            <section className="spectro-editor-b">
                <section className="editor-section">
                    <div className="left">
                        <span className="spectrogram">
   <svg className="duotone-filter" xmlns="http://www.w3.org/2000/svg">
       <filter id="duotone-1" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feColorMatrix type="matrix" result="gray"
values=".33 .33 .33 0 0
        .33 .33 .33 0 0
        .33 .33 .33 0 0
        0 0 0 1 0">
</feColorMatrix>

<feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
<feFuncR type="table" tableValues={editorBStore.getRNum()/255 + " " + 0.53}></feFuncR>
    <feFuncG type="table" tableValues={editorBStore.getGNum()/255 + " " + 0.97}></feFuncG>
    <feFuncB type="table" tableValues={editorBStore.getBNum()/255 + " " + 0.77}></feFuncB>
    <feFuncA type="table" tableValues="0 1"></feFuncA>
</feComponentTransfer>
<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
       </filter>
   </svg>
        <div className="spectro-div">
        <img src="./assets/Editor/original-gray-spectrum-B.png" alt="" width="770" className="spectro" />
        <img src="./assets/Editor/timeline-B.png" alt="" width="770" />
        </div>
                            {/*<Spectogram/>*/}
                        </span>

                    </div>
                </section>
                <div className="color-wheel-editor-cont"
                    style={{
                        display: editorBStore.getTool() === 1 && dashboardStore.actualAtom == '1B' ? 'flex' : 'none'
                    }}>
                    <ColorWheelEditor />
                </div>
                <div className="bright-contrast-editor-cont"
                    style={{
                        display: editorBStore.getTool() === 2 && dashboardStore.actualAtom == '1B' ? 'flex' : 'none'
                    }}>
                    <BrightContrastEditor />
                </div>
            </section>
        </div>
    }
}