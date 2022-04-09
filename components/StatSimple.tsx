import React from "react";

// Custom types
import type { Statistic } from "../modules/Stats";
import { getStatisticColor } from "../modules/Stats";

// Custom modules
import { classNames } from "../modules/Utils";

interface IStatSimpleProps {
  statistic: Statistic;
}

const StatSimple: React.FunctionComponent<IStatSimpleProps> = (props) => {
  return (
    <>
      <div key={props.statistic.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 border-2 border-transparent hover:border-gray-300">
        <dt className="text-sm font-medium text-gray-500 truncate">{props.statistic.name}</dt>
        <dd className={classNames(getStatisticColor(props.statistic.percentageImpact), 'mt-1 text-3xl font-semibold ')}>{props.statistic.stat}</dd>
      </div>
    </>
  );
};

export default StatSimple;
