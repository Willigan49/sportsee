import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import PropTypes from "prop-types";

/**
 * display score component
 * @param {string} score
 * @param {string} label
 * @return {JSX.Element} React component
 */
export default function ScoreChart({ score, label }) {
  const text = {
    x: "39%",
    fill: "#74798C",
  };
  const data = [
    { name: "score", value: score },
    { name: "score-max", value: 1 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width="100%" height="100%">
        <text
          className="pie-title"
          x="10%"
          y="12%"
          textAnchor="start"
          dominantBaseline="middle"
          fontSize={15}
        >
          Score
        </text>
        <text className="pie-legend" x={text.x} y="65%" fill={text.fill}>
          de votre
        </text>
        <text className="pie-legend" x={text.x} y="75%" fill={text.fill}>
          objectif
        </text>
        <Pie
          startAngle={90}
          endAngle={450}
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          innerRadius={60}
          outerRadius={70}
          cornerRadius={10}
        >
          {data.map((entry, index) => {
            if (index === 1) {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill="#fbfbfb"
                  isAnimationActive={false}
                  outerRadius={180}
                  cx="50%"
                  cy="50%"
                />
              );
            }
            return <Cell key={`cell-${index}`} fill="red" />;
          })}
          <Label
            value={label}
            position="center"
            fill="black"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              fontFamily: "Roboto",
            }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

ScoreChart.proptype = {
  score: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};
