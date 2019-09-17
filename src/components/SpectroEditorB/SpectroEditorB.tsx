import * as React from 'react';
import './SpectroEditorB.scss';
import Iframe from 'react-iframe'

export class SpectroEditorB extends React.Component {

    render(){
        return <div>  
        <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmHHdlqPuwYLGhb1ADJEIna%2FSprint-4%3Fnode-id%3D44%253A1042%26scaling%3Dscale-down-width"
        width="1200px"
        height="615px"
        id="embed"
        className="myClassname"
        position="relative"/>
        </div>
    }
}