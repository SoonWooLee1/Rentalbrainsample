import { MessageCircle, Plus, Search, Filter, Download, Phone, Mail, Calendar, User } from 'lucide-react';

export function ConsultationsPage() {
  const consultations = [
    {
      id: 'CONSULT-001',
      customerId: 'CUST-045',
      customerName: '테크솔루션 주식회사',
      consultant: '영업팀 김대리',
      channel: 'phone',
      type: '신규 상담',
      subject: '사무기기 렌탈 문의',
      content: '복합기 3대와 공기청정기 2대 렌탈 희망. 견적서 요청함.',
      date: '2024-11-20 14:30',
      duration: '25분',
      status: 'completed',
      followUp: '견적서 발송 완료',
      tags: ['신규', 'VIP 가능성']
    },
    {
      id: 'CONSULT-002',
      customerId: 'CUST-089',
      customerName: '디자인 스튜디오 이지',
      consultant: 'AS팀 이과장',
      channel: 'email',
      type: 'AS 상담',
      subject: '사무용 의자 등받이 고장',
      content: '등받이가 뒤로 젖혀지지 않는 문제 보고. 교체 또는 수리 요청.',
      date: '2024-11-24 10:15',
      duration: '-',
      status: 'in_progress',
      followUp: 'AS 엔지니어 방문 예정 (11/26)',
      tags: ['AS', '긴급']
    },
    {
      id: 'CONSULT-003',
      customerId: 'CUST-156',
      customerName: '법무법인 정의',
      consultant: '영업팀 이과장',
      channel: 'visit',
      type: '재계약 상담',
      subject: '계약 갱신 및 추가 제품 문의',
      content: '현재 계약 만족도 높음. 추가로 회의실 프로젝터와 스탠딩 데스크 렌탈 희망.',
      date: '2024-11-18 15:00',
      duration: '1시간 10분',
      status: 'completed',
      followUp: '견적서 발송 및 승인 완료',
      tags: ['재계약', 'VIP']
    },
    {
      id: 'CONSULT-004',
      customerId: 'CUST-012',
      customerName: '스타트업 A',
      consultant: '마케팅팀 박대리',
      channel: 'chat',
      type: '프로모션 문의',
      subject: '연말 프로모션 참여 방법',
      content: 'VIP 전용 할인 쿠폰 사용 방법과 적용 가능 제품 문의.',
      date: '2024-11-22 11:30',
      duration: '15분',
      status: 'completed',
      followUp: '쿠폰 발급 완료',
      tags: ['프로모션', 'VIP']
    },
  ];

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'phone':
        return <Phone className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'visit':
        return <User className="w-4 h-4" />;
      case 'chat':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getChannelBadge = (channel: string) => {
    const badges = {
      'phone': { label: '전화', color: 'bg-blue-100 text-blue-700' },
      'email': { label: '이메일', color: 'bg-green-100 text-green-700' },
      'visit': { label: '방문', color: 'bg-purple-100 text-purple-700' },
      'chat': { label: '채팅', color: 'bg-orange-100 text-orange-700' },
    };
    const badge = badges[channel as keyof typeof badges];
    return (
      <span className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${badge.color}`}>
        {getChannelIcon(channel)}
        {badge.label}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      'completed': { label: '완료', color: 'bg-green-100 text-green-700' },
      'in_progress': { label: '진행 중', color: 'bg-blue-100 text-blue-700' },
      'pending': { label: '대기', color: 'bg-yellow-100 text-yellow-700' },
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
            <h1 className="text-3xl mb-2">상담 내역</h1>
            <p className="text-gray-600">고객별 상담 기록 자동 적재 · 상담 이력 관리</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              엑셀 다운로드
            </button>
            <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
              <Plus className="w-4 h-4" />
              상담 등록
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">총 상담</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">1,245건</div>
          <div className="text-xs text-blue-700">전체 기간</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">이번 달</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">156건</div>
          <div className="text-xs text-green-700">전월 대비 +18%</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">평균 응답 시간</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">2.4시간</div>
          <div className="text-xs text-purple-700">목표: 4시간 이내</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">상담 만족도</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">4.6/5.0</div>
          <div className="text-xs text-orange-700">이번 달 평균</div>
        </div>
      </div>

      {/* Channel Distribution */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="mb-6">채널별 상담 현황 (이번 달)</h3>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-blue-800">전화</span>
            </div>
            <div className="text-2xl font-bold text-blue-900 mb-1">68건</div>
            <div className="text-xs text-blue-700">43.6%</div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-800">이메일</span>
            </div>
            <div className="text-2xl font-bold text-green-900 mb-1">42건</div>
            <div className="text-xs text-green-700">26.9%</div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-purple-800">방문</span>
            </div>
            <div className="text-2xl font-bold text-purple-900 mb-1">28건</div>
            <div className="text-xs text-purple-700">17.9%</div>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-orange-800">채팅</span>
            </div>
            <div className="text-2xl font-bold text-orange-900 mb-1">18건</div>
            <div className="text-xs text-orange-700">11.5%</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="고객명, 상담 내용 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 채널</option>
            <option>전화</option>
            <option>이메일</option>
            <option>방문</option>
            <option>채팅</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>전체 상태</option>
            <option>완료</option>
            <option>진행 중</option>
            <option>대기</option>
          </select>

          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>최신순</option>
            <option>오래된 순</option>
            <option>고객명순</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
      </div>

      {/* Consultations Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-orange-500" />
            상담 내역
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상담 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상담 유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">제목</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">채널</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">담당자</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">일시</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {consultations.map((consult) => (
                <tr key={consult.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{consult.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{consult.customerName}</div>
                    <div className="text-xs text-gray-500">{consult.customerId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                      {consult.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium mb-1">{consult.subject}</div>
                    <div className="text-xs text-gray-500 line-clamp-1">{consult.content}</div>
                    {consult.tags.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {consult.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {getChannelBadge(consult.channel)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{consult.consultant}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{consult.date}</div>
                    {consult.duration !== '-' && (
                      <div className="text-xs text-gray-500">소요: {consult.duration}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getStatusBadge(consult.status)}
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

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="text-sm text-blue-800">
          ℹ️ <strong>자동 적재:</strong> 고객과의 모든 상담 내역은 자동으로 시스템에 기록됩니다. 
          상담 이력을 통해 고객 관리 및 서비스 품질을 향상시킬 수 있습니다.
        </div>
      </div>
    </>
  );
}
