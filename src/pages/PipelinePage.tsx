import { useState } from 'react';
import { Search, ChevronDown, Plus, Mail, Phone, Calendar, TrendingUp, Flame, X, CheckCircle } from 'lucide-react';

interface Lead {
  id: string;
  company: string;
  contact: string;
  email: string;
  phone: string;
  expectedDate: string;
  category: string;
  description: string;
  stage: '문의' | '상담' | '제안' | '계약';
  temperature: 'Hot' | 'Warm' | 'Cold';
  estimatedRevenue: string;
  probability: number;
  createdDate: string;
  consultHistory?: { date: string; note: string; author: string }[];
}

interface ConsultModalProps {
  lead: Lead;
  onClose: () => void;
  onSave: (leadId: string, note: string) => void;
}

function ConsultModal({ lead, onClose, onSave }: ConsultModalProps) {
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (note.trim()) {
      onSave(lead.id, note);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl mx-4">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl">상담 기록 추가 - {lead.company}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          {/* Previous History */}
          {lead.consultHistory && lead.consultHistory.length > 0 && (
            <div className="mb-6">
              <div className="text-sm mb-3">이전 상담 기록</div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {lead.consultHistory.map((history, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-600">{history.date}</span>
                      <span className="text-xs text-gray-500">작성: {history.author}</span>
                    </div>
                    <div className="text-gray-700">{history.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New Note */}
          <div>
            <label className="block text-sm mb-2">새 상담 내용</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="상담 내용을 입력하세요... (예: 단풍 시즌 워크샵 일정 확정, 추가 워터파크 패키지 요청 등)"
              className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex items-center justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            취소
          </button>
          <button 
            onClick={handleSave}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

interface StageModalProps {
  lead: Lead;
  onClose: () => void;
  onMove: (leadId: string, newStage: '문의' | '상담' | '제안' | '계약') => void;
}

function StageModal({ lead, onClose, onMove }: StageModalProps) {
  const stages: Array<'문의' | '상담' | '제안' | '계약'> = ['문의', '상담', '제안', '계약'];
  
  const handleMove = (newStage: '문의' | '상담' | '제안' | '계약') => {
    onMove(lead.id, newStage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md mx-4">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl">단계 이동 - {lead.company}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-2">현재 단계</div>
            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg inline-block">
              {lead.stage}
            </div>
          </div>

          <div className="text-sm mb-3">이동할 단계 선택</div>
          <div className="space-y-2">
            {stages.map((stage) => (
              <button
                key={stage}
                onClick={() => handleMove(stage)}
                disabled={stage === lead.stage}
                className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                  stage === lead.stage
                    ? 'border-blue-500 bg-blue-50 cursor-not-allowed opacity-50'
                    : 'border-gray-200 hover:border-orange-500 hover:bg-orange-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-1">{stage}</div>
                    <div className="text-xs text-gray-600">
                      {stage === '문의' && '초기 문의 단계'}
                      {stage === '상담' && '상세 상담 진행 중'}
                      {stage === '제안' && '제안서 발송 완료'}
                      {stage === '계약' && '계약 체결 단계'}
                    </div>
                  </div>
                  {stage === lead.stage && (
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex items-center justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export function PipelinePage() {
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedTemperature, setSelectedTemperature] = useState<string>('all');
  const [consultModal, setConsultModal] = useState<Lead | null>(null);
  const [stageModal, setStageModal] = useState<Lead | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: '1',
      company: '한국그룹 인재개발원',
      contact: '김영수',
      email: 'ms.kim@hanwha.com',
      phone: '02-729-3456',
      expectedDate: '예상일: 10월 21~23일',
      category: '종류: 기존 고객',
      description: '설악 단풍 시즌 워크숍 + 연회 패키지 요청',
      stage: '상담',
      temperature: 'Hot',
      estimatedRevenue: '₩80M',
      probability: 85,
      createdDate: '최근 연도: 2024-09-15',
      consultHistory: [
        { date: '2024-09-15', note: '초기 문의 접수 - 200명 규모 단풍 시즌 워크샵', author: '김영희 매니저' },
        { date: '2024-09-18', note: '연회장 및 워터파크 패키지 제안서 발송', author: '김영희 매니저' },
      ],
    },
    {
      id: '2',
      company: '카카오 엔터테인먼트',
      contact: '이지은',
      email: 'je.lee@kakao.com',
      phone: '031-8000-1234',
      expectedDate: '예상일: 11월 15~17일',
      category: '종류: 워크샵 문의',
      description: '설악 단풍 시즌 워크숍 + 연회 패키지 요청',
      stage: '상담',
      temperature: 'Hot',
      estimatedRevenue: '₩65M',
      probability: 70,
      createdDate: '최근 연도: 2024-09-20',
      consultHistory: [],
    },
    {
      id: '3',
      company: 'LG유플러스',
      contact: '임민지',
      email: 'mj.jung@lguplus.com',
      phone: '02-6000-5555',
      expectedDate: '예상일: 11월 중',
      category: '종류: 리드먼 소개',
      description: '부서별 워크숍 문의, 예산 범위 협의',
      stage: '상담',
      temperature: 'Warm',
      estimatedRevenue: '₩42M',
      probability: 55,
      createdDate: '최근 연도: 2024-09-12',
      consultHistory: [],
    },
    {
      id: '4',
      company: '쿠팡 풀필먼트',
      contact: '강동훈',
      email: 'dh.kang@coupang.com',
      phone: '070-1234-5678',
      expectedDate: '예상일: 미정',
      category: '종류: 전화 문의',
      description: '직원 워크숍 장소 조사 단계',
      stage: '문의',
      temperature: 'Cold',
      estimatedRevenue: '₩35M',
      probability: 30,
      createdDate: '최근 연도: 2024-09-05',
      consultHistory: [],
    },
  ]);

  const stageStats = [
    { stage: '문의', count: 12, revenue: '₩180M' },
    { stage: '상담', count: 8, revenue: '₩145M' },
    { stage: '제안', count: 5, revenue: '₩98M' },
    { stage: '계약', count: 2, revenue: '₩52M' },
  ];

  const hotLeadsCount = leads.filter(l => l.temperature === 'Hot').length;
  const hotLeadsRevenue = leads
    .filter(l => l.temperature === 'Hot')
    .reduce((sum, l) => sum + parseInt(l.estimatedRevenue.replace(/[^0-9]/g, '')), 0);

  const filteredLeads = leads.filter(lead => {
    if (selectedStage !== 'all' && lead.stage !== selectedStage) return false;
    if (selectedTemperature !== 'all' && lead.temperature !== selectedTemperature) return false;
    return true;
  });

  const getTemperatureBadgeStyle = (temp: string) => {
    switch (temp) {
      case 'Hot':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'Warm':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Cold':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStageBadgeStyle = (stage: string) => {
    return 'bg-blue-100 text-blue-700 border-blue-300';
  };

  const handleConsultSave = (leadId: string, note: string) => {
    setLeads(leads.map(lead => 
      lead.id === leadId ? { ...lead, consultHistory: [...(lead.consultHistory || []), { date: new Date().toISOString().split('T')[0], note, author: '김영희 매니저' }] } : lead
    ));
    setSuccessMessage('상담 기록이 성공적으로 저장되었습니다.');
  };

  const handleStageMove = (leadId: string, newStage: '문의' | '상담' | '제안' | '계약') => {
    setLeads(leads.map(lead => 
      lead.id === leadId ? { ...lead, stage: newStage } : lead
    ));
    setSuccessMessage('단계가 성공적으로 변경되었습니다.');
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl mb-2">리드 & 파이프라인</h1>
            <p className="text-gray-600">
              잠재 고객 관리 · 영업 단계별 전환 추적 · Hot 리드 우선순위 관리
            </p>
          </div>
          <button className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600">
            <Plus className="w-4 h-4" />
            새 리드 추가
          </button>
        </div>
      </div>

      {/* Stage Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {stageStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-2">{stat.stage}</div>
            <div className="text-3xl mb-2">{stat.count}건</div>
            <div className="text-sm text-green-600">{stat.revenue}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="기업명, 담당자명 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 cursor-pointer hover:border-gray-300"
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
            >
              <option value="all">전체 단계</option>
              <option value="문의">문의</option>
              <option value="상담">상담</option>
              <option value="제안">제안</option>
              <option value="계약">계약</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 cursor-pointer hover:border-gray-300">
              <option>전체 상태</option>
              <option>진행중</option>
              <option>대기</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
            <TrendingUp className="w-4 h-4" />
            상세 필터
          </button>
        </div>

        {/* Temperature Filter Tabs */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">한국그룹 인재개발원</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedTemperature('all')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedTemperature === 'all'
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setSelectedTemperature('Hot')}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedTemperature === 'Hot'
                  ? 'bg-red-100 text-red-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Flame className="w-3 h-3" />
              Hot
            </button>
            <button
              onClick={() => setSelectedTemperature('Warm')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedTemperature === 'Warm'
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Warm
            </button>
            <button
              onClick={() => setSelectedTemperature('Cold')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedTemperature === 'Cold'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Cold
            </button>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="space-y-4 mb-6">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-lg">{lead.company}</div>
                <span className={`px-3 py-1 rounded-lg text-xs border ${getTemperatureBadgeStyle(lead.temperature)}`}>
                  {lead.temperature === 'Hot' && <Flame className="w-3 h-3 inline mr-1" />}
                  {lead.temperature}
                </span>
                <span className={`px-3 py-1 rounded-lg text-xs border ${getStageBadgeStyle(lead.stage)}`}>
                  {lead.stage}
                </span>
              </div>
              
              <div className="text-right">
                <div className="text-xl mb-1">{lead.estimatedRevenue}</div>
                <div className="text-sm text-gray-600">예상 매출</div>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-4">{lead.contact}</div>

            <div className="grid grid-cols-4 gap-6 mb-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                {lead.email}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                {lead.phone}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                {lead.expectedDate}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="w-4 h-4" />
                {lead.category}
              </div>
            </div>

            <div className="text-sm text-gray-700 mb-4 p-3 bg-gray-50 rounded-lg">
              {lead.description}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">{lead.createdDate}</div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 mr-4">
                  <div className="text-xs text-gray-600">예상 확률</div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 transition-all"
                        style={{ width: `${lead.probability}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{lead.probability}%</span>
                  </div>
                </div>
                
                <button 
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50"
                  onClick={() => setConsultModal(lead)}
                >
                  상담 기록
                </button>
                <button 
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
                  onClick={() => setStageModal(lead)}
                >
                  단계 이동
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hot Leads Summary */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-sm text-gray-700 mb-2">Hot 리드</div>
            <div className="text-2xl">{hotLeadsCount}건</div>
          </div>
          <div>
            <div className="text-sm text-gray-700 mb-2">Hot 리드 총 예상 매출</div>
            <div className="text-2xl">₩{Math.round(hotLeadsRevenue / 1000000)}M</div>
          </div>
          <div>
            <div className="text-sm text-gray-700 mb-2">평균 전환율</div>
            <div className="text-2xl">23.3%</div>
          </div>
          <div>
            <div className="text-sm text-gray-700 mb-2">평균 영업 사이클</div>
            <div className="text-2xl">18일</div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mt-4 bg-green-100 text-green-700 p-4 rounded-lg">
          {successMessage}
        </div>
      )}

      {/* Consult Modal */}
      {consultModal && (
        <ConsultModal 
          lead={consultModal}
          onClose={() => setConsultModal(null)}
          onSave={handleConsultSave}
        />
      )}

      {/* Stage Modal */}
      {stageModal && (
        <StageModal 
          lead={stageModal}
          onClose={() => setStageModal(null)}
          onMove={handleStageMove}
        />
      )}
    </div>
  );
}