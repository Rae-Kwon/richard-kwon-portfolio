import { useFormInput } from "../../../hooks/customHooks"
import { projectDatabase } from "../../../lib/firebase"

const UpdateProject = ({
    edit,
    setEdit,
    editHandler,
    projectId,
}) => {
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
                            {...bindName}
                        />
                    </label>

                    <label htmlFor="summary">
                        Project Summary:
                        <input
                            name="summary"
                            type="text"
                            {...bindSummary}
                        />
                    </label>

                    <label htmlFor="description">
                        Project Description:
                        <input
                            name="description"
                            type="text"
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
