import * as firebase from 'firebase/app'
import { useState } from "react"

import TextInput from "./TextInput"
import SubmitData from "./SubmitData"
import { projectDatabase } from "../../../lib/firebase"

const ProjectForm = () => {
    const [projectData, setProjectData] = useState([])

    return (
        <form>
            {console.log(projectData)}
            <TextInput labelName="name" setProjectData={setProjectData}>
                Name:
            </TextInput>

            <TextInput labelName="summary" setProjectData={setProjectData}>
                Summary:
            </TextInput>

            <TextInput labelName="description" setProjectData={setProjectData}>
                Description:
            </TextInput>
            <SubmitData />
        </form>
    )
}

export default ProjectForm
