import * as React from 'react';
import '../GeneralSpectrogramB/GeneralSpectrogramB.scss';
import { observer } from 'mobx-react';
import { taggingStore } from '../../../store/TaggingStore';

@observer
export class GeneralSpectrogramB extends React.Component {

    render() {
        return <div className="gen-spectro-section">
            <span className="spectro-section">
                <div className="time">
                    <img src="./assets/time-bar.jpg" alt="" width="949px" />
                </div>
                <div className="spectro-viz">
                    <img src="./assets/Tagging/general.png" alt="" />
                </div>
                <div className="marks">
                    <div className="mark-timeline">
                        {taggingStore.speciesArray.map((specie)=>{
                            return <div style={{
                                backgroundColor: specie.color,
                                width: specie.width,
                                left: specie.posX,
                            }} className="specie-mark"></div>;
                        })}
                    </div>
                </div>
            </span>
        </div>;
    }

}
