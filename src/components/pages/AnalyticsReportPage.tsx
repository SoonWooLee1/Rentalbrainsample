import { BarChart3, TrendingUp, Users, Target, Calendar, PieChart, Award } from 'lucide-react';

export function AnalyticsReportPage() {
  // RFM Analysis Data
  const rfmSegments = [
    { segment: '챔피언', count: 42, percentage: 12.1, recency: 5, frequency: 5, monetary: 5, color: 'green', revenue: '₩24.8M' },
    { segment: '로열 고객', count: 68, percentage: 19.5, recency: 4, frequency: 5, monetary: 4, color: 'blue', revenue: '₩18.2M' },
    { segment: '잠재 로열티', count: 54, percentage: 15.5, recency: 5, frequency: 3, monetary: 3, color: 'purple', revenue: '₩12.4M' },
    { segment: '신규 고객', count: 38, percentage: 10.9, recency: 5, frequency: 1, monetary: 2, color: 'cyan', revenue: '₩6.8M' },
    { segment: '위험 고객', count: 32, percentage: 9.2, recency: 2, frequency: 4, monetary: 4, color: 'orange', revenue: '₩8.6M' },
    { segment: '휴면 고객', count: 48, percentage: 13.8, recency: 1, frequency: 2, monetary: 2, color: 'yellow', revenue: '₩3.2M' },
    { segment: '이탈 고객', count: 18, percentage: 5.2, recency: 1, frequency: 1, monetary: 1, color: 'red', revenue: '₩1.4M' },
  ];

  // Cohort Analysis Data
  const cohortData = [
    { month: '2024-06', joined: 28, month1: 25, month2: 23, month3: 22, month4: 21, month5: 20, retention: 71 },
    { month: '2024-07', joined: 32, month1: 29, month2: 27, month3: 26, month4: 25, month5: null, retention: 78 },
    { month: '2024-08', joined: 35, month1: 32, month2: 30, month3: 29, month4: null, month5: null, retention: 83 },
    { month: '2024-09', joined: 42, month1: 39, month2: 37, month3: null, month4: null, month5: null, retention: 88 },
    { month: '2024-10', joined: 38, month1: 36, month2: null, month3: null, month4: null, month5: null, retention: 95 },
    { month: '2024-11', joined: 44, month1: null, month2: null, month3: null, month4: null, month5: null, retention: 100 },
  ];

  // Customer Journey Stages
  const journeyStages = [
    { stage: '인지', count: 1240, conversion: 45, color: 'blue' },
    { stage: '관심', count: 558, conversion: 68, color: 'green' },
    { stage: '계약', count: 380, conversion: 82, color: 'purple' },
    { stage: '활성', count: 312, conversion: 76, color: 'orange' },
    { stage: '재계약', count: 237, conversion: 92, color: 'pink' },
  ];

  // LTV by Segment
  const ltvBySegment = [
    { segment: 'B2B 대기업', avgLTV: '₩324M', count: 18, color: 'purple' },
    { segment: 'B2B 중견기업', avgLTV: '₩158M', count: 52, color: 'blue' },
    { segment: 'B2B 스타트업', avgLTV: '₩86M', count: 85, color: 'green' },
    { segment: 'B2B 소호/1인기업', avgLTV: '₩42M', count: 103, color: 'gray' },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      cyan: 'bg-cyan-500',
      orange: 'bg-orange-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500',
      pink: 'bg-pink-500',
      gray: 'bg-gray-500',
    };
    return colors[color];
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">분석 리포트</h1>
            <p className="text-gray-600">RFM 분석 · 코호트 분석 · 고객 여정 · LTV 분석</p>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              <option>최근 6개월</option>
              <option>최근 1년</option>
              <option>전체 기간</option>
            </select>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              리포트 다운로드
            </button>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">평균 LTV</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">₩18.2M</div>
          <div className="text-xs text-green-700">전년 대비 +24%</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">평균 재구매 주기</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">8.6개월</div>
          <div className="text-xs text-blue-700">지속적으로 단축 중</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">6개월 리텐션</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">82%</div>
          <div className="text-xs text-purple-700">업계 평균 대비 +18%p</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">계약 전환율</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">68%</div>
          <div className="text-xs text-orange-700">상담 → 계약 비율</div>
        </div>
      </div>

      {/* RFM Analysis */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="mb-6 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-purple-500" />
          RFM 분석 (Recency · Frequency · Monetary)
        </h3>

        <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="text-sm text-purple-800">
            <strong>💡 인사이트:</strong> 챔피언과 로열 고객이 전체 고객의 31.6%이지만 총 매출의 52.3%를 차지합니다. 
            휴면·이탈 고객(19.0%)을 재활성화하면 월 매출 ₩4.6M 추가 가능.
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">세그먼트</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">고객 수</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">비중</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">최근성(R)</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">빈도(F)</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">금액(M)</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">월 매출</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">추천 액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rfmSegments.map((segment, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getColorClasses(segment.color)}`}></div>
                      <span className="text-sm font-medium">{segment.segment}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm">{segment.count}명</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{segment.percentage}%</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < segment.recency ? getColorClasses(segment.color) : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < segment.frequency ? getColorClasses(segment.color) : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < segment.monetary ? getColorClasses(segment.color) : 'bg-gray-200'}`}></div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">{segment.revenue}</td>
                  <td className="px-6 py-4 text-sm">
                    {segment.segment === '챔피언' && '🎁 VIP 혜택 제공'}
                    {segment.segment === '로열 고객' && '⭐ 업셀링 제안'}
                    {segment.segment === '잠재 로열티' && '🎯 관계 강화'}
                    {segment.segment === '신규 고객' && '🚀 온보딩 최적화'}
                    {segment.segment === '위험 고객' && '⚠️ 긴급 리텐션'}
                    {segment.segment === '휴면 고객' && '💤 재활성화 캠페인'}
                    {segment.segment === '이탈 고객' && '🔄 윈백 캠페인'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Cohort Analysis */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            코호트 분석 (월별 리텐션)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 py-2 text-left text-xs text-gray-600">가입월</th>
                  <th className="px-3 py-2 text-center text-xs text-gray-600">가입</th>
                  <th className="px-3 py-2 text-center text-xs text-gray-600">1개월</th>
                  <th className="px-3 py-2 text-center text-xs text-gray-600">2개월</th>
                  <th className="px-3 py-2 text-center text-xs text-gray-600">3개월</th>
                  <th className="px-3 py-2 text-center text-xs text-gray-600">리텐션</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cohortData.map((cohort, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-2 text-xs font-medium">{cohort.month}</td>
                    <td className="px-3 py-2 text-center text-xs">{cohort.joined}</td>
                    <td className="px-3 py-2 text-center">
                      {cohort.month1 && (
                        <div className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {cohort.month1}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {cohort.month2 && (
                        <div className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {cohort.month2}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {cohort.month3 && (
                        <div className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {cohort.month3}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span className={`font-medium ${
                        cohort.retention >= 90 ? 'text-green-600' :
                        cohort.retention >= 75 ? 'text-blue-600' :
                        'text-orange-600'
                      }`}>
                        {cohort.retention}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-xs text-blue-800">
              <strong>📈 트렌드:</strong> 최근 가입 고객의 리텐션이 지속적으로 개선되고 있습니다 (6월 71% → 11월 100%). 
              온보딩 프로세스 개선의 효과로 판단됩니다.
            </div>
          </div>
        </div>

        {/* Customer Journey */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            고객 여정 분석 (Funnel)
          </h3>

          <div className="space-y-4">
            {journeyStages.map((stage, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{stage.stage}</span>
                    <span className="text-xs text-gray-600">{stage.count}명</span>
                  </div>
                  <span className={`text-sm font-medium ${
                    stage.conversion >= 80 ? 'text-green-600' :
                    stage.conversion >= 60 ? 'text-blue-600' :
                    'text-orange-600'
                  }`}>
                    {stage.conversion}%
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full h-8 bg-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className={`h-full ${getColorClasses(stage.color)} transition-all`}
                      style={{ width: `${(stage.count / 1240) * 100}%` }}
                    ></div>
                  </div>
                  {idx < journeyStages.length - 1 && (
                    <div className="absolute -bottom-3 left-0 w-full text-center text-xs text-gray-500">
                      ↓ {stage.conversion}% 전환
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="text-xs text-green-800">
              <strong>🎯 최적화 포인트:</strong> 관심 → 계약 단계(68%)와 활성 → 재계약 단계(76%)에서 드롭아웃 발생. 
              가격 할인 및 고객 만족도 향상 프로그램 필요.
            </div>
          </div>
        </div>
      </div>

      {/* LTV by Segment */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="mb-6 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-orange-500" />
          세그먼트별 고객 생애 가치 (LTV)
        </h3>

        <div className="grid grid-cols-4 gap-4">
          {ltvBySegment.map((segment, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg text-center">
              <div className={`w-16 h-16 mx-auto mb-3 rounded-full ${getColorClasses(segment.color)} flex items-center justify-center text-white text-xl font-bold`}>
                {segment.count}
              </div>
              <div className="text-sm font-medium mb-1">{segment.segment}</div>
              <div className="text-lg font-bold text-gray-900 mb-1">{segment.avgLTV}</div>
              <div className="text-xs text-gray-600">평균 LTV</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="text-sm text-orange-800">
            <strong>💰 인사이트:</strong> B2B 대기업 18개 계정이 전체 매출의 28.4%를 차지합니다. 
            중견기업 고객을 대기업 수준으로 육성하면 연간 매출 ₩2.4B 추가 가능.
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-purple-900 mb-2">AI 비즈니스 인사이트</h4>
            <p className="text-xs text-purple-800 leading-relaxed">
              향후 6개월 매출 예측 ₩524M · 휴면 고객 48명 재활성화 시 월 ₩3.2M 추가 매출 · 위험 고객 32명 이탈 방지 시 82% 회복 가능
            </p>
          </div>
        </div>
      </div>
    </>
  );
}