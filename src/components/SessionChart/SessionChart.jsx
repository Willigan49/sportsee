import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";

export default function SessionChart({ averages }) {
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
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={points[1].x}
        width={1000}
        height={300}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={averages}
        style={{ backgroundColor: "#FF0000", borderRadius: 5 }}
      >
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={3}
          dot={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide={true} />
        <XAxis
          dataKey="dayLetter"
          tick={{ fill: "#ffffff" }}
          tickLine={false}
          axisLine={false}
          fontSize={12}
          padding={{ left: 5, right: 5 }}
        />
        <text
          x="5%"
          y="10%"
          textAnchor="start"
          dominantBaseline="middle"
          style={{ opacity: 0.5, fill: "#ffffff", fontSize: 12 }}
        >
          Durée moyenne des sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

SessionChart.proptype = {
  averages: PropTypes.array.isRequired,
};
