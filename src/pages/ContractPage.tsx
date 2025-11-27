import { FileText, CheckCircle, Clock, XCircle, Download, Plus } from 'lucide-react';

export function ContractPage() {
  const contracts = [
    { id: 'Q-2024-089', company: 'A그룹 인재개발원', type: '견적서', amount: '₩80M', status: '승인됨', date: '2024.10.15', validUntil: '2024.10.30' },
    { id: 'C-2024-042', company: 'B전자 본부', type: '계약서', amount: '₩35M', status: '서명 대기', date: '2024.10.18', validUntil: '2024.10.25' },
    { id: 'Q-2024-090', company: 'G물산 연수팀', type: '견적서', amount: '₩65M', status: '검토중', date: '2024.10.19', validUntil: '2024.11.05' },
    { id: 'C-2024-041', company: 'F보험 팀빌딩', type: '계약서', amount: '₩25M', status: '완료', date: '2024.10.10', validUntil: '-' },
  ];

  const packages = [
    { name: '단풍 시즌 워크숍 패키지', facilities: ['객실 2박', '워터파크', '조식 2회', '회의실'], price: '₩420K/인' },
    { name: '여름 워터파크 패키지', facilities: ['객실 1박', '워터파크 종일권', '조식 1회'], price: '₩180K/인' },
    { name: '연회 + 숙박 패키지', facilities: ['객실 1박', '연회장', '조식 1회'], price: '₩220K/인' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2">계약 & 견적</h1>
        <p className="text-gray-600">견적서 생성/관리 · 계약 전환율 · 패키지 구성</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">총 견적서</div>
          <div className="text-3xl mb-2">24건</div>
          <div className="text-sm text-blue-600">이번 달</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">계약 전환율</div>
          <div className="text-3xl mb-2">68%</div>
          <div className="text-sm text-green-600">+8%p</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">계약 완료</div>
          <div className="text-3xl mb-2">16건</div>
          <div className="text-sm text-orange-600">₩485M</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">서명 대기</div>
          <div className="text-3xl mb-2">3건</div>
          <div className="text-sm text-yellow-600">₩95M</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>계약 & 견적 목록</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                <Plus className="w-4 h-4" />
                새 견적서 생성
              </button>
            </div>

            <div className="space-y-3">
              {contracts.map((contract, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-gray-500">{contract.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          contract.status === '완료' ? 'bg-green-100 text-green-700' :
                          contract.status === '승인됨' ? 'bg-blue-100 text-blue-700' :
                          contract.status === '서명 대기' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {contract.status}
                        </span>
                      </div>
                      <div className="text-lg mb-1">{contract.company}</div>
                      <div className="text-sm text-gray-600">{contract.type} · {contract.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl text-orange-600 mb-2">{contract.amount}</div>
                      {contract.validUntil !== '-' && (
                        <div className="text-xs text-gray-500">유효기간: {contract.validUntil}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">
                      <Download className="w-4 h-4" />
                      다운로드
                    </button>
                    <button className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
                      상세보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="mb-4">상태별 현황</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">완료</span>
                </div>
                <span className="text-green-600">16건</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">진행중</span>
                </div>
                <span className="text-yellow-600">5건</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm">취소됨</span>
                </div>
                <span className="text-red-600">3건</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
            <h3 className="mb-4">💡 Quick Tip</h3>
            <p className="text-sm text-gray-700 mb-3">
              단풍 시즌 특별 패키지로 견적 전환율이 평균 23% 증가했습니다.
            </p>
            <button className="text-sm text-orange-600 hover:text-orange-700">
              → 패키지 템플릿 보기
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="mb-6">인기 패키지 템플릿</h3>
        <div className="grid grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors cursor-pointer">
              <div className="text-lg mb-3">{pkg.name}</div>
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                {pkg.facilities.map((facility, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
              <div className="text-xl text-orange-600 mb-3">{pkg.price}</div>
              <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                이 템플릿 사용
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
