import { useState } from 'react'


const useFormInput = (initialData) => {
    const [data, setData] = useState(initialData)
    return {
        data,
        setData,
        reset: () => setData(''),
        bind: {
            data,
            onChange: e => {
                setData(e.target.value)
            }
        }
    }
}

export {useFormInput}