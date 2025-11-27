import { RefreshCw, Calendar, TrendingUp, Gift, DollarSign, CheckCircle } from 'lucide-react';

export function RenewalsPage() {
  const renewals = [
    { 
      id: 'RN-001', 
      customer: '테크솔루션 주식회사',
      customerType: 'VIP',
      contract: 'CT-001',
      asset: '복합기 3대', 
      currentFee: '₩450K',
      endDate: '2024-12-15',
      daysLeft: 15,
      status: 'interested',
      renewalRate: 85,
      offer: '동일 요금으로 최신 모델 업그레이드'
    },
    { 
      id: 'RN-002', 
      customer: '디자인 스튜디오 이지',
      customerType: '대량 도입형',
      contract: 'CT-002',
      asset: '공기청정기 5대', 
      currentFee: '₩180K',
      endDate: '2025-01-01',
      daysLeft: 36,
      status: 'pending',
      renewalRate: 92,
      offer: '12개월 약정 시 10% 할인'
    },
    { 
      id: 'RN-003', 
      customer: '광고대행사 크리에이티브',
      customerType: '이탈 위험',
      contract: 'CT-003',
      asset: '회의실 프로젝터 2대', 
      currentFee: '₩240K',
      endDate: '2024-12-10',
      daysLeft: 10,
      status: 'at-risk',
      renewalRate: 35,
      offer: '첫 달 50% 할인 + 추가 제품 무상 제공'
    },
    { 
      id: 'RN-004', 
      customer: '법무법인 정의',
      customerType: '스타트업/소호형',
      contract: 'CT-005',
      asset: '파쇄기 2대, 정수기 3대', 
      currentFee: '₩320K',
      endDate: '2026-03-01',
      daysLeft: 456,
      status: 'renewed',
      renewalRate: 100,
      offer: '24개월 장기 약정 완료'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      interested: { label: '관심 있음', color: 'bg-blue-100 text-blue-700', icon: <TrendingUp className="w-3 h-3" /> },
      pending: { label: '검토 중', color: 'bg-yellow-100 text-yellow-700', icon: <Calendar className="w-3 h-3" /> },
      'at-risk': { label: '이탈 위험', color: 'bg-red-100 text-red-700', icon: <RefreshCw className="w-3 h-3" /> },
      renewed: { label: '재계약 완료', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="w-3 h-3" /> },
    };
    const badge = badges[status as keyof typeof badges];
    return (
      <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${badge.color}`}>
        {badge.icon}
        {badge.label}
      </span>
    );
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">재계약 관리</h1>
            <p className="text-gray-600">계약 만료 임박 고객 · 자동 리텐션 캠페인</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">30일 내 만료</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">8건</div>
          <div className="text-xs text-blue-700">제안서 발송 완료</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">재계약률</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">76%</div>
          <div className="text-xs text-green-700">업계 평균 대비 +18%p</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <RefreshCw className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">이탈 위험</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">3건</div>
          <div className="text-xs text-red-700">특별 제안 필요</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">예상 매출</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">₩8.2M</div>
          <div className="text-xs text-purple-700">재계약 시 월 매출</div>
        </div>
      </div>

      {/* Renewals List */}
      <div className="space-y-6 mb-6">
        {renewals.map((renewal) => (
          <div key={renewal.id} className="bg-white rounded-xl border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-gray-600">{renewal.id}</span>
                  <h3 className="text-lg font-medium">{renewal.customer}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    {renewal.customerType}
                  </span>
                  {getStatusBadge(renewal.status)}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>계약: {renewal.contract}</span>
                  <span>•</span>
                  <span>자산: {renewal.asset}</span>
                  <span>•</span>
                  <span className={renewal.daysLeft <= 15 ? 'text-orange-600 font-medium' : ''}>
                    만료까지 {renewal.daysLeft}일
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-1">{renewal.currentFee}</div>
                <div className="text-xs text-gray-500">월 납부액</div>
              </div>
            </div>

            {/* Renewal Probability */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">재계약 가능성</span>
                <span className={`font-medium ${
                  renewal.renewalRate >= 80 ? 'text-green-600' :
                  renewal.renewalRate >= 50 ? 'text-blue-600' :
                  'text-red-600'
                }`}>
                  {renewal.renewalRate}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    renewal.renewalRate >= 80 ? 'bg-green-500' :
                    renewal.renewalRate >= 50 ? 'bg-blue-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${renewal.renewalRate}%` }}
                ></div>
              </div>
            </div>

            {/* Offer */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <Gift className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-600 mb-1">맞춤 제안</div>
                  <div className="text-sm text-gray-800 font-medium">{renewal.offer}</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {renewal.status === 'renewed' ? (
                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm cursor-default">
                  재계약 완료 ✓
                </button>
              ) : (
                <>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
                    제안서 발송
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm">
                    전화 상담
                  </button>
                  {renewal.status === 'at-risk' && (
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                      특별 할인 제안
                    </button>
                  )}
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm ml-auto">
                    상세 내역
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Auto Renewal Strategy */}
      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <RefreshCw className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-purple-900 mb-2">자동 재계약 전략</h4>
            <p className="text-xs text-purple-800 leading-relaxed">
              만료 30일 전 맞춤 제안서 자동 발송 · AI 기반 고객별 최적 제안 · 원클릭 재계약 (전자서명 자동 처리)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}