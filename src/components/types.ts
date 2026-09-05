export type NavItem = { id: string; label: string }
export type SkillGroup = { title: string; items: string[] }
export type ProjectItem = { name: string; summary: string }
export type ExperienceItem = { title: string; company: string; period: string; details: string | string[] }

export type Portfolio = {
  name: string
  role: string
  focus: string
  interests: string[]
  qualification: string
  status: string
  skills: SkillGroup[]
  projects: ProjectItem[]
  experience: ExperienceItem[]
}
