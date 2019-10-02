import * as React from 'react';
import './SpectroEditorB.scss';
import Iframe from 'react-iframe'
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import '../SpectroEditorB/SpectroEditorB.scss';

export default class AudioLayersMenu extends React.Component {

    render() {
        return <section className="layers-management">
        <div className="header-lay-mang">
            <h2>Capas de Audio</h2>
        </div>
        <div className="mic-container">
            <span>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/unlocked-padlock.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/sound-icon.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/eye-icon.svg" alt="" height="25" width="25"></img></button>
            </span>
            <h3>Todos</h3>
            <span className="hex">
            <img src="./assets/layers-manag-assets/hex-all-icon.svg" alt="" height="25" width="25"></img>
            <h4>HEX</h4>
            </span>
        </div>
        <div className="mic-container">
            <span>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/unlocked-padlock.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/sound-icon.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/eye-icon.svg" alt="" height="25" width="25"></img></button>
            </span>
            <h3>Micrófono 1</h3>
            <span className="hex">
            <img src="./assets/layers-manag-assets/hex-1-icon.svg" alt="" height="25" width="25"></img>
            <h4>HEX</h4>
            </span>
        </div>
        <div className="mic-container">
            <span>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/unlocked-padlock.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/sound-icon.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/eye-icon.svg" alt="" height="25" width="25"></img></button>
            </span>
            <h3>Micrófono 2</h3>
            <span className="hex">
            <img src="./assets/layers-manag-assets/hex-2-icon.svg" alt="" height="25" width="25"></img>
            <h4>HEX</h4>
            </span>
        </div>
        <div className="mic-container">
            <span>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/unlocked-padlock.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/sound-icon.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/eye-icon.svg" alt="" height="25" width="25"></img></button>
            </span>
            <h3>Micrófono 3</h3>
            <span className="hex">
            <img src="./assets/layers-manag-assets/hex-3-icon.svg" alt="" height="25" width="25"></img>
            <h4>HEX</h4>
            </span>
        </div>
        <div className="mic-container">
            <span>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/unlocked-padlock.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/sound-icon.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/eye-icon.svg" alt="" height="25" width="25"></img></button>
            </span>
            <h3>Micrófono 4</h3>
            <span className="hex">
            <img src="./assets/layers-manag-assets/hex-4-icon.svg" alt="" height="25" width="25"></img>
            <h4>HEX</h4>
            </span>
        </div>
        <div className="mic-container">
            <span>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/unlocked-padlock.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/sound-icon.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/eye-icon.svg" alt="" height="25" width="25"></img></button>
            </span>
            <h3>Micrófono 5</h3>
            <span className="hex">
            <img src="./assets/layers-manag-assets/hex-5-icon.svg" alt="" height="25" width="25"></img>
            <h4>HEX</h4>
            </span>
        </div>
        <div className="mic-container">
            <span>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/unlocked-padlock.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/sound-icon.svg" alt="" height="25" width="25"></img></button>
            <button className="mic-cont-btn"><img src="./assets/layers-manag-assets/eye-icon.svg" alt="" height="25" width="25"></img></button>
            </span>
            <h3>Micrófono 6</h3>
            <span className="hex">
            <img src="./assets/layers-manag-assets/hex-6-icon.svg" alt="" height="25" width="25"></img>
            <h4>HEX</h4>
            </span>
        </div>
        </section>;
    }
}

