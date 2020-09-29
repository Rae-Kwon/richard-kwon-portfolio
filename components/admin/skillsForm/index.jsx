import { useState } from "react"
import { useFormInput } from "../../../hooks/customHooks"

import { projectDatabase } from "../../../lib/firebase"

const SkillsForm = () => {
    const {
        data: name,
        bind: bindName,
        reset: resetName,
    } = useFormInput("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await projectDatabase
            .collection("skills")
            .add({name})
        resetName()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Name:
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    {...bindName}
                />
            </label>
            <input
                type="submit"
                value="Send skill to firebase"
            />
        </form>
    )
}

export default SkillsForm
