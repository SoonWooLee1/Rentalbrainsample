import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtext: string;
  trend?: 'up' | 'down';
}

export function KPICard({ icon, title, value, subtext, trend }: KPICardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500">
          {icon}
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      <div className="text-3xl mb-2">{value}</div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
        {trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
        <span>{subtext}</span>
      </div>
    </div>
  );
}
