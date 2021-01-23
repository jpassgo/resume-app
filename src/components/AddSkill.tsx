import * as React from "react"

type Props = {
    saveSkill: (skill: Skill | any) => void
}

export const AddSkill: React.FC<Props> = ({ saveSkill }) => {
    const [skill, setSkill] = React.useState<Skill | {}>()

    const handleSkillData = (e: React.FormEvent<HTMLInputElement>) => {
        setSkill({
            ...skill,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewSkill = (e: React.FormEvent) => {
        e.preventDefault()
        saveSkill(skill)
    }

    return(
        <form onSubmit={addNewSkill} className="Add-article">
            <input 
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleSkillData}
            />
            <input
                type="text"
                id="description"
                placeholder="Description"
                onChange={handleSkillData}
            />
            <input
                type="text"
                id="certifications"
                placeholder="Certifications"
                onChange={handleSkillData}
            />
            <button disabled={skill === undefined ? true : false}>
                Add Skill
            </button> 
        </form>
    )
}