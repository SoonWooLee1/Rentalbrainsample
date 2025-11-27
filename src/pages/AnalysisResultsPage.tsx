import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

export function AnalysisResultsPage() {
  const seasonalData = [
    { month: '1월', revenue: 45, visits: 8 },
    { month: '2월', revenue: 52, visits: 9 },
    { month: '3월', revenue: 68, visits: 12 },
    { month: '4월', revenue: 75, visits: 14 },
    { month: '5월', revenue: 82, visits: 15 },
    { month: '6월', revenue: 95, visits: 18 },
    { month: '7월', revenue: 125, visits: 24 },
    { month: '8월', revenue: 138, visits: 26 },
    { month: '9월', revenue: 105, visits: 20 },
    { month: '10월', revenue: 142, visits: 28 },
    { month: '11월', revenue: 98, visits: 18 },
    { month: '12월', revenue: 72, visits: 13 },
  ];

  const facilityUsage = [
    { name: '워터파크', value: 78, color: '#06B6D4' },
    { name: '조식 뷔페', value: 102, color: '#F97316' },
    { name: '회의실', value: 65, color: '#A855F7' },
    { name: '연회장', value: 42, color: '#EC4899' },
  ];

  const segmentPerformance = [
    { segment: 'VIP', revenue: 245, count: 23 },
    { segment: 'Premium', revenue: 385, count: 48 },
    { segment: 'Regular', revenue: 285, count: 56 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">고객 분석 결과</h1>
        <p className="text-gray-600">시각화 데이터 · 실행 가능한 인사이트 · 성과 차트</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">연간 총 매출</span>
          </div>
          <div className="text-3xl mb-2">₩1.2B</div>
          <div className="text-sm text-green-600">+18% YoY</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">총 방문</span>
          </div>
          <div className="text-3xl mb-2">205건</div>
          <div className="text-sm text-blue-600">+12% YoY</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">평균 매출/건</span>
          </div>
          <div className="text-3xl mb-2">₩5.9M</div>
          <div className="text-sm text-orange-600">+5% YoY</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-600">피크 시즌</span>
          </div>
          <div className="text-3xl mb-2">10월</div>
          <div className="text-sm text-purple-600">단풍 시즌 효과</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6">월별 매출 & 방문 추이</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#FF7A00" strokeWidth={2} name="매출 (M)" />
              <Line yAxisId="right" type="monotone" dataKey="visits" stroke="#3B82F6" strokeWidth={2} name="방문 건수" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-orange-50 border border-orange-100 rounded-lg">
            <div className="text-sm text-gray-700 mb-2">💡 인사이트</div>
            <p className="text-xs text-gray-600">
              10월 단풍 시즌과 7-8월 여름 워터파크 시즌이 연간 매출의 43%를 차지합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6">세그먼트별 매출 기여도</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={segmentPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="segment" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="revenue" fill="#FF7A00" name="매출 (M)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="count" fill="#3B82F6" name="고객 수" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <div className="text-sm text-gray-700 mb-2">💡 인사이트</div>
            <p className="text-xs text-gray-600">
              Premium 세그먼트가 전체 매출의 42%를 차지하며, 가장 효율적인 타겟 그룹입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6">부대시설 이용 분석</h3>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {facilityUsage.map((facility, idx) => (
              <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 mx-auto mb-3 relative">
                  <svg className="transform -rotate-90 w-20 h-20">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke={facility.color}
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${(facility.value / 102) * 220} 220`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg">{facility.value}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700">{facility.name}</div>
                <div className="text-xs text-gray-500 mt-1">{Math.round((facility.value / 127) * 100)}% 이용</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 border border-cyan-100 rounded-lg">
              <div className="text-sm text-gray-700 mb-2">🌊 워터파크</div>
              <p className="text-xs text-gray-600">
                여름 시즌(6-8월) 집중 이용, 재방문율 높음
              </p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
              <div className="text-sm text-gray-700 mb-2">🍽️ 조식 뷔페</div>
              <p className="text-xs text-gray-600">
                가장 높은 이용률, 고객 만족도 4.7/5.0
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4">고객 만족도</h3>
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">4.6</div>
              <div className="text-sm text-gray-600">평균 평점 (5.0 만점)</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">시설</span>
                <span>4.7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">서비스</span>
                <span>4.5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">청결도</span>
                <span>4.8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">가성비</span>
                <span>4.3</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-orange-50 border border-purple-200 rounded-xl p-6">
            <h3 className="mb-4">주요 개선 포인트</h3>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded-lg">
                <p className="text-gray-700">가성비 개선 필요 (4.3/5.0)</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-gray-700">겨울 시즌 프로그램 확대</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="mb-6">📊 실행 가능한 인사이트</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl">
            <div className="text-lg mb-3">🍂 단풍 시즌 집중 공략</div>
            <p className="text-sm text-gray-700 mb-4">
              10-11월에 연간 매출의 23%가 발생합니다. 사전 예약 캠페인을 9월 초에 시작하면 전환율 32% 증가 예상.
            </p>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
              캠페인 시작하기
            </button>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl">
            <div className="text-lg mb-3">🌊 워터파크 패키지 확대</div>
            <p className="text-sm text-gray-700 mb-4">
              워터파크 이용 고객의 재방문율이 2.3배 높습니다. 객실+워터파크 패키지를 기본으로 제안하세요.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
              패키지 관리
            </button>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl">
            <div className="text-lg mb-3">👥 Premium 세그먼트 육성</div>
            <p className="text-sm text-gray-700 mb-4">
              Regular → Premium 업그레이드 시 LTV가 평균 95% 증가합니다. 맞춤형 특별 혜택을 제공하세요.
            </p>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600">
              타겟 고객 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
