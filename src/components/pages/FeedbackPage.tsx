import { MessageSquare, AlertTriangle, Plus, Search, Filter, Download, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export function FeedbackPage() {
  const feedbackItems = [
    {
      id: 'FB-001',
      type: 'feedback',
      customerId: 'CUST-045',
      customerName: '테크솔루션 주식회사',
      productCategory: '복합기',
      title: '복합기 성능 매우 만족',
      content: '인쇄 속도가 빠르고 품질도 좋습니다. 직원들 만족도가 높아요.',
      rating: 5,
      status: 'resolved',
      createdDate: '2024-11-20',
      resolvedDate: '2024-11-21',
      assignee: '고객지원팀 김대리'
    },
    {
      id: 'FB-002',
      type: 'complaint',
      customerId: 'CUST-089',
      customerName: '디자인 스튜디오 이지',
      productCategory: '사무용 의자',
      title: '의자 등받이 고장',
      content: '사용한 지 3개월 만에 등받이가 뒤로 젖혀지지 않습니다. 빠른 조치 부탁드립니다.',
      rating: 2,
      status: 'in_progress',
      createdDate: '2024-11-24',
      resolvedDate: null,
      assignee: 'AS팀 이과장'
    },
    {
      id: 'FB-003',
      type: 'complaint',
      customerId: 'CUST-156',
      customerName: '법무법인 정의',
      productCategory: '공기청정기',
      title: '소음이 예상보다 큽니다',
      content: '사무실에서 사용하기에 소음이 조금 큰 편입니다. 다른 모델로 교체 가능한가요?',
      rating: 3,
      status: 'pending',
      createdDate: '2024-11-25',
      resolvedDate: null,
      assignee: null
    },
    {
      id: 'FB-004',
      type: 'feedback',
      customerId: 'CUST-012',
      customerName: '스타트업 A',
      productCategory: '스탠딩 데스크',
      title: '스탠딩 데스크 추천합니다',
      content: '직원들 건강 관리에 도움이 되고 생산성도 향상되었습니다.',
      rating: 5,
      status: 'resolved',
      createdDate: '2024-11-18',
      resolvedDate: '2024-11-19',
      assignee: '고객지원팀 박대리'
    },
  ];

  const surveys = [
    {
      id: 'SURVEY-001',
      title: '2024년 4분기 고객 만족도 조사',
      status: 'active',
      startDate: '2024-11-01',
      endDate: '2024-11-30',
      responseCount: 42,
      targetCount: 100,
      avgRating: 4.2
    },
    {
      id: 'SURVEY-002',
      title: '신규 제품 니즈 조사',
      status: 'active',
      startDate: '2024-11-15',
      endDate: '2024-12-15',
      responseCount: 28,
      targetCount: 80,
      avgRating: 0
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      'pending': { label: '대기 중', color: 'bg-yellow-100 text-yellow-700' },
      'in_progress': { label: '처리 중', color: 'bg-blue-100 text-blue-700' },
      'resolved': { label: '해결됨', color: 'bg-green-100 text-green-700' },
      'closed': { label: '종료', color: 'bg-gray-100 text-gray-700' },
    };
    const badge = badges[status as keyof typeof badges];
    return <span className={`px-2 py-1 rounded text-xs ${badge.color}`}>{badge.label}</span>;
  };

  const getTypeBadge = (type: string) => {
    return type === 'feedback' ? 
      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">피드백</span> :
      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">컴플레인</span>;
  };

  const getRatingStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= rating ? 'text-yellow-500' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">피드백 & 컴플레인 관리</h1>
            <p className="text-gray-600">고객 의견 · 불편사항 · 설문조사</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              리포트 다운로드
            </button>
            <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
              <Plus className="w-4 h-4" />
              설문조사 생성
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">피드백</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">156건</div>
          <div className="text-xs text-green-700">평균 평점 4.3/5.0</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">컴플레인</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">28건</div>
          <div className="text-xs text-red-700">미처리 2건</div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">평균 처리 시간</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">1.2일</div>
          <div className="text-xs text-blue-700">목표: 2일 이내</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">해결률</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">92%</div>
          <div className="text-xs text-purple-700">지난 30일 기준</div>
        </div>
      </div>

      {/* Active Surveys */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            진행 중인 설문조사
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {surveys.map((survey) => (
            <div key={survey.id} className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium mb-1">{survey.title}</h4>
                  <div className="text-xs text-gray-500">{survey.id}</div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">진행 중</span>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">응답률</span>
                    <span className="font-medium">{survey.responseCount} / {survey.targetCount}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500"
                      style={{ width: `${(survey.responseCount / survey.targetCount) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">기간</span>
                  <span>{survey.startDate} ~ {survey.endDate}</span>
                </div>

                {survey.avgRating > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">평균 평점</span>
                    <span className="font-medium">{survey.avgRating}/5.0</span>
                  </div>
                )}
              </div>

              <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600">
                결과 보기
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="고객명, 제목 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 유형</option>
            <option>피드백</option>
            <option>컴플레인</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>대기 중</option>
            <option>처리 중</option>
            <option>해결됨</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Feedback/Complaint Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-orange-500" />
            피드백 & 컴플레인 목록
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">제목</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">제품 카테고리</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">평점</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">담당자</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {feedbackItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{item.id}</td>
                  <td className="px-6 py-4">{getTypeBadge(item.type)}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{item.customerName}</div>
                    <div className="text-xs text-gray-500">{item.customerId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-xs text-gray-500 line-clamp-1">{item.content}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {item.productCategory}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {getRatingStars(item.rating)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.assignee || '-'}
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
      </div>
    </>
  );
}
