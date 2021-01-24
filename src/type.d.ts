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

interface ContactInfo {
    email: string,
    phoneNumber: string,
    linkedIn: string
}

type ContactInfoState = {
    contactInfo: ContactInfo
}

type ContactInfoAction = {
    type: string,
    contactInfo: ContactInfo
}

type DispatchType = (args: ContactInfoAction) => ContactInfoAction