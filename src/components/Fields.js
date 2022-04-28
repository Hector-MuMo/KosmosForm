import React, { useState } from 'react'
import fieldsArray from '../fields.json'
import '../styles/fields.css'

const Fields = ({ onChangeName }) => {
    const [isSelected, setIsSelected] = useState(false);

    const onChangeSelection = (id, e) => {

        onChangeName(id)
    }

    const useFields = fieldsArray.fields.map((elem, index) =>
        <p
            key={elem.id}
            className='field-to-add'
            onClick={(e) => onChangeSelection(elem.id, e)}>{elem.label}</p>
    )

    return (
        <div >
            {useFields}
        </div>
    )
}

export default Fields