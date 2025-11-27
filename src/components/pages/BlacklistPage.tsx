import { AlertTriangle, Ban, Clock, DollarSign, MessageCircle } from 'lucide-react';

export function BlacklistPage() {
  const blacklistCustomers = [
    { 
      id: 'C-004', 
      name: '디자인 에이전시 스튜디오B', 
      reason: '잦은 파손 + 책임 회피',
      incidents: [
        { date: '2024-10-15', type: 'damage', detail: '복합기 파손 후 연락 두절 (3일간)', amount: '85만원' },
        { date: '2024-09-08', type: 'overdue', detail: '렌탈료 30일 연체 후 강제 회수', amount: '12만원' },
      ],
      totalDamage: '97만원',
      status: 'blocked',
      addedDate: '2024-10-20'
    },
    {
      id: 'C-028',
      name: '마케팅 컴퍼니 플러스',
      reason: '고의적 파손 의심',
      incidents: [
        { date: '2024-11-01', type: 'damage', detail: '사무용 의자 5개 파손 - 고의 파손 의심', amount: '125만원' },
        { date: '2024-10-12', type: 'complaint', detail: '과도한 클레임 제기 (5회)', amount: '-' },
      ],
      totalDamage: '125만원',
      status: 'warning',
      addedDate: '2024-11-05'
    },
    {
      id: 'C-042',
      name: '건설 컨설팅 그룹',
      reason: '반복 연체 + 연락 두절',
      incidents: [
        { date: '2024-10-28', type: 'overdue', detail: '45일 연체 후 법적 조치 진행 중', amount: '68만원' },
        { date: '2024-09-15', type: 'overdue', detail: '20일 연체', amount: '22만원' },
      ],
      totalDamage: '90만원',
      status: 'legal',
      addedDate: '2024-10-28'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      blocked: { label: '대여 차단', color: 'bg-red-100 text-red-700', icon: <Ban className="w-3 h-3" /> },
      warning: { label: '경고 (제한적 대여)', color: 'bg-orange-100 text-orange-700', icon: <AlertTriangle className="w-3 h-3" /> },
      legal: { label: '법적 조치 중', color: 'bg-purple-100 text-purple-700', icon: <Clock className="w-3 h-3" /> },
    };
    const badge = badges[status as keyof typeof badges];
    return (
      <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${badge.color}`}>
        {badge.icon}
        {badge.label}
      </span>
    );
  };

  const getIncidentIcon = (type: string) => {
    const icons = {
      damage: { icon: <AlertTriangle className="w-4 h-4 text-red-500" />, label: '파손' },
      overdue: { icon: <DollarSign className="w-4 h-4 text-orange-500" />, label: '연체' },
      complaint: { icon: <MessageCircle className="w-4 h-4 text-yellow-500" />, label: '클레임' },
    };
    return icons[type as keyof typeof icons];
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl mb-2">블랙리스트 관리</h1>
            <p className="text-gray-600">문제 고객 식별 · 리스크 방지</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <Ban className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">대여 차단</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">3명</div>
          <div className="text-xs text-red-700">영구 차단 또는 임시 제한</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">총 손실액</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">230만원</div>
          <div className="text-xs text-orange-700">파손 및 연체 합계</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">법적 조치</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">1건</div>
          <div className="text-xs text-purple-700">진행 중</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">사전 방지</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">94%</div>
          <div className="text-xs text-blue-700">AI 기반 위험 감지율</div>
        </div>
      </div>

      {/* Blacklist Table */}
      <div className="space-y-6">
        {blacklistCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-xl border-l-4 border-red-500 overflow-hidden">
            <div className="p-6">
              {/* Customer Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-gray-600">{customer.id}</span>
                    <h3 className="text-lg font-medium">{customer.name}</h3>
                    {getStatusBadge(customer.status)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>등록일: {customer.addedDate}</span>
                    <span>•</span>
                    <span className="text-red-600 font-medium">총 손실: {customer.totalDamage}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                    제한 해제
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm">
                    상세보기
                  </button>
                </div>
              </div>

              {/* Reason */}
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
                <div className="flex items-start gap-2">
                  <Ban className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-red-900 mb-1">차단 사유</div>
                    <div className="text-sm text-red-700">{customer.reason}</div>
                  </div>
                </div>
              </div>

              {/* Incident History */}
              <div>
                <div className="text-sm font-medium mb-3">사고 내역 ({customer.incidents.length}건)</div>
                <div className="space-y-3">
                  {customer.incidents.map((incident, idx) => {
                    const incidentInfo = getIncidentIcon(incident.type);
                    return (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">{incidentInfo.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs px-2 py-1 bg-white border border-gray-300 rounded">
                                  {incidentInfo.label}
                                </span>
                                <span className="text-xs text-gray-500">{incident.date}</span>
                              </div>
                              {incident.amount !== '-' && (
                                <span className="text-sm font-medium text-red-600">{incident.amount}</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-700">{incident.detail}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Prevention System */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-blue-600" />
          AI 기반 리스크 사전 감지 시스템
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm mb-1 font-medium">조기 경보</div>
            <div className="text-xs text-gray-600">
              연체 패턴, 파손 이력 등을 분석하여 블랙리스트 위험군을 사전 식별
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">🛡️</div>
            <div className="text-sm mb-1 font-medium">동 제한</div>
            <div className="text-xs text-gray-600">
              위험도가 높은 고객에게는 보증금 상향 또는 고가 제품 대여 제한 적용
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">💰</div>
            <div className="text-sm mb-1 font-medium">손실 최소화</div>
            <div className="text-xs text-gray-600">
              블랙리스트 시스템 도입 후 파손/연체로 인한 손실 68% 감소
            </div>
          </div>
        </div>
      </div>
    </>
  );
}