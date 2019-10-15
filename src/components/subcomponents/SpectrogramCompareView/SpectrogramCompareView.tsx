import * as React from 'react';
import './SpectrogramCompareView.scss';
import Wavesurfer from 'react-wavesurfer';
import { taggingStore } from '../../../store/TaggingStore';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

interface SpectroProps {
    name: string;
    spectroNum: string;
    volume: number;
}

@observer
export class SpectrogramCompareView extends React.Component<SpectroProps, any>  {
    @observable volVal = 1;
    constructor(props: SpectroProps) {
        super(props);
    }

    onVolChange(value) {
        console.log(value)
        this.volVal = value;
        document.getElementById('spectro')
    };
    onVolInputChange(value) {
        console.log(value)
        this.volVal = parseFloat(value);
    }
    onVolAfterChange = (value) => {
        console.log(value);
    };

    render() {
        return <div className="spectro-atom">
            <div className="actions">
                <span className="title">
                    <img src="" alt="" />
                    <p>{this.props.name}</p>
                </span>
                <img src="./assets/pinned.svg" height="20px" alt="" />
                <br />
                <div className="slidecontainer">
                    <Slider
                        defaultValue={1}
                        value={this.volVal}
                        onChange={(e) => this.onVolChange(e)}
                        min={0}
                        max={1}
                        step={0.1}
                        trackStyle={{ backgroundColor: '#AFEA7D', height: 4 }}
                        handleStyle={{
                            borderColor: '#fff',
                            height: 18,
                            width: 18,
                            marginLeft: -10,
                            marginTop: -7,
                            backgroundColor: '#3BC57F',
                        }}
                        railStyle={{ backgroundColor: '#C4C4C4', height:4 }}
                    />
                </div>
                <br />
                <img src="./assets/volumeon.svg" className="volume" height="17px" alt="" />
            </div>
            <div className="spectro-viz">
                <img src={"./assets/compareSpectros/" + this.props.spectroNum + ".png"} alt="" />
            </div>
        </div>
    }
}