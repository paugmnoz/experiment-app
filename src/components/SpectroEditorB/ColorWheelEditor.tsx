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

        return <div className="color-picker-div">
            <div className="header-color-pick-mang">
                <h2>Edición de Color</h2>
                <p>Escoge una escala de color para visualizar la energía del sonido.</p>
            </div>
            <div className="btns-sel-spectro">
            <button style={{marginRight: '25'}}>Fondo</button>
            <button>Espectro</button>
            </div>
            <div id="color-picker-container"></div>
        </div>
    }
}