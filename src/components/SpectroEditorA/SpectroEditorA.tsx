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
                            color
                        </span> :  (taggingStore.contrastEditionStatus) ?  <span className="contrast-atom">
                            contrast
                            </span> : ""
                    }


                </div>
            </section>
        </div>
    }
}