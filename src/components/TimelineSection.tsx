import { Calendar, MapPin, Coffee, Waves, Users, UtensilsCrossed } from 'lucide-react';

export function TimelineSection() {
  const schedules = [
    {
      company: '한화그룹 인재개발원',
      people: 200,
      dates: '버스 도착: 13:30 예정',
      checkIn: '체크인: 10월 21일 14:00',
      timeline: [
        { date: '10월 21일 18:00', activity: '연회 단체', location: '다용 공간: 대연회장', color: 'bg-orange-100 text-orange-700', status: '확정' },
        { date: '10월 22일 07:00', activity: '조식 (자유)', location: '다용 공간: 워터파크동 1000', color: 'bg-yellow-100 text-yellow-700', status: '확정' },
        { date: '10월 22일 10:00', activity: '워터파크', location: '다용 공간: 설악산 단풍 축제 14:00', color: 'bg-cyan-100 text-cyan-700', status: '확정' },
        { date: '10월 22일 14:00', activity: '지역투어', location: '다용 공간: 커피 테라스 18:00', color: 'bg-orange-100 text-orange-700', status: '확정' },
      ],
    },
    {
      company: '서울대학교 경영대 MT',
      people: 120,
      dates: '버스 도착: 14:30 예정',
      checkIn: '체크인: 9월 6일 15:00',
      timeline: [
        { date: '9월 6일 19:00', activity: '조식 (2차)', location: '다용 공간: 속초 레저 단독 11:00', color: 'bg-yellow-100 text-yellow-700', status: '확정' },
        { date: '9월 7일 11:00', activity: '속초 해변', location: '다용 공간: 워터파크', color: 'bg-blue-100 text-blue-700', status: '확정' },
        { date: '9월 7일 15:00', activity: '워터파크', location: '다용 공간: 바로코어 9/6', color: 'bg-cyan-100 text-cyan-700', status: '확정' },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="mb-6">다가오는 단체 일정 & 동선</h3>
      
      <div className="space-y-8">
        {schedules.map((schedule, idx) => (
          <div key={idx}>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg">{schedule.company}</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg">
                    {schedule.dates}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">
                    {schedule.checkIn}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600">{schedule.people}명</div>
            </div>
            
            <div className="space-y-3">
              {schedule.timeline.map((item, timeIdx) => (
                <div key={timeIdx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm mb-1">{item.date}</div>
                        <div className="text-sm text-gray-700">{item.activity}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{item.location}</div>
                  </div>
                </div>
              ))}
            </div>

            {idx < schedules.length - 1 && (
              <div className="border-b border-gray-200 mt-6"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-gray-600 mb-1">다가오는 행사</div>
            <div className="text-xl">12건</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">총 예상 인원</div>
            <div className="text-xl">890명</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">워터파크 예약</div>
            <div className="text-xl">92%</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">조식 분산 배정</div>
            <div className="text-xl text-green-600">최적화 완료</div>
          </div>
        </div>
      </div>
    </div>
  );
}
