import {
  DedicatedTeamIcon,
  ProjectModelIcon,
  TeamExtensionIcon,
} from "@/assets"

type Props = {
  id: number
  image: string
  title: string
  description: string
}[]

export const engagementModelData: Props = [
  {
    id: 1,
    image: DedicatedTeamIcon,
    title: "Dedicated Development Team",
    description:
      "Our developers leverage cutting-edge cognitive technologies to deliver high-quality services and tailored solutions to our clients.",
  },
  {
    id: 2,
    image: TeamExtensionIcon,
    title: "Team Extension",
    description:
      "Our team extension model is designed to assist clients seeking to expand their teams with the precise expertise needed for their projects.",
  },
  {
    id: 1,
    image: ProjectModelIcon,
    title: "Project-based Model",
    description:
      "Our project-oriented approach, supported by our team of software development specialists, is dedicated to fostering client collaboration and achieving specific project objectives.",
  },
]
