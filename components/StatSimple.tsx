import React from "react";

// Custom types
import type { Impact, Statistic } from "../modules/Stats";

// Custom modules
import { classNames } from "../modules/Utils";

interface IStatSimpleProps {
  statistic: Statistic;
}

function getStatisticColor(impact: Impact) : string {
  switch (impact) {
    case "GOOD":
      return "text-green-600";
    case "BAD":
      return "text-red-600";
    case "NEUTRAL":
      return "text-gray-900";
    default:
      throw new Error(`${impact} is not a valid Statistic impact.`);
  }
}

const StatSimple: React.FunctionComponent<IStatSimpleProps> = ({ statistic }) => {
  let ddClassNameAttribute = classNames(getStatisticColor(statistic.percentageImpact), 'mt-1 text-3xl font-semibold ');

  return (
    <>
      <div key={statistic.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 border-2 border-transparent hover:border-gray-300">
        <dt className="text-sm font-medium text-gray-500 truncate">{statistic.name}</dt>
        <dd className={ddClassNameAttribute}>{statistic.stat}</dd>
      </div>
    </>
  );
};

export default StatSimple;
