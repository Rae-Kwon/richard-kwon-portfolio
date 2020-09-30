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
            <div>
                <form onSubmit={submitEditHandler}>
                    <label htmlFor="name">
                        Project Name:
                        <input
                            name="name"
                            type="text"
                            value={name}
                            {...bindName}
                        />
                    </label>

                    <label htmlFor="summary">
                        Project Summary:
                        <input
                            name="summary"
                            type="text"
                            value={summary}
                            {...bindSummary}
                        />
                    </label>

                    <label htmlFor="description">
                        Project Description:
                        <input
                            name="description"
                            type="text"
                            value={description}
                            {...bindDescription}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Edit this"
                    />
                </form>
            </div>
        )
    } else {
        return <button onClick={editHandler}></button>
    }
}

export default UpdateProject
