import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import iro from '@jaames/iro';
import { editorBStore } from '../../store/editorBStore';
import { dashboardStore } from '../../store/DashboardStore';
import ColorWheelSpectro from '../../components/SpectroEditorB/ColorWheelSpectro';
import ColorWheelBack from '../../components/SpectroEditorB/ColorWheelBack';

@observer
export default class SpectroEditorB extends React.Component {

    handleModBack(show: boolean) {
        console.log(editorBStore.getModifyingSpectro());
        //console.log(store.getShowHambMenu());
        editorBStore.setModifyingSpectro(show);
    }

    render() {

        return <div className="color-picker-div">
            <div className="header-color-pick-mang">
                <h2>Edición de Color</h2>
                <p>Escoge una escala de color para visualizar la energía del sonido.</p>
            </div>
            <div className="btns-sel-spectro">
                <button style={{
                    marginRight: '25',
                    backgroundColor: editorBStore.getModifyingSpectro() ? '#53CC8F' : '#F4F4F4',
                    color: editorBStore.getModifyingSpectro() ? '#FFF' : '#000000'
                }}
                    onClick={() => {
                        this.handleModBack(true);
                        console.log('modifying back', editorBStore.getModifyingSpectro());
                    }}>Espectro</button>
                <button
                    style={{
                        marginRight: '25',
                        backgroundColor: editorBStore.getModifyingSpectro() ? '#F4F4F4' : '#53CC8F',
                        color: editorBStore.getModifyingSpectro() ? '#000000' : '#FFF'
                    }}
                    onClick={() => {
                        this.handleModBack(false);
                        console.log('modifying back', editorBStore.getModifyingSpectro());
                    }}>Fondo</button>
            </div>
                <ColorWheelSpectro />
                <ColorWheelBack />
        </div>
    }
}