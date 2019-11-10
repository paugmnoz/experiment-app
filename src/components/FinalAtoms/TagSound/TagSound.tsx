import * as React from 'react';
import './_tagSound.scss';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import chroma from 'chroma-js';
import { taggingStore } from '../../../store/TaggingStore';
import { observer } from 'mobx-react';

const options = [
    { value: 'song', label: 'Canción' },
    { value: 'call', label: 'Llamado' },
    { value: 'alert', label: 'Alerta' }
]

const species = [
    { value: 'a', label: 'Sipia nigricauda' },
    { value: 'b', label: 'Sipia berlschepi' },
    { value: 'c', label: 'Piranga rubra' },
    { value: 'c', label: 'Hafferia zeledoni' }
]

const tagState = [
    { value: 'a', label: 'Duda', color: '#f3773e' },
    { value: 'b', label: 'Seguro', color: '#44cd88' },
    { value: 'c', label: 'Pendiente', color: '#AFEA7D' }
]
const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};


@observer
export class TagSound extends React.Component {
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    render() {
        return <section>
            <div className="card-header">
                <h1>Selección</h1>
                <img className="close-icon" src="./assets/icons/close.svg" alt="" />
            </div>
            <div className="spec">
                <img src="./assets/spectroSelected.png" alt="" />
            </div>
            <div className="card-section">
                <span className="description-items-row">
                    <p><span className="text-title">Esta identificación está:</span> </p>
                    <label className="check-container">
                        <img src="./assets/pending-dot.svg" width="12px" alt="" /> Pendiente
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="check-container">
                        <img src="./assets/doubt-dot.svg" width="12px" alt="" />  En duda
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="check-container">
                        <img src="./assets/sure-dot.svg" width="12px" alt="" />  Verificado
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </span>

                <div className="form-section">
                    <div className="card-item">
                        <span >¿Es alguna de las especies en estudio?</span>
                        <div className="imgs-array">
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-1.png"
                                    onClick={() => {
                                        taggingStore.birdClick(1)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Electron platyrhynchum</span>
                            </span>
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-2.png"
                                    onClick={() => {
                                        taggingStore.birdClick(2)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Piranga rubra</span>
                            </span>
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-3.png"
                                    onClick={() => {
                                        taggingStore.birdClick(3)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Mitrephanes phaeocercus</span>
                            </span>
                            <span className="tooltip">
                                <img src="./assets/birds-array/bird-4.png"
                                    onClick={() => {
                                        taggingStore.birdClick(4)
                                    }}
                                    alt="" className="img-birds" width="50"></img>
                                <span className="tooltiptext">Capito maculicoronatus</span>
                            </span>
                        </div>
                    </div>
                    <span className="naming">
                        <span className="input-row card-item">
                            <p className="text-title">Especie:</p>
                            <CreatableSelect className={'react-selector'}
                                isClearable
                                onChange={this.handleChange}
                                onInputChange={this.handleInputChange}
                                options={species}
                                placeholder={'Escribe la especie'}
                            />
                        </span>
                        <span className="input-row card-item">
                            <p className="text-title">Tipo de canto:</p>
                            <Select className={'react-selector'}
                                options={options}
                                isClearable
                                isSearchable />
                        </span>
                    </span>
                    <p className={taggingStore.isNoteActivated ? 'green-link card-item undisplay' : 'green-link card-item'} 
                    onClick={()=> taggingStore.onNoteClick()}
                    >Agregar anotación o comentario</p>
                    <div className={taggingStore.isNoteActivated ? 'card-item' : 'card-item undisplay'}>
                        <p className="text-title green-text">Anotación</p>
                        <textarea placeholder="Escribir anotación" name="" id="" ></textarea>
                    </div>
                    {/* <span className="actions">
                        <p>Marcar como:</p>
                        <Select className={'react-selector'}
                                options={tagState}
                                isClearable = {false}
                                isSearchable = {false}
                                styles={colourStyles}
                                defaultValue={tagState[2]}
                                />
                        <br />
                        <br />
                        <button className="dark-button">Guardar</button>
                        </span> */}
                </div>

            </div>
            {/* 
            <div className="card-section">
                <p className="hint-text">¿Alguna duda sobre el canto? Verifica con cantos de Xeno-Canto</p>
                <span className="input-row search card-item">
                    <p className="text-title">Buscar en Xeno-Canto:</p> <input type="text" />
                    <button className="green-button">Buscar</button>
                </span>
            </div>
            */}
            
        </section>
    }
}

