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
      <RadarChart data={performances} cx="50%" cy="50%" outerRadius="80%">
        <PolarAngleAxis dataKey="performance" />
        <Radar
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <PolarGrid />
      </RadarChart>
    </ResponsiveContainer>
  );
}

//background noir
//pas de lignes convergentes
//couleur du graphique rouge
//integralité des mots
