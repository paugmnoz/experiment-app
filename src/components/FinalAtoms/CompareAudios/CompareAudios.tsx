import * as React from 'react';
import './_compareAudios.scss';
import Iframe from 'react-iframe'
import { taggingStore } from '../../../store/TaggingStore';
import { observer } from 'mobx-react';
import { SpectrogramCompareView } from '../../subcomponents/SpectrogramCompareView/SpectrogramCompareView';

@observer
export class CompareAudios extends React.Component {

    render() {
        return <div className="compare-section">
            {
                /*
                               <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmHHdlqPuwYLGhb1ADJEIna%2FSprint-4%3Fnode-id%3D38%253A178%26scaling%3Dscale-down-width"
                width="1200px"
                height="552px"
                id="myId"
                className="myClassname"
                position="relative"/>
                */
            }
            <div className="left">
                <h1>Comparando audios</h1>
                <span className="line-row">
                    <h3>Micrófono principal: {} </h3>
                    <img src="./assets/pinned.svg" height="20px" alt="" />
                    <span className="tooltip">
                        <img src="./assets/question-helper.svg" height="15px" alt="" />
                        <span className="tooltiptext">
                            Cambia el espectograma con el que se visualiza principalmente en el software.
                        </span>
                    </span>
                </span>
                <br />
                <div className="circle-container">
                    <span className="micro-btn" onClick={() => taggingStore.activateMicro('1')} >
                        {
                            (taggingStore.comparedMicro1Activated) ?
                                <img className="active-micro-1" src="./assets/microphone-green.svg" alt="" />
                                :
                                <img className="disabled-micro-1" src="./assets/microphone-gray.svg" alt="" />
                        }
                        <p className={(taggingStore.comparedMicro1Activated) ? "active" : "disabled"}>M1</p>
                    </span>
                    <span className="micro-btn" onClick={() => taggingStore.activateMicro('2')} >
                        {
                            (taggingStore.comparedMicro2Activated) ?
                                <img className="active-micro-1" src="./assets/microphone-green.svg" alt="" />
                                :
                                <img className="disabled-micro-1" src="./assets/microphone-gray.svg" alt="" />
                        }
                        <p className={(taggingStore.comparedMicro2Activated) ? "active" : "disabled"}>M2</p>
                    </span>
                    <span className="micro-btn" onClick={() => taggingStore.activateMicro('3')} >
                        {
                            (taggingStore.comparedMicro3Activated) ?
                                <img className="active-micro-1" src="./assets/microphone-green.svg" alt="" />
                                :
                                <img className="disabled-micro-1" src="./assets/microphone-gray.svg" alt="" />
                        }
                        <p className={(taggingStore.comparedMicro3Activated) ? "active" : "disabled"}>M3</p>

                    </span>
                    <span className="micro-btn" onClick={() => taggingStore.activateMicro('4')} >
                        {
                            (taggingStore.comparedMicro4Activated) ?
                                <img className="active-micro-1" src="./assets/microphone-green.svg" alt="" />
                                :
                                <img className="disabled-micro-1" src="./assets/microphone-gray.svg" alt="" />
                        }
                        <p className={(taggingStore.comparedMicro4Activated) ? "active" : "disabled"}>M4</p>

                    </span>
                    <span className="micro-btn" onClick={() => taggingStore.activateMicro('5')} >
                        {
                            (taggingStore.comparedMicro5Activated) ?
                                <img className="active-micro-1" src="./assets/microphone-green.svg" alt="" />
                                :
                                <img className="disabled-micro-1" src="./assets/microphone-gray.svg" alt="" />
                        }
                        <p className={(taggingStore.comparedMicro5Activated) ? "active" : "disabled"}>M5</p>

                    </span>
                    <span className="micro-btn" onClick={() => taggingStore.activateMicro('6')} >
                        {
                            (taggingStore.comparedMicro6Activated) ?
                                <img className="active-micro-1" src="./assets/microphone-green.svg" alt="" />
                                :
                                <img className="disabled-micro-1" src="./assets/microphone-gray.svg" alt="" />
                        }
                        <p className={(taggingStore.comparedMicro6Activated) ? "active" : "disabled"}>M6</p>
                    </span>
                    <span className="center" onClick={() => taggingStore.activateMicro('all')}>
                        <img src="./assets/microarray_center.svg" alt="" />
                    </span>
                </div>
            </div>

            <div className="right">
                <img src="./assets/compare/timeline.png" width="100%" alt=""/>
                <span className="principal-micro">
                    <SpectrogramCompareView name={'M1'} spectroNum={'1'} volume={50} />
                </span>
                {
                    (taggingStore.comparedMicro1Activated && !taggingStore.isPrincipal1) ? 
                    <SpectrogramCompareView name={'M2'} spectroNum={'1'} volume={50}/> : ''
                }
                {
                    (taggingStore.comparedMicro2Activated && !taggingStore.isPrincipal2) ? 
                    <SpectrogramCompareView name={'M2'} spectroNum={'2'} volume={50}/> : ''
                }
                {
                    (taggingStore.comparedMicro3Activated && !taggingStore.isPrincipal3) ? 
                    <SpectrogramCompareView name={'M3'} spectroNum={'3'} volume={50}/> : ''
                }
                {
                    (taggingStore.comparedMicro4Activated && !taggingStore.isPrincipal4) ? 
                    <SpectrogramCompareView name={'M4'} spectroNum={'4'} volume={50} /> : ''
                }
                {
                    (taggingStore.comparedMicro5Activated && !taggingStore.isPrincipal5) ? 
                    <SpectrogramCompareView name={'M5'} spectroNum={'5'} volume={50}/> : ''
                }
                {
                    (taggingStore.comparedMicro6Activated && !taggingStore.isPrincipal6) ? 
                    <SpectrogramCompareView name={'M6'} spectroNum={'6'} volume={50}/> : ''
                }
            </div>
        </div>
    }
}