import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import iro from '@jaames/iro';
import { editorBStore } from '../../store/editorBStore';

@observer
export default class SpectroEditorB extends React.Component {

    handleModBack(show: boolean) {
        console.log('show hamb menu');
        //console.log(store.getShowHambMenu());
        editorBStore.setModifyingBack(show);
    }    

    render() {
        var colorPicker = new iro.ColorPicker('#color-picker-container', {
            // Set the size of the color picker
            width: 280,
            // Set the initial color to pure red
            color: "#f00",
        });

        function onColorChange(color, changes) {
            // print the color's new hex value to the developer console
            console.log(color.hexString);
        }

        // listen to a color picker's color:change event
        colorPicker.on('color:change', onColorChange);

        return <div className="color-picker-div">
            <div className="header-color-pick-mang">
                <h2>Edición de Color</h2>
                <p>Escoge una escala de color para visualizar la energía del sonido.</p>
            </div>
            <div className="btns-sel-spectro">
                <button style={{ marginRight: '25',
                backgroundColor: (editorBStore.getModifyingBack) ? '#53CC8F':'#FFFFFF',
                color: (editorBStore.getModifyingBack) ? '#FFF':'#000000'
                }}
                onClick={() => {
                    this.handleModBack(true);
                    console.log('TRUE', editorBStore.getModifyingBack());
                    }}>Fondo</button>
                <button
                onClick={() => {
                    this.handleModBack(false);
                    console.log('FALSE', editorBStore.getModifyingBack());
                }}>Espectro</button>
            </div>
            <div className="current-color"></div>
            <div id="color-picker-container"></div>
        </div>
    }
}