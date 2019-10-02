import * as React from 'react';
import { observer } from 'mobx-react';
import iro from '@jaames/iro';

@observer
export default class SpectroEditorB extends React.Component {

    render() {
        var colorPicker = new iro.ColorPicker('#color-picker-container', {
            // Set the size of the color picker
            width: 280,
            // Set the initial color to pure red
            color: "#f00",

        });

        return <div>
            <button>Fondo</button>            
            <button>Espectro</button>
            <div id="color-picker-container"></div>
        </div>
    }
}