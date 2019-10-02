import * as React from 'react';
import Iframe from 'react-iframe'
import ToolsMenu from '../ToolsMenu/ToolsMenu';
//import '../SpectroEditorB/SpectroEditorB.scss';
import AudioLayersMenu from '../CompareAudiosB/AudioLayersMenu';
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
Lmao
            </section>
        </div>
    }
}