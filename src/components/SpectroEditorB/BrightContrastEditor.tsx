import * as React from 'react';
import { observer } from 'mobx-react';
import CircularSlider from 'react-circular-slider-bar';
import { CircleSlider } from "react-circle-slider";
import { editorBStore } from '../../store/editorBStore';

@observer
export default class BrightContrastEditor extends React.Component<{}, { valueBright: any, valueContrast: any }> {

    constructor(props) {
        super(props);
        this.state = { valueBright: 85, valueContrast: 85 };
    }

    handleChangeBright = valueBright => {
        console.log(`Changed value ${valueBright}`);
        this.setState({ valueBright });
        editorBStore.setBrightValStore(valueBright);
    };

    handleChangeRangeBright = event => {
        this.setState({
            valueBright: event.target.valueAsNumber,
        });
    };

    handleChangeContrast = valueContrast => {
        console.log(`Changed value ${valueContrast}`);
        this.setState({ valueContrast });
        editorBStore.setContrastValStore(valueContrast);
    };

    handleChangeRangeContrast = event => {
        this.setState({
            valueContrast: event.target.valueAsNumber,
        });
    };

    render() {
        const { valueBright, valueContrast } = this.state;
        return (<div className="bright-cont-editor">
            <div className="header-color-pick-mang">
            <h2>Edición de Brillo y Contraste</h2>
            <p>Escoge una escala de color para visualizar <br /> la energía del sonido</p>
            </div>
            <div className="circle-sliders">
                <div className="contrast-slider">
                    <h3>Brillo</h3>
                    <CircleSlider max={200} value={valueBright} onChange={this.handleChangeBright} knobRadius={9} progressWidth={6} progressColor={'#44CD88'} />
                </div>
                <div className="bright-slider">
                    <h3>Contraste</h3>
                    <CircleSlider max={200} value={valueContrast} onChange={this.handleChangeContrast} knobRadius={9} progressWidth={6} progressColor={'#44CD88'} />
                </div>
            </div>
        </div>
        );
    }
}