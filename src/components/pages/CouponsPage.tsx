import { Ticket, Plus, Search, Filter, Download, TrendingUp, Users, Calendar } from 'lucide-react';

export function CouponsPage() {
  const coupons = [
    {
      id: 'CPN-001',
      name: '신규 고객 환영 쿠폰',
      code: 'WELCOME2024',
      discountValue: '15%',
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      usageLimit: 100,
      usedCount: 42,
      status: 'active',
      targetSegment: '신규 고객',
      conditions: '첫 계약 시 사용 가능'
    },
    {
      id: 'CPN-002',
      name: 'VIP 전용 할인',
      code: 'VIP2024',
      discountValue: '20%',
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      usageLimit: 50,
      usedCount: 28,
      status: 'active',
      targetSegment: 'VIP',
      conditions: '모든 제품 적용 가능'
    },
    {
      id: 'CPN-003',
      name: '재계약 감사 쿠폰',
      code: 'RENEW10',
      discountValue: '10%',
      validFrom: '2024-11-01',
      validUntil: '2024-12-31',
      usageLimit: 200,
      usedCount: 156,
      status: 'active',
      targetSegment: '재계약 고객',
      conditions: '재계약 시 자동 적용'
    },
    {
      id: 'CPN-004',
      name: '여름 시즌 특별 할인',
      code: 'SUMMER2024',
      discountValue: '12%',
      validFrom: '2024-06-01',
      validUntil: '2024-08-31',
      usageLimit: 300,
      usedCount: 300,
      status: 'expired',
      targetSegment: '전체 고객',
      conditions: '없음'
    },
  ];

  const couponUsageHistory = [
    {
      id: 'USE-001',
      customerId: 'CUST-045',
      customerName: '테크솔루션 주식회사',
      couponId: 'CPN-001',
      couponName: '신규 고객 환영 쿠폰',
      usedDate: '2024-11-20',
      usedChannel: '웹사이트',
      discountRate: '15%',
      contractId: 'CT-125'
    },
    {
      id: 'USE-002',
      customerId: 'CUST-012',
      customerName: '스타트업 A',
      couponId: 'CPN-002',
      couponName: 'VIP 전용 할인',
      usedDate: '2024-11-18',
      usedChannel: '영업팀',
      discountRate: '20%',
      contractId: 'CT-120'
    },
    {
      id: 'USE-003',
      customerId: 'CUST-089',
      customerName: '디자인 스튜디오 이지',
      couponId: 'CPN-003',
      couponName: '재계약 감사 쿠폰',
      usedDate: '2024-11-15',
      usedChannel: '모바일 앱',
      discountRate: '10%',
      contractId: 'CT-118'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'active': { label: '사용 중', color: 'bg-green-100 text-green-700' },
      'expired': { label: '만료됨', color: 'bg-gray-100 text-gray-700' },
      'paused': { label: '일시정지', color: 'bg-yellow-100 text-yellow-700' },
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
            <h1 className="text-3xl mb-2">쿠폰 관리</h1>
            <p className="text-gray-600">쿠폰 템플릿 관리 · 발급 현황 · 사용 이력</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              엑셀 다운로드
            </button>
            <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
              <Plus className="w-4 h-4" />
              쿠폰 생성
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Ticket className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">활성 쿠폰</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">3개</div>
          <div className="text-xs text-blue-700">총 350장 발급 가능</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">사용률</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">64%</div>
          <div className="text-xs text-green-700">226건 사용 / 350건 발급</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">이번 달 사용</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">42건</div>
          <div className="text-xs text-purple-700">전월 대비 +18%</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">평균 할인율</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">14%</div>
          <div className="text-xs text-orange-700">이번 달 기준</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="쿠폰명, 코드 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>사용 중</option>
            <option>만료됨</option>
            <option>일시정지</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 세그먼트</option>
            <option>신규 고객</option>
            <option>VIP</option>
            <option>재계약 고객</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Coupon Templates Table */}
      <div className="bg-white rounded-xl border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-orange-500" />
            쿠폰 템플릿 목록
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">쿠폰명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">쿠폰 코드</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">할인율</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">사용 현황</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">대상 세그먼트</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">유효기간</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {coupons.map((coupon) => (
                <tr key={coupon.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{coupon.name}</div>
                    <div className="text-xs text-gray-500">{coupon.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">{coupon.code}</code>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium">{coupon.discountValue}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm">
                      {coupon.usedCount} / {coupon.usageLimit}
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                      <div 
                        className="h-full bg-green-500"
                        style={{ width: `${(coupon.usedCount / coupon.usageLimit) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                      {coupon.targetSegment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-gray-600">
                      {coupon.validFrom} ~<br />{coupon.validUntil}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getStatusBadge(coupon.status)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-sm text-orange-600 hover:text-orange-700">
                      수정
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Coupon Usage History */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            쿠폰 사용 이력 (최근)
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">사용 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">쿠폰명</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">할인율</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">사용일</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">사용 채널</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">계약 ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {couponUsageHistory.map((usage) => (
                <tr key={usage.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{usage.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{usage.customerName}</div>
                    <div className="text-xs text-gray-500">{usage.customerId}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{usage.couponName}</td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-green-600">
                    {usage.discountRate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{usage.usedDate}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {usage.usedChannel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{usage.contractId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
