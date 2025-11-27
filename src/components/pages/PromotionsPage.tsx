import { Gift, Plus, Search, Filter, Download, TrendingUp, Users, Calendar, CheckCircle, XCircle, Clock, Zap, Brain } from 'lucide-react';

export function PromotionsPage() {
  const promotions = [
    {
      id: 'PROMO-001',
      name: '신규 고객 대상 사무기기 특가',
      type: 'manual',
      status: 'approved',
      approvalStatus: 'approved',
      targetSegment: '신규 고객',
      discount: '15%',
      startDate: '2024-11-01',
      endDate: '2024-11-30',
      participants: 42,
      conversionRate: 68,
      createdBy: '마케팅팀 김주임',
      aiRecommended: false
    },
    {
      id: 'PROMO-002',
      name: 'VIP 고객 재계약 프로모션',
      type: 'auto',
      status: 'active',
      approvalStatus: 'approved',
      targetSegment: 'VIP',
      discount: '20%',
      startDate: '2024-11-15',
      endDate: '2024-12-15',
      participants: 28,
      conversionRate: 82,
      createdBy: 'AI 자동 생성',
      aiRecommended: true,
      trigger: '계약 만료 30일 전'
    },
    {
      id: 'PROMO-003',
      name: '겨울 시즌 사무환경 패키지',
      type: 'manual',
      status: 'pending',
      approvalStatus: 'pending',
      targetSegment: '전체 고객',
      discount: '10%',
      startDate: '2024-12-01',
      endDate: '2025-02-28',
      participants: 0,
      conversionRate: 0,
      createdBy: '마케팅팀 이대리',
      aiRecommended: false
    },
    {
      id: 'PROMO-004',
      name: '이탈 위험 고객 컴백 이벤트',
      type: 'auto',
      status: 'rejected',
      approvalStatus: 'rejected',
      targetSegment: '이탈 위험',
      discount: '25%',
      startDate: '2024-11-01',
      endDate: '2024-11-30',
      participants: 0,
      conversionRate: 0,
      createdBy: 'AI 자동 생성',
      aiRecommended: true,
      trigger: '90일 이상 미이용',
      rejectReason: '할인율 과다'
    },
  ];

  const autoPromotionTriggers = [
    {
      id: 'TRIGGER-001',
      name: '신규 고객 가입 시',
      status: 'active',
      action: '환영 쿠폰 자동 발급',
      lastTriggered: '2024-11-25 14:20',
      totalTriggers: 156
    },
    {
      id: 'TRIGGER-002',
      name: '계약 만료 30일 전',
      status: 'active',
      action: '재계약 프로모션 발송',
      lastTriggered: '2024-11-25 09:15',
      totalTriggers: 89
    },
    {
      id: 'TRIGGER-003',
      name: '90일 미이용 고객',
      status: 'paused',
      action: '컴백 이벤트 알림',
      lastTriggered: '2024-11-20 11:30',
      totalTriggers: 34
    },
  ];

  const aiRecommendations = [
    {
      id: 'AI-REC-001',
      title: '중견기업 대상 연말 특별 프로모션',
      targetSegment: 'B2B 중견기업',
      expectedConversion: 72,
      reason: 'Q4 중견기업 계약 증가 트렌드 감지',
      confidence: 85,
      suggestedDiscount: '18%',
      suggestedPeriod: '2주'
    },
    {
      id: 'AI-REC-002',
      title: '예비 VIP 승급 유도 프로모션',
      targetSegment: '예비 VIP',
      expectedConversion: 64,
      reason: '예비 VIP의 LTV 상승 패턴 발견',
      confidence: 78,
      suggestedDiscount: '15%',
      suggestedPeriod: '1개월'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'active': { label: '진행 중', color: 'bg-green-100 text-green-700' },
      'pending': { label: '승인 대기', color: 'bg-yellow-100 text-yellow-700' },
      'approved': { label: '승인됨', color: 'bg-blue-100 text-blue-700' },
      'rejected': { label: '반려됨', color: 'bg-red-100 text-red-700' },
      'paused': { label: '일시정지', color: 'bg-gray-100 text-gray-700' },
    };
    const badge = badges[status as keyof typeof badges];
    return <span className={`px-2 py-1 rounded text-xs ${badge.color}`}>{badge.label}</span>;
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">프로모션 관리</h1>
            <p className="text-gray-600">프로모션 등록 · 승인/반려 · 자동 프로모션 · AI 추천</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              리포트 다운로드
            </button>
            <button className="flex items-center gap-2 bg-purple-500 text-white rounded-lg px-4 py-2 hover:bg-purple-600">
              <Brain className="w-4 h-4" />
              AI 추천 보기
            </button>
            <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
              <Plus className="w-4 h-4" />
              프로모션 등록
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">진행 중</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">2개</div>
          <div className="text-xs text-green-700">총 70명 참여</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-yellow-800">승인 대기</span>
          </div>
          <div className="text-3xl text-yellow-900 mb-1">1개</div>
          <div className="text-xs text-yellow-700">검토 필요</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">평균 전환율</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">75%</div>
          <div className="text-xs text-purple-700">승인된 프로모션 기준</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">참여 고객</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">156명</div>
          <div className="text-xs text-blue-700">이번 달 기준</div>
        </div>
      </div>

      {/* AI Recommendations Section */}
      {aiRecommendations.length > 0 && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-300 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 flex items-center gap-2">
                AI 추천 프로모션
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                  {aiRecommendations.length}건
                </span>
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                고객 데이터 분석을 통해 AI가 제안하는 맞춤형 프로모션입니다
              </p>

              <div className="grid grid-cols-2 gap-4">
                {aiRecommendations.map((rec) => (
                  <div key={rec.id} className="p-4 bg-white rounded-lg border border-purple-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-sm font-medium mb-1">{rec.title}</div>
                        <div className="text-xs text-gray-600">대상: {rec.targetSegment}</div>
                      </div>
                      <div className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                        신뢰도 {rec.confidence}%
                      </div>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">예상 전환율</span>
                        <span className="font-medium">{rec.expectedConversion}%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">권장 할인율</span>
                        <span className="font-medium">{rec.suggestedDiscount}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">권장 기간</span>
                        <span className="font-medium">{rec.suggestedPeriod}</span>
                      </div>
                    </div>

                    <div className="p-2 bg-blue-50 rounded text-xs text-gray-700 mb-3">
                      💡 {rec.reason}
                    </div>

                    <button className="w-full text-sm text-purple-600 hover:text-purple-700 border border-purple-200 rounded-lg py-2 hover:bg-purple-50">
                      프로모션 생성하기
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upselling Opportunities Section */}
      <div className="bg-white rounded-xl border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            업셀링 기회
          </h3>
          <p className="text-sm text-gray-600 mt-1">고객 행동 패턴 기반 추가 구매 제안</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">현재 렌탈</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">추천 제품</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">성공 확률</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">추천 이유</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium">테크솔루션 주식회사</div>
                  <div className="text-xs text-gray-500">VIP · 계약 2년차</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">복합기 3대</div>
                  <div className="text-xs text-gray-500">월 렌탈료 45만원</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-green-600">공기청정기 5대</div>
                  <div className="text-xs text-gray-500">월 +18만원</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-sm font-medium text-green-600">92%</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs text-gray-600">
                    사무실 확장 (50명→80명)<br />
                    미세먼지 관심도 높음
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-sm text-orange-600 hover:text-orange-700">
                    제안서 발송
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium">디자인 스튜디오 이지</div>
                  <div className="text-xs text-gray-500">일반 · 계약 1년차</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">회의실 프로젝터 1대</div>
                  <div className="text-xs text-gray-500">월 렌탈료 12만원</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-green-600">모니터 10대</div>
                  <div className="text-xs text-gray-500">월 +35만원</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-sm font-medium text-green-600">85%</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs text-gray-600">
                    디자이너 증원 (5명→15명)<br />
                    고해상도 작업 필요
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-sm text-orange-600 hover:text-orange-700">
                    제안서 발송
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium">법무법인 정의</div>
                  <div className="text-xs text-gray-500">VIP · 계약 3년차</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">복합기 2대, 파쇄기 1대</div>
                  <div className="text-xs text-gray-500">월 렌탈료 38만원</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-green-600">스탠딩 데스크 12개</div>
                  <div className="text-xs text-gray-500">월 +48만원</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-sm font-medium text-blue-600">78%</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs text-gray-600">
                    직원 건강 프로그램 도입<br />
                    복지 투자 증가 트렌드
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-sm text-orange-600 hover:text-orange-700">
                    제안서 발송
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium">광고대행사 크리에이티브</div>
                  <div className="text-xs text-gray-500">일반 · 계약 6개월</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">정수기 1대</div>
                  <div className="text-xs text-gray-500">월 렌탈료 3만원</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-green-600">사무용 의자 8개</div>
                  <div className="text-xs text-gray-500">월 +24만원</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-sm font-medium text-blue-600">72%</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs text-gray-600">
                    사무실 이전 완료<br />
                    가구 구매 예산 있음
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-sm text-orange-600 hover:text-orange-700">
                    제안서 발송
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Auto Promotion Triggers */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            자동 프로모션 트리거
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
            <Plus className="w-4 h-4" />
            트리거 추가
          </button>
        </div>

        <div className="space-y-3">
          {autoPromotionTriggers.map((trigger) => (
            <div key={trigger.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${trigger.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <div>
                  <div className="font-medium mb-1">{trigger.name}</div>
                  <div className="text-sm text-gray-600">{trigger.action}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-gray-500">마지막 실행</div>
                  <div className="text-sm">{trigger.lastTriggered}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">총 실행</div>
                  <div className="text-sm font-medium">{trigger.totalTriggers}회</div>
                </div>
                <div className="flex gap-2">
                  {trigger.status === 'active' ? (
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
                      일시정지
                    </button>
                  ) : (
                    <button className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
                      시작
                    </button>
                  )}
                  <button className="px-3 py-1 bg-white border border-gray-200 rounded text-sm hover:bg-gray-50">
                    수정
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="프로모션명 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>진행 중</option>
            <option>승인 대기</option>
            <option>승인됨</option>
            <option>반려됨</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 유형</option>
            <option>수동 프로모션</option>
            <option>자동 프로모션</option>
            <option>AI 추천</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Promotions Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-orange-500" />
            프로모션 목록
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">프로모션명</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">대상</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">할인율</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">기간</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">참여자</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">전환율</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">승인 상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {promotions.map((promo) => (
                <tr key={promo.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="text-sm font-medium">{promo.name}</div>
                        <div className="text-xs text-gray-500">{promo.id}</div>
                      </div>
                      {promo.aiRecommended && (
                        <Brain className="w-4 h-4 text-purple-500" title="AI 추천" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      promo.type === 'auto' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {promo.type === 'auto' ? '자동' : '수동'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                      {promo.targetSegment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-medium">{promo.discount}</td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-gray-600">
                      {promo.startDate} ~<br />{promo.endDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm">{promo.participants}명</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium">
                      {promo.conversionRate > 0 ? `${promo.conversionRate}%` : '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getStatusBadge(promo.approvalStatus)}
                  </td>
                  <td className="px-6 py-4">
                    {promo.approvalStatus === 'pending' ? (
                      <div className="flex gap-2 justify-center">
                        <button className="p-1 text-green-600 hover:bg-green-50 rounded" title="승인">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-50 rounded" title="반려">
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <button className="text-sm text-orange-600 hover:text-orange-700">
                        상세보기
                      </button>
                    )}
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