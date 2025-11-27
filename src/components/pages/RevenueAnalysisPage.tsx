import { TrendingUp, DollarSign, Calendar, BarChart3, PieChart } from 'lucide-react';

export function RevenueAnalysisPage() {
  const monthlyRevenue = [
    { month: '6월', revenue: 68.2, growth: 8 },
    { month: '7월', revenue: 72.4, growth: 6 },
    { month: '8월', revenue: 75.8, growth: 5 },
    { month: '9월', revenue: 78.2, growth: 3 },
    { month: '10월', revenue: 81.6, growth: 4 },
    { month: '11월', revenue: 82.4, growth: 1 },
  ];

  const categoryRevenue = [
    { category: '사무기기', revenue: 28.4, percentage: 34.5, color: 'blue' },
    { category: '사무가구', revenue: 22.8, percentage: 27.7, color: 'green' },
    { category: '사무환경', revenue: 16.5, percentage: 20.0, color: 'orange' },
    { category: 'IT장비', revenue: 10.2, percentage: 12.4, color: 'purple' },
    { category: '기타', revenue: 4.5, percentage: 5.4, color: 'gray' },
  ];

  const customerTypeRevenue = [
    { type: 'B2B 대기업', count: 18, revenue: 28.4, avgContract: '₩1,580K' },
    { type: 'B2B 중견기업', count: 35, revenue: 32.6, avgContract: '₩932K' },
    { type: 'B2B 스타트업/소호', count: 50, revenue: 21.4, avgContract: '₩428K' },
  ];

  const topCustomers = [
    { rank: 1, name: '스타트업 A', type: 'B2B', revenue: '₩5.4M', contracts: 24 },
    { rank: 2, name: '행사 기획사 B', type: 'B2B', revenue: '₩3.8M', contracts: 18 },
    { rank: 3, name: '카페 비즈니스', type: 'B2B', revenue: '₩3.2M', contracts: 12 },
    { rank: 4, name: '테크솔루션 주식회사', type: 'B2B', revenue: '₩2.4M', contracts: 8 },
    { rank: 5, name: '건축사무소 다담', type: 'B2B', revenue: '₩1.8M', contracts: 6 },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
      purple: 'bg-purple-500',
      gray: 'bg-gray-500',
    };
    return colors[color];
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">매출 분석</h1>
            <p className="text-gray-600">월별 매출 추이 · 카테고리별 분석 · 고객별 기여도</p>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              <option>최근 6개월</option>
              <option>최근 1년</option>
              <option>올해</option>
              <option>작년</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">이번 달 매출</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">₩82.4M</div>
          <div className="text-xs text-green-700">전월 대비 +1.0%</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">최근 6개월 평균</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">₩76.4M</div>
          <div className="text-xs text-blue-700">꾸준한 상승세</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">연간 목표 달성률</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">112%</div>
          <div className="text-xs text-purple-700">목표 ₩880M 중 ₩986M</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">고객당 평균 매출</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">₩237K</div>
          <div className="text-xs text-orange-700">전월 대비 +5%</div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          월별 매출 추이 (최근 6개월)
        </h3>

        <div className="space-y-4">
          {monthlyRevenue.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium w-12">{item.month}</span>
                  <span className="text-lg font-bold">₩{item.revenue}M</span>
                </div>
                <span className={`text-sm ${item.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {item.growth >= 0 ? '+' : ''}{item.growth}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                  style={{ width: `${(item.revenue / 90) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-sm text-blue-800">
            📈 <strong>인사이트:</strong> 최근 6개월간 평균 4.5% 성장률을 보이며 꾸준히 상승 중입니다. 특히 사무기기 카테고리의 수요 증가가 두드러집니다.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Category Revenue */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-purple-500" />
            카테고리별 매출 비중
          </h3>

          <div className="space-y-4 mb-6">
            {categoryRevenue.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{item.category}</span>
                  <div className="text-right">
                    <div className="text-sm font-medium">₩{item.revenue}M</div>
                    <div className="text-xs text-gray-500">{item.percentage}%</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getColorClasses(item.color)}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">총 매출</span>
              <span className="text-lg font-bold">₩82.4M</span>
            </div>
          </div>
        </div>

        {/* Customer Type Revenue */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-500" />
            고객 유형별 매출
          </h3>

          <div className="space-y-6">
            {customerTypeRevenue.map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-medium mb-1">{item.type}</div>
                    <div className="text-xs text-gray-600">{item.count}개 계정</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">₩{item.revenue}M</div>
                    <div className="text-xs text-gray-600">평균 {item.avgContract}/월</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={idx === 0 ? 'bg-purple-500' : 'bg-blue-500'}
                    style={{ width: `${(item.revenue / 82.4) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="text-sm text-purple-800">
              💼 <strong>인사이트:</strong> B2B 대기업이 전체 매출의 34.5%를 차지하며, 개당 평균 계약금액이 가장 높습니다. 중견기업 대상 마케팅 강화 시 매출 증대 효과 기대됩니다.
            </div>
          </div>
        </div>
      </div>

      {/* Top Customers */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-yellow-500" />
          매출 기여 Top 5 고객
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">순위</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">유형</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">총 매출</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">계약 수</th>
                <th className="px-6 py-4 text-right text-xs uppercase text-gray-600">비중</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topCustomers.map((customer) => (
                <tr key={customer.rank} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm">
                      {customer.rank}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{customer.name}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      customer.type === 'B2B' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {customer.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">{customer.revenue}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{customer.contracts}건</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-600">
                    {((parseFloat(customer.revenue.replace(/[₩MK,]/g, '')) / 82.4) * 100).toFixed(1)}%
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