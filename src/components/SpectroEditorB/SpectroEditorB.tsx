import * as React from 'react';
import Iframe from 'react-iframe'
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import '../SpectroEditorB/SpectroEditorB.scss';
import AudioLayersMenu from '../SpectroEditorB/AudioLayersMenu';

export class SpectroEditorB extends React.Component {

    render() {
        return <div>
            <ToolsMenu />
            <AudioLayersMenu />
        </div>
    }
}