import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import iro from '@jaames/iro';
import { editorBStore } from '../../store/editorBStore';
import { dashboardStore } from '../../store/DashboardStore';

@observer
export default class ColorWheelBack extends React.Component {

    colorPicker: any = new iro.ColorPicker('#color-picker2-container', {
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
            editorBStore.setRNumBack(rgbCode.r);
            editorBStore.setGNumBack(rgbCode.g);
            editorBStore.setBNumBack(rgbCode.b);

            rgbCode.r = editorBStore.rNumBack;
            rgbCode.g = editorBStore.gNumBack;
            rgbCode.b = editorBStore.bNumBack;

            editorBStore.setColorWheelOn(true);
        }

        // listen to a color picker's color:change event
        this.colorPicker.on('color:change', onColorChange);

        return <div className="color-picker-div">
            <div id="color-picker2-container" style={{
                display: !editorBStore.modifiyingSpectro ? 'flex' : 'none',
            }}></div>
        </div>
    }
}