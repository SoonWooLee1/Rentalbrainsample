import { FileCheck, Clock, CheckCircle, XCircle, AlertTriangle, FileText, Gift } from 'lucide-react';

export function ApprovalPage() {
  const approvalItems = [
    {
      id: 'APR-001',
      type: 'quotation',
      title: '테크솔루션 주식회사 - 사무기기 렌탈 견적',
      referenceId: 'QT-002',
      amount: '₩1,332만원',
      requestedBy: '영업팀 이과장',
      requestedDate: '2024-11-24 14:30',
      status: 'pending',
      priority: 'high',
      description: '복합기 3대, 공기청정기 2대 / 계약기간 36개월'
    },
    {
      id: 'APR-002',
      type: 'promotion',
      title: '겨울 시즌 사무환경 패키지 프로모션',
      referenceId: 'PROMO-003',
      amount: '₩450만원',
      requestedBy: '마케팅팀 이대리',
      requestedDate: '2024-11-23 10:15',
      status: 'pending',
      priority: 'medium',
      description: '전체 고객 대상 10% 할인 / 기간: 2024-12-01 ~ 2025-02-28'
    },
    {
      id: 'APR-003',
      type: 'quotation',
      title: '법무법인 정의 - IT장비 렌탈 견적',
      referenceId: 'QT-001',
      amount: '₩1,272만원',
      requestedBy: '영업팀 김대리',
      requestedDate: '2024-11-20 09:00',
      status: 'approved',
      priority: 'high',
      description: '회의실 프로젝터 1대, 스탠딩 데스크 5대 / 계약기간 24개월',
      approvedBy: '이사 김철수',
      approvedDate: '2024-11-21 11:30'
    },
    {
      id: 'APR-004',
      type: 'promotion',
      title: '이탈 위험 고객 컴백 이벤트',
      referenceId: 'PROMO-004',
      amount: '₩680만원',
      requestedBy: 'AI 자동 생성',
      requestedDate: '2024-11-19 08:00',
      status: 'rejected',
      priority: 'low',
      description: '이탈 위험 세그먼트 대상 25% 할인',
      rejectedBy: '마케팅 본부장 박영희',
      rejectedDate: '2024-11-20 16:00',
      rejectReason: '할인율 과다. 15% 이하로 재검토 필요'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'pending': { label: '승인 대기', color: 'bg-yellow-100 text-yellow-700', icon: <Clock className="w-3 h-3" /> },
      'approved': { label: '승인됨', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="w-3 h-3" /> },
      'rejected': { label: '반려됨', color: 'bg-red-100 text-red-700', icon: <XCircle className="w-3 h-3" /> },
    };
    const badge = badges[status as keyof typeof badges];
    return (
      <span className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${badge.color}`}>
        {badge.icon}
        {badge.label}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const badges = {
      'high': { label: '높음', color: 'bg-red-100 text-red-700' },
      'medium': { label: '보통', color: 'bg-blue-100 text-blue-700' },
      'low': { label: '낮음', color: 'bg-gray-100 text-gray-700' },
    };
    const badge = badges[priority as keyof typeof badges];
    return <span className={`px-2 py-1 rounded text-xs ${badge.color}`}>{badge.label}</span>;
  };

  const getTypeIcon = (type: string) => {
    return type === 'quotation' ? (
      <FileText className="w-5 h-5 text-blue-500" />
    ) : (
      <Gift className="w-5 h-5 text-purple-500" />
    );
  };

  const getTypeBadge = (type: string) => {
    return type === 'quotation' ? (
      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">견적서</span>
    ) : (
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">프로모션</span>
    );
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">전자결재</h1>
            <p className="text-gray-600">견적서 승인 · 프로모션 승인 · 결재 이력</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-yellow-800">승인 대기</span>
          </div>
          <div className="text-3xl text-yellow-900 mb-1">2건</div>
          <div className="text-xs text-yellow-700">즉시 처리 필요</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">승인됨</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">42건</div>
          <div className="text-xs text-green-700">이번 달</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">반려됨</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">5건</div>
          <div className="text-xs text-red-700">이번 달</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">승인률</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">89%</div>
          <div className="text-xs text-blue-700">이번 달 기준</div>
        </div>
      </div>

      {/* Pending Approvals - Highlighted */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="w-6 h-6 text-yellow-600" />
          <h3 className="text-lg font-medium">승인 대기 중 ({approvalItems.filter(item => item.status === 'pending').length}건)</h3>
        </div>

        <div className="space-y-4">
          {approvalItems.filter(item => item.status === 'pending').map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-yellow-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeBadge(item.type)}
                      {getPriorityBadge(item.priority)}
                    </div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <div className="text-sm text-gray-600 mb-2">{item.description}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>요청자: {item.requestedBy}</span>
                      <span>요청일: {item.requestedDate}</span>
                      <span>참조번호: {item.referenceId}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">결재 금액</div>
                  <div className="text-xl font-bold text-orange-600">{item.amount}</div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  <CheckCircle className="w-5 h-5" />
                  승인
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  <XCircle className="w-5 h-5" />
                  반려
                </button>
                <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Approvals History */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-orange-500" />
              전체 결재 이력
            </h3>
            <div className="flex gap-2">
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <option>전체 상태</option>
                <option>승인 대기</option>
                <option>승인됨</option>
                <option>반려됨</option>
              </select>
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <option>전체 유형</option>
                <option>견적서</option>
                <option>프로모션</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">결재 번호</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">제목</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">우선순위</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">금액</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">요청자</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">요청일</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {approvalItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{item.id}</div>
                    <div className="text-xs text-gray-500">{item.referenceId}</div>
                  </td>
                  <td className="px-6 py-4">{getTypeBadge(item.type)}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium max-w-xs truncate">{item.title}</div>
                  </td>
                  <td className="px-6 py-4 text-center">{getPriorityBadge(item.priority)}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium">{item.amount}</td>
                  <td className="px-6 py-4 text-sm">{item.requestedBy}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.requestedDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {getStatusBadge(item.status)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.status === 'pending' ? (
                      <div className="flex gap-1 justify-center">
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
