import { AlertTriangle, Phone, Mail, Ban, Clock, Calendar } from 'lucide-react';

export function OverduePage() {
  const overdueRecords = [
    { 
      id: 'OD-001', 
      customer: '디자인 에이전시 B', 
      contract: 'CT-004', 
      dueDate: '2024-11-15', 
      overdueDays: 11, 
      attempts: 3,
      lastContact: '2024-11-22',
      risk: 'high',
      phone: '010-1234-5678',
      status: 'pending'
    },
    { 
      id: 'OD-002', 
      customer: '회계법인 한울', 
      contract: 'CT-008', 
      dueDate: '2024-11-20', 
      overdueDays: 6, 
      attempts: 2,
      lastContact: '2024-11-24',
      risk: 'medium',
      phone: '010-2345-6789',
      status: 'contacting'
    },
    { 
      id: 'OD-003', 
      customer: '광고대행사 크리에이티브', 
      contract: 'CT-012', 
      dueDate: '2024-10-28', 
      overdueDays: 29, 
      attempts: 8,
      lastContact: '2024-11-18',
      risk: 'critical',
      phone: '010-3456-7890',
      status: 'legal'
    },
  ];

  const getRiskBadge = (risk: string) => {
    const badges = {
      medium: { label: '주의', color: 'bg-yellow-100 text-yellow-700' },
      high: { label: '위험', color: 'bg-orange-100 text-orange-700' },
      critical: { label: '긴급', color: 'bg-red-100 text-red-700' },
    };
    const badge = badges[risk as keyof typeof badges];
    return <span className={`px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>{badge.label}</span>;
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { label: '대기', color: 'bg-gray-100 text-gray-700' },
      contacting: { label: '연락 중', color: 'bg-blue-100 text-blue-700' },
      legal: { label: '법적 조치', color: 'bg-red-100 text-red-700' },
      resolved: { label: '해결됨', color: 'bg-green-100 text-green-700' },
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
            <h1 className="text-3xl mb-2">연체 관리</h1>
            <p className="text-gray-600">연체 기록 조회 · 자동 독촉 · 리스크 관리</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">총 연체 건수</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">11건</div>
          <div className="text-xs text-red-700">전월 대비 -2건</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">평균 연체일</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">18일</div>
          <div className="text-xs text-orange-700">최장 29일</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-yellow-800">해결률</span>
          </div>
          <div className="text-3xl text-yellow-900 mb-1">82%</div>
          <div className="text-xs text-yellow-700">평균 해결 기간 12일</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">자동 독촉</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">156건</div>
          <div className="text-xs text-purple-700">이번 달 발송</div>
        </div>
      </div>

      {/* Critical Alerts */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-2 border-red-300 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-red-100 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 flex items-center gap-2">
              긴급 조치 필요
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">3건</span>
            </h3>
            <p className="text-sm text-gray-600 mb-4">20일 이상 연체 건에 대해 즉시 조치가 필요합니다</p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded-lg border border-red-200">
                <div className="text-sm font-medium mb-1">광고대행사 크리에이티브</div>
                <div className="text-xs text-gray-600 mb-2">연체 29일 · 독촉 8회</div>
                <button className="text-xs text-red-600 hover:text-red-700">
                  → 법적 조치 검토
                </button>
              </div>

              <div className="p-3 bg-white rounded-lg border border-orange-200">
                <div className="text-sm font-medium mb-1">디자인 에이전시 B</div>
                <div className="text-xs text-gray-600 mb-2">연체 11일 · 독촉 3회</div>
                <button className="text-xs text-orange-600 hover:text-orange-700">
                  → 전화 독촉 발송
                </button>
              </div>

              <div className="p-3 bg-white rounded-lg border border-orange-200">
                <div className="text-sm font-medium mb-1">건설회사 대한</div>
                <div className="text-xs text-gray-600 mb-2">연체 15일 · 독촉 5회</div>
                <button className="text-xs text-orange-600 hover:text-orange-700">
                  → 직접 방문 예정
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overdue Records Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              연체 기록
            </h3>
            <div className="flex gap-2">
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <option>전체 리스크</option>
                <option>긴급</option>
                <option>위험</option>
                <option>주의</option>
              </select>
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <option>전체 상태</option>
                <option>대기</option>
                <option>연락 중</option>
                <option>법적 조치</option>
                <option>해결됨</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">연체 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">계약 번호</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">연체 일수</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">납부 기한</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">독촉 횟수</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">최근 연락</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">리스크</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {overdueRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">{record.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{record.customer}</div>
                    <div className="text-xs text-gray-500">{record.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{record.contract}</td>
                  <td className="px-6 py-4 text-center">
                    <div className={`text-sm font-medium ${
                      record.overdueDays > 20 ? 'text-red-600' :
                      record.overdueDays > 10 ? 'text-orange-600' :
                      'text-yellow-600'
                    }`}>
                      {record.overdueDays}일
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.dueDate}</td>
                  <td className="px-6 py-4 text-center text-sm">{record.attempts}회</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.lastContact}</td>
                  <td className="px-6 py-4 text-center">{getRiskBadge(record.risk)}</td>
                  <td className="px-6 py-4 text-center">{getStatusBadge(record.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" title="전화">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-green-600 hover:bg-green-50 rounded" title="이메일">
                        <Mail className="w-4 h-4" />
                      </button>
                      {record.risk === 'critical' && (
                        <button className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="블랙리스트">
                          <Ban className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="text-sm text-blue-800">
          ℹ️ <strong>안내:</strong> 연체 기록은 자동으로 관리되며, 독촉 메시지는 설정된 일정에 따라 자동 발송됩니다.
          20일 이상 연체 시 법적 조치를 검토하시기 바랍니다.
        </div>
      </div>
    </>
  );
}
