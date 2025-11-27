import { FileText, Plus, Search, Filter, Download, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

export function QuotationsPage() {
  const quotations = [
    {
      id: 'QT-001',
      customerId: 'CUST-045',
      customerName: '테크솔루션 주식회사',
      products: [
        { name: '복합기 (삼성 SL-K4300)', quantity: 3, monthlyFee: '₩15만원' },
        { name: '공기청정기 (다이슨)', quantity: 2, monthlyFee: '₩8만원' }
      ],
      totalMonthlyFee: '₩53만원',
      contractPeriod: 24,
      totalAmount: '₩1,272만원',
      status: 'approved',
      createdDate: '2024-11-20',
      approvedDate: '2024-11-21',
      createdBy: '영업팀 김대리'
    },
    {
      id: 'QT-002',
      customerId: 'CUST-156',
      customerName: '법무법인 정의',
      products: [
        { name: '회의실 프로젝터 (엡손)', quantity: 1, monthlyFee: '₩12만원' },
        { name: '스탠딩 데스크', quantity: 5, monthlyFee: '₩25만원' }
      ],
      totalMonthlyFee: '₩37만원',
      contractPeriod: 36,
      totalAmount: '₩1,332만원',
      status: 'pending',
      createdDate: '2024-11-24',
      approvedDate: null,
      createdBy: '영업팀 이과장'
    },
    {
      id: 'QT-003',
      customerId: 'CUST-089',
      customerName: '디자인 스튜디오 이지',
      products: [
        { name: '사무용 의자 (시디즈 T50)', quantity: 10, monthlyFee: '₩60만원' }
      ],
      totalMonthlyFee: '₩60만원',
      contractPeriod: 12,
      totalAmount: '₩720만원',
      status: 'rejected',
      createdDate: '2024-11-18',
      approvedDate: null,
      createdBy: '영업팀 박대리',
      rejectReason: '계약 기간 협의 필요'
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

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">견적서 관리</h1>
            <p className="text-gray-600">견적서 작성 · 승인/반려 · 계약 전환</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              엑셀 다운로드
            </button>
            <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
              <Plus className="w-4 h-4" />
              견적서 작성
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">총 견적서</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">124건</div>
          <div className="text-xs text-blue-700">이번 달 기준</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-yellow-800">승인 대기</span>
          </div>
          <div className="text-3xl text-yellow-900 mb-1">8건</div>
          <div className="text-xs text-yellow-700">검토 필요</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">승인률</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">87%</div>
          <div className="text-xs text-green-700">이번 달 기준</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">계약 전환율</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">72%</div>
          <div className="text-xs text-purple-700">승인 후 계약 체결</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="견적서 번호, 고객명 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>승인 대기</option>
            <option>승인됨</option>
            <option>반려됨</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>최신순</option>
            <option>금액 높은 순</option>
            <option>금액 낮은 순</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Quotations Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            견적서 목록
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">견적서 번호</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">제품 내역</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">월 렌탈료</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">계약 기간</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">총 계약금액</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">작성자</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {quotations.map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{quote.id}</div>
                    <div className="text-xs text-gray-500">{quote.createdDate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{quote.customerName}</div>
                    <div className="text-xs text-gray-500">{quote.customerId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      {quote.products.map((product, idx) => (
                        <div key={idx} className="text-xs text-gray-600">
                          • {product.name} x{product.quantity}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    {quote.totalMonthlyFee}
                  </td>
                  <td className="px-6 py-4 text-center text-sm">
                    {quote.contractPeriod}개월
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-sm font-bold text-green-600">{quote.totalAmount}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {getStatusBadge(quote.status)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {quote.createdBy}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="상세보기">
                        <Eye className="w-4 h-4" />
                      </button>
                      {quote.status === 'approved' && (
                        <button className="text-xs px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                          계약 전환
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
          ℹ️ <strong>안내:</strong> 견적서 승인 후 계약으로 전환할 수 있습니다. 
          계약 내용을 수정하려면 견적서부터 다시 작성해야 합니다.
        </div>
      </div>
    </>
  );
}
