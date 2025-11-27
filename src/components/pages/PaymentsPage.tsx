import { DollarSign, Search, Filter, CheckCircle, Clock, XCircle, Download } from 'lucide-react';

export function PaymentsPage() {
  const payments = [
    { id: 'PAY-001', customer: '테크솔루션 주식회사', contract: 'CT-001', amount: '180만원', dueDate: '2024-12-01', paidDate: '2024-11-28', status: 'paid', method: '자동이체' },
    { id: 'PAY-002', customer: '스타트업 A', contract: 'CT-002', amount: '85만원', dueDate: '2024-12-01', paidDate: '2024-12-01', status: 'paid', method: '계좌이체' },
    { id: 'PAY-003', customer: '로펌 김앤장', contract: 'CT-003', amount: '98만원', dueDate: '2024-12-05', paidDate: null, status: 'pending', method: '자동이체' },
    { id: 'PAY-004', customer: '디자인 에이전시 B', contract: 'CT-004', amount: '42만원', dueDate: '2024-11-15', paidDate: null, status: 'overdue', method: '자동이체' },
    { id: 'PAY-005', customer: '카페 비즈니스', contract: 'CT-005', amount: '68만원', dueDate: '2024-12-01', paidDate: '2024-11-30', status: 'paid', method: '법인카드' },
    { id: 'PAY-006', customer: '건축사무소 다담', contract: 'CT-006', amount: '72만원', dueDate: '2024-12-10', paidDate: null, status: 'pending', method: '자동이체' },
    { id: 'PAY-007', customer: '행사 기획사 B', contract: 'CT-007', amount: '120만원', dueDate: '2024-12-01', paidDate: '2024-12-01', status: 'paid', method: '계좌이체' },
    { id: 'PAY-008', customer: '회계법인 한울', contract: 'CT-008', amount: '95만원', dueDate: '2024-11-20', paidDate: null, status: 'overdue', method: '자동이체' },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      paid: { label: '수납 완료', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="w-3 h-3" /> },
      pending: { label: '수납 대기', color: 'bg-yellow-100 text-yellow-700', icon: <Clock className="w-3 h-3" /> },
      overdue: { label: '연체', color: 'bg-red-100 text-red-700', icon: <XCircle className="w-3 h-3" /> },
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
            <h1 className="text-3xl mb-2">수납 현황</h1>
            <p className="text-gray-600">월별 수납 관리 · 결제 추적</p>
          </div>

          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            수납 리포트 다운로드
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="고객명, 계약 ID로 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>수납 완료</option>
            <option>수납 대기</option>
            <option>연체</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>이번 달</option>
            <option>지난 달</option>
            <option>최근 3개월</option>
          </select>

          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">수납 완료</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">8,240만원</div>
          <div className="text-xs text-green-700">342건 · 목표 대비 112%</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-yellow-800">수납 대기</span>
          </div>
          <div className="text-3xl text-yellow-900 mb-1">420만원</div>
          <div className="text-xs text-yellow-700">18건 · 예정일 내</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">연체</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">280만원</div>
          <div className="text-xs text-red-700">11건 · 평균 18일</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">수납률</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">96.8%</div>
          <div className="text-xs text-blue-700">전월 대비 +2%p</div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">수납 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">계약 ID</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">금액</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">납부 예정일</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">납부일</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">결제 방법</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm">{payment.id}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{payment.customer}</td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm text-gray-600">{payment.contract}</span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">{payment.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.dueDate}</td>
                  <td className="px-6 py-4 text-sm">
                    {payment.paidDate ? (
                      <span className="text-green-600">{payment.paidDate}</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.method}</td>
                  <td className="px-6 py-4">
                    <div className="flex">{getStatusBadge(payment.status)}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {payment.status === 'overdue' ? (
                      <button className="text-sm text-red-600 hover:text-red-700">
                        독촉하기
                      </button>
                    ) : payment.status === 'pending' ? (
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        알림 발송
                      </button>
                    ) : (
                      <button className="text-sm text-gray-600 hover:text-gray-700">
                        영수증
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Auto Collection Info */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-2">자동 수납 시스템</h4>
            <p className="text-xs text-blue-800 leading-relaxed">
              매월 지정일 자동 결제 · 납부 3일 전 알림 발송 · 결제 완료 즉시 반영 및 영수증 자동 발송
            </p>
          </div>
        </div>
      </div>
    </>
  );
}