import projects from './styles.module.scss'

import { useFormInput } from "../../../hooks/customHooks"
import { projectDatabase } from "../../../lib/firebase"

const UpdateProject = ({
    project,
    edit,
    setEdit,
    editHandler,
    projectId,
}) => {
    const {
        data: name,
        bind: bindName,
        reset: resetName,
    } = useFormInput(project.name)
    const {
        data: summary,
        bind: bindSummary,
        reset: resetSummary,
    } = useFormInput(project.summary)
    const {
        data: description,
        bind: bindDescription,
        reset: resetDescription,
    } = useFormInput(project.description)

    const submitEditHandler = async (e) => {
        e.preventDefault()
        console.log(description)
        await projectDatabase
            .collection("projects")
            .doc(projectId)
            .update({
                name,
                summary,
                description,
            })

        resetName()
        resetSummary()
        resetDescription()

        setEdit(!edit)
    }

    if (edit) {
        return (
            <div className={projects.content}>
                <form onSubmit={submitEditHandler}>
                    <label htmlFor="name">
                        <div className={projects.editName}>
                            <input
                                className={projects.nameInput}
                                name="name"
                                type="text"
                                value={name}
                                {...bindName}
                            />
                        </div>
                    </label>

                    <label htmlFor="summary">
                        <h4>Summary:</h4>
                        <textarea
                            className={projects.editSummary}
                            name="summary"
                            type="text"
                            value={summary}
                            {...bindSummary}
                        />
                    </label>

                    <label htmlFor="description">
                        <h4>Description:</h4>
                        <textarea
                            className={projects.editDescription}
                            name="description"
                            type="text"
                            value={description}
                            {...bindDescription}
                        />
                    </label>
                    <div className={projects.buttons}>
                        <button
                            className={projects.button}
                            type="submit"
                        >Edit this</button>
                        <button className={projects.button} onClick={editHandler}>Back</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateProject
