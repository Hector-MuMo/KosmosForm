import React, { useState } from 'react'
import "../styles/kosmosForm.css"
import Fields from './Fields'


const KosmosForm = () => {

    const [showNameField, setShowNameField] = useState(false);
    const [showLastName, setShowLastName] = useState(false);
    const [showGender, setShowGender] = useState(false);
    const [showCountry, setShowCountry] = useState(false);

    const handleShowField = (id) => {
        if (id === 1) {
            setShowNameField(!showNameField)
        } else if (id === 2) {
            setShowLastName(!showLastName)
        } else if (id === 3) {
            setShowGender(!showGender)
        } else if (id === 4) {
            setShowCountry(!showCountry)
        }
    }


    return (
        <div className='kosmos-form'>
            <section className='fields-section'>
                <h2>Campos para agregar</h2>

                <div>
                    <Fields onChangeName={handleShowField} />
                </div>
            </section>
            <section className='form-section'>
                <h2>Formulario</h2>
                <div className='container-form'>
                    <form className='form'>
                        {showNameField &&
                            <>
                                <label htmlFor='name'>Nombre</label>
                                <input type="text" id='name' />
                            </>}
                        {
                            showLastName &&
                            <>
                                <label htmlFor='lastname' >Apellido</label>
                                <input type="text" id='lastname' />
                            </>
                        }
                        {
                            showGender &&
                            <>
                                <label for="gender">Selecciona tu género</label>
                                <select id='gender'>
                                    <option value='male'>Masculino</option>
                                    <option value='female'>Femenino</option>
                                </select>
                            </>
                        }
                        {
                            showCountry &&
                            <>
                                <label>Selecciona ti país</label>
                                <div>
                                    <label htmlFor='mexico' >México</label>
                                    <input type="radio" id='mexico' name='country' value='mexico' />
                                    <label htmlFor='eu' >EU</label >
                                    <input type="radio" id='mexico' name='country' value='eu' />
                                    <label htmlFor='other' >Otro</label>
                                    <input type="radio" id='mexico' name='country' value='other' />
                                </div>
                            </>
                        }
                        <input type="submit" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default KosmosForm