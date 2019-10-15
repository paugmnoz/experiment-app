import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import iro from '@jaames/iro';
import { editorBStore } from '../../store/editorBStore';
import { dashboardStore } from '../../store/DashboardStore';

@observer
export default class ColorWheelSpectro extends React.Component {

    colorPicker: any = new iro.ColorPicker('#color-picker-container', {
        // Set the size of the color picker
        width: 280,
        // Set the initial color to pure red
        color: "#f00",
    });

    render() {

        function onColorChange(color, changes) {
            // print the color's new hex value to the developer console
            //console.log(color.rgb);
            var rgbCode = color.rgb;
            console.log('r', rgbCode.r);
            console.log('g', rgbCode.g);
            console.log('b', rgbCode.b);
            editorBStore.setRNumSpectro(rgbCode.r);
            editorBStore.setGNumSpectro(rgbCode.g);
            editorBStore.setBNumSpectro(rgbCode.b);

            rgbCode.r = editorBStore.getRNumSpectro();
            rgbCode.g = editorBStore.getGNumSpectro();
            rgbCode.b = editorBStore.getBNumSpectro();
        }

        // listen to a color picker's color:change event
        this.colorPicker.on('color:change', onColorChange);

        return <div className="color-picker-div">
            <div id="color-picker-container" style={{
                display: editorBStore.getModifyingSpectro() ? 'flex' : 'none',
            }}></div>
        </div>
    }
}