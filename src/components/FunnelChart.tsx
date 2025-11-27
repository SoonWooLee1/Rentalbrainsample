export function FunnelChart() {
  const stages = [
    { name: 'STEP1: 문의', count: 156, percentage: 100, color: 'bg-orange-500' },
    { name: 'STEP2: 상담', count: 98, percentage: 63, color: 'bg-orange-400' },
    { name: 'STEP3: 제안', count: 52, percentage: 33, color: 'bg-orange-300' },
    { name: 'STEP4: 계약', count: 28, percentage: 18, color: 'bg-orange-200' },
  ];

  return (
    <div className="space-y-4">
      {stages.map((stage, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">{stage.name}</span>
            <span className="text-gray-600">{stage.count}건 ({stage.percentage}%)</span>
          </div>
          <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className={`h-full ${stage.color} flex items-center justify-center text-white transition-all`}
              style={{ width: `${stage.percentage}%` }}
            >
              <span className="text-sm">{stage.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
        <div className="text-sm text-gray-700 mb-2">전환율 분석</div>
        <div className="text-xs text-gray-600">
          • 문의 → 계약: <span className="text-orange-600">18%</span><br />
          • 상담 → 제안: <span className="text-orange-600">53%</span><br />
          • 제안 → 계약: <span className="text-orange-600">54%</span>
        </div>
      </div>
    </div>
  );
}
