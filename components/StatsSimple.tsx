import React from "react";

// Custom components
import StatSimple from "./StatSimple";

// Custom types
import type { Statistic } from "../modules/Stats";

// Custom modules
import { classNames } from "../modules/Utils";

interface IAppProps {
  statistics: Statistic[];
}

const StatsSimple: React.FunctionComponent<IAppProps> = ({ statistics }) => {
  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {statistics.map((stat) => (
            <StatSimple statistic={stat}/>
          ))}
        </dl>
      </div>
    </>
  );
};

export default StatsSimple;
