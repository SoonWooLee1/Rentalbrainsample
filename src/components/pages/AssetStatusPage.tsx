import { AlertTriangle, CheckCircle, XCircle, Clock, MessageSquare } from 'lucide-react';

export function AssetStatusPage() {
  const quarantinedAssets = [
    { 
      id: 'A-006', 
      name: '커피머신 (구형 모델)', 
      reason: 'AI 감지: 고객 리뷰에서 "고장", "소음" 키워드 3회 발견',
      date: '2024-11-20',
      reviews: [
        { customer: '김민수', comment: '커피가 나오다가 갑자기 멈춰요. 고장난 것 같아요.', date: '2024-11-18' },
        { customer: '이지영', comment: '소음이 너무 심해서 사용하기 어렵습니다.', date: '2024-11-15' },
        { customer: '박철수', comment: '물이 새고 작동이 불안정합니다.', date: '2024-11-10' },
      ],
      status: 'quarantined'
    },
    { 
      id: 'A-007', 
      name: '공유기 (넷기어)', 
      reason: 'AI 감지: "연결 끊김", "느림" 키워드 반복 + 반납 2회 조기',
      date: '2024-11-22',
      reviews: [
        { customer: '최영희', comment: '와이파이가 자꾸 끊겨서 업무에 지장이 있어요.', date: '2024-11-20' },
        { customer: '정대현', comment: '속도가 너무 느려서 사용할 수 없습니다.', date: '2024-11-17' },
      ],
      status: 'quarantined'
    },
  ];

  const maintenanceQueue = [
    { id: 'A-005', name: '정수기 (코웨이)', issue: '필터 교체 필요', estimatedDays: 3, technician: '김기사', status: 'in-progress' },
    { id: 'A-012', name: '공기청정기 (삼성)', issue: '필터 교체 및 청소', estimatedDays: 1, technician: '이기사', status: 'pending' },
    { id: 'A-018', name: '복합기 (HP)', issue: '토너 교체', estimatedDays: 1, technician: '박기사', status: 'in-progress' },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'quarantined': { label: '격리됨 (대여 불가)', color: 'bg-red-100 text-red-700', icon: <XCircle className="w-4 h-4" /> },
      'in-progress': { label: '수리 중', color: 'bg-orange-100 text-orange-700', icon: <Clock className="w-4 h-4" /> },
      'pending': { label: '수리 대기', color: 'bg-yellow-100 text-yellow-700', icon: <AlertTriangle className="w-4 h-4" /> },
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
        <h1 className="text-3xl mb-2">자산 상태 관리</h1>
        <p className="text-gray-600">AI 기반 자동 격리 시스템 · 품질 관리</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">정상 자산</span>
          </div>
          <div className="text-3xl mb-2">497개</div>
          <div className="text-sm text-gray-600">전체의 94%</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">격리됨</span>
          </div>
          <div className="text-3xl mb-2">2개</div>
          <div className="text-sm text-red-600">즉시 점검 필요</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">수리 중</span>
          </div>
          <div className="text-3xl mb-2">3개</div>
          <div className="text-sm text-orange-600">평균 수리 기간 3일</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">AI 모니터링</span>
          </div>
          <div className="text-3xl mb-2">24/7</div>
          <div className="text-sm text-blue-600">실시간 리뷰 분석</div>
        </div>
      </div>

      {/* Quarantined Assets */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <h2 className="text-xl">AI 자동 격리 자산 (대여 불가)</h2>
        </div>

        <div className="space-y-6">
          {quarantinedAssets.map((asset) => (
            <div key={asset.id} className="bg-white rounded-xl border-l-4 border-red-500 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-gray-600">{asset.id}</span>
                      <h3 className="text-lg font-medium">{asset.name}</h3>
                      {getStatusBadge(asset.status)}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">격리 날짜: {asset.date}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm">
                      점검 완료 → 해제
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">
                      폐기 처리
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-red-900 mb-1">AI 감지 사유</div>
                      <div className="text-sm text-red-700">{asset.reason}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-3">고객 리뷰 ({asset.reviews.length}건)</div>
                  <div className="space-y-3">
                    {asset.reviews.map((review, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{review.customer}</span>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <div className="text-sm text-gray-700">{review.comment}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Assets */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-orange-500" />
          <h2 className="text-xl">수리/점검 중인 자산</h2>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">자산 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">자산명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">점검 내용</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">담당 기사</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">예상 완료</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {maintenanceQueue.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm">{asset.id}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{asset.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{asset.issue}</td>
                  <td className="px-6 py-4 text-sm">{asset.technician}</td>
                  <td className="px-6 py-4 text-sm">{asset.estimatedDays}일 후</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(asset.status)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-sm text-orange-600 hover:text-orange-700">
                      진행 상황
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI System Info */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          AI 자동 품질 관리 시스템
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">🤖</div>
            <div className="text-sm mb-1 font-medium">실시간 리뷰 분석</div>
            <div className="text-xs text-gray-600">
              고객 리뷰에서 "고장", "소음", "작동 불량" 등 문제 키워드 자동 감지
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm mb-1 font-medium">자동 격리</div>
            <div className="text-xs text-gray-600">
              문제 의심 시 자동으로 '격리' 상태 전환 → 다른 고객에게 대여 불가 처리
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm mb-1 font-medium">사고 예방</div>
            <div className="text-xs text-gray-600">
              고장난 물건을 체크 못 하고 재대여하는 사고 방지 → 고객 만족도 향상
            </div>
          </div>
        </div>
      </div>
    </>
  );
}