import { Bell, Calendar, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';

export function RetentionWidget() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-orange-500" />
        <h3>리텐션 & 알림 센터</h3>
      </div>
      
      <div className="space-y-4 mb-6">
        {/* Alert 1 */}
        <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm mb-1">설악 단풍 시즌 리마인드</div>
              <div className="text-xs text-gray-600 mb-2">
                SK바이오닉스 - 작년 10월 단풍 방문
              </div>
              <button className="text-xs text-orange-600 hover:text-orange-700">
                → 리마인드 이메일 발송
              </button>
            </div>
          </div>
        </div>

        {/* Alert 2 */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm mb-1">해돋이 시즌 추천</div>
              <div className="text-xs text-gray-600 mb-2">
                LG전자 - 12월 겨울 워크샵 추천
              </div>
              <button className="text-xs text-blue-600 hover:text-blue-700">
                → 맞춤 패키지 이메일 발송
              </button>
            </div>
          </div>
        </div>

        {/* Alert 3 */}
        <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm mb-1">이탈 위험 고객 감지</div>
              <div className="text-xs text-gray-600 mb-2">
                현대자동차 - 1월 마지막 방문 추적
              </div>
              <button className="text-xs text-red-600 hover:text-red-700">
                → 특별 할인 제공
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section: 리텐션 지표 요약 */}
      <div className="border-t border-gray-200 pt-4">
        <div className="text-sm mb-4">리텐션 지표 요약</div>
        <div className="space-y-3">
          <div className="p-3 bg-orange-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700">재방문율</span>
              <span className="text-orange-600">64%</span>
            </div>
            <div className="text-xs text-gray-500">평균 재방문 주기: 8.5개월</div>
          </div>

          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700">고객 LTV 평균</span>
              <span className="text-blue-600">2억 8,500만원</span>
            </div>
            <div className="text-xs text-gray-500">전년 대비 +18% 증가</div>
          </div>
        </div>
      </div>

      {/* Section: 다가오는 재방 아이템 */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="text-sm mb-4">다가오는 액션 아이템</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">• D기업 - 단풍 리마인드 (3건)</span>
            <button className="text-orange-600 text-xs hover:text-orange-700">진행중</button>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">• H기업 리마인더 조사 (5건)</span>
            <button className="text-orange-600 text-xs hover:text-orange-700">대기</button>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">• 단풍 시즌 페키지 업데 (8건)</span>
            <button className="text-orange-600 text-xs hover:text-orange-700">예약</button>
          </div>
        </div>
      </div>
    </div>
  );
}