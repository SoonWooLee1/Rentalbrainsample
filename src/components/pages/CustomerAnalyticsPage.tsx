import { Users, TrendingUp, DollarSign, Calendar, Target, Star, AlertCircle } from 'lucide-react';

export function CustomerAnalyticsPage() {
  const customers = [
    {
      id: 'CUST-001',
      name: '네오플러스 주식회사',
      type: 'B2B',
      segment: 'VIP',
      joinDate: '2023-01-15',
      totalSpent: '₩14.4M',
      avgMonthly: '₩120K',
      contracts: 12,
      activeContracts: 1,
      renewalRate: 92,
      ltv: '₩28.8M',
      churnRisk: 8,
      lastActivity: '2024-11-28',
      satisfaction: 4.8,
      behavior: {
        preferredCategory: '전자기기',
        avgContractLength: 12,
        upgradeFrequency: '높음',
        paymentPunctuality: 98
      }
    },
    {
      id: 'CUST-002',
      name: '스타트업 A',
      type: 'B2B',
      segment: '대량 도입형',
      joinDate: '2022-08-10',
      totalSpent: '₩128.4M',
      avgMonthly: '₩450K',
      contracts: 24,
      activeContracts: 5,
      renewalRate: 95,
      ltv: '₩324M',
      churnRisk: 5,
      lastActivity: '2024-11-30',
      satisfaction: 4.9,
      behavior: {
        preferredCategory: '가전제품',
        avgContractLength: 24,
        upgradeFrequency: '중간',
        paymentPunctuality: 100
      }
    },
    {
      id: 'CUST-003',
      name: '디자인 스튜디오 이지',
      type: 'B2B',
      segment: '이탈 위험',
      joinDate: '2023-06-20',
      totalSpent: '₩2.4M',
      avgMonthly: '₩80K',
      contracts: 3,
      activeContracts: 1,
      renewalRate: 33,
      ltv: '₩1.2M',
      churnRisk: 78,
      lastActivity: '2024-09-15',
      satisfaction: 3.2,
      behavior: {
        preferredCategory: '사무기기',
        avgContractLength: 3,
        upgradeFrequency: '낮음',
        paymentPunctuality: 85
      }
    },
  ];

  const getChurnRiskBadge = (risk: number) => {
    if (risk >= 70) return { label: '높음', color: 'bg-red-100 text-red-700' };
    if (risk >= 40) return { label: '중간', color: 'bg-yellow-100 text-yellow-700' };
    return { label: '낮음', color: 'bg-green-100 text-green-700' };
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">고객 분석</h1>
            <p className="text-gray-600">고객별 상세 분석 · 행동 패턴 · 수익 기여도</p>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              <option>전체 세그먼트</option>
              <option>VIP</option>
              <option>대량 도입형</option>
              <option>예비 VIP</option>
            </select>
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              <option>수익 기여도 높은 순</option>
              <option>이탈 위험 높은 순</option>
              <option>가입일 최신순</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">총 고객 수</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">103개사</div>
          <div className="text-xs text-blue-700">B2B 기업 고객 전용</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">평균 고객 LTV</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">₩18.2M</div>
          <div className="text-xs text-green-700">전년 대비 +24%</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">평균 만족도</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">4.6/5.0</div>
          <div className="text-xs text-purple-700">응답률 87%</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">이탈 위험 고객</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">18명</div>
          <div className="text-xs text-orange-700">5.2% · 즉시 조치 필요</div>
        </div>
      </div>

      {/* Customer Analysis List */}
      <div className="space-y-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-xl border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-gray-600">{customer.id}</span>
                  <h3 className="text-xl font-medium">{customer.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    customer.type === 'B2B' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {customer.type}
                  </span>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                    {customer.segment}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>가입일: {customer.joinDate}</span>
                  <span>•</span>
                  <span>최근 활동: {customer.lastActivity}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    만족도 {customer.satisfaction}
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                상세 프로필 보기
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">누적 거래액</div>
                <div className="text-lg font-bold">{customer.totalSpent}</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">월평균 이용액</div>
                <div className="text-lg font-bold text-blue-700">{customer.avgMonthly}</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">예상 LTV</div>
                <div className="text-lg font-bold text-green-700">{customer.ltv}</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">재계약률</div>
                <div className="text-lg font-bold text-purple-700">{customer.renewalRate}%</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">이탈 위험도</div>
                <div className="text-lg font-bold text-orange-700">{customer.churnRisk}%</div>
              </div>
            </div>

            {/* Contract Status */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">계약 현황</h4>
                <span className="text-xs text-gray-600">
                  총 {customer.contracts}건 중 {customer.activeContracts}건 진행 중
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500"
                  style={{ width: `${(customer.activeContracts / customer.contracts) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Behavior Analysis */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium mb-3">행동 패턴 분석</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">선호 카테고리</span>
                    <span className="text-sm font-medium">{customer.behavior.preferredCategory}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">평균 계약 기간</span>
                    <span className="text-sm font-medium">{customer.behavior.avgContractLength}개월</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">업그레이드 빈도</span>
                    <span className="text-sm font-medium">{customer.behavior.upgradeFrequency}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-700">납부 성실도</span>
                    <span className="text-sm font-medium">{customer.behavior.paymentPunctuality}%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">AI 추천 액션</h4>
                <div className="space-y-3">
                  {customer.churnRisk >= 70 ? (
                    <>
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="text-sm text-red-700 font-medium mb-1">🚨 긴급: 이탈 방지 필요</div>
                        <div className="text-xs text-gray-600 mb-2">
                          최근 90일 활동 없음. 즉시 특별 할인 제안 권장
                        </div>
                        <button className="text-xs text-red-600 hover:text-red-700 font-medium">
                          → 컴백 캠페인 발송
                        </button>
                      </div>
                    </>
                  ) : customer.churnRisk >= 40 ? (
                    <>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="text-sm text-yellow-700 font-medium mb-1">⚠️ 주의: 이탈 위험</div>
                        <div className="text-xs text-gray-600 mb-2">
                          이용 빈도 감소. 관심사 기반 상품 추천
                        </div>
                        <button className="text-xs text-yellow-600 hover:text-yellow-700 font-medium">
                          → 맞춤 제안서 발송
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-sm text-green-700 font-medium mb-1">✅ 우수 고객</div>
                        <div className="text-xs text-gray-600 mb-2">
                          {customer.behavior.preferredCategory} 추가 상품 추천 최적 타이밍
                        </div>
                        <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                          → 업셀링 제안
                        </button>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="text-sm text-blue-700 font-medium mb-1">🎁 VIP 혜택 제공</div>
                        <div className="text-xs text-gray-600 mb-2">
                          장기 고객 감사 이벤트 참여 대상
                        </div>
                        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                          → 감사 메시지 발송
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Churn Risk Analysis */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">이탈 위험도 분석</h4>
                <span className={`px-3 py-1 rounded-full text-xs ${getChurnRiskBadge(customer.churnRisk).color}`}>
                  {getChurnRiskBadge(customer.churnRisk).label}
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    customer.churnRisk >= 70 ? 'bg-red-500' :
                    customer.churnRisk >= 40 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${customer.churnRisk}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Analysis System */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-purple-900 mb-2">AI 기반 고객 분석 시스템</h4>
            <p className="text-xs text-purple-800 leading-relaxed">
              고객별 이용 패턴 및 선호도 분석 · 머신러닝 기반 이탈 가능성 예측 · 맞춤형 제안으로 LTV 극대화
            </p>
          </div>
        </div>
      </div>
    </>
  );
}