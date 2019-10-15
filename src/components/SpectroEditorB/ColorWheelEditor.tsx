import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import iro from '@jaames/iro';
import { editorBStore } from '../../store/editorBStore';
import { dashboardStore } from '../../store/DashboardStore';

@observer
export default class SpectroEditorB extends React.Component {

    colorPicker: any = new iro.ColorPicker('#color-picker-container', {
        // Set the size of the color picker
        width: 280,
        // Set the initial color to pure red
        color: "#f00",
    });

    handleModBack(show: boolean) {
        console.log(editorBStore.getModifyingBack());
        //console.log(store.getShowHambMenu());
        editorBStore.setModifyingBack(show);
    }    

    render() {

        function onColorChange(color, changes) {
            // print the color's new hex value to the developer console
            //console.log(color.rgb);
            var rgbCode = color.rgb;
            console.log('r', rgbCode.r);
            console.log('g', rgbCode.g);
            console.log('b', rgbCode.b);
            editorBStore.setRNum(rgbCode.r);
            editorBStore.setGNum(rgbCode.g);
            editorBStore.setBNum(rgbCode.b);
        }

        // listen to a color picker's color:change event
        this.colorPicker.on('color:change', onColorChange);

        return <div className="color-picker-div">
            <div className="header-color-pick-mang">
                <h2>Edición de Color</h2>
                <p>Escoge una escala de color para visualizar la energía del sonido.</p>
            </div>
            <div className="btns-sel-spectro">
                <button style={{ 
                marginRight: '25',
                backgroundColor: editorBStore.getModifyingBack() ? '#53CC8F':'#F4F4F4',
                color: editorBStore.getModifyingBack() ? '#FFF':'#000000'
                }}
                onClick={() => {
                    this.handleModBack(true);
                    console.log('modifying back', editorBStore.getModifyingBack());
                    }}>Fondo</button>
                <button
                style={{ 
                marginRight: '25',
                backgroundColor: editorBStore.getModifyingBack() ? '#F4F4F4':'#53CC8F',
                color: editorBStore.getModifyingBack() ? '#000000':'#FFF'
                }}
                onClick={() => {
                    this.handleModBack(false);
                    console.log('modifying back', editorBStore.getModifyingBack());
                }}>Espectro</button>
            </div>
            <div className="current-color"></div>
            <div id="color-picker-container"></div>
        </div>
    }
}