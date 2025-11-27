import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { company: 'A그룹 인재개발원', revenue: 180 },
  { company: 'B전자 본부', revenue: 142 },
  { company: 'C대학교', revenue: 98 },
  { company: 'D제약 지점장회의', revenue: 76 },
  { company: 'E금융 신입교육', revenue: 65 },
];

export function SalesBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis type="number" tick={{ fontSize: 12 }} />
        <YAxis dataKey="company" type="category" width={120} tick={{ fontSize: 12 }} />
        <Tooltip
          formatter={(value) => `₩${value}M`}
          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
        />
        <Bar dataKey="revenue" fill="#FF7A00" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
