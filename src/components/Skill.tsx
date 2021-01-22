import React, { Dispatch } from "react"
import { useDispatch } from "react-redux"


type Props = {
    skill: Skill
    removeSkill: (skill: Skill) => void
}

export const Skill: React.FC<Props> = ({skill, removeSkill }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteSkill = React.useCallback(
        (skill: Skill) => dispatch(removeSkill(skill)),
        [dispatch, removeSkill]
    )

    return(
        <div className="Skill">
            <div>
                <h1>{skill.title}</h1>
                <p>{skill.description}</p>
                <p>{skill.certifications}</p>
            </div>
        </div>
    )
}