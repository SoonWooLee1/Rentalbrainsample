import { Wrench, Calendar, CheckCircle, Clock, AlertTriangle, User } from 'lucide-react';

export function MaintenancePage() {
  const maintenanceRecords = [
    { 
      id: 'AS-001', 
      customer: '테크솔루션 주식회사', 
      asset: '복합기 3대 (삼성 SL-K4300)', 
      type: '정기 점검', 
      scheduledDate: '2024-12-05',
      time: '14:00',
      technician: '김기사',
      status: 'scheduled',
      lastMaintenance: '2024-09-05',
      cycle: '3개월'
    },
    { 
      id: 'AS-002', 
      customer: '법무법인 정의', 
      asset: '파쇄기 2대, 정수기 3대', 
      type: '정기 점검', 
      scheduledDate: '2024-12-03',
      time: '10:00',
      technician: '이기사',
      status: 'in-progress',
      lastMaintenance: '2024-11-03',
      cycle: '1개월'
    },
    { 
      id: 'AS-003', 
      customer: '디자인 스튜디오 이지', 
      asset: '공기청정기 5대 (다이슨)', 
      type: '필터 교체', 
      scheduledDate: '2024-12-01',
      time: '15:00',
      technician: '박기사',
      status: 'completed',
      lastMaintenance: '2024-06-01',
      cycle: '6개월'
    },
    { 
      id: 'AS-004', 
      customer: '광고대행사 크리에이티브', 
      asset: '회의실 프로젝터 2대', 
      type: '정기 점검', 
      scheduledDate: '2024-12-08',
      time: '09:00',
      technician: '김기사',
      status: 'scheduled',
      lastMaintenance: '2024-09-08',
      cycle: '3개월'
    },
    { 
      id: 'AS-005', 
      customer: 'IT 컨설팅 브릿지', 
      asset: '스탠딩 데스크 8개, 모니터 16대', 
      type: '정기 점검', 
      scheduledDate: '2024-12-10',
      time: '13:00',
      technician: '이기사',
      status: 'scheduled',
      lastMaintenance: '2024-08-10',
      cycle: '4개월'
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      scheduled: { label: '예정', color: 'bg-blue-100 text-blue-700', icon: <Calendar className="w-3 h-3" /> },
      'in-progress': { label: '진행 중', color: 'bg-orange-100 text-orange-700', icon: <Clock className="w-3 h-3" /> },
      completed: { label: '완료', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="w-3 h-3" /> },
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
            <h1 className="text-3xl mb-2">정기 점검 (AS)</h1>
            <p className="text-gray-600">정기 점검 일정 관리 · 자동 배정</p>
          </div>

          <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
            <Calendar className="w-4 h-4" />
            점검 일정 추가
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800">이번 주 예정</span>
          </div>
          <div className="text-3xl text-blue-900 mb-1">24건</div>
          <div className="text-xs text-blue-700">자동 배정 완료</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-800">진행 중</span>
          </div>
          <div className="text-3xl text-orange-900 mb-1">8건</div>
          <div className="text-xs text-orange-700">현재 작업 중</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">이번 달 완료</span>
          </div>
          <div className="text-3xl text-green-900 mb-1">142건</div>
          <div className="text-xs text-green-700">만족도 4.8/5.0</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-800">평균 소요 시간</span>
          </div>
          <div className="text-3xl text-purple-900 mb-1">45분</div>
          <div className="text-xs text-purple-700">목표 60분 이내</div>
        </div>
      </div>

      {/* Maintenance Schedule */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">점검 ID</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">고객명</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">자산</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">점검 유형</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">예정일</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">시간</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">담당 기사</th>
                <th className="px-6 py-4 text-left text-xs uppercase text-gray-600">상태</th>
                <th className="px-6 py-4 text-center text-xs uppercase text-gray-600">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {maintenanceRecords.map((maintenance) => (
                <tr key={maintenance.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm">{maintenance.id}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{maintenance.customer}</td>
                  <td className="px-6 py-4 text-sm">{maintenance.asset}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm px-2 py-1 bg-gray-100 rounded">
                      {maintenance.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{maintenance.scheduledDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{maintenance.time}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{maintenance.technician}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">{getStatusBadge(maintenance.status)}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {maintenance.status === 'scheduled' ? (
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        일정 변경
                      </button>
                    ) : maintenance.status === 'in-progress' ? (
                      <button className="text-sm text-orange-600 hover:text-orange-700">
                        진행 현황
                      </button>
                    ) : (
                      <button className="text-sm text-green-600 hover:text-green-700">
                        보고서
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maintenance Cycle Info */}
      <div className="grid grid-cols-2 gap-6">
        {/* Upcoming Maintenance */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            점검 주기 관리
          </h3>

          <div className="space-y-3">
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">주의 필요</span>
                <span className="text-xs text-orange-600">8개 자산</span>
              </div>
              <div className="text-xs text-gray-600">점검 주기 초과된 자산 즉시 확인 필요</div>
            </div>

            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">정상 관리 중</span>
                <span className="text-xs text-green-600">520개 자산</span>
              </div>
              <div className="text-xs text-gray-600">정기 점검 주기에 맞춰 관리 중</div>
            </div>
          </div>
        </div>

        {/* Auto Scheduling System */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-green-900 mb-2">자동 점검 시스템</h4>
              <p className="text-xs text-green-800 leading-relaxed">
                계약 조건에 따라 정기 점검 일정 자동 생성 및 기사 배정 · 점검 3일 전 고객 알림 · 완료 후 보고서 및 만족도 조사 자동 발송
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}