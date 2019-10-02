import * as React from 'react';
import './SpectroEditorB.scss';
import Iframe from 'react-iframe'
import ToolsMenu from '../ToolsMenu/ToolsMenu';

export class SpectroEditorB extends React.Component {

    render(){
        return <div>  
        <ToolsMenu/>
        <section className="layers-management">
            <h2>Capas de Audio</h2>
        </section>
        </div>
    }
}