import * as React from 'react';
import { observer } from 'mobx-react';
import CircularSlider from 'react-circular-slider-bar';

@observer
export default class BrightContrastEditor extends React.Component {

    render() {

        return <div className="bright-cont-editor">
            <div className="header-color-pick-mang">
                <h2>Edición de Brillo/Contraste</h2>
                <p>Escoge una escala de color para visualizar la energía del sonido.</p>
            </div>
            <div className="circle-sliders">
                <div className="bright-slider">
                    <h3>Brillo</h3>
                    <CircularSlider
                        r={70}
                        trackWidth={8}
                        thumbWidth={18}
                        onChange={value => console.log(value)}
                        arcColor={'#3BC57F'}
                        trackColor={'#828282'}
                    />
                </div>
                <div className="contrast-slider">
                    <h3>Contraste</h3>
                    <CircularSlider
                        r={70}
                        trackWidth={8}
                        thumbWidth={18}
                        onChange={value => console.log(value)}
                        arcColor={'#3BC57F'}
                        trackColor={'#828282'}
                    />
                </div>
            </div>
        </div>
    }
}