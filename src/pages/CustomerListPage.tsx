import { Search, Filter, Download, Eye, TrendingUp, MapPin } from 'lucide-react';

export function CustomerListPage() {
  const customers = [
    {
      company: 'A그룹 인재개발원',
      segment: 'VIP',
      ltv: '₩520M',
      visits: 18,
      lastVisit: '2024.09.15',
      preferredSeason: '단풍 시즌',
      facilities: '컨벤션 + 워터파크',
      status: 'Active',
      nextContact: '2024.10.25'
    },
    {
      company: 'B전자 본부',
      segment: 'Premium',
      ltv: '₩380M',
      visits: 12,
      lastVisit: '2024.08.22',
      preferredSeason: '여름',
      facilities: '객실 + 워터파크',
      status: 'Active',
      nextContact: '2024.11.05'
    },
    {
      company: 'C대학교 경영대',
      segment: 'Regular',
      ltv: '₩220M',
      visits: 24,
      lastVisit: '2024.10.01',
      preferredSeason: '봄/가을',
      facilities: '객실 + 조식',
      status: 'Active',
      nextContact: '2024.10.28'
    },
    {
      company: 'D제약 지점장회의',
      segment: 'Premium',
      ltv: '₩185M',
      visits: 8,
      lastVisit: '2024.07.18',
      preferredSeason: '연중',
      facilities: '회의실 + 연회',
      status: 'Dormant',
      nextContact: '2024.10.20'
    },
    {
      company: 'E금융 신입교육',
      segment: 'Regular',
      ltv: '₩155M',
      visits: 15,
      lastVisit: '2024.09.05',
      preferredSeason: '여름',
      facilities: '객실 + 워터파크',
      status: 'Active',
      nextContact: '2024.11.12'
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">기업 고객 목록</h1>
        <p className="text-gray-600">고객 360° 데이터 · LTV 추적 · 세그먼트 관리</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">총 기업 고객</div>
          <div className="text-3xl mb-2">127개</div>
          <div className="text-sm text-green-600">+8개 (이번 달)</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">VIP 고객</div>
          <div className="text-3xl mb-2">23개</div>
          <div className="text-sm text-orange-600">LTV ₩10M 이상</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">평균 LTV</div>
          <div className="text-3xl mb-2">₩8.2M</div>
          <div className="text-sm text-blue-600">전년 대비 +18%</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Dormant 고객</div>
          <div className="text-3xl mb-2">12개</div>
          <div className="text-sm text-red-600">6개월 미방문</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="기업명, 담당자, 업종으로 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            세그먼트 필터
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            지역 특성
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            <Download className="w-4 h-4" />
            내보내기
          </button>
        </div>
      </div>

      {/* Customer Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm text-gray-600">기업명</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">세그먼트</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">LTV</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">방문 횟수</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">최근 방문</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">선호 시즌</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">주요 시설</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">상태</th>
              <th className="text-left px-6 py-4 text-sm text-gray-600">액션</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium">{customer.company}</div>
                  <div className="text-xs text-gray-500">다음 접촉: {customer.nextContact}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    customer.segment === 'VIP' ? 'bg-purple-100 text-purple-700' :
                    customer.segment === 'Premium' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {customer.segment}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span>{customer.ltv}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{customer.visits}회</td>
                <td className="px-6 py-4 text-gray-600">{customer.lastVisit}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    <span>{customer.preferredSeason}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{customer.facilities}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="flex items-center gap-2 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 rounded-lg">
                    <Eye className="w-4 h-4" />
                    상세보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Segment Analysis */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4">세그먼트 분포</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">VIP</span>
              <span className="text-sm">23개 (18%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '18%' }}></div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-600">Premium</span>
              <span className="text-sm">48개 (38%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '38%' }}></div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-600">Regular</span>
              <span className="text-sm">56개 (44%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '44%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4">선호 시즌 분석</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span>🍂 단풍 시즌</span>
              <span className="text-orange-600">42개 기업</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span>🌊 여름 (워터파크)</span>
              <span className="text-blue-600">38개 기업</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>🌸 봄/가을</span>
              <span className="text-green-600">28개 기업</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>❄️ 겨울</span>
              <span className="text-gray-600">19개 기업</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4">부대시설 선호도</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">워터파크</span>
              <span>78개 (61%)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">회의실/연회장</span>
              <span>65개 (51%)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">조식 뷔페</span>
              <span>102개 (80%)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">컨벤션홀</span>
              <span>32개 (25%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
