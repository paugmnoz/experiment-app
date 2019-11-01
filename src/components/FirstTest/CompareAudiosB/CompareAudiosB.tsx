import * as React from 'react';
import Iframe from 'react-iframe'
import ToolsMenu from '../../subcomponents/ToolsMenu/ToolsMenu';
import AudioLayersMenu from '../CompareAudiosB/AudioLayersMenu';
import Slider, { Range } from 'rc-slider';
import { taggingStore } from '../../../store/TaggingStore';
import { observer } from 'mobx-react';
import { SpectrogramCompareView } from '../../subcomponents/SpectrogramCompareView/SpectrogramCompareView';
import './CompareAudiosB.scss';

@observer
export class CompareAudiosB extends React.Component {

    render() {
        return <div>
            <ToolsMenu />
            <section className="compare-audio-b">
                <div className="mic-arrays">
                    <span className="principal-micro">
                        <SpectrogramCompareView name={'M1'} spectroNum={'1'} volume={50} />
                    </span>
                    {
                        (taggingStore.comparedMicro1Activated && !taggingStore.isPrincipal1) ?
                            <SpectrogramCompareView name={'M2'} spectroNum={'1'} volume={50} /> : ''
                    }
                    {
                        (taggingStore.comparedMicro2Activated && !taggingStore.isPrincipal2) ?
                            <SpectrogramCompareView name={'M2'} spectroNum={'2'} volume={50} /> : ''
                    }
                    {
                        (taggingStore.comparedMicro3Activated && !taggingStore.isPrincipal3) ?
                            <SpectrogramCompareView name={'M3'} spectroNum={'3'} volume={50} /> : ''
                    }
                    {
                        (taggingStore.comparedMicro4Activated && !taggingStore.isPrincipal4) ?
                            <SpectrogramCompareView name={'M4'} spectroNum={'4'} volume={50} /> : ''
                    }
                    {
                        (taggingStore.comparedMicro5Activated && !taggingStore.isPrincipal5) ?
                            <SpectrogramCompareView name={'M5'} spectroNum={'5'} volume={50} /> : ''
                    }
                    {
                        (taggingStore.comparedMicro6Activated && !taggingStore.isPrincipal6) ?
                            <SpectrogramCompareView name={'M6'} spectroNum={'6'} volume={50} /> : ''
                    }
                </div>
                <AudioLayersMenu />
            </section>
        </div>
    }
}