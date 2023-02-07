import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
  Rectangle,
} from "recharts";

export default function AverageChart({ averages }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-session">
          <p className="tooltip-text">{payload[0].value} min</p>
        </div>
      );
    }
  };

  const CustomCursor = ({ points }) => {
    return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1000} height={300} />;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={averages}
        style={{ backgroundColor: "#B10000", borderRadius: 5 }}
      >
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#ffffff"
          strokeWidth={3}
          dot={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide={true} />
        <XAxis
          dataKey="day"
          tick={{ fill: "#ffffff" }}
          tickLine={false}
          axisLine={false}
        />
        <text
          x="5%"
          y="13%"
          textAnchor="start"
          dominantBaseline="middle"
          style={{ opacity: 0.5, fill: "#ffffff" }}
        >
          Durée moyenne des sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

//texte trop gros
//revoir les couleurs
// reduire les echelles
