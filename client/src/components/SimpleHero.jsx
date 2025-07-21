import React from 'react';

const SimpleHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6">
          Talal Ahmed Al Aidarus
        </h1>
        <h2 className="text-2xl text-blue-200 mb-8">
          Software Engineer & AI Developer
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Passionate about creating innovative solutions through software engineering,
          artificial intelligence, and cutting-edge technology.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
            View Projects
          </button>
          <button className="border border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold transition-colors">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;
