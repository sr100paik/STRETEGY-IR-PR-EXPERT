
import React from 'react';
import { Calendar, Zap, ArrowRight, Target } from 'lucide-react';

const TrackRecord: React.FC = () => {
  const cases = [
    {
      title: "㈜엠플러스 IR/PR/ESG 총괄",
      category: "KOSDAQ LISTED CORP",
      period: "2024 - 2026",
      description: "ESG 기획실장으로서 지속가능경영보고서 최초 발간 및 ESG 평가 등급 개선 활동 주도. 공시 적시성 100% 달성 및 투자자·언론 커버리지를 50% 이상 확대함.",
      keyAchievements: [
        "DART 공시 적시성 100% 달성",
        "투자자·언론 커버리지 50% 이상 증가",
        "ESG 지속가능경영보고서 최초 발간"
      ],
      impact: "Coverage Increased by 50%+"
    },
    {
      title: "㈜플레넷 대표이사 (창업, LS 그룹 계열, Spin-Off)",
      category: "MANAGEMENT & M&A",
      period: "1999 - 2021",
      description: "LS그룹 계열사로서 M&A 성공 및 독립법인 운영. 현대·대우·삼성건설 등 1군 건설사 5만 세대 홈넷 수주 및 LG·삼성전자 공동 개발 네트워크 가전 출시. 50억원 규모 투자 유치.",
      keyAchievements: [
        "LS그룹 계열사 M&A 성공 및 독립법인 운영 (22년)",
        "50억원 투자 유치 (LG전자, STIC, 산은캐피탈 등)",
        "현대·대우·삼성건설 5만 세대 홈넷 수주",
        "해외 4개국 사업 확장 성공"
      ],
      impact: "50bn KRW Investment + 50K Units"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif text-4xl md:text-5xl font-bold mb-6">Track Record</h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            30년의 실무 경력과 20년의 경영 경험이 응축된 결과입니다. 
            상장사 실무와 벤처 투자의 정점에서 쌓아온 독보적인 레퍼런스를 확인하십시오.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-16">
          {cases.map((item, index) => (
            <div key={index} className="grid lg:grid-cols-12 gap-8 border-b border-slate-100 pb-16">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <Calendar size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.period}</span>
                </div>
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-4 block">{item.category}</span>
                <h3 className="serif text-2xl font-bold text-slate-900 mb-6 leading-tight">{item.title}</h3>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Zap size={16} className="text-blue-600" />
                  <span>{item.impact}</span>
                </div>
              </div>
              
              <div className="lg:col-span-8">
                <p className="text-slate-600 text-base mb-8 leading-relaxed">{item.description}</p>
                <div className="bg-slate-50 p-8 border border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Target size={14} /> 주요 성과 및 실적
                  </h4>
                  <ul className="space-y-4">
                    {item.keyAchievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="list-dot"></span>
                        <span className="text-sm text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h2 className="serif text-4xl font-bold text-slate-900 mb-4">Full Career Timeline</h2>
            <p className="text-slate-400">1992년부터 현재까지의 핵심 발자취</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {[
                { year: '2024 - 2026', title: '㈜엠플러스 ESG 기획실장', desc: '상장사 IR/PR/ESG 총괄' },
                { year: '2022 - 2023', title: '㈜지비스 부사장/CSO', desc: '인테리어 플랫폼 전략 및 제휴 확대' },
                { year: '1999 - 2021', title: '㈜플레넷 대표이사', desc: 'LS그룹 계열사 경영 및 사업 확장' },
                { year: '1992 - 1999', title: 'VC 3사 책임심사역', desc: '현대·LG·삼부벤처캐피탈 초기 투자' },
                { year: '1992', title: '한양대학교 경영학 석사', desc: 'IPO 가격 결정 연구' },
              ].map((milestone, i) => (
                <div key={i} className={`relative flex items-center w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-4 md:left-1/2 w-2 h-2 bg-slate-900 rounded-full md:-translate-x-1/2 z-10"></div>
                  <div className="w-full md:w-5/12 ml-12 md:ml-0 md:px-10">
                    <div className={`${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-xs font-bold text-blue-600 mb-2 block">{milestone.year}</span>
                      <h4 className="serif text-xl font-bold text-slate-900 mb-2">{milestone.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackRecord;
