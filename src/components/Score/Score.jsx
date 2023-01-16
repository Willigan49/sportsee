import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";

export default function Score({ score, label }) {
  const data = [
    { name: "score", value: score },
    { name: "score-max", value: 1 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
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
              return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
            }
            return <Cell key={`cell-${index}`} fill="red" />;
          })}
          <Label
            value={label}
            position="center"
            fill="black"
            style={{
              fontSize: "26px",
              fontWeight: "700",
              fontFamily: "Roboto",
            }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
