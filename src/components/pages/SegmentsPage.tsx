import { Users, TrendingUp, AlertTriangle, Award, Target, Zap } from 'lucide-react';

export function SegmentsPage() {
  const b2bSegments = [
    { 
      name: '스타트업/소호형', 
      count: 24, 
      behavior: '초기 자금 부족, 비용 처리(절세) 중시', 
      strategy: '렌탈료 경비 처리 강조',
      message: '초기 구매 부담 0원, 렌탈료는 100% 비용 처리하세요.',
      color: 'indigo',
      action: '절세 가이드 제공'
    },
    { 
      name: '대량 도입형 (기업)', 
      count: 18, 
      behavior: '다수 기기 렌탈, 관리 포인트 최소화 원함', 
      strategy: '전담 매니저 배정, 통합 청구서 제공',
      message: '수십 대의 기기 관리, 전담 매니저가 한 번에 해결해 드립니다.',
      color: 'purple',
      action: '전담 매니저 배정'
    },
    { 
      name: '프로젝트성 단기', 
      count: 32, 
      behavior: '행사/TF팀 등 특정 기간만 급하게 필요', 
      strategy: '빠른 납기, 유연한 반납/연장 옵션',
      message: '급한 행사 장비, 내일 바로 도착! 기간 연장도 자유롭게.',
      color: 'pink',
      action: '긴급 배송 옵션'
    },
    { 
      name: '재계약 임박 (유지)', 
      count: 12, 
      behavior: '계약 만료 3개월 전, 기기 노후화 고민', 
      strategy: '최신 모델 교체(재렌탈) 특가 제안',
      message: '쓰시던 요금 그대로, 최신 모델로 교체해 드립니다.',
      color: 'teal',
      action: '재계약 특가 제안'
    },
    { 
      name: '이탈 위험군', 
      count: 8, 
      behavior: '최근 대여 주기가 길어지거나 재계약율 하락', 
      strategy: '맞춤 혜택·안부 메시지로 재계약 유도',
      message: '오랜만이에요! 기존 고객님 특별 할인으로 다시 시작해보세요.',
      color: 'orange',
      action: '컴백 프로모션 발송'
    },
    { 
      name: 'VIP 고객', 
      count: 15, 
      behavior: '대량·장기 계약, 연체 없음, 높은 재계약률', 
      strategy: '전담 매니저, 우선 배송, 특별 할인',
      message: 'VIP 고객님만을 위한 신상 사무용품 사전 체험 기회를 드립니다.',
      color: 'green',
      action: 'VIP 혜택 안내'
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string, border: string, text: string, gradient: string } } = {
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', gradient: 'from-orange-50 to-orange-100' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', gradient: 'from-green-50 to-green-100' },
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', gradient: 'from-red-50 to-red-100' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', gradient: 'from-blue-50 to-blue-100' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', gradient: 'from-purple-50 to-purple-100' },
      cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', gradient: 'from-cyan-50 to-cyan-100' },
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', gradient: 'from-indigo-50 to-indigo-100' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', gradient: 'from-pink-50 to-pink-100' },
      teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', gradient: 'from-teal-50 to-teal-100' },
    };
    return colors[color];
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">세그먼트 분석</h1>
        <p className="text-gray-600">고객 행동 패턴 기반 자동 세분화 · 맞춤 전략</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">총 세그먼트</span>
          </div>
          <div className="text-3xl mb-2">6개</div>
          <div className="text-sm text-gray-600">B2B 기업 고객 전용</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">자동화율</span>
          </div>
          <div className="text-3xl mb-2">94%</div>
          <div className="text-sm text-green-600">AI 기반 자동 분류</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">전환율 향상</span>
          </div>
          <div className="text-3xl mb-2">+42%</div>
          <div className="text-sm text-orange-600">맞춤 메시지 효과</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-600">LTV 증가</span>
          </div>
          <div className="text-3xl mb-2">+28%</div>
          <div className="text-sm text-purple-600">세그먼트 관리 후</div>
        </div>
      </div>

      {/* B2B Segments */}
      <div>
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-purple-600" />
          B2B 세그먼트 (기업 고객)
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {b2bSegments.map((segment, idx) => {
            const colors = getColorClasses(segment.color);
            return (
              <div key={idx} className={`bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium mb-1">{segment.name}</h3>
                    <div className="text-sm text-gray-600">{segment.count}개사</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {segment.count}개사
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">특징 및 니즈</div>
                    <div className="text-sm">{segment.behavior}</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-600 mb-1">관리 전략</div>
                    <div className="text-sm">{segment.strategy}</div>
                  </div>

                  <div className={`p-3 bg-white border ${colors.border} rounded-lg`}>
                    <div className="text-xs text-gray-600 mb-1">메시지 예시</div>
                    <div className={`text-sm ${colors.text} italic`}>"{segment.message}"</div>
                  </div>

                  <button className={`w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm`}>
                    {segment.action}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          AI 기반 세그먼트 자동화
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">🤖</div>
            <div className="text-sm mb-1 font-medium">자동 분류</div>
            <div className="text-xs text-gray-600">
              고객 행동 데이터(대여 빈도, 금액, 리뷰)를 분석하여 자동으로 세그먼트 배정
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm mb-1 font-medium">실시간 업데이트</div>
            <div className="text-xs text-gray-600">
              고객 상태 변화 시 즉시 세그먼트 이동 (예: 90일 미이용 → 이탈 위험군)
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm mb-1 font-medium">맞춤 액션</div>
            <div className="text-xs text-gray-600">
              각 세그먼트별 최적화된 메시지와 혜택을 자동 발송하여 전환율 향상
            </div>
          </div>
        </div>
      </div>
    </>
  );
}