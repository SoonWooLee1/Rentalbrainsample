import { Package, CheckCircle, AlertTriangle, Clock, Wrench, MapPin } from 'lucide-react';

export function ReturnsPage() {
  const returns = [
    { 
      id: 'RT-001', 
      customer: '이지영', 
      contract: 'CT-003',
      asset: '캠핑 텐트 (스노우피크)', 
      returnDate: '2024-12-10',
      returnType: '계약 만료',
      status: 'scheduled',
      condition: 'S',
      location: '서울 강남구',
      notes: ''
    },
    { 
      id: 'RT-002', 
      customer: '박철수', 
      contract: 'CT-004',
      asset: '빔프로젝터 (LG 시네빔)', 
      returnDate: '2024-11-25',
      returnType: '조기 반납',
      status: 'overdue',
      condition: 'B',
      location: '서울 서초구',
      notes: '3일 연체 중 - 연락 두절'
    },
    { 
      id: 'RT-003', 
      customer: '최영희', 
      contract: 'CT-006',
      asset: '공기청정기 (다이슨)', 
      returnDate: '2024-11-28',
      returnType: '계약 만료',
      status: 'completed',
      condition: 'A',
      location: '서울 마포구',
      notes: '상태 양호, 필터 교체 완료'
    },
    { 
      id: 'RT-004', 
      customer: '정대현', 
      contract: 'CT-008',
      asset: '전동킥보드 (나인봇)', 
      returnDate: '2024-12-05',
      returnType: '계약 만료',
      status: 'in-progress',
      condition: 'A',
      location: '서울 송파구',
      notes: '회수 진행 중'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      scheduled: { label: '반납 예정', color: 'bg-blue-100 text-blue-700', icon: <Clock className="w-3 h-3" /> },
      'in-progress': { label: '회수 중', color: 'bg-orange-100 text-orange-700', icon: <Package className="w-3 h-3" /> },
      completed: { label: '완료', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="w-3 h-3" /> },
      overdue: { label: '연체 중', color: 'bg-red-100 text-red-700', icon: <AlertTriangle className="w-3 h-3" /> },
    };
    const badge = badges[status as keyof typeof badges];
    return (
      <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${badge.color}`}>
        {badge.icon}
        {badge.label}
      </span>
    );
  };

  const getConditionBadge = (condition: string) => {
    const colors = {
      S: 'bg-green-100 text-green-700',
      A: 'bg-blue-100 text-blue-700',
      B: 'bg-orange-100 text-orange-700',
      C: 'bg-red-100 text-red-700',
    };
    return <span className={`px-2 py-1 rounded text-xs font-medium ${colors[condition as keyof typeof colors]}`}>{condition}등급</span>;
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">반납 & 회수</h1>
            <p className="text-gray-600">계약 종료 자산 회수 관리 · 상태 점검</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">반납 예정</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">12건</div>
          <div className="text-xs text-blue-700">이번 주 반납 예정</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">회수 중</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">3건</div>
          <div className="text-xs text-orange-700">현재 진행 중</div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-800">반납 연체</span>
          </div>
          <div className="text-3xl text-red-900 mb-1">2건</div>
          <div className="text-xs text-red-700">즉시 회수 필요</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">이번 달 완료</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">48건</div>
          <div className="text-xs text-green-700">평균 S등급 82%</div>
        </div>
      </div>

      {/* Returns Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">반납 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">자산</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">반납 예정일</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">반납 유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">위치</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상태 등급</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">진행 상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {returns.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm">{item.id}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{item.customer}</td>
                  <td className="px-6 py-4 text-sm">{item.asset}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.returnDate}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm px-2 py-1 bg-gray-100 rounded">
                      {item.returnType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">{getConditionBadge(item.condition)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">{getStatusBadge(item.status)}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.status === 'scheduled' ? (
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        회수 예약
                      </button>
                    ) : item.status === 'overdue' ? (
                      <button className="text-sm text-red-600 hover:text-red-700">
                        강제 회수
                      </button>
                    ) : item.status === 'in-progress' ? (
                      <button className="text-sm text-orange-600 hover:text-orange-700">
                        진행 현황
                      </button>
                    ) : (
                      <button className="text-sm text-green-600 hover:text-green-700">
                        점검 보고서
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Return Process */}
      <div className="grid grid-cols-2 gap-6">
        {/* Inspection Checklist */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-500" />
            반납 시 점검 체크리스트
          </h3>

          <div className="space-y-3">
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">외관 상태 점검</span>
              </div>
              <div className="text-xs text-gray-600">긁힘, 파손, 변색 여부 확인</div>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">기능 테스트</span>
              </div>
              <div className="text-xs text-gray-600">정상 작동 여부 확인 (전원, 버튼 등)</div>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">구성품 확인</span>
              </div>
              <div className="text-xs text-gray-600">케이블, 리모컨, 설명서 등 누락 여부</div>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">청소 및 소독</span>
              </div>
              <div className="text-xs text-gray-600">위생 처리 후 재대여 준비</div>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">등급 판정</span>
              </div>
              <div className="text-xs text-gray-600">S/A/B/C 등급 자동 산정 및 기록</div>
            </div>
          </div>
        </div>

        {/* Auto Return System */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-green-900 mb-2">자동 반납 관리 시스템</h4>
              <p className="text-xs text-green-800 leading-relaxed">
                계약 만료 7일 전 반납 안내 발송 · 방문 회수 서비스 (퀵서비스 연동) · 상태 점검 자동 기록 및 즉시 재대여 가능 전환
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}