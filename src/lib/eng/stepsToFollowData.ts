import {
  ConsultancyIcon,
  ContactUsIcon,
  CostEstimateIcon,
  ProjectKickOffIcon,
} from "@/assets"
import { StepsToFollowType } from "../types"

export const stepsToFollowData: StepsToFollowType[] = [
  {
    id: 1,
    image: ContactUsIcon,
    title: "Contact Us",
    description:
      "Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.",
  },
  {
    id: 2,
    image: ConsultancyIcon,
    title: "Get a Consultation",
    description:
      "Get on a call with our team to know the feasibility of your project idea.",
  },
  {
    id: 3,
    image: CostEstimateIcon,
    title: "Get a Cost Estimate",
    description:
      "Based on the project requirements, we share a project proposal with budget and timeline estimates.",
  },
  {
    id: 4,
    image: ProjectKickOffIcon,
    title: "Project Kickoff",
    description:
      "Once the project is signed, we bring together a team from a range of disciplines to kick start your project.",
  },
]
