import { useState, useRef, useEffect } from "react"

import { useFormInput } from "../../../hooks/customHooks"
import projectsForm from "./styles.module.scss"
import AddButton from "../addButton"

import { projectDatabase } from "../../../lib/firebase"

const ProjectForm = () => {
    const [show, setShow] = useState(false)
    const modal = useRef(null)

    const {
        data: name,
        bind: bindName,
        reset: resetName,
    } = useFormInput("")
    const {
        data: summary,
        bind: bindSummary,
        reset: resetSummary,
    } = useFormInput("")
    const {
        data: description,
        bind: bindDescription,
        reset: resetDescription,
    } = useFormInput("")

    const modalHandler = () => {
        setShow(!show)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShow(!show)
        await projectDatabase
            .collection("projects")
            .add({ name, summary, description })
        resetName()
        resetSummary()
        resetDescription()
    }

    return (
        <>
            {show ? (
                <div ref={modal} className={projectsForm.container}>
                    <form className={projectsForm.form} onSubmit={handleSubmit}>
                        <h2 className={projectsForm.header}>Add a project</h2>
                        <label htmlFor="name">
                            Name:
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                {...bindName}
                            />
                        </label>

                        <label htmlFor="summary">
                            Summary:
                            <input
                                type="text"
                                name="summary"
                                id="summary"
                                value={summary}
                                {...bindSummary}
                            />
                        </label>

                        <label htmlFor="description">
                            Description:
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                {...bindDescription}
                            />
                        </label>

                        <input
                            type="submit"
                            value="Send to Firebase"
                        />
                        <button type="button" onClick={modalHandler}>
                            Back
                        </button>
                    </form>
                </div>
            ) : (
                <AddButton
                    modalHandler={modalHandler}
                />
            )}
        </>
    )
}

export default ProjectForm
