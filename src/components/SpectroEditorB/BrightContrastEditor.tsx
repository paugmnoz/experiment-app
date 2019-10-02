import * as React from 'react';
import { observer } from 'mobx-react';

export default class BrightContrastEditor extends React.Component {

    render() {

        return <div className="color-picker-div">
            <div className="header-color-pick-mang">
                <h2>Edición de Brillo/Contraste</h2>
                <p>Escoge una escala de color para visualizar la energía del sonido.</p>
            </div>

        </div>
    }
}