import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Briefcase, ChevronRight, Award, Users, Globe, DollarSign, Building2, Target } from 'lucide-react';

const Main: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section - Enhanced */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1766722185/%EB%A9%94%EC%9D%B8%EB%B0%B0%EA%B2%BD_3_df7tkr.png" 
            alt="백승룡 - IR/PR/ESG 경영전략 전문가" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6 rounded-sm">
              Executive Summary & Strategy
            </span>
            <h1 className="serif text-4xl md:text-6xl font-bold leading-tight mb-6">
              투자와 경영의 경계를 허무는 30년,<br />
              <span className="text-blue-400">실전 전략가</span> 백승룡입니다.
            </h1>
            <div className="bg-white/5 backdrop-blur-sm border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                <span className="font-semibold text-white">KOSDAQ 상장사 IR/ESG 실무 + 벤처 CEO 22년 경력</span><br />
                심사역의 예리한 통찰과 경영자의 책임감 있는 심장으로,<br />
                기업의 본질적 가치를 증명하고 자본시장의 신뢰를 구축합니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl group"
              >
                전문가와 논의 시작하기 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/track-record" 
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/50 transition-all"
              >
                주요 성과 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section - Expanded to 6 metrics */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Achievements in Numbers</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              30년 실전 경험에서 검증된 성과, 숫자로 증명되는 전문성
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                label: "DART 공시 적시성", 
                value: "100%", 
                desc: "단 한 건의 불성실 공시 없음", 
                icon: ShieldCheck,
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-600"
              },
              { 
                label: "투자자 커버리지 확대", 
                value: "+50%", 
                desc: "기관 투자자 유입 및 리서치 활성화", 
                icon: TrendingUp,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-600"
              },
              { 
                label: "투자 성공 포트폴리오", 
                value: "10+", 
                desc: "안철수연구소 등 대표적 엑시트 성공", 
                icon: Briefcase,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-600"
              },
              { 
                label: "투자 유치 실적", 
                value: "50억+", 
                desc: "LG전자, STIC, 산은캐피탈 등", 
                icon: DollarSign,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-600"
              },
              { 
                label: "홈넷 수주 규모", 
                value: "5만 세대", 
                desc: "현대·대우·삼성건설 1군 건설사", 
                icon: Building2,
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-600"
              },
              { 
                label: "글로벌 사업 확장", 
                value: "4개국", 
                desc: "싱가포르, 말레이시아, 이스라엘, 중국", 
                icon: Globe,
                color: "text-teal-600",
                bgColor: "bg-teal-50",
                borderColor: "border-teal-600"
              },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className={`${stat.bgColor} p-8 border-l-4 ${stat.borderColor} flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300`}
              >
                <stat.icon className={`${stat.color} mb-4 group-hover:scale-110 transition-transform`} size={40} />
                <span className="text-5xl font-bold text-slate-900 mb-3">{stat.value}</span>
                <span className="text-lg font-semibold text-slate-800 mb-2">{stat.label}</span>
                <p className="text-sm text-slate-600 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Proposition - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why 백승룡?</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              단순 자문이 아닌, 함께 성장하는 전략적 파트너십
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Users size={32} />,
                title: "심사역 관점",
                desc: "투자자가 무엇을 보는지 정확히 압니다",
                detail: "벤처캐피탈 7년 경험"
              },
              {
                icon: <Award size={32} />,
                title: "CEO 경험",
                desc: "경영 현장의 한계와 가능성을 이해합니다",
                detail: "22년 대표이사 경력"
              },
              {
                icon: <Target size={32} />,
                title: "상장사 실무",
                desc: "IR/PR/ESG 실전 노하우를 보유합니다",
                detail: "KOSDAQ 상장사 기획실장"
              },
              {
                icon: <Globe size={32} />,
                title: "글로벌 네트워크",
                desc: "해외 제휴·투자 경험이 풍부합니다",
                detail: "4개국 사업 확장 성공"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 border border-slate-200 rounded-sm hover:border-slate-900 hover:shadow-lg transition-all group text-center"
              >
                <div className="text-slate-900 mb-4 inline-flex p-4 bg-slate-50 rounded-full group-hover:bg-slate-900 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-3 leading-relaxed">{item.desc}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
              <p className="text-slate-600 text-lg">
                상장사와 스타트업, 서로 다른 두 세계를 연결하는 전략적 가교 역할을 수행합니다. 
                기업의 생애 주기에 맞춘 최적의 성과 지표를 제안합니다.
              </p>
            </div>
            <Link 
              to="/services" 
              className="text-slate-900 font-semibold flex items-center gap-1 hover:underline group whitespace-nowrap"
            >
              전체 서비스 보기 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 document-shadow border-2 border-slate-100 group hover:border-blue-600 transition-all duration-300">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">For Listed Corporations</span>
              <h3 className="serif text-2xl font-bold mb-6 group-hover:text-blue-600 transition-colors">
                IR / PR / ESG 고도화 전략
              </h3>
              <ul className="space-y-4 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1 font-bold">✓</span> 
                  <span>시장 신뢰 회복을 위한 투명한 공시 체계 구축</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1 font-bold">✓</span> 
                  <span>글로벌 스탠다드에 부합하는 ESG 경영 로드맵</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1 font-bold">✓</span> 
                  <span>기관 투자자 및 애널리스트 타겟 마케팅</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                <span className="text-sm text-slate-500 italic font-medium">Maximize Enterprise Value</span>
                <Link 
                  to="/services" 
                  className="bg-slate-900 text-white p-3 rounded-full hover:bg-blue-600 transition-colors group-hover:scale-110"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white p-10 document-shadow border-2 border-slate-100 group hover:border-emerald-600 transition-all duration-300">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4 block">For Startups & Ventures</span>
              <h3 className="serif text-2xl font-bold mb-6 group-hover:text-emerald-600 transition-colors">
                IPO / M&A 액셀러레이팅
              </h3>
              <ul className="space-y-4 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1 font-bold">✓</span> 
                  <span>자본 조달(Series A-C)을 위한 투자 유치 전략</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1 font-bold">✓</span> 
                  <span>상장 심사를 대비한 경영 투명성 확보</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1 font-bold">✓</span> 
                  <span>최적의 Exit을 위한 M&A 타당성 분석</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                <span className="text-sm text-slate-500 italic font-medium">Strategic Growth & Exit</span>
                <Link 
                  to="/services" 
                  className="bg-slate-900 text-white p-3 rounded-full hover:bg-emerald-600 transition-colors group-hover:scale-110"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="serif text-6xl text-slate-700 italic font-bold">"</span>
          </div>
          <p className="serif text-2xl md:text-4xl text-white font-medium mb-8 leading-relaxed">
            비즈니스의 가치는 차트에 머물지 않습니다.<br />
            실체가 있는 성장, 숫자로 증명되는 신뢰만이<br/>
            지속 가능한 미래를 담보합니다.
          </p>
          <div className="w-20 h-px bg-slate-600 mx-auto mb-6"></div>
          <p className="text-slate-400 font-light tracking-widest uppercase text-sm">
            Strategic Advisor, Paik Seung Ryong
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;