import {
  BankingFinanceIcon,
  ConsumerElectronicsIcon,
  HealthCareIcon,
  LogisticsIcon,
  ManufacturingIcon,
  RetailEcommerceIcon,
  StartupIcon,
  TechnologyIcon,
} from "@/assets"
import { IndustriesType } from "../types"

export const industriesData: IndustriesType[] = [
  {
    id: 1,
    image: BankingFinanceIcon,
    title: "Banking & Finance",
    urlPath: "fintech-software-development/",
  },
  {
    id: 2,
    image: ManufacturingIcon,
    title: "Manufacturing",
    urlPath: "manufacturing-software-development/",
  },
  {
    id: 3,
    image: RetailEcommerceIcon,
    title: "Retail & E-commerce",
    urlPath: "retail-software-development/",
  },
  {
    id: 4,
    image: LogisticsIcon,
    title: "Logistics",
    urlPath: "logistics-software-development/",
  },
  {
    id: 5,
    image: HealthCareIcon,
    title: "Healthcare",
    urlPath: "/healthcare-software-development/",
  },
  {
    id: 6,
    image: TechnologyIcon,
    title: "Technology",
    urlPath: "saas-development-company/",
  },
  {
    id: 7,
    image: ConsumerElectronicsIcon,
    title: "Consumer Electronics",
    urlPath: "consumer-electronics-software-development/",
  },
  {
    id: 8,
    image: StartupIcon,
    title: "Startups",
    urlPath: "startup-product-development/",
  },
]
