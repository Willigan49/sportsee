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
import PropTypes from "prop-types";

/**
 * Display a barchart with activities data
 * @param {array} activities
 * @returns {JSX.Element} DailyActivities component
 */
export default function DailyActivitiesChart({ activities }) {
  const data = activities.map((activity, index) => {
    return {
      name: (index += 1).toString(),
      kg: activity.kilogram,
      kCal: activity.calories,
    };
  });

  /**
   *
   * @param {boolean} active
   * @param {array} payload
   * @returns an active tooltip
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-activity">
          <p>{payload[0].value} kg</p>
          <p>{payload[1].value} kcal</p>
        </div>
      );
    }
  };

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
        <XAxis dataKey="name" tickLine={false} tickMargin={10} fontSize={12} />
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
          fontSize={12}
          color="#9B9EAC"
        />
        <Tooltip content={<CustomTooltip />} />
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
        <text
          x="5%"
          y="13%"
          textAnchor="start"
          dominantBaseline="middle"
          fontSize={15}
        >
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
}

DailyActivitiesChart.propTypes = {
  activities: PropTypes.array.isRequired,
};
