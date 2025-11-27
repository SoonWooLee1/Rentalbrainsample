import { useState } from 'react';
import { TrendingUp, Users, Clock, Lightbulb, Play, FileText, CheckCircle } from 'lucide-react';

interface AnalysisTemplate {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  estimatedTime: string;
  lastRun: string;
  status: 'completed' | 'pending' | 'ready';
}

interface CustomerAnalysisPageProps {
  onNavigateToResults?: () => void;
}

export function CustomerAnalysisPage({ onNavigateToResults }: CustomerAnalysisPageProps) {
  const [runningAnalyses, setRunningAnalyses] = useState<string[]>([]);
  const [analysisProgress, setAnalysisProgress] = useState<{ [key: string]: number }>({
    'rfm-segmentation': 75,
    'seasonal-demand': 45,
  });

  const templates: AnalysisTemplate[] = [
    {
      id: 'rfm-segmentation',
      title: 'RFM 고객 세그멘테이션',
      description: 'Recency, Frequency, Monetary 기반 고객 등급 분류',
      icon: <Users className="w-5 h-5 text-orange-500" />,
      estimatedTime: '5분',
      lastRun: '2024-09-18',
      status: 'completed',
    },
    {
      id: 'seasonal-demand',
      title: '시즌별 수요 예측',
      description: '설악 단풍, 여름 워터파크 시즌 등 지역 특성 기반 수요 분석',
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      estimatedTime: '8분',
      lastRun: '2024-09-15',
      status: 'completed',
    },
    {
      id: 'revisit-pattern',
      title: '재방문 패턴 분석',
      description: '고객별 재방문 주기, 선호 시설, 평균 지출 분석',
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      estimatedTime: '6분',
      lastRun: '2024-09-10',
      status: 'completed',
    },
    {
      id: 'ltv-prediction',
      title: 'LTV (고객 생애 가치) 예측',
      description: '기업별 장기 매출 잠재력 및 투자 우선순위 분석',
      icon: <Users className="w-5 h-5 text-orange-500" />,
      estimatedTime: '10분',
      lastRun: '2024-09-05',
      status: 'completed',
    },
    {
      id: 'facility-usage',
      title: '부대시설 이용 패턴',
      description: '워터파크, 연회장, 회의실 조식 등 시설별 이용률 트렌드',
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      estimatedTime: '7분',
      lastRun: '미실행',
      status: 'ready',
    },
    {
      id: 'churn-risk',
      title: '이탈 위험 고객 예측',
      description: '재방문 가능성이 낮은 고객 조기 감지 및 대응',
      icon: <Users className="w-5 h-5 text-orange-500" />,
      estimatedTime: '9분',
      lastRun: '미실행',
      status: 'ready',
    },
  ];

  const handleRunAnalysis = (id: string) => {
    setRunningAnalyses([...runningAnalyses, id]);
    setAnalysisProgress({ ...analysisProgress, [id]: 0 });
    
    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setAnalysisProgress(prev => ({ ...prev, [id]: progress }));
      
      if (progress >= 100) {
        clearInterval(interval);
        setRunningAnalyses(prev => prev.filter(aid => aid !== id));
      }
    }, 200);
  };

  const handleViewResults = () => {
    if (onNavigateToResults) {
      onNavigateToResults();
    }
  };

  const insights = [
    {
      text: 'VIP 고객 중 평균 재방문 주기가 8.5개월로 분석됨',
      subtext: '→ 7개월 차에 자동 리마인더 발송 권장',
    },
    {
      text: '설악 단풍 시즌 수요가 전년 대비 18% 증가 예상',
      subtext: '→ 객실 배정 및 부대시설 준비 선제적 필요',
    },
    {
      text: '재방문 없는 고객 15개 기반 이탈 위험 감지',
      subtext: '→ 맞춤형 할인 및 캠페인 실행 권장',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">고객 분석</h1>
        <p className="text-gray-600">AI 기반 고객 세그먼트 분석 · 수요 예측 · 이탈 방지 · LTV 산출</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">총 분석 실행</div>
          <div className="text-3xl mb-2">142회</div>
          <div className="text-sm text-green-600">+18회 이번 달</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">분석 완료됨</div>
          <div className="text-3xl mb-2">12개</div>
          <div className="text-sm text-gray-600">지난달 6개</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">평균 실행 시간</div>
          <div className="text-3xl mb-2">7.2분</div>
          <div className="text-sm text-blue-600">목표치 8분</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">인사이트 도출</div>
          <div className="text-3xl mb-2">86건</div>
          <div className="text-sm text-orange-600">실행 가능</div>
        </div>
      </div>

      {/* Running Analyses */}
      {Object.keys(analysisProgress).length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="mb-6">실행중인 분석</h3>
          <div className="space-y-4">
            {Object.entries(analysisProgress).map(([id, progress]) => {
              const template = templates.find(t => t.id === id);
              return (
                <div key={id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">{template?.title}</span>
                      <span className="text-xs text-gray-500">시작 시간: 14:23</span>
                    </div>
                    <span className="text-sm text-blue-600">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Analysis Templates */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="mb-6">분석 템플릿</h3>
        <div className="grid grid-cols-2 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors">
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-1">{template.icon}</div>
                <div className="flex-1">
                  <div className="text-lg mb-2">{template.title}</div>
                  <div className="text-sm text-gray-600 mb-4">{template.description}</div>
                  
                  <div className="flex items-center gap-6 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-gray-600">예상 시간</div>
                        <div>{template.estimatedTime}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-gray-600">최근 실행일</div>
                        <div>{template.lastRun}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600">상태</div>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        template.status === 'completed' ? 'bg-green-100 text-green-700' :
                        template.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {template.status === 'completed' ? '완료' : 
                         template.status === 'pending' ? '대기중' : '미실행'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleRunAnalysis(template.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  disabled={runningAnalyses.includes(template.id)}
                >
                  <Play className="w-4 h-4" />
                  분석 실행
                </button>
                {template.status === 'completed' && (
                  <button 
                    onClick={handleViewResults}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    <FileText className="w-4 h-4" />
                    결과 보기
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Insights */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="mb-6">최근 인사이트</h3>
        <div className="space-y-3">
          {insights.map((insight, idx) => (
            <div key={idx} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-700 mb-1">{insight.text}</div>
                  <div className="text-xs text-gray-600">{insight.subtext}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
