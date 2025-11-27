import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: '5월', room: 68, waterpark: 72, breakfast: 65 },
  { month: '6월', room: 75, waterpark: 80, breakfast: 70 },
  { month: '7월', room: 88, waterpark: 92, breakfast: 85 },
  { month: '8월', room: 85, waterpark: 88, breakfast: 80 },
  { month: '9월', room: 78, waterpark: 82, breakfast: 75 },
  { month: '10월', room: 82, waterpark: 85, breakfast: 78 },
];

export function TrendLineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip
          formatter={(value) => `${value}%`}
          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
        />
        <Legend
          wrapperStyle={{ fontSize: '12px' }}
          iconType="line"
        />
        <Line
          type="monotone"
          dataKey="room"
          stroke="#FF7A00"
          strokeWidth={2}
          name="객실 점유율(%)"
          dot={{ fill: '#FF7A00' }}
        />
        <Line
          type="monotone"
          dataKey="waterpark"
          stroke="#3B82F6"
          strokeWidth={2}
          name="워터파크 입장률(%)"
          dot={{ fill: '#3B82F6' }}
        />
        <Line
          type="monotone"
          dataKey="breakfast"
          stroke="#10B981"
          strokeWidth={2}
          name="조식 좌석 점유율(%)"
          dot={{ fill: '#10B981' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
