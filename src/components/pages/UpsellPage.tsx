import { TrendingUp, Target, Gift, Zap, Users, DollarSign } from 'lucide-react';

export function UpsellPage() {
  const opportunities = [
    { 
      id: 'UP-001', 
      customer: '김민수',
      segment: 'VIP',
      currentProducts: ['노트북 (LG 그램 17)'],
      currentSpend: '₩120K',
      suggestedProduct: '27인치 모니터 추가',
      suggestedPrice: '₩60K',
      expectedRevenue: '₩180K',
      probability: 85,
      reason: '노트북 단독 사용 중 → 재택근무 효율화를 위한 듀얼 모니터 제안'
    },
    { 
      id: 'UP-002', 
      customer: '스타트업 A',
      segment: '대량 도입형',
      currentProducts: ['공기청정기 5대'],
      currentSpend: '₩450K',
      suggestedProduct: '노트북 10대 추가',
      suggestedPrice: '₩1.2M',
      expectedRevenue: '₩1.65M',
      probability: 78,
      reason: '사무실 확장 예정 → 신규 인력용 노트북 렌탈 제안'
    },
    { 
      id: 'UP-003', 
      customer: '카페 비즈니스',
      segment: '스타트업/소호형',
      currentProducts: ['커피머신 3대'],
      currentSpend: '₩380K',
      suggestedProduct: '공기청정기 2대 추가',
      suggestedPrice: '₩120K',
      expectedRevenue: '₩500K',
      probability: 92,
      reason: '실내 환경 개선 트렌드 → 고객 만족도 향상을 위한 공기청정기 제안'
    },
    { 
      id: 'UP-004', 
      customer: '최영희',
      segment: '예비 VIP',
      currentProducts: ['공기청정기 (다이슨)'],
      currentSpend: '₩90K',
      suggestedProduct: '로봇청소기 추가',
      suggestedPrice: '₩80K',
      expectedRevenue: '₩170K',
      probability: 68,
      reason: '청결 관심도 높음 → 자동 청소 솔루션으로 편의성 제공'
    },
  ];

  const crossSellPatterns = [
    { 
      category: '재택근무 패키지',
      baseProduct: '노트북',
      addOns: ['모니터', '키보드/마우스', '웹캠'],
      conversionRate: 42,
      avgIncrease: '₩80K'
    },
    { 
      category: '스마트홈 패키지',
      baseProduct: '공기청정기',
      addOns: ['로봇청소기', '제습기', '가습기'],
      conversionRate: 38,
      avgIncrease: '₩120K'
    },
    { 
      category: '캠핑 풀세트',
      baseProduct: '캠핑 텐트',
      addOns: ['침낭', '캠핑 테이블', '랜턴'],
      conversionRate: 56,
      avgIncrease: '₩150K'
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">업셀링 기회</h1>
            <p className="text-gray-600">AI 기반 추가 상품 추천 · 매출 극대화</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">업셀링 기회</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">24건</div>
          <div className="text-xs text-blue-700">AI 추천 리스트</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">예상 추가 매출</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">₩8.4M</div>
          <div className="text-xs text-green-700">월 매출 +10.2%</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">전환율</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">38%</div>
          <div className="text-xs text-purple-700">평균 성공률</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">고확률 기회</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">8건</div>
          <div className="text-xs text-orange-700">전환율 80% 이상</div>
        </div>
      </div>

      {/* Upsell Opportunities */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">고확률 업셀링 기회</h2>
        
        <div className="space-y-6">
          {opportunities.map((opp) => (
            <div key={opp.id} className="bg-white rounded-xl border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-gray-600">{opp.id}</span>
                    <h3 className="text-lg font-medium">{opp.customer}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {opp.segment}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    현재 이용: {opp.currentProducts.join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">현재 → 예상</div>
                  <div className="text-xl font-bold">
                    <span className="text-gray-600">{opp.currentSpend}</span>
                    {' → '}
                    <span className="text-green-600">{opp.expectedRevenue}</span>
                  </div>
                </div>
              </div>

              {/* Suggestion */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg mb-4">
                <div className="flex items-start gap-2 mb-3">
                  <Gift className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-green-900 mb-1">
                      추천 상품: {opp.suggestedProduct}
                    </div>
                    <div className="text-sm text-green-700 mb-2">
                      추가 비용: {opp.suggestedPrice} / 월
                    </div>
                    <div className="text-xs text-gray-600">
                      <strong>제안 근거:</strong> {opp.reason}
                    </div>
                  </div>
                </div>

                {/* Probability */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-600">전환 가능성</span>
                    <span className={`font-medium ${
                      opp.probability >= 80 ? 'text-green-600' :
                      opp.probability >= 60 ? 'text-blue-600' :
                      'text-orange-600'
                    }`}>
                      {opp.probability}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        opp.probability >= 80 ? 'bg-green-500' :
                        opp.probability >= 60 ? 'bg-blue-500' :
                        'bg-orange-500'
                      }`}
                      style={{ width: `${opp.probability}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                  제안서 발송
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
                  전화 상담
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm">
                  나중에
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Sell Patterns */}
      <div className="mb-8">
        <h2 className="text-xl mb-4">크로스셀 패키지 패턴</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {crossSellPatterns.map((pattern, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-medium mb-4">{pattern.category}</h3>
              
              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-2">기본 상품</div>
                <div className="text-sm font-medium px-3 py-2 bg-blue-50 border border-blue-200 rounded">
                  {pattern.baseProduct}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-2">추천 추가 상품</div>
                <div className="space-y-2">
                  {pattern.addOns.map((addon, addonIdx) => (
                    <div key={addonIdx} className="text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded flex items-center gap-2">
                      <span className="text-green-500">+</span>
                      {addon}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">전환율</span>
                  <span className="text-sm font-medium text-green-600">{pattern.conversionRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">평균 증가액</span>
                  <span className="text-sm font-medium">{pattern.avgIncrease}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Upsell System */}
      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-purple-900 mb-2">AI 기반 업셀링 시스템</h4>
            <p className="text-xs text-purple-800 leading-relaxed">
              고객 이용 패턴 및 구매력 분석하여 최적 상품 추천 · 고객 만족도 높은 시점 자동 제안 · 도입 후 고객당 평균 이용액 32% 증가
            </p>
          </div>
        </div>
      </div>
    </>
  );
}