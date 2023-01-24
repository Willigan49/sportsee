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
  console.log(activities);

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
          top: 100,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          dataKey="kg"
          orientation="right"
          domain={["dataMin - 3", "dataMax + 2"]}
          tickLine={false}
          axisLine={false}
          tickCount={3}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="kg" name="Poids (kg)" fill="#282D30" radius={[2, 2, 0, 0]} />
        <Bar dataKey="kCal" name="Calories brûlées (kCal)" fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  );
}
