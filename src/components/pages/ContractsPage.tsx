import { FileText, Search, Filter, Plus, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function ContractsPage() {
  const contracts = [
    { id: 'CT-001', customer: '테크솔루션 주식회사', type: 'B2B', asset: '복합기 5대 + 모니터 10대', startDate: '2024-01-15', endDate: '2025-01-14', monthlyFee: '180만원', status: 'active', renewalDate: '2024-12-15' },
    { id: 'CT-002', customer: '스타트업 A', type: 'B2B', asset: '공기청정기 5대 + 정수기 3대', startDate: '2024-03-01', endDate: '2025-03-01', monthlyFee: '85만원', status: 'active', renewalDate: '2025-01-01' },
    { id: 'CT-003', customer: '로펌 김앤장', type: 'B2B', asset: '사무용 의자 20대', startDate: '2024-06-10', endDate: '2024-12-10', monthlyFee: '98만원', status: 'expiring', renewalDate: '2024-11-10' },
    { id: 'CT-004', customer: '디자인 에이전시 B', type: 'B2B', asset: '회의실 프로젝터 3대', startDate: '2024-02-20', endDate: '2024-08-20', monthlyFee: '42만원', status: 'expired', renewalDate: '-' },
    { id: 'CT-005', customer: '카페 비즈니스', type: 'B2B', asset: '커피머신 3대 + 정수기 2대', startDate: '2024-05-01', endDate: '2026-05-01', monthlyFee: '68만원', status: 'active', renewalDate: '2026-03-01' },
    { id: 'CT-006', customer: '건축사무소 다담', type: 'B2B', asset: '정수기 8대', startDate: '2024-08-15', endDate: '2025-02-15', monthlyFee: '72만원', status: 'active', renewalDate: '2025-01-15' },
    { id: 'CT-007', customer: '행사 기획사 B', type: 'B2B', asset: '모니터 10대 + 프로젝터 2대', startDate: '2024-10-01', endDate: '2024-11-30', monthlyFee: '120만원', status: 'active', renewalDate: '2024-11-15' },
    { id: 'CT-008', customer: '회계법인 한울', type: 'B2B', asset: '파쇄기 3대 + 복합기 2대', startDate: '2024-07-20', endDate: '2025-01-20', monthlyFee: '95만원', status: 'active', renewalDate: '2024-12-20' },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      active: { label: '진행 중', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="w-3 h-3" /> },
      expiring: { label: '만료 임박', color: 'bg-orange-100 text-orange-700', icon: <Clock className="w-3 h-3" /> },
      expired: { label: '만료됨', color: 'bg-gray-100 text-gray-700', icon: <AlertCircle className="w-3 h-3" /> },
    };
    const badge = badges[status as keyof typeof badges];
    return (
      <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${badge.color}`}>
        {badge.icon}
        {badge.label}
      </span>
    );
  };

  const getTypeBadge = (type: string) => {
    return type === 'B2C' ? 
      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">B2C</span> :
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">B2B</span>;
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">계약 관리</h1>
            <p className="text-gray-600">렌탈 계약 현황 · 갱신 · 종료 관리</p>
          </div>

          <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
            <Plus className="w-4 h-4" />
            신규 계약 등록
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
              placeholder="계약 ID, 고객명, 자산명으로 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>진행 중</option>
            <option>만료 임박</option>
            <option>만료됨</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 유형</option>
            <option>B2C</option>
            <option>B2B</option>
          </select>

          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">진행 중</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">342건</div>
          <div className="text-xs text-green-700">월 총 수납액: 8,240만원</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">만료 임박</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">8건</div>
          <div className="text-xs text-orange-700">30일 이내 만료</div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-800">만료됨</span>
          </div>
          <div className="text-3xl text-gray-900 mb-1">12건</div>
          <div className="text-xs text-gray-700">재계약 미진행</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">평균 계약 기간</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">14개월</div>
          <div className="text-xs text-purple-700">B2B 평균 18개월</div>
        </div>
      </div>

      {/* Contracts Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">계약 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">자산</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">계약 시작</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">계약 종료</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">월 납부액</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm">{contract.id}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{contract.customer}</td>
                  <td className="px-6 py-4">
                    <div className="flex">{getTypeBadge(contract.type)}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{contract.asset}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{contract.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{contract.endDate}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium">{contract.monthlyFee}</td>
                  <td className="px-6 py-4">
                    <div className="flex">{getStatusBadge(contract.status)}</div>
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

      {/* Auto-Renewal Info */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          자동 갱신 시스템
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-sm mb-1 font-medium">만료 30일 전 알림</div>
            <div className="text-xs text-gray-600">
              고객과 담당자에게 자동으로 재계약 안내 메시지 발송
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">💰</div>
            <div className="text-sm mb-1 font-medium">맞춤 제안</div>
            <div className="text-xs text-gray-600">
              고객 이용 패턴 분석하여 업그레이드 또는 할인 조건 자동 제시
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">✅</div>
            <div className="text-sm mb-1 font-medium">원클릭 갱신</div>
            <div className="text-xs text-gray-600">
              고객이 웹/앱에서 버튼 하나로 재계약 완료 (전자서명 연동)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}