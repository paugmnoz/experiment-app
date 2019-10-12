import * as React from 'react';
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import '../SpectroEditorB/SpectroEditorB.scss';
import ColorWheelEditor from '../SpectroEditorB/ColorWheelEditor';
import BrightContrastEditor from '../SpectroEditorB/BrightContrastEditor';
import { dashboardStore } from '../../store/DashboardStore';
import { editorBStore } from '../../store/editorBStore';
import { observer } from 'mobx-react';

@observer
export class SpectroEditorB extends React.Component {

    render() {
        return <div>
            <ToolsMenu />
            <section className="spectro-editor-b">
                <section className="editor-section">
                    <div className="left">
                        <span className="spectrogram">
                            <img src="./assets/Editor/original-gray-spectrum.png" alt="" width="770" />
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