import { Calendar, ChevronLeft, ChevronRight, Clock, Users, MapPin, Waves, Coffee, UtensilsCrossed } from 'lucide-react';

export function ReservationPage() {
  const upcomingReservations = [
    {
      company: 'A그룹 인재개발원',
      dates: '10월 21-23일',
      people: 200,
      rooms: '쏘라노 A동 (50실)',
      facilities: ['워터파크', '조식', '연회장 B홀'],
      status: '확정',
      checkIn: '14:00',
    },
    {
      company: 'C대학교 경영대 MT',
      dates: '10월 23-24일',
      people: 120,
      rooms: '별관 (30실)',
      facilities: ['워터파크', '조식'],
      status: '확정',
      checkIn: '15:00',
    },
    {
      company: 'F보험 팀빌딩',
      dates: '10월 25-26일',
      people: 80,
      rooms: '쏘라노 B동 (20실)',
      facilities: ['조식', '회의실 A'],
      status: '가예약',
      checkIn: '14:00',
    },
  ];

  const calendarDays = [
    { date: 18, events: 0 },
    { date: 19, events: 0 },
    { date: 20, events: 1 },
    { date: 21, events: 2, highlight: true },
    { date: 22, events: 2, highlight: true },
    { date: 23, events: 3, highlight: true },
    { date: 24, events: 1 },
    { date: 25, events: 2, highlight: true },
    { date: 26, events: 1 },
    { date: 27, events: 0 },
    { date: 28, events: 1 },
    { date: 29, events: 0 },
    { date: 30, events: 0 },
    { date: 31, events: 1 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">예약 & 일정 관리</h1>
        <p className="text-gray-600">캘린더 뷰 · 시설 배정 통합 · 부대시설 예약 현황</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Calendar Section */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3>2024년 10월</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
              <div key={idx} className="text-center text-sm text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, idx) => (
              <div
                key={idx}
                className={`aspect-square p-2 border rounded-lg cursor-pointer transition-all ${
                  day.highlight
                    ? 'bg-orange-50 border-orange-200 hover:bg-orange-100'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="text-sm mb-1">{day.date}</div>
                {day.events > 0 && (
                  <div className="text-xs text-orange-600">
                    {day.events}건
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded"></div>
              <span className="text-gray-600">예약 있음</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
              <span className="text-gray-600">만실</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
              <span className="text-gray-600">예약 없음</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4">이번 주 요약</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">예약 현황</div>
                <div className="text-2xl">8건</div>
                <div className="text-xs text-green-600">+2건 신규</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">예상 인원</div>
                <div className="text-2xl">850명</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">객실 점유율</div>
                <div className="text-2xl">68%</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4">부대시설 현황</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-2 bg-cyan-50 rounded">
                <span>워터파크</span>
                <span className="text-cyan-600">예약 5건</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                <span>조식 뷔페</span>
                <span className="text-orange-600">820명</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                <span>회의실</span>
                <span className="text-purple-600">3개 예약</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Reservations */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="mb-6">다가오는 예약</h3>
        <div className="space-y-4">
          {upcomingReservations.map((reservation, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-lg mb-2">{reservation.company}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {reservation.dates}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {reservation.people}명
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      체크인 {reservation.checkIn}
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-lg text-sm ${
                  reservation.status === '확정' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {reservation.status}
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>{reservation.rooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  {reservation.facilities.map((facility, fIdx) => (
                    <span key={fIdx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Timeline */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
        <h3 className="mb-6">10월 21일 시설 배정 타임라인</h3>
        <div className="space-y-4">
          {/* Waterpark Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Waves className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">워터파크</span>
            </div>
            <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute left-[30%] w-[25%] h-full bg-cyan-500 flex items-center justify-center text-white text-xs">
                A그룹 (200명)
              </div>
              <div className="absolute left-[60%] w-[20%] h-full bg-cyan-400 flex items-center justify-center text-white text-xs">
                C대학교 (120명)
              </div>
            </div>
          </div>

          {/* Breakfast Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Coffee className="w-5 h-5 text-orange-500" />
              <span className="text-sm">조식 뷔페</span>
            </div>
            <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute left-[15%] w-[30%] h-full bg-orange-500 flex items-center justify-center text-white text-xs">
                A그룹 (200명) 07:00-09:00
              </div>
              <div className="absolute left-[50%] w-[25%] h-full bg-orange-400 flex items-center justify-center text-white text-xs">
                C대학교 (120명) 08:00-09:30
              </div>
            </div>
          </div>

          {/* Banquet Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <UtensilsCrossed className="w-5 h-5 text-purple-500" />
              <span className="text-sm">연회장</span>
            </div>
            <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute left-[70%] w-[25%] h-full bg-purple-500 flex items-center justify-center text-white text-xs">
                A그룹 (B홀) 18:00-21:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
