import { Users, Search, Filter, Plus, TrendingUp, AlertTriangle, Award, Building2, User } from 'lucide-react';

export function CustomersPage() {
  const customers = [
    { id: 'C-001', name: '테크솔루션 주식회사', type: 'B2B', segment: 'VIP', totalSpent: '2,480만원', contracts: 48, status: 'active', lastRental: '2024-11-20', risk: 'low' },
    { id: 'C-002', name: '스타트업 A', type: 'B2B', segment: '대량 도입형', totalSpent: '1,820만원', contracts: 38, status: 'active', lastRental: '2024-11-22', risk: 'low' },
    { id: 'C-003', name: '로펌 김앤장', type: 'B2B', segment: '이탈 위험', totalSpent: '680만원', contracts: 12, status: 'inactive', lastRental: '2024-08-15', risk: 'high' },
    { id: 'C-004', name: '디자인 에이전시 B', type: 'B2B', segment: '블랙리스트', totalSpent: '120만원', contracts: 4, status: 'blocked', lastRental: '2024-10-01', risk: 'critical' },
    { id: 'C-005', name: '카페 비즈니스', type: 'B2B', segment: '스타트업/소호형', totalSpent: '820만원', contracts: 22, status: 'active', lastRental: '2024-11-18', risk: 'low' },
    { id: 'C-006', name: '건축사무소 다담', type: 'B2B', segment: '예비 VIP', totalSpent: '1,280만원', contracts: 28, status: 'active', lastRental: '2024-11-21', risk: 'low' },
    { id: 'C-007', name: '회계법인 한울', type: 'B2B', segment: '관심사 집중형', totalSpent: '920만원', contracts: 18, status: 'active', lastRental: '2024-11-10', risk: 'medium' },
    { id: 'C-008', name: '행사 기획사 B', type: 'B2B', segment: '프로젝트성 단기', totalSpent: '1,560만원', contracts: 32, status: 'active', lastRental: '2024-11-19', risk: 'low' },
  ];

  const getTypeBadge = (type: string) => {
    const badges = {
      'B2C': { label: 'B2C', color: 'bg-blue-100 text-blue-700', icon: <User className="w-3 h-3" /> },
      'B2B': { label: 'B2B', color: 'bg-purple-100 text-purple-700', icon: <Building2 className="w-3 h-3" /> },
    };
    const badge = badges[type as keyof typeof badges];
    return (
      <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${badge.color}`}>
        {badge.icon}
        {badge.label}
      </span>
    );
  };

  const getSegmentBadge = (segment: string) => {
    const colors: { [key: string]: string } = {
      'VIP': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      '예비 VIP': 'bg-green-100 text-green-700 border-green-300',
      '이탈 위험': 'bg-orange-100 text-orange-700 border-orange-300',
      '블랙리스트': 'bg-red-100 text-red-700 border-red-300',
      '대량 도입형': 'bg-indigo-100 text-indigo-700 border-indigo-300',
      '스타트업/소호형': 'bg-cyan-100 text-cyan-700 border-cyan-300',
      '프로젝트성 단기': 'bg-pink-100 text-pink-700 border-pink-300',
      '관심사 집중형': 'bg-teal-100 text-teal-700 border-teal-300',
    };
    return <span className={`px-2 py-1 rounded text-xs border ${colors[segment] || 'bg-gray-100 text-gray-700 border-gray-300'}`}>{segment}</span>;
  };

  const getRiskIndicator = (risk: string) => {
    const indicators = {
      'low': { color: 'bg-green-500', label: '안정' },
      'medium': { color: 'bg-yellow-500', label: '주의' },
      'high': { color: 'bg-orange-500', label: '위험' },
      'critical': { color: 'bg-red-500', label: '차단' },
    };
    const indicator = indicators[risk as keyof typeof indicators];
    return (
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${indicator.color}`}></div>
        <span className="text-xs text-gray-600">{indicator.label}</span>
      </div>
    );
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      'active': { label: '활성', color: 'text-green-600' },
      'inactive': { label: '비활성', color: 'text-gray-600' },
      'blocked': { label: '차단됨', color: 'text-red-600' },
    };
    const badge = badges[status as keyof typeof badges];
    return <span className={`text-sm ${badge.color}`}>{badge.label}</span>;
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">고객 목록</h1>
            <p className="text-gray-600">B2B 기업 고객 관리 · 세그먼트별 분류</p>
          </div>

          <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
            <Plus className="w-4 h-4" />
            신규 고객 등록
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
              placeholder="고객명, ID, 연락처로 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 유형</option>
            <option>B2C</option>
            <option>B2B</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 세그먼트</option>
            <option>VIP</option>
            <option>예비 VIP</option>
            <option>이탈 위험</option>
            <option>블랙리스트</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>활성</option>
            <option>비활성</option>
            <option>차단됨</option>
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
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">총 고객</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">348개사</div>
          <div className="text-xs text-blue-700">대기업 28% · 중견 42% · 중소 30%</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-yellow-800">VIP 고객</span>
          </div>
          <div className="text-3xl text-yellow-900 mb-1">82명</div>
          <div className="text-xs text-yellow-700">전체의 23.6%</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">이탈 위험</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">18명</div>
          <div className="text-xs text-orange-700">90일 이상 미이용</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">블랙리스트</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">3명</div>
          <div className="text-xs text-red-700">대여 제한 중</div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">세그먼트</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">총 이용액</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">계약 수</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">최근 대여</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">리스크</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm">{customer.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{customer.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      {getTypeBadge(customer.type)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getSegmentBadge(customer.segment)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-medium">{customer.totalSpent}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm">{customer.contracts}건</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{customer.lastRental}</span>
                  </td>
                  <td className="px-6 py-4">
                    {getRiskIndicator(customer.risk)}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(customer.status)}
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

      {/* Customer Insights */}
      <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          고객 인사이트
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-2xl mb-2">📈</div>
            <div className="text-sm mb-1 font-medium">평균 고객 생애 가치 (LTV)</div>
            <div className="text-xs text-gray-600">VIP 고객: 280만원 · 일반 고객: 84만원</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm mb-1 font-medium">재대여율</div>
            <div className="text-xs text-gray-600">VIP 92% · 예비 VIP 78% · 일반 고객 54%</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-sm mb-1 font-medium">이탈 방지 필요</div>
            <div className="text-xs text-gray-600">18명에게 컴백 쿠폰 발송 권장</div>
          </div>
        </div>
      </div>
    </>
  );
}