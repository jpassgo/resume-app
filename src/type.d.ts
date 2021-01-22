interface Skill {
    id: number,
    title: string,
    description: string,
    certifications: string
}

type SkillState = {
    skills: Skill[]
}

type SkillAction = {
    type: string,
    skill: Skill
}

type DispatchType = (args: SkillAction) => SkillAction