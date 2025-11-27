import { Activity, MousePointerClick, Eye, Calendar, TrendingUp, Users, Target } from 'lucide-react';

export function CustomerBehaviorPage() {
  const behaviorData = [
    {
      id: 'BEH-001',
      customerId: 'CUST-045',
      customerName: '테크솔루션 주식회사',
      segment: 'VIP',
      activityType: 'website_visit',
      activityName: '제품 상세 페이지 방문',
      page: '/products/copier-samsung',
      timestamp: '2024-11-25 14:35',
      duration: '3분 24초',
      device: '데스크톱'
    },
    {
      id: 'BEH-002',
      customerId: 'CUST-012',
      customerName: '스타트업 A',
      segment: '대량 도입형',
      activityType: 'event_participation',
      activityName: '웨비나 참여',
      page: '/events/office-setup-webinar',
      timestamp: '2024-11-25 10:00',
      duration: '45분',
      device: '데스크톱'
    },
    {
      id: 'BEH-003',
      customerId: 'CUST-089',
      customerName: '디자인 스튜디오 이지',
      segment: '이탈 위험',
      activityType: 'click',
      activityName: '쿠폰 클릭',
      page: '/promotions/comeback-event',
      timestamp: '2024-11-24 16:20',
      duration: '1분 15초',
      device: '모바일'
    },
    {
      id: 'BEH-004',
      customerId: 'CUST-156',
      customerName: '법무법인 정의',
      segment: 'VIP',
      activityType: 'website_visit',
      activityName: '견적 요청 페이지',
      page: '/quote/request',
      timestamp: '2024-11-24 11:45',
      duration: '5분 12초',
      device: '데스크톱'
    },
  ];

  const ltvPredictions = [
    {
      customerId: 'CUST-045',
      customerName: '테크솔루션 주식회사',
      currentLTV: '₩840만원',
      predictedLTV: '₩1,280만원',
      confidence: 87,
      behaviorScore: 92,
      engagementLevel: 'high',
      predictedChurnRate: 8
    },
    {
      customerId: 'CUST-012',
      customerName: '스타트업 A',
      currentLTV: '₩5.4M',
      predictedLTV: '₩7.8M',
      confidence: 82,
      behaviorScore: 88,
      engagementLevel: 'high',
      predictedChurnRate: 12
    },
    {
      customerId: 'CUST-089',
      customerName: '디자인 스튜디오 이지',
      currentLTV: '₩2.4M',
      predictedLTV: '₩1.8M',
      confidence: 75,
      behaviorScore: 42,
      engagementLevel: 'low',
      predictedChurnRate: 68
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'website_visit':
        return <Eye className="w-4 h-4" />;
      case 'click':
        return <MousePointerClick className="w-4 h-4" />;
      case 'event_participation':
        return <Calendar className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getEngagementBadge = (level: string) => {
    const badges = {
      'high': { label: '높음', color: 'bg-green-100 text-green-700' },
      'medium': { label: '보통', color: 'bg-blue-100 text-blue-700' },
      'low': { label: '낮음', color: 'bg-red-100 text-red-700' },
    };
    const badge = badges[level as keyof typeof badges];
    return <span className={`px-2 py-1 rounded text-xs ${badge.color}`}>{badge.label}</span>;
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">고객 행동 데이터</h1>
            <p className="text-gray-600">웹사이트 방문 · 클릭 · 이벤트 참여 · LTV 예측</p>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              <option>오늘</option>
              <option>최근 7일</option>
              <option>최근 30일</option>
              <option>전체</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">총 활동</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">2,456건</div>
          <div className="text-xs text-blue-700">최근 30일</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">활성 사용자</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">87명</div>
          <div className="text-xs text-green-700">이번 주 기준</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">평균 LTV</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">468만원</div>
          <div className="text-xs text-purple-700">전월 대비 +12%</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">참여율</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">68%</div>
          <div className="text-xs text-orange-700">이벤트/프로모션</div>
        </div>
      </div>

      {/* LTV Predictions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-500" />
          고객 생애 가치 (LTV) 예측
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">현재 LTV</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">예상 LTV</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">신뢰도</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">행동 점수</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">참여도</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">이탈 위험</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ltvPredictions.map((pred) => (
                <tr key={pred.customerId} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{pred.customerName}</div>
                    <div className="text-xs text-gray-500">{pred.customerId}</div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm">{pred.currentLTV}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium text-green-600">{pred.predictedLTV}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-sm font-medium">{pred.confidence}%</div>
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500"
                          style={{ width: `${pred.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium">{pred.behaviorScore}/100</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getEngagementBadge(pred.engagementLevel)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className={`text-sm font-medium ${
                      pred.predictedChurnRate < 20 ? 'text-green-600' :
                      pred.predictedChurnRate < 50 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {pred.predictedChurnRate}%
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-sm text-orange-600 hover:text-orange-700">
                      상세보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="text-sm text-purple-800">
            🤖 <strong>AI 인사이트:</strong> 고객 행동 데이터를 기반으로 LTV를 예측합니다. 
            행동 점수가 높고 참여도가 높은 고객일수록 LTV 상승 가능성이 높습니다.
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-500" />
            최근 고객 활동
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">활동 유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">활동 내용</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">페이지</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">체류 시간</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">일시</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">디바이스</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {behaviorData.map((behavior) => (
                <tr key={behavior.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{behavior.customerName}</div>
                    <div className="text-xs text-gray-500">{behavior.customerId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getActivityIcon(behavior.activityType)}
                      <span className="text-sm capitalize">
                        {behavior.activityType.replace('_', ' ')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{behavior.activityName}</td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">{behavior.page}</code>
                  </td>
                  <td className="px-6 py-4 text-center text-sm">{behavior.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{behavior.timestamp}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {behavior.device}
                    </span>
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
