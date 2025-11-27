import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  FileText, 
  Wrench, 
  TrendingUp, 
  Settings,
  ChevronDown,
  Download,
  Plus,
  AlertTriangle,
  RefreshCw,
  Calendar,
  Bell,
  Ticket,
  Gift,
  Activity,
  MessageSquare,
  FileCheck,
  MessageCircle,
  DollarSign
} from 'lucide-react';
import { AssetsPage } from './components/pages/AssetsPage';
import { AssetStatusPage } from './components/pages/AssetStatusPage';
import { CustomersPage } from './components/pages/CustomersPage';
import { SegmentsPage } from './components/pages/SegmentsPage';
import { BlacklistPage } from './components/pages/BlacklistPage';
import { ContractsPage } from './components/pages/ContractsPage';
import { OverduePage } from './components/pages/OverduePage';
import { MaintenancePage } from './components/pages/MaintenancePage';
import { ReturnsPage } from './components/pages/ReturnsPage';
import { RenewalsPage } from './components/pages/RenewalsPage';
import { InventoryForecastPage } from './components/pages/InventoryForecastPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { CustomerAnalyticsPage } from './components/pages/CustomerAnalyticsPage';
import { AnalyticsReportPage } from './components/pages/AnalyticsReportPage';
import { CouponsPage } from './components/pages/CouponsPage';
import { PromotionsPage } from './components/pages/PromotionsPage';
import { CustomerBehaviorPage } from './components/pages/CustomerBehaviorPage';
import { FeedbackPage } from './components/pages/FeedbackPage';
import { QuotationsPage } from './components/pages/QuotationsPage';
import { ApprovalPage } from './components/pages/ApprovalPage';
import { ConsultationsPage } from './components/pages/ConsultationsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 overflow-y-auto">
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-2xl mb-1">렌탈 통합 관리</h2>
          <p className="text-sm text-gray-400">ERP · CRM Platform</p>
        </div>

        {/* Main Navigation */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">메인</div>
          <nav className="space-y-1">
            <NavItem
              icon={<LayoutDashboard className="w-5 h-5" />}
              label="대시보드"
              active={currentPage === 'dashboard'}
              onClick={() => setCurrentPage('dashboard')}
            />
          </nav>
        </div>

        {/* Asset Management */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">자산 관리</div>
          <nav className="space-y-1">
            <NavItem
              icon={<Package className="w-5 h-5" />}
              label="렌탈 자산 목록"
              active={currentPage === 'assets'}
              onClick={() => setCurrentPage('assets')}
            />
            <NavItem
              icon={<AlertTriangle className="w-5 h-5" />}
              label="자산 상태 관리"
              active={currentPage === 'asset-status'}
              onClick={() => setCurrentPage('asset-status')}
            />
          </nav>
        </div>

        {/* Customer Management */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">고객 관리 (CRM)</div>
          <nav className="space-y-1">
            <NavItem
              icon={<Users className="w-5 h-5" />}
              label="고객 목록"
              active={currentPage === 'customers'}
              onClick={() => setCurrentPage('customers')}
            />
            <NavItem
              icon={<TrendingUp className="w-5 h-5" />}
              label="고객 분석"
              active={currentPage === 'customer-analytics'}
              onClick={() => setCurrentPage('customer-analytics')}
            />
            <NavItem
              icon={<Users className="w-5 h-5" />}
              label="세그먼트 분석"
              active={currentPage === 'segments'}
              onClick={() => setCurrentPage('segments')}
            />
            <NavItem
              icon={<Activity className="w-5 h-5" />}
              label="고객 행동 데이터"
              active={currentPage === 'customer-behavior'}
              onClick={() => setCurrentPage('customer-behavior')}
            />
            <NavItem
              icon={<MessageCircle className="w-5 h-5" />}
              label="상담 내역"
              active={currentPage === 'consultations'}
              onClick={() => setCurrentPage('consultations')}
            />
            <NavItem
              icon={<MessageSquare className="w-5 h-5" />}
              label="피드백/컴플레인"
              active={currentPage === 'feedback'}
              onClick={() => setCurrentPage('feedback')}
            />
            <NavItem
              icon={<FileText className="w-5 h-5" />}
              label="분석 리포트"
              active={currentPage === 'analytics-report'}
              onClick={() => setCurrentPage('analytics-report')}
            />
            <NavItem
              icon={<AlertTriangle className="w-5 h-5" />}
              label="블랙리스트"
              active={currentPage === 'blacklist'}
              onClick={() => setCurrentPage('blacklist')}
            />
          </nav>
        </div>

        {/* Contract & Payment */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">계약 관리</div>
          <nav className="space-y-1">
            <NavItem
              icon={<FileText className="w-5 h-5" />}
              label="견적서 관리"
              active={currentPage === 'quotations'}
              onClick={() => setCurrentPage('quotations')}
            />
            <NavItem
              icon={<FileText className="w-5 h-5" />}
              label="계약 관리"
              active={currentPage === 'contracts'}
              onClick={() => setCurrentPage('contracts')}
            />
            <NavItem
              icon={<AlertTriangle className="w-5 h-5" />}
              label="연체 관리"
              active={currentPage === 'overdue'}
              onClick={() => setCurrentPage('overdue')}
            />
          </nav>
        </div>

        {/* Operations */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">운영</div>
          <nav className="space-y-1">
            <NavItem
              icon={<Wrench className="w-5 h-5" />}
              label="정기 점검 (AS)"
              active={currentPage === 'maintenance'}
              onClick={() => setCurrentPage('maintenance')}
            />
            <NavItem
              icon={<Package className="w-5 h-5" />}
              label="반납 & 회수"
              active={currentPage === 'returns'}
              onClick={() => setCurrentPage('returns')}
            />
            <NavItem
              icon={<RefreshCw className="w-5 h-5" />}
              label="재계약 관리"
              active={currentPage === 'renewals'}
              onClick={() => setCurrentPage('renewals')}
            />
          </nav>
        </div>

        {/* Marketing */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">마케팅 자동화</div>
          <nav className="space-y-1">
            <NavItem
              icon={<Gift className="w-5 h-5" />}
              label="프로모션 관리"
              active={currentPage === 'promotions'}
              onClick={() => setCurrentPage('promotions')}
            />
            <NavItem
              icon={<Ticket className="w-5 h-5" />}
              label="쿠폰 관리"
              active={currentPage === 'coupons'}
              onClick={() => setCurrentPage('coupons')}
            />
          </nav>
        </div>

        {/* Approval */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">전자결재</div>
          <nav className="space-y-1">
            <NavItem
              icon={<FileCheck className="w-5 h-5" />}
              label="승인 관리"
              active={currentPage === 'approval'}
              onClick={() => setCurrentPage('approval')}
            />
          </nav>
        </div>

        {/* Analytics */}
        <div className="mb-8">
          <div className="text-xs text-gray-500 uppercase mb-3">분석</div>
          <nav className="space-y-1">
            <NavItem
              icon={<Package className="w-5 h-5" />}
              label="재고 예보"
              active={currentPage === 'inventory-forecast'}
              onClick={() => setCurrentPage('inventory-forecast')}
            />
          </nav>
        </div>

        {/* Settings */}
        <div>
          <div className="text-xs text-gray-500 uppercase mb-3">설정</div>
          <nav className="space-y-1">
            <NavItem
              icon={<Settings className="w-5 h-5" />}
              label="시스템 설정"
              active={currentPage === 'settings'}
              onClick={() => setCurrentPage('settings')}
            />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'assets' && <AssetsPage />}
        {currentPage === 'asset-status' && <AssetStatusPage />}
        {currentPage === 'customers' && <CustomersPage />}
        {currentPage === 'segments' && <SegmentsPage />}
        {currentPage === 'blacklist' && <BlacklistPage />}
        {currentPage === 'contracts' && <ContractsPage />}
        {currentPage === 'overdue' && <OverduePage />}
        {currentPage === 'maintenance' && <MaintenancePage />}
        {currentPage === 'returns' && <ReturnsPage />}
        {currentPage === 'renewals' && <RenewalsPage />}
        {currentPage === 'inventory-forecast' && <InventoryForecastPage />}
        {currentPage === 'settings' && <SettingsPage />}
        {currentPage === 'customer-analytics' && <CustomerAnalyticsPage />}
        {currentPage === 'analytics-report' && <AnalyticsReportPage />}
        {currentPage === 'coupons' && <CouponsPage />}
        {currentPage === 'promotions' && <PromotionsPage />}
        {currentPage === 'customer-behavior' && <CustomerBehaviorPage />}
        {currentPage === 'feedback' && <FeedbackPage />}
        {currentPage === 'quotations' && <QuotationsPage />}
        {currentPage === 'approval' && <ApprovalPage />}
        {currentPage === 'consultations' && <ConsultationsPage />}
      </div>
    </div>
  );
}

// NavItem Component
function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <div
      className={`px-4 py-3 rounded-lg cursor-pointer transition-colors ${
        active ? 'bg-orange-500 text-white' : 'text-gray-400 hover:bg-[#252f3f]'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

// Dashboard Page Component
function DashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl mb-2">렌탈 통합 대시보드</h1>
            <p className="text-gray-600">
              실시간 렌탈 현황 · 자산 수익성 · 고객 리텐션 · 연체 관리
            </p>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 cursor-pointer hover:border-gray-300">
                <option>이번 달</option>
                <option>지난 달</option>
                <option>최근 3개월</option>
                <option>올해</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              리포트 다운로드
            </button>

            <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
              <Plus className="w-4 h-4" />
              신규 렌탈 등록
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <KPICard
          icon={<Package className="w-5 h-5 text-blue-500" />}
          title="현재 렌탈 중"
          value="342건"
          subtext="전월 대비 +28건 (+8.9%)"
          trend="up"
          color="blue"
        />
        <StatCard
          title="이번 달 매출"
          value="8,240만원"
          subtext="목표 대비 112% 달성"
        />
        <KPICard
          icon={<AlertTriangle className="w-5 h-5 text-red-500" />}
          title="연체율"
          value="3.2%"
          subtext="11건 · 즉시 조치 필요"
          trend="down"
          color="red"
        />
        <KPICard
          icon={<RefreshCw className="w-5 h-5 text-purple-500" />}
          title="재계약률"
          value="76%"
          subtext="전월 대비 +4%p"
          trend="up"
          color="purple"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Alert Center */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5 text-orange-500" />
            실시간 알림 센터
          </h3>

          <div className="space-y-3">
            {/* 이탈 위험 */}
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm mb-1">이탈 위험 고객 감지</div>
                  <div className="text-xs text-gray-600 mb-2">
                    로펌 김앤장 (B2B) - 최근 3개월 이용 없음
                  </div>
                  <button className="text-xs text-orange-600 hover:text-orange-700">
                    → 컴백 쿠폰 발송하기
                  </button>
                </div>
              </div>
            </div>

            {/* 연체 */}
            <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm mb-1">연체 고객 11건</div>
                  <div className="text-xs text-gray-600 mb-2">
                    총 연체액: 280만원 · 평균 연체일: 18일
                  </div>
                  <button className="text-xs text-red-600 hover:text-red-700">
                    → 자동 독촉 발송
                  </button>
                </div>
              </div>
            </div>

            {/* 재계약 임박 */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm mb-1">재계약 임박 고객 8건</div>
                  <div className="text-xs text-gray-600 mb-2">
                    30일 이내 계약 만료 · 재계약률 76%
                  </div>
                  <button className="text-xs text-blue-600 hover:text-blue-700">
                    → 맞춤 제안서 발송
                  </button>
                </div>
              </div>
            </div>

            {/* 점검 예정 */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm mb-1">이번 주 정기 점검 예정</div>
                  <div className="text-xs text-gray-600 mb-2">
                    24건 · 일정 자동 배정 완료
                  </div>
                  <button className="text-xs text-green-600 hover:text-green-700">
                    → 점검 일정 확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          {/* 자산 현황 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4 text-sm">자산 현황</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">총 자산</span>
                <span className="text-lg">528개</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">렌탈 중</span>
                <span className="text-lg text-blue-600">342개</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">대여 가능</span>
                <span className="text-lg text-green-600">158개</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">수리/점검 중</span>
                <span className="text-lg text-orange-600">28개</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-blue-500" style={{ width: '65%' }}></div>
              </div>
              <div className="text-xs text-gray-500 text-center">가동률 65%</div>
            </div>
          </div>

          {/* 고객 세그먼트 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4 text-sm">고객 세그먼트</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">VIP (예비 포함)</span>
                <span className="text-sm">82명</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">일반 고객</span>
                <span className="text-sm">245명</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">이탈 위험</span>
                <span className="text-sm text-yellow-600">18명</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">블랙리스트</span>
                <span className="text-sm text-red-600">3명</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* 수익성 Top 5 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4">수익성 높은 자산 Top 5</h3>
          <div className="space-y-3">
            {[
              { name: '복합기 (삼성 SL-K4300)', profit: '240만원', rate: '92%', color: 'green' },
              { name: '공기청정기 (다이슨)', profit: '180만원', rate: '88%', color: 'green' },
              { name: '사무용 의자 (시디즈 T50)', profit: '160만원', rate: '85%', color: 'green' },
              { name: '회의실 프로젝터 (엡손)', profit: '140만원', rate: '82%', color: 'blue' },
              { name: '정수기 (코웨이)', profit: '120만원', rate: '78%', color: 'blue' },
            ].map((asset, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm mb-1">{asset.name}</div>
                  <div className="text-xs text-gray-600">순이익: {asset.profit}</div>
                </div>
                <div className={`text-sm text-${asset.color}-600`}>{asset.rate}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 손해 자산 경고 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            손해 발생 자산 (매각 권장)
          </h3>
          <div className="space-y-3">
            {[
              { name: '커피머신 (구형 모델)', loss: '-24만원', reason: '수리비 과다', color: 'red' },
              { name: '공유기 (넷기어)', loss: '-18만원', reason: '고장 빈도 높음', color: 'red' },
              { name: '청소기 (삼성 POWERbot)', loss: '-12만원', reason: '부품 단종', color: 'orange' },
            ].map((asset, idx) => (
              <div key={idx} className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm mb-1">{asset.name}</div>
                    <div className="text-xs text-gray-600">{asset.reason}</div>
                  </div>
                  <div className={`text-sm text-${asset.color}-600`}>{asset.loss}</div>
                </div>
                <button className="text-xs text-red-600 hover:text-red-700">
                  → 매각 처리하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// KPI Card Component
function KPICard({ 
  icon, 
  title, 
  value, 
  subtext, 
  trend, 
  color 
}: { 
  icon: React.ReactNode, 
  title: string, 
  value: string, 
  subtext: string, 
  trend?: 'up' | 'down',
  color: string 
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <div className="text-3xl mb-2">{value}</div>
      <div className={`text-sm ${
        trend === 'up' ? 'text-green-600' : 
        trend === 'down' ? 'text-red-600' : 
        'text-gray-600'
      }`}>
        {subtext}
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ 
  title, 
  value, 
  subtext
}: { 
  title: string, 
  value: string, 
  subtext: string
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="text-sm text-gray-600 mb-3">{title}</div>
      <div className="text-3xl mb-2">{value}</div>
      <div className="text-sm text-gray-600">
        {subtext}
      </div>
    </div>
  );
}

// Placeholder Page Component
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">{title}</h1>
        <p className="text-gray-600">이 페이지는 곧 구현될 예정입니다.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">
        <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
        <p>{title} 기능</p>
        <p className="text-sm mt-2">렌탈 중개업체 전용 ERP·CRM 통합 솔루션</p>
      </div>
    </div>
  );
}