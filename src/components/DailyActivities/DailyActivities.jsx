import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function DailyActivities({ activities }) {
  const data = activities.map((activity, index) => {
    return {
      name: (index += 1).toString(),
      kg: activity.kilogram,
      kCal: activity.calories,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barSize={7}
        barGap={8}
        barCategoryGap={54}
        margin={{
          top: 30,
          right: 0,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <XAxis dataKey="name" tickLine={false} tickMargin={10} />
        <YAxis dataKey="kCal" yAxisId="kCal" hide={true} />
        <YAxis
          yAxisId="kg"
          dataKey="kg"
          orientation="right"
          domain={["dataMin - 3", "dataMax + 2"]}
          tickLine={false}
          axisLine={false}
          tickMargin={20}
          tickCount={3}
        />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={7}
          height={80}
        />
        <Bar
          yAxisId="kg"
          dataKey="kg"
          name="Poids (kg)"
          fill="#282D30"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          yAxisId="kCal"
          dataKey="kCal"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[4, 4, 0, 0]}
        />
        <text x="5%" y="13%" textAnchor="start" dominantBaseline="middle">
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
}
