import * as actionTypes from "./actionTypes"

const initialState: SkillState = {
    skills: [
        {
            id: 1, 
            title: "Java",
            description: "Java is a programming language that I have experience with.",
            certifications: "N/A"
        },
        {
            id: 2, 
            title: "Python",
            description: "Python is a programming language that I have less experience with than Java.",
            certifications: "N/A"
        },
    ],
}

const reducer = (
    state: SkillState = initialState,
    action: SkillAction
): SkillState => {
    switch(action.type) {
        case actionTypes.ADD_SKILL:
            const newSkill: Skill = {
                id: Math.random(),
                title: "Java",
                description: "Java is a programming language that I have experience with.",
                certifications: "N/A"
            }

            return {
                ...state,
                skills: state.skills.concat(newSkill)
            }
        case actionTypes.REMOVE_SKILL:
            const updatedSkills: Skill[] = state.skills.filter(
                skill => skill.id !== action.skill.id
            )
            return {
                ...state,
                skills: updatedSkills,
            }
    }
    return state
}

export default reducer