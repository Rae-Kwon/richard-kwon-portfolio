import { useRef } from 'react'
import addButton from './styles.module.scss'

const AddButton = ({ modalHandler }) => {
    const button = useRef(null)

    return (
        <div className={addButton.container}>
            <button className={addButton.button} onClick={modalHandler}>+</button>
        </div>
    )
}

export default AddButton