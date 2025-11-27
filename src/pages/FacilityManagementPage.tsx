import { Waves, Coffee, Users, Home, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export function FacilityManagementPage() {
  const rooms = [
    { building: '쏘라노 A동', total: 120, occupied: 82, available: 38, reserved: 15 },
    { building: '쏘라노 B동', total: 80, occupied: 54, available: 26, reserved: 8 },
    { building: '별관', total: 60, occupied: 45, available: 15, reserved: 12 },
  ];

  const waterpark = {
    capacity: 500,
    current: 340,
    forecast: [
      { time: '10:00', load: 68 },
      { time: '11:00', load: 75 },
      { time: '12:00', load: 82 },
      { time: '13:00', load: 88 },
      { time: '14:00', load: 92 },
      { time: '15:00', load: 95 },
      { time: '16:00', load: 85 },
      { time: '17:00', load: 72 },
    ],
  };

  const breakfast = [
    { slot: '07:00-08:00', capacity: 400, reserved: 320, available: 80, groups: ['A그룹 인재개발원'] },
    { slot: '08:00-09:00', capacity: 400, reserved: 380, available: 20, groups: ['A그룹', 'C대학교'] },
    { slot: '09:00-10:00', capacity: 400, reserved: 180, available: 220, groups: ['C대학교'] },
  ];

  const meetingRooms = [
    { name: '컨벤션홀 A', capacity: 200, status: '사용중', company: 'A그룹 인재개발원', time: '14:00-18:00' },
    { name: '회의실 B', capacity: 50, status: '예약됨', company: 'F보험', time: '10:00-12:00' },
    { name: '세미나실 C', capacity: 30, status: '가능', company: '-', time: '-' },
    { name: '컨벤션홀 B', capacity: 150, status: '사용중', company: 'G물산', time: '09:00-17:00' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">객실 & 부대시설 배정</h1>
        <p className="text-gray-600">실시간 시설 현황 · 조식 분산 배정 · 워터파크 혼잡도 관리</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Home className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">객실 점유율</span>
          </div>
          <div className="text-3xl mb-2">68%</div>
          <div className="text-sm text-blue-600">181 / 260실</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Waves className="w-5 h-5 text-cyan-500" />
            <span className="text-sm text-gray-600">워터파크 현재</span>
          </div>
          <div className="text-3xl mb-2">68%</div>
          <div className="text-sm text-cyan-600">340 / 500명</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Coffee className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">조식 예약</span>
          </div>
          <div className="text-3xl mb-2">72%</div>
          <div className="text-sm text-orange-600">880 / 1,200석</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-600">회의실 가동</span>
          </div>
          <div className="text-3xl mb-2">75%</div>
          <div className="text-sm text-purple-600">6 / 8개</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6">🏨 객실 현황</h3>
          <div className="space-y-4">
            {rooms.map((room, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg">{room.building}</div>
                  <div className="text-sm text-gray-600">총 {room.total}실</div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="text-sm text-gray-600 mb-1">사용중</div>
                    <div className="text-xl text-blue-600">{room.occupied}</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="text-sm text-gray-600 mb-1">가능</div>
                    <div className="text-xl text-green-600">{room.available}</div>
                  </div>
                  <div className="text-center p-2 bg-yellow-50 rounded">
                    <div className="text-sm text-gray-600 mb-1">예약</div>
                    <div className="text-xl text-yellow-600">{room.reserved}</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(room.occupied / room.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3>🌊 워터파크 혼잡도 예측</h3>
            <div className="text-sm">
              <span className="text-gray-600">현재:</span>
              <span className={`ml-2 ${
                waterpark.current / waterpark.capacity > 0.8 ? 'text-red-600' :
                waterpark.current / waterpark.capacity > 0.6 ? 'text-yellow-600' :
                'text-green-600'
              }`}>
                {Math.round((waterpark.current / waterpark.capacity) * 100)}%
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {waterpark.forecast.map((slot, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1 text-sm">
                  <span className="text-gray-600">{slot.time}</span>
                  <span className={`${
                    slot.load > 80 ? 'text-red-600' :
                    slot.load > 60 ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {slot.load}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      slot.load > 80 ? 'bg-red-500' :
                      slot.load > 60 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${slot.load}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-700 mb-1">혼잡도 경보</div>
                <p className="text-xs text-gray-600">
                  14:00-16:00 시간대 혼잡 예상. C대학교 입장 시간을 10:00으로 조정하면 분산 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6">🍽️ 조식 뷔페 분산 배정</h3>
          <div className="space-y-4">
            {breakfast.map((slot, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-lg">{slot.slot}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    slot.available < 50 ? 'bg-red-100 text-red-700' :
                    slot.available < 150 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {slot.available < 50 ? '만석 임박' : slot.available < 150 ? '보통' : '여유'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
                  <div>
                    <div className="text-gray-600 mb-1">총 좌석</div>
                    <div className="text-lg">{slot.capacity}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">예약</div>
                    <div className="text-lg text-orange-600">{slot.reserved}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">가능</div>
                    <div className="text-lg text-green-600">{slot.available}</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full" 
                    style={{ width: `${(slot.reserved / slot.capacity) * 100}%` }}
                  ></div>
                </div>

                {slot.groups.length > 0 && (
                  <div className="text-xs text-gray-600">
                    예약 단체: {slot.groups.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6">🎯 회의실 & 연회장 현황</h3>
          <div className="space-y-3">
            {meetingRooms.map((room, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-lg mb-1">{room.name}</div>
                    <div className="text-sm text-gray-600">수용 인원: {room.capacity}명</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    room.status === '사용중' ? 'bg-red-100 text-red-700' :
                    room.status === '예약됨' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {room.status}
                  </span>
                </div>

                {room.company !== '-' && (
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{room.company}</span>
                      <span className="text-orange-600">{room.time}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-700 mb-1">배정 최적화</div>
                <p className="text-xs text-gray-600">
                  오늘 모든 회의실이 충돌 없이 배정되었습니다. 내일 예약 3건 대기중.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
