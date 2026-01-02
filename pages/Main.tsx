
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Briefcase, ChevronRight, Award, Users, Globe, DollarSign, Building2, Target } from 'lucide-react';

const Main: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dj1xp2ojh/image/upload/v1766722185/%EB%A9%94%EC%9D%B8%EB%B0%B0%EA%B2%BD_3_df7tkr.png" 
            alt="백승룡 - IR/PR/ESG 경영전략 전문가" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 rounded-sm">
              Executive Summary & Strategy
            </span>
            {/* 타이틀 스타일: 사용자 요청에 따라 30 숫자와 실전 전략가 스타일 수정 */}
            <h1 className="serif text-4xl md:text-6xl font-bold leading-[1.2] mb-8 tracking-tight">
              투자와 경영의 경계를 허무는 <br className="hidden md:block" />
              30년,<br />
              <span className="text-[#93C5FD]">실전 전략가</span> 백승룡입니다.
            </h1>
            <div className="bg-white/5 backdrop-blur-sm border-l-2 border-blue-400 p-6 mb-10">
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light">
                <span className="font-semibold text-white">KOSDAQ 상장사 IR/ESG 실무 + 벤처 CEO 22년 경력</span><br />
                심사역의 예리한 통찰과 경영자의 책임감 있는 심장으로,<br />
                기업의 본질적 가치를 증명하고 자본시장의 신뢰를 구축합니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 px-8 py-4 rounded-sm font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-all uppercase tracking-widest"
              >
                Consulting Request
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/track-record" 
                className="border border-white/40 text-white px-8 py-4 rounded-sm font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all uppercase tracking-widest"
              >
                Track Record
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies - Matched to Screenshot */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="serif text-4xl font-bold text-slate-900 mb-6">Core Competencies</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                상장사와 스타트업, 서로 다른 두 세계를 연결하는 전략적 가교 역할을 수행합니다. 
                기업의 생애 주기에 맞춘 최적의 성과 지표를 제안합니다.
              </p>
            </div>
            <Link 
              to="/services" 
              className="text-slate-900 font-bold text-sm flex items-center gap-1 hover:underline group uppercase tracking-widest"
            >
              전체 서비스 보기 
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* List Item with Dots as requested */}
            <div className="bg-white p-12 document-shadow border border-slate-100 relative group">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-6 block">For Listed Corporations</span>
              <h3 className="serif text-3xl font-bold mb-8 text-slate-900">
                IR / PR / ESG 고도화 전략
              </h3>
              <ul className="space-y-5 text-slate-600 mb-12">
                <li className="flex items-start">
                  <span className="list-dot"></span> 
                  <span className="text-[15px]">시장 신뢰 회복을 위한 투명한 공시 체계 구축</span>
                </li>
                <li className="flex items-start">
                  <span className="list-dot"></span> 
                  <span className="text-[15px]">글로벌 스탠다드에 부합하는 ESG 경영 로드맵</span>
                </li>
                <li className="flex items-start">
                  <span className="list-dot"></span> 
                  <span className="text-[15px]">기관 투자자 및 애널리스트 타겟 마케팅</span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400 italic font-medium">Maximize Enterprise Value</span>
                <Link 
                  to="/services" 
                  className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-all shadow-md"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white p-12 document-shadow border border-slate-100 relative group">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-6 block">For Startups & Ventures</span>
              <h3 className="serif text-3xl font-bold mb-8 text-slate-900">
                IPO / M&A 엑셀러레이팅
              </h3>
              <ul className="space-y-5 text-slate-600 mb-12">
                <li className="flex items-start">
                  <span className="list-dot"></span> 
                  <span className="text-[15px]">자본 조달(Series A-C)을 위한 투자 유치 전략</span>
                </li>
                <li className="flex items-start">
                  <span className="list-dot"></span> 
                  <span className="text-[15px]">상장 심사를 대비한 경영 투명성 확보</span>
                </li>
                <li className="flex items-start">
                  <span className="list-dot"></span> 
                  <span className="text-[15px]">최적의 Exit을 위한 M&A 타당성 분석</span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400 italic font-medium">Strategic Growth & Exit</span>
                <Link 
                  to="/services" 
                  className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-all shadow-md"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8">
              <span className="serif text-6xl font-bold text-slate-900 mb-4 block">100%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">DART Disclosure</span>
              <p className="text-sm text-slate-500">단 한 건의 불성실 공시 없는 신뢰의 경영</p>
            </div>
            <div className="text-center p-8 border-x border-slate-200">
              <span className="serif text-6xl font-bold text-slate-900 mb-4 block">30Y</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Total Experience</span>
              <p className="text-sm text-slate-500">투자 심사와 기업 경영을 아우르는 시간</p>
            </div>
            <div className="text-center p-8">
              <span className="serif text-6xl font-bold text-slate-900 mb-4 block">+50%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Coverage Growth</span>
              <p className="text-sm text-slate-500">기관 투자자 및 시장 인지도 비약적 상승</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
