import { Bell, Play, Pause, TrendingUp, Users, Mail, MessageCircle } from 'lucide-react';

export function CampaignsPage() {
  const campaigns = [
    { 
      id: 'CAM-001', 
      name: '이탈 위험 고객 컴백 캠페인', 
      type: '이탈 방지',
      trigger: '90일 이상 미이용',
      status: 'active',
      sent: 18,
      opened: 14,
      converted: 6,
      conversionRate: 33,
      message: '오랜만이에요! 10% 할인 쿠폰으로 다시 만나볼까요?'
    },
    { 
      id: 'CAM-002', 
      name: '재계약 임박 고객 리텐션', 
      type: '재계약 유도',
      trigger: '계약 만료 30일 전',
      status: 'active',
      sent: 8,
      opened: 7,
      converted: 6,
      conversionRate: 75,
      message: '쓰시던 요금 그대로, 최신 모델로 교체해드립니다!'
    },
    { 
      id: 'CAM-003', 
      name: '시즌 맞춤 프로모션', 
      type: '업셀링',
      trigger: '여름 시즌 (6-8월)',
      status: 'scheduled',
      sent: 0,
      opened: 0,
      converted: 0,
      conversionRate: 0,
      message: '여름 캠핑 준비! 얼리버드 할인으로 먼저 예약하세요.'
    },
    { 
      id: 'CAM-004', 
      name: 'VIP 고객 감사 이벤트', 
      type: 'VIP 관리',
      trigger: 'VIP 등급 달성',
      status: 'active',
      sent: 42,
      opened: 40,
      converted: 28,
      conversionRate: 67,
      message: 'VIP 등급 축하드립니다! 특별 혜택을 확인하세요.'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      active: { label: '진행 중', color: 'bg-green-100 text-green-700', icon: <Play className="w-3 h-3" /> },
      paused: { label: '일시 정지', color: 'bg-gray-100 text-gray-700', icon: <Pause className="w-3 h-3" /> },
      scheduled: { label: '예약됨', color: 'bg-blue-100 text-blue-700', icon: <Bell className="w-3 h-3" /> },
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
            <h1 className="text-3xl mb-2">자동 캠페인</h1>
            <p className="text-gray-600">마케팅 시나리오 자동화 · 고객 리텐션</p>
          </div>

          <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
            <Bell className="w-4 h-4" />
            새 캠페인 만들기
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">활성 캠페인</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">8개</div>
          <div className="text-xs text-green-700">실시간 자동 발송</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">이번 달 발송</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">342건</div>
          <div className="text-xs text-blue-700">평균 오픈율 78%</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">전환율</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">42%</div>
          <div className="text-xs text-purple-700">업계 평균 대비 2배</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">재방문 유도</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">+28%</div>
          <div className="text-xs text-orange-700">캠페인 시작 후</div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="space-y-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-xl border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-gray-600">{campaign.id}</span>
                  <h3 className="text-lg font-medium">{campaign.name}</h3>
                  {getStatusBadge(campaign.status)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    {campaign.type}
                  </span>
                  <span className="text-sm text-gray-600">
                    트리거: {campaign.trigger}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                {campaign.status === 'active' ? (
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm">
                    일시 정지
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm">
                    시작하기
                  </button>
                )}
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
                  수정
                </button>
              </div>
            </div>

            {/* Message Preview */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <MessageCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-600 mb-1">메시지 내용</div>
                  <div className="text-sm text-gray-800 italic">"{campaign.message}"</div>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">{campaign.sent}</div>
                <div className="text-xs text-gray-600">발송</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900 mb-1">{campaign.opened}</div>
                <div className="text-xs text-blue-700">오픈</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-900 mb-1">{campaign.converted}</div>
                <div className="text-xs text-green-700">전환</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-900 mb-1">{campaign.conversionRate}%</div>
                <div className="text-xs text-purple-700">전환율</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign System Info */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <Bell className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-purple-900 mb-2">자동 캠페인 시스템</h4>
            <p className="text-xs text-purple-800 leading-relaxed">
              고객 행동 기반 트리거 자동 발송 · 실시간 성과 추적 및 A/B 테스트 · 수동 대비 전환율 2배, 업무 시간 70% 단축
            </p>
          </div>
        </div>
      </div>
    </>
  );
}