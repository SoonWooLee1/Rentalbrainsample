import { Settings, User, Bell, DollarSign, Shield, Database, Smartphone } from 'lucide-react';

export function SettingsPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">시스템 설정</h1>
        <p className="text-gray-600">계정 관리 · 알림 설정 · 결제 설정</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Company Profile */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-500" />
              회사 정보
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">회사명</label>
                <input 
                  type="text" 
                  defaultValue="렌탈코리아" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">대표자명</label>
                  <input 
                    type="text" 
                    defaultValue="김대표" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">사업자등록번호</label>
                  <input 
                    type="text" 
                    defaultValue="123-45-67890" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">연락처</label>
                <input 
                  type="text" 
                  defaultValue="02-1234-5678" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">주소</label>
                <input 
                  type="text" 
                  defaultValue="서울시 강남구 테헤란로 123" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                저장하기
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-orange-500" />
              알림 설정
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium mb-1">신규 계약 알림</div>
                  <div className="text-xs text-gray-600">새로운 렌탈 계약이 체결되면 알림</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium mb-1">연체 알림</div>
                  <div className="text-xs text-gray-600">납부 기한이 지난 고객 발생 시 알림</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium mb-1">재계약 임박 알림</div>
                  <div className="text-xs text-gray-600">계약 만료 30일 전 알림</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium mb-1">자산 상태 이상 알림</div>
                  <div className="text-xs text-gray-600">AI가 자산 문제를 감지하면 알림</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-6 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              결제 설정
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">결제 주기</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                  <option>매월 1일 자동 결제</option>
                  <option>매월 15일 자동 결제</option>
                  <option>계약일 기준 자동 결제</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">납부 독촉 시작</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                  <option>연체 1일 후</option>
                  <option>연체 3일 후</option>
                  <option>연체 7일 후</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">보증금 정책</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                  <option>월 렌탈료의 1개월분</option>
                  <option>월 렌탈료의 2개월분</option>
                  <option>월 렌탈료의 3개월분</option>
                </select>
              </div>

              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                저장하기
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Plan Info */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-200 p-6">
            <h3 className="mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-600" />
              요금제 정보
            </h3>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-1">현재 플랜</div>
              <div className="text-2xl font-bold text-orange-600 mb-2">프리미엄</div>
              <div className="text-xs text-gray-600">₩99,000 / 월</div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-500">✓</span>
                무제한 자산 등록
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-500">✓</span>
                AI 자동 격리 시스템
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-500">✓</span>
                마케팅 자동화
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-500">✓</span>
                24/7 고객 지원
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
              플랜 변경
            </button>
          </div>

          {/* Database */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-500" />
              데이터 관리
            </h3>

            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm text-left">
                데이터 백업
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm text-left">
                데이터 내보내기 (Excel)
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm text-left">
                시스템 로그
              </button>
            </div>
          </div>

          {/* Mobile App */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-purple-500" />
              모바일 앱
            </h3>

            <div className="text-center mb-4">
              <div className="text-sm text-gray-600 mb-3">
                언제 어디서나 렌탈 관리
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-black text-white rounded-lg text-xs">
                  App Store
                </button>
                <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg text-xs">
                  Google Play
                </button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4">고객 지원</h3>

            <div className="space-y-3 text-sm">
              <div>
                <div className="text-gray-600 mb-1">이메일</div>
                <div className="font-medium">support@rental.co.kr</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">전화</div>
                <div className="font-medium">1588-1234</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">운영 시간</div>
                <div className="font-medium">평일 09:00 - 18:00</div>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
              1:1 문의하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
