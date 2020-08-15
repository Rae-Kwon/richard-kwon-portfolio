const UpdateProject = ({ edit, editHandler }) => {
    if (edit) {
        return (
            <div>
                <form>
                    <label htmlFor="">
                        <input type="text" />
                        <input type="submit" value="Edit this" />
                    </label>
                </form>
                <button onClick={editHandler}>Back</button>
            </div>
        )
    } else {
        return <button onClick={editHandler}></button>
    }
}

export default UpdateProject
