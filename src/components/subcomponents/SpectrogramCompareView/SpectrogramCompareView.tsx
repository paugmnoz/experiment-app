import * as React from 'react';
import './SpectrogramCompareView.scss';
import { observer } from 'mobx-react-lite';
import Wavesurfer from 'react-wavesurfer';
import { taggingStore } from '../../../store/TaggingStore';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

interface SpectroProps {
    name: string;
    spectroNum: string;
    volume: number;
}
 
export class SpectrogramCompareView extends React.Component<SpectroProps, any>  {
    constructor(props: SpectroProps) {
        super(props);
    }
    render(){
        return <div className="spectro-atom">  
            <div className="actions">
                <span className="title">
                    <img src="" alt=""/>
                    <p>{this.props.name}</p>
                </span>
                <img src="./assets/pinned.svg" height="20px" alt=""/>
                <br/>
                <div className="slidecontainer">
                <Slider />
                </div>
                <br/>
                <img src="./assets/volumeon.svg" className="volume" height="17px" alt=""/>
            </div>
            <div className="spectro-viz">
                <img src={"./assets/compareSpectros/"+ this.props.spectroNum + ".png"} alt=""/>
            </div>
        </div>
    }
}