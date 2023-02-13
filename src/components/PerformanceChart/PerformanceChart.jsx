import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarGrid,
} from "recharts";

export default function PerformanceChart({ performances }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={performances}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        margin={{ left: 40, right: 40 }}
        style={{ backgroundColor: "#282D30", borderRadius: 5 }}
      >
        <PolarAngleAxis
          dataKey="performance"
          tick={{ fill: "#FFFFFF", fontSize: 10 }}
          dy={5}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.9}
        />
        <PolarGrid radialLines={false} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
