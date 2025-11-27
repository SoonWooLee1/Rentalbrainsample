import { TrendingUp, TrendingDown, AlertTriangle, Award, DollarSign } from 'lucide-react';

export function ProfitabilityPage() {
  const topAssets = [
    { rank: 1, name: '복합기 (삼성 SL-K4300)', revenue: 2400000, repairs: 120000, profit: 2280000, roi: 285, rentalCount: 28 },
    { rank: 2, name: '공기청정기 (다이슨)', revenue: 1800000, repairs: 180000, profit: 1620000, roi: 220, rentalCount: 24 },
    { rank: 3, name: '사무용 의자 (시디즈 T50)', revenue: 1600000, repairs: 80000, profit: 1520000, roi: 195, rentalCount: 32 },
    { rank: 4, name: '회의실 프로젝터 (엡손)', revenue: 1400000, repairs: 150000, profit: 1250000, roi: 178, rentalCount: 18 },
    { rank: 5, name: '정수기 (코웨이)', revenue: 1200000, repairs: 220000, profit: 980000, roi: 156, rentalCount: 22 },
  ];

  const worstAssets = [
    { rank: 1, name: '커피머신 (구형 모델)', revenue: 480000, repairs: 720000, profit: -240000, roi: -35, issue: '수리비 과다', action: '매각 권장' },
    { rank: 2, name: '공유기 (넷기어)', revenue: 320000, repairs: 500000, profit: -180000, roi: -28, issue: '고장 빈도 높음', action: '매각 권장' },
    { rank: 3, name: '청소기 (삼성 POWERbot)', revenue: 780000, repairs: 900000, profit: -120000, roi: -15, issue: '부품 단종', action: '사용 중단' },
  ];

  const formatCurrency = (amount: number) => {
    return `₩${(amount / 1000).toFixed(1)}K`;
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">수익성 분석</h1>
        <p className="text-gray-600">자산별 매출, 수리비, 순이익 분석 및 ROI 계산</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">총 매출</span>
          </div>
          <div className="text-3xl mb-2">8,240만원</div>
          <div className="text-sm text-green-600">+18% vs 지난달</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">총 비용</span>
          </div>
          <div className="text-3xl mb-2">820만원</div>
          <div className="text-sm text-red-600">매출 대비 10%</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">순이익</span>
          </div>
          <div className="text-3xl mb-2">7,420만원</div>
          <div className="text-sm text-blue-600">평균 ROI 185%</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">손실 자산</span>
          </div>
          <div className="text-3xl mb-2">3개</div>
          <div className="text-sm text-orange-600">즉시 조치 필요</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-yellow-500" />
            <h2 className="text-xl">수익성 높은 자산 Top 5</h2>
          </div>

          <div className="space-y-4">
            {topAssets.map((asset) => (
              <div key={asset.rank} className="border border-gray-200 rounded-lg p-4 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                      {asset.rank}
                    </div>
                    <div>
                      <div className="font-medium mb-1">{asset.name}</div>
                      <div className="text-xs text-gray-600">대여 횟수: {asset.rentalCount}회</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-green-600 font-bold mb-1">
                      {formatCurrency(asset.profit)}
                    </div>
                    <div className="text-xs text-green-700">ROI {asset.roi}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-green-200">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">총 매출</div>
                    <div className="text-sm font-medium">{formatCurrency(asset.revenue)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">수리비</div>
                    <div className="text-sm text-red-600">{formatCurrency(asset.repairs)}</div>
                  </div>
                </div>

                {/* Profit Bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>수익률</span>
                    <span>{((asset.profit / asset.revenue) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500"
                      style={{ width: `${(asset.profit / asset.revenue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-sm text-blue-800">
              💡 <strong>인사이트:</strong> 복합기와 사무용 의자의 수익성이 높습니다. 유사 제품 추가 구매를 검토하세요.
            </div>
          </div>
        </div>

        {/* Worst Performers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h2 className="text-xl">손실 발생 자산 (매각 권장)</h2>
          </div>

          <div className="space-y-4">
            {worstAssets.map((asset) => (
              <div key={asset.rank} className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-medium mb-1">{asset.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
                        {asset.issue}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-red-600 font-bold mb-1">
                      {formatCurrency(asset.profit)}
                    </div>
                    <div className="text-xs text-red-700">ROI {asset.roi}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-red-200">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">총 매출</div>
                    <div className="text-sm">{formatCurrency(asset.revenue)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">수리비</div>
                    <div className="text-sm text-red-600 font-bold">{formatCurrency(asset.repairs)}</div>
                  </div>
                </div>

                {/* Loss Indicator */}
                <div className="mt-3 pt-3 border-t border-red-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      <strong>권장 조치:</strong> {asset.action}
                    </div>
                    <button className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                      매각 처리
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="text-sm text-orange-800">
                ⚠️ <strong>경고:</strong> 수리비가 매출을 초과하는 자산이 3개 발견되었습니다.
              </div>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="text-sm text-purple-800">
                🎯 <strong>추천 액션:</strong> 손실 자산을 매각하고, 수익성 높은 카테고리(복합기, 사무가구)에 재투자하세요.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          AI 기반 수익성 인사이트
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm mb-1">최적 구매 추천</div>
            <div className="text-xs text-gray-600">복합기 3대 추가 구매 시 월 순이익 +68만원 예상</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-2xl mb-2">💰</div>
            <div className="text-sm mb-1">비용 절감 기회</div>
            <div className="text-xs text-gray-600">정기 점검 주기 조정으로 수리비 15% 절감 가능</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm mb-1">포트폴리오 최적화</div>
            <div className="text-xs text-gray-600">사무가구 비중을 20% → 30%로 늘리면 ROI +12%p</div>
          </div>
        </div>
      </div>
    </>
  );
}