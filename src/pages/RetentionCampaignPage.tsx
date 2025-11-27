import { Send, Users, Calendar, MapPin, Sparkles, TrendingUp } from 'lucide-react';

export function RetentionCampaignPage() {
  const campaigns = [
    { name: '🍂 설악산 단풍 시즌 캠페인', target: 42, sent: 42, opened: 35, converted: 12, season: 'autumn', status: 'active' },
    { name: '🌊 여름 워터파크 프로모션', target: 58, sent: 58, opened: 48, converted: 18, season: 'summer', status: 'completed' },
    { name: '❄️ 겨울 스키 + 온천 패키지', target: 28, sent: 0, opened: 0, converted: 0, season: 'winter', status: 'scheduled' },
  ];

  const autoReminders = [
    { company: 'D제약 지점장회의', lastVisit: '2023.10.25', reason: '작년 이맘때 방문', action: '단풍 패키지 제안', status: 'pending' },
    { company: 'F보험 팀빌딩', lastVisit: '2024.04.15', reason: '6개월 미방문', action: '가을 프로모션 안내', status: 'pending' },
    { company: 'H건설 임원회의', lastVisit: '2023.09.20', reason: '연례 행사 주기', action: '맞춤 견적 발송', status: 'sent' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">리텐션 캠페인</h1>
        <p className="text-gray-600">지역 특화 시즌 캠페인(단풍/해돋이) · 자동 리마인더 · 재방문 유도</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">활성 캠페인</div>
          <div className="text-3xl mb-2">3개</div>
          <div className="text-sm text-green-600">타겟 128개 기업</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">평균 오픈율</div>
          <div className="text-3xl mb-2">72%</div>
          <div className="text-sm text-blue-600">업계 평균 대비 +18%</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">전환율</div>
          <div className="text-3xl mb-2">28%</div>
          <div className="text-sm text-orange-600">30건 전환 성공</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">예상 매출</div>
          <div className="text-3xl mb-2">₩285M</div>
          <div className="text-sm text-green-600">캠페인 ROI 380%</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3>시즌별 캠페인</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              <Sparkles className="w-4 h-4" />
              새 캠페인 만들기
            </button>
          </div>

          <div className="space-y-4">
            {campaigns.map((campaign, idx) => (
              <div key={idx} className={`border-l-4 rounded-lg p-6 ${
                campaign.status === 'active' ? 'border-orange-500 bg-orange-50' :
                campaign.status === 'completed' ? 'border-green-500 bg-green-50' :
                'border-gray-500 bg-gray-50'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg mb-2">{campaign.name}</div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        campaign.status === 'active' ? 'bg-orange-100 text-orange-700' :
                        campaign.status === 'completed' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {campaign.status === 'active' ? '진행중' : campaign.status === 'completed' ? '완료' : '예정'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">타겟 {campaign.target}개 기업</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">발송</div>
                    <div className="text-xl">{campaign.sent}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">오픈</div>
                    <div className="text-xl text-blue-600">{campaign.opened}</div>
                    {campaign.sent > 0 && (
                      <div className="text-xs text-gray-500">{Math.round((campaign.opened / campaign.sent) * 100)}%</div>
                    )}
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">전환</div>
                    <div className="text-xl text-green-600">{campaign.converted}</div>
                    {campaign.sent > 0 && (
                      <div className="text-xs text-gray-500">{Math.round((campaign.converted / campaign.sent) * 100)}%</div>
                    )}
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">전환율</div>
                    <div className="text-xl text-orange-600">
                      {campaign.sent > 0 ? `${Math.round((campaign.converted / campaign.sent) * 100)}%` : '-'}
                    </div>
                  </div>
                </div>

                {campaign.status === 'active' && (
                  <button className="px-4 py-2 bg-white border border-orange-300 text-orange-600 rounded-lg text-sm hover:bg-orange-50">
                    캠페인 상세보기
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4">캠페인 성과</h3>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">단풍 시즌 전환</div>
                <div className="text-2xl text-orange-600">12건</div>
                <div className="text-xs text-gray-500 mt-1">타겟 42개 중 28%</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">여름 워터파크</div>
                <div className="text-2xl text-blue-600">18건</div>
                <div className="text-xs text-gray-500 mt-1">타겟 58개 중 31%</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <h3>AI 추천</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              11월 첫째 주에 "해돋이 + 온천" 패키지 캠페인을 실행하면 전환율 약 26% 예상
            </p>
            <button className="text-sm text-purple-600 hover:text-purple-700">
              → 캠페인 자동 생성
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3>자동 리마인더</h3>
          <span className="text-sm text-gray-600">{autoReminders.length}건 대기중</span>
        </div>

        <div className="space-y-3">
          {autoReminders.map((reminder, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">{reminder.company}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      reminder.status === 'sent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {reminder.status === 'sent' ? '발송완료' : '발송대기'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      최근 방문: {reminder.lastVisit}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      {reminder.reason}
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="text-gray-600">제안 액션:</span>
                    <span className="ml-2 text-orange-600">{reminder.action}</span>
                  </div>
                </div>
                {reminder.status === 'pending' && (
                  <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm ml-4">
                    <Send className="w-4 h-4" />
                    이메일 발송
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
