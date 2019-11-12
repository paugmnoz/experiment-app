import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';
import { observable } from 'mobx';
import * as CSS from 'csstype';
import Slider from 'rc-slider';

interface contrastEditorProps {
    name: string;
    date: string;
}

class ContrastEditor extends Component {
    
    constructor(props: any) {
        super(props);
      }

      onBrightChange(value) {
        console.log(value)
        taggingStore.brightVal = value;
        document.getElementById('spectro')
    };
    onBrightInputChange(value) {
        console.log(value)
        taggingStore.brightVal = parseFloat(value);
    }
    onBrightAfterChange = (value) => {
        console.log(value);
    };

    onContrastChange(value) {
        console.log(value)
        taggingStore.contrastVal = value;
        document.getElementById('spectro')
    };
    onContrastInputChange(value) {
        console.log(value)
        taggingStore.contrastVal = parseFloat(value);
    }
    onContrastAfterChange = (value) => {
        console.log(value);
    };
    render() {
      
        return <span className="contrast-atom">
        <div className="edit-header">
            <h3>Edición de brillo y contraste</h3>
            
            <img src="./assets/dark-x-close.svg" className="close" height="15px" alt="" />
        </div>
        <p>Modifica el brillo y contrate del espectrograma para resaltar la energía de los sonidos.</p>
        <span className="bcEditOption">
            <p>Brillo</p>
            <Slider
                defaultValue={1}
                value={taggingStore.brightVal}
                onChange={(e) => this.onBrightChange(e)}
                min={0}
                max={2}
                step={0.1}
                trackStyle={{ backgroundColor: '#AFEA7D', height: 6 }}
                handleStyle={{
                    borderColor: '#fff',
                    height: 20,
                    width: 20,
                    marginLeft: -10,
                    marginTop: -7,
                    backgroundColor: '#3BC57F',
                }}
                railStyle={{ backgroundColor: '#C4C4C4', height: 6 }}
            />
            <input type="text" defaultValue={taggingStore.brightVal + ''}
                value={taggingStore.brightVal}
                onChange={(e) => this.onBrightInputChange(e.target.value)}
                name="" id="" />
        </span>
        <span className="bcEditOption">
            <p>Contraste</p>
            <Slider
                defaultValue={1}
                value={taggingStore.contrastVal}
                onChange={(e) => this.onContrastChange(e)}
                min={0}
                max={2}
                step={0.1}
                trackStyle={{ backgroundColor: '#AFEA7D', height: 6 }}
                handleStyle={{
                    borderColor: '#fff',
                    height: 20,
                    width: 20,
                    marginLeft: -10,
                    marginTop: -7,
                    backgroundColor: '#3BC57F',
                }}
                railStyle={{ backgroundColor: '#C4C4C4', height: 6 }}
            />
            <input type="text" defaultValue={taggingStore.contrastVal + ''}
                value={taggingStore.contrastVal}
                onChange={(e) => this.onContrastInputChange(e.target.value)}
                name="" id="" />
        </span>
        <br/>
        <span className="bcEditOption">
        <button className="dark-button">Cancelar</button>
        <button className="green-button">Guardar cambios</button>
        </span>
    </span>;
    }

   
};

export default observer(ContrastEditor);