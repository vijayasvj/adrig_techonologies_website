import React from "react"
import { homePageInsightsData } from "@/lib/eng/homePageInsightsData"
import InsightCard from "../InsightCard"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const InsightsComponent = () => {
  return (
    <section className="w-2/3 flex flex-col items-center space-y-10">
      <span className="text-3xl font-serif font-bold">Insights</span>
      <div className="w-full grid grid-cols-3 gap-6">
        {homePageInsightsData.map((insight) => (
          <InsightCard item={insight} key={insight.id} />
        ))}
      </div>
      <RightArrowTransitionButton buttonText="Show all insights" />
    </section>
  )
}

export default InsightsComponent
