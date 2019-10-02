import * as React from 'react';
import { editorBStore } from '../../store/editorBStore';
import { taggingStore } from '../../store/TaggingStore';
import './ToolsMenu.scss'

@observer
export default class ToolsMenu extends React.Component {

    render() {
        return <div className="tool-bar">
            <div className="audio-options">
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/play-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Reproducir</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/pause-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Pausar</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/advance-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Avanzar</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/stop-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Parar</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/volume-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Volumen</span>
                </span>
            </div>
            <div className="edition-options">
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/arrow-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Cursor</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/select-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Realizar una selección</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/zoom-in-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Acercar</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"><img src="./assets/tool-bar-assets/zoom-out-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Alejar</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn" 
                    onClick={() => {
                    (editorBStore.getTool() !== 1)
                    ? editorBStore.setTool(1)
                    : editorBStore.setTool(0)
                    }}><img src="./assets/tool-bar-assets/color-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Mapa de Color</span>
                </span>
                <span className="tooltip">
                    <button className="tool-btn"
                    onClick={() => {
                        (editorBStore.getTool() !== 2)
                        ? editorBStore.setTool(2)
                        : editorBStore.setTool(0)
                        }}><img src="./assets/tool-bar-assets/bright-icon.svg" alt="" height="50" width="50"></img></button>
                    <span className="tooltiptext">Brillo/Contraste</span>
                </span>
            </div>
        </div>
    }
}