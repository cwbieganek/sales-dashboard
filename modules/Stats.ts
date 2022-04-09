export type Impact = "GOOD" | "BAD" | "NEUTRAL";

export interface Statistic {
  name: string;
  stat: string | number;
  percentageChange?: number;
  percentageImpact: Impact;
};

export function getStatisticColor(impact: Impact) : string {
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