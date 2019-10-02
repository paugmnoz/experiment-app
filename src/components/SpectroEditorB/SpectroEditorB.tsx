import * as React from 'react';
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import '../SpectroEditorB/SpectroEditorB.scss';
import AudioLayersMenu from '../CompareAudiosB/AudioLayersMenu';
import ColorWheelEditor from '../SpectroEditorB/ColorWheelEditor';
import Slider, { Range } from 'rc-slider';
import { taggingStore } from '../../store/TaggingStore';
import { observer } from 'mobx-react';
import { SpectrogramCompareView } from '../subcomponents/SpectrogramCompareView/SpectrogramCompareView';

@observer
export class SpectroEditorB extends React.Component {

    render() {
        return <div>
            <ToolsMenu />
            <section className="spectro-editor-b">
                <section className="editor-section">
                    <div className="left">
                        <span className="spectrogram">
                            <img src="./assets/Editor/original-gray-spectrum.png" alt="" />
                        </span>
                    </div>
                </section>
                <ColorWheelEditor />
            </section>
        </div>
    }
}