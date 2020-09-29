import { useFormInput } from "../../../hooks/customHooks"

import { projectDatabase } from "../../../lib/firebase"

const ProjectForm = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        await projectDatabase
            .collection("projects")
            .add({ name, summary, description })
        resetName()
        resetSummary()
        resetDescription()
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <input type="submit" value="Send to Firebase" />
        </form>
    )
}

export default ProjectForm
