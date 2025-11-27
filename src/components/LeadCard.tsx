import { Flame, ThermometerSun } from 'lucide-react';

interface LeadCardProps {
  company: string;
  status: 'Hot' | 'Warm';
  date: string;
  revenue: string;
}

export function LeadCard({ company, status, date, revenue }: LeadCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="mb-2">{company}</div>
          <div className="flex items-center gap-2">
            {status === 'Hot' ? (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                <Flame className="w-3 h-3" />
                Hot / 제안서 발송
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                <ThermometerSun className="w-3 h-3" />
                Warm / 일정조율중
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">예상 행사일</span>
        <span>{date}</span>
      </div>
      <div className="flex items-center justify-between text-sm mt-2">
        <span className="text-gray-600">예상 매출</span>
        <span className="text-orange-600">{revenue}</span>
      </div>
    </div>
  );
}
