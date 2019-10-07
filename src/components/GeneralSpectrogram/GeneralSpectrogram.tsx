import * as React from 'react';
import './GeneralSpectrogram.scss';
import Iframe from 'react-iframe'
import { taggingStore } from '../../store/TaggingStore';
import { observer } from 'mobx-react';
import { SpectrogramCompareView } from '../subcomponents/SpectrogramCompareView/SpectrogramCompareView';

@observer
export class GeneralSpectrogram extends React.Component {

    render() {
        return <div className="gen-spectro-section">
            
        </div>
    }
}