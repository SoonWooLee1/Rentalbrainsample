import { Download, TrendingUp, Users, DollarSign, Star, Calendar, BarChart3 } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function ReportsPage() {
  const salesData = [
    { month: 'Q1', total: 165, vip: 62, premium: 68, regular: 35 },
    { month: 'Q2', total: 252, vip: 95, premium: 98, regular: 59 },
    { month: 'Q3', total: 368, vip: 138, premium: 142, regular: 88 },
    { month: 'Q4', total: 415, vip: 156, premium: 168, regular: 91 },
  ];

  const teamPerformance = [
    { name: '김영수 매니저', deals: 28, revenue: '₩285M', conversion: '82%', satisfaction: 4.8 },
    { name: '이지은 매니저', deals: 24, revenue: '₩242M', conversion: '75%', satisfaction: 4.7 },
    { name: '박민호 매니저', deals: 22, revenue: '₩218M', conversion: '71%', satisfaction: 4.6 },
    { name: '최수진 매니저', deals: 19, revenue: '₩195M', conversion: '68%', satisfaction: 4.5 },
  ];

  const satisfactionTrends = [
    { month: '1월', score: 4.3 },
    { month: '2월', score: 4.4 },
    { month: '3월', score: 4.5 },
    { month: '4월', score: 4.6 },
    { month: '5월', score: 4.5 },
    { month: '6월', score: 4.7 },
    { month: '7월', score: 4.8 },
    { month: '8월', score: 4.7 },
    { month: '9월', score: 4.6 },
    { month: '10월', score: 4.8 },
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl mb-2">리포트 & 통계</h1>
            <p className="text-gray-600">매출 분석 · 세그먼트별 성과 · 고객 만족도 · 영업팀 성과</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            <Download className="w-4 h-4" />
            전체 리포트 다운로드
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">연간 총 매출</span>
          </div>
          <div className="text-3xl mb-2">₩1.2B</div>
          <div className="text-sm text-green-600">목표 대비 112%</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">신규 고객</span>
          </div>
          <div className="text-3xl mb-2">32개</div>
          <div className="text-sm text-blue-600">전년 대비 +28%</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">재방문율</span>
          </div>
          <div className="text-3xl mb-2">64%</div>
          <div className="text-sm text-orange-600">+8%p 증가</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">평균 만족도</span>
          </div>
          <div className="text-3xl mb-2">4.6</div>
          <div className="text-sm text-yellow-600">5.0 만점 기준</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3>분기별 매출 분석</h3>
            <button className="text-sm text-orange-600 hover:text-orange-700">상세보기</button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="vip" stackId="a" fill="#A855F7" name="VIP" />
              <Bar dataKey="premium" stackId="a" fill="#FF7A00" name="Premium" />
              <Bar dataKey="regular" stackId="a" fill="#3B82F6" name="Regular" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">Q4 목표 달성률</span>
              <span className="text-green-600">112%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3>고객 만족도 추이</h3>
            <button className="text-sm text-orange-600 hover:text-orange-700">상세보기</button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={satisfactionTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[4.0, 5.0]} tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Line type="monotone" dataKey="score" stroke="#FF7A00" strokeWidth={3} dot={{ fill: '#FF7A00', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">평균 만족도</span>
              <span className="text-yellow-600">4.6 / 5.0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3>영업팀 성과 리더보드</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>2024년 누적</span>
          </div>
        </div>

        <div className="space-y-3">
          {teamPerformance.map((member, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                    idx === 0 ? 'bg-yellow-500' : idx === 1 ? 'bg-gray-400' : idx === 2 ? 'bg-orange-600' : 'bg-blue-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-lg">{member.name}</div>
                    <div className="text-sm text-gray-600">{member.deals}건 성사</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl text-orange-600 mb-1">{member.revenue}</div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{member.satisfaction}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-200 text-sm">
                <div>
                  <div className="text-gray-600 mb-1">성사 건수</div>
                  <div className="text-lg">{member.deals}건</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">전환율</div>
                  <div className="text-lg text-green-600">{member.conversion}</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">만족도</div>
                  <div className="text-lg text-yellow-600">{member.satisfaction}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4">세그먼트별 기여도</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-600">VIP</span>
                <span className="text-purple-600">₩451M (38%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-600">Premium</span>
                <span className="text-orange-600">₩476M (40%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-600">Regular</span>
                <span className="text-blue-600">₩273M (22%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4">지역별 선호도</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span>🍂 설악 (단풍)</span>
              <span className="text-orange-600">45%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span>🌊 속초 (해변)</span>
              <span className="text-blue-600">32%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span>⛷️ 평창 (스키)</span>
              <span className="text-purple-600">23%</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-orange-500" />
            <h3>핵심 성과 지표</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">평균 LTV</span>
                <span className="text-orange-600">₩8.2M</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">계약 전환율</span>
                <span className="text-green-600">68%</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">리텐션율</span>
                <span className="text-blue-600">64%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
