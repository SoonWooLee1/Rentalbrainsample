import { Package, Search, Filter, Plus, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';

export function AssetsPage() {
  const assets = [
    { id: 'A-001', name: '복합기 (삼성 SL-K4300)', category: '사무기기', status: 'rented', condition: 'S', revenue: '240만원', repairs: '12만원', profit: '228만원', utilization: 92 },
    { id: 'A-002', name: '공기청정기 (다이슨)', category: '사무환경', status: 'available', condition: 'A', revenue: '180만원', repairs: '18만원', profit: '162만원', utilization: 88 },
    { id: 'A-003', name: '사무용 의자 (시디즈 T50)', category: '사무가구', status: 'rented', condition: 'S', revenue: '160만원', repairs: '8만원', profit: '152만원', utilization: 85 },
    { id: 'A-004', name: '회의실 프로젝터 (엡손)', category: '사무기기', status: 'rented', condition: 'A', revenue: '140만원', repairs: '15만원', profit: '125만원', utilization: 82 },
    { id: 'A-005', name: '정수기 (코웨이)', category: '사무환경', status: 'maintenance', condition: 'B', revenue: '120만원', repairs: '22만원', profit: '98만원', utilization: 78 },
    { id: 'A-006', name: '스탠딩 데스크', category: '사무가구', status: 'available', condition: 'S', revenue: '110만원', repairs: '5만원', profit: '105만원', utilization: 75 },
    { id: 'A-007', name: '모니터 (삼성 27인치)', category: '사무기기', status: 'rented', condition: 'A', revenue: '90만원', repairs: '6만원', profit: '84만원', utilization: 72 },
    { id: 'A-008', name: '파쇄기 (펠로우즈)', category: '사무기기', status: 'available', condition: 'A', revenue: '80만원', repairs: '9만원', profit: '71만원', utilization: 68 },
    { id: 'A-009', name: '회의실 테이블', category: '사무가구', status: 'rented', condition: 'S', revenue: '75만원', repairs: '4만원', profit: '71만원', utilization: 65 },
    { id: 'A-010', name: '사무용 노트북 (LG)', category: '사무기기', status: 'rented', condition: 'A', revenue: '68만원', repairs: '10만원', profit: '58만원', utilization: 62 },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      rented: { label: '렌탈 중', color: 'bg-blue-100 text-blue-700' },
      available: { label: '대여 가능', color: 'bg-green-100 text-green-700' },
      maintenance: { label: '수리 중', color: 'bg-orange-100 text-orange-700' },
      quarantine: { label: '격리됨', color: 'bg-red-100 text-red-700' },
    };
    const badge = badges[status as keyof typeof badges];
    return <span className={`px-3 py-1 rounded-full text-xs ${badge.color}`}>{badge.label}</span>;
  };

  const getConditionBadge = (condition: string) => {
    const colors = {
      S: 'text-green-600',
      A: 'text-blue-600',
      B: 'text-orange-600',
      C: 'text-red-600',
    };
    return <span className={`font-semibold ${colors[condition as keyof typeof colors]}`}>{condition}등급</span>;
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">렌탈 자산 목록</h1>
            <p className="text-gray-600">전체 자산 현황 및 수익성 관리</p>
          </div>

          <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
            <Plus className="w-4 h-4" />
            신규 자산 등록
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="자산 ID, 이름, 카테고리로 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>렌탈 중</option>
            <option>대여 가능</option>
            <option>수리 중</option>
            <option>격리됨</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 카테고리</option>
            <option>전자기기</option>
            <option>가전제품</option>
            <option>레저용품</option>
            <option>이동수단</option>
          </select>

          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">총 자산</span>
          </div>
          <div className="text-3xl text-blue-900">528개</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">대여 가능</span>
          </div>
          <div className="text-3xl text-green-900">158개</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">수리/점검</span>
          </div>
          <div className="text-3xl text-orange-900">28개</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">격리됨</span>
          </div>
          <div className="text-3xl text-red-900">3개</div>
        </div>
      </div>

      {/* Assets Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">자산 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">자산명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">카테고리</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">컨디션</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">총 매출</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">수리비</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">순이익</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">가동률</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm">{asset.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">{asset.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{asset.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(asset.status)}
                  </td>
                  <td className="px-6 py-4">
                    {getConditionBadge(asset.condition)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm">{asset.revenue}</td>
                  <td className="px-6 py-4 text-right text-sm text-red-600">{asset.repairs}</td>
                  <td className="px-6 py-4 text-right">
                    <div className={`text-sm flex items-center justify-end gap-1 ${
                      asset.profit.includes('-') ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {asset.profit.includes('-') ? (
                        <TrendingDown className="w-4 h-4" />
                      ) : (
                        <TrendingUp className="w-4 h-4" />
                      )}
                      {asset.profit}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            asset.utilization >= 80 ? 'bg-green-500' :
                            asset.utilization >= 60 ? 'bg-blue-500' :
                            asset.utilization >= 40 ? 'bg-orange-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${asset.utilization}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{asset.utilization}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-sm text-orange-600 hover:text-orange-700">
                      상세보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}