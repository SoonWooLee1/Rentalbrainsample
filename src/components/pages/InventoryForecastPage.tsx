import { Package, TrendingUp, AlertTriangle, Calendar } from 'lucide-react';

export function InventoryForecastPage() {
  const inventory = [
    { category: '복합기', current: 45, available: 12, rented: 33, forecast: 'shortage', needed: 8, seasonalDemand: 'high', utilizationRate: 73 },
    { category: '공기청정기', current: 38, available: 15, rented: 23, forecast: 'optimal', needed: 0, seasonalDemand: 'medium', utilizationRate: 61 },
    { category: '회의실 프로젝터', current: 28, available: 8, rented: 20, forecast: 'shortage', needed: 5, seasonalDemand: 'high', utilizationRate: 71 },
    { category: '정수기', current: 22, available: 6, rented: 16, forecast: 'optimal', needed: 0, seasonalDemand: 'medium', utilizationRate: 73 },
    { category: '사무용 의자', current: 52, available: 14, rented: 38, forecast: 'optimal', needed: 0, seasonalDemand: 'medium', utilizationRate: 73 },
    { category: '파쇄기', current: 32, available: 18, rented: 14, forecast: 'oversupply', needed: -5, seasonalDemand: 'low', utilizationRate: 44 },
  ];

  const getForecastBadge = (forecast: string) => {
    const badges = {
      shortage: { label: '재고 부족', color: 'bg-red-100 text-red-700' },
      optimal: { label: '적정', color: 'bg-green-100 text-green-700' },
      oversupply: { label: '과잉', color: 'bg-orange-100 text-orange-700' },
      seasonal: { label: '시즌 대비 필요', color: 'bg-blue-100 text-blue-700' },
    };
    return badges[forecast as keyof typeof badges];
  };

  const getDemandBadge = (demand: string) => {
    const badges = {
      high: { label: '높음', color: 'text-red-600' },
      medium: { label: '보통', color: 'text-blue-600' },
      low: { label: '낮음', color: 'text-gray-600' },
    };
    return badges[demand as keyof typeof badges];
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">재고 예보</h1>
            <p className="text-gray-600">AI 기반 수요 예측 · 재고 상태 관리</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">총 보유 자산</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">528개</div>
          <div className="text-xs text-blue-700">15개 카테고리</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">평균 가동률</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">66%</div>
          <div className="text-xs text-green-700">목표 70% 근접</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">재고 부족</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">2종</div>
          <div className="text-xs text-red-700">추가 확보 검토 필요</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">시즌 대비 필요</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">13개</div>
          <div className="text-xs text-purple-700">향후 3개월 예측</div>
        </div>
      </div>

      {/* Inventory Status */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Package className="w-5 h-5 text-orange-500" />
            카테고리별 재고 현황
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">카테고리</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">총 보유</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">렌탈 중</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">대여 가능</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">가동률</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">시즌 수요</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">예보</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">필요 수량</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventory.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm">{item.current}개</td>
                  <td className="px-6 py-4 text-center text-sm">
                    <div className="text-blue-600 font-medium">{item.rented}개</div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    <div className="text-green-600">{item.available}개</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium">{item.utilizationRate}%</div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                      <div 
                        className="h-full bg-blue-500"
                        style={{ width: `${item.utilizationRate}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-sm font-medium ${getDemandBadge(item.seasonalDemand).color}`}>
                      {getDemandBadge(item.seasonalDemand).label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs ${getForecastBadge(item.forecast).color}`}>
                      {getForecastBadge(item.forecast).label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className={`text-sm font-medium ${
                      item.needed > 0 ? 'text-red-600' :
                      item.needed < 0 ? 'text-orange-600' :
                      'text-green-600'
                    }`}>
                      {item.needed > 0 ? `+${item.needed}개` : 
                       item.needed < 0 ? `${item.needed}개` : 
                       '적정'}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alert Box */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-300 p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-red-100 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 flex items-center gap-2">
              재고 부족 경고
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">2건</span>
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              다음 카테고리의 재고가 부족합니다. 추가 확보를 검토하세요.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <div className="text-sm font-medium mb-2">복합기</div>
                <div className="text-xs text-gray-600 mb-2">
                  현재: 45대 | 렌탈 중: 33대 | 가동률: 73%
                </div>
                <div className="text-xs text-red-600">
                  ⚠️ 8대 추가 필요 (대기 고객 5명)
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-red-200">
                <div className="text-sm font-medium mb-2">회의실 프로젝터</div>
                <div className="text-xs text-gray-600 mb-2">
                  현재: 28대 | 렌탈 중: 20대 | 가동률: 71%
                </div>
                <div className="text-xs text-red-600">
                  ⚠️ 5대 추가 필요 (주말 예약 증가)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
