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
        console.log(editorBStore.modifiyingSpectro);
        //console.log(store.getShowHambMenu());
        editorBStore.setModifyingSpectro(show);
    }

    render() {

        return <div className="color-picker-div">
            <div className="header-color-pick-mang">
                <div className="title-button">
                <h2>Edición de Color</h2>
                <button className="act-btn"
                 onClick={() => {
                  editorBStore.setColorWheelOn(false);
                }}><img src="./assets/act-btn.svg" alt="" height="20" width="20"></img></button>
                </div>
                <p>Escoge una escala de color para visualizar la energía del sonido.</p>
            </div>
            <div className="btns-sel-spectro">
                <button style={{
                    marginRight: '25',
                    backgroundColor: editorBStore.modifiyingSpectro ? '#53CC8F' : '#F4F4F4',
                    color: editorBStore.modifiyingSpectro ? '#FFF' : '#000000'
                }}
                    onClick={() => {
                        this.handleModBack(true);
                        console.log('modifying back', editorBStore.modifiyingSpectro);
                    }}>Espectro</button>
                <button
                    style={{
                        marginRight: '25',
                        backgroundColor: editorBStore.modifiyingSpectro ? '#F4F4F4' : '#53CC8F',
                        color: editorBStore.modifiyingSpectro ? '#000000' : '#FFF'
                    }}
                    onClick={() => {
                        this.handleModBack(false);
                        console.log('modifying back', editorBStore.modifiyingSpectro);
                    }}>Fondo</button>
            </div>
                <ColorWheelSpectro />
                <ColorWheelBack />
        </div>
    }
}