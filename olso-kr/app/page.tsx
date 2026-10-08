import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-pastel-greenLight text-gray-800 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="text-3xl font-extrabold text-pastel-text tracking-tighter">Olso</div>
        <nav className="space-x-6 font-medium text-gray-600 hidden md:flex">
          <a href="#about" className="hover:text-pastel-text transition-colors">올소 소개</a>
          <a href="#features" className="hover:text-pastel-text transition-colors">핵심 기능</a>
          <a href="#programs" className="hover:text-pastel-text transition-colors">학습 프로그램</a>
          <a href="#team" className="hover:text-pastel-text transition-colors">팀 소개</a>
        </nav>
        <button className="bg-pastel-text text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-green-800 transition-all">
          로그인 / 가입
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI가 분석하는 <br /> 나만의 <span className="text-pastel-text">맞춤형 학습 프로그램</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            문제 은행에서 추출한 문항으로 내 취약점을 정확히 파악하고, <br className="hidden md:block"/>
            어떤 개념과 교재 페이지를 학습해야 하는지 올소가 알려드립니다.
          </p>
          <div className="pt-4">
            <button className="bg-pastel-greenDark text-gray-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              무료 진단 테스트 시작하기
            </button>
          </div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-3xl shadow-xl border border-pastel-green relative">
          <div className="w-full h-64 bg-pastel-greenLight rounded-xl flex items-center justify-center border border-gray-100">
            <span className="text-pastel-text font-bold text-xl">대시보드 / 그래프 UI 예시 영역</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">올소만의 압도적인 학습 관리 시스템</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pastel-greenLight p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pastel-green/50">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">정밀 취약점 분석</h3>
              <p className="text-gray-600">
                테스트 결과에 따라 학생이 현재 보완해야 할 핵심 개념이 무엇인지 정확하게 짚어냅니다.
              </p>
            </div>
            
            <div className="bg-pastel-greenLight p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pastel-green/50">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">매월 역량 변화 리포트</h3>
              <p className="text-gray-600">
                회원들 간의 석차, 문항별 정답률과 자신의 위치를 직관적인 그래프로 제공하여 성취도를 한눈에 파악합니다.
              </p>
            </div>

            <div className="bg-pastel-greenLight p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pastel-green/50">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">교재 페이지 추천</h3>
              <p className="text-gray-600">
                어떤 교재의 몇 페이지를 학습해야 하는지 콕 집어 알려주어, 불필요한 시간 낭비 없는 효율적인 학습 기회를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-pastel-greenLight">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">학습 프로그램 (포트폴리오)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white py-12 rounded-2xl shadow-sm border border-pastel-green hover:-translate-y-2 transition-transform cursor-pointer">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-xl font-bold text-gray-800">수학</h3>
            </div>
            <div className="bg-white py-12 rounded-2xl shadow-sm border border-pastel-green hover:-translate-y-2 transition-transform cursor-pointer">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-800">물리</h3>
            </div>
            <div className="bg-white py-12 rounded-2xl shadow-sm border border-pastel-green hover:-translate-y-2 transition-transform cursor-pointer">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-800">화학</h3>
            </div>
            <div className="bg-white py-12 rounded-2xl shadow-sm border border-pastel-green hover:-translate-y-2 transition-transform cursor-pointer">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-gray-800">생명과학</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">올소를 만드는 사람들</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            
            <div className="text-center w-full md:w-64">
              <div className="w-32 h-32 mx-auto bg-pastel-green rounded-full mb-6 flex items-center justify-center text-3xl shadow-inner">
                👨‍💼
              </div>
              <h3 className="text-2xl font-bold text-gray-800">달마</h3>
              <p className="text-pastel-text font-semibold mb-3">CEO</p>
              <p className="text-gray-500 text-sm">학생들의 교육 격차를 줄이고 완벽한 맞춤 학습 환경을 고민합니다.</p>
            </div>

            <div className="text-center w-full md:w-64">
              <div className="w-32 h-32 mx-auto bg-pastel-green rounded-full mb-6 flex items-center justify-center text-3xl shadow-inner">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold text-gray-800">제현</h3>
              <p className="text-pastel-text font-semibold mb-3">CTO</p>
              <p className="text-gray-500 text-sm">최고의 AI 기술과 데이터를 바탕으로 혁신적인 플랫폼을 개발합니다.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-xl font-bold text-gray-400 tracking-tighter">Olso</div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Olso. All rights reserved. <br/>
            contact@olso.kr | 대표 달마 | CTO 제현
          </div>
        </div>
      </footer>
    </main>
  );
}
