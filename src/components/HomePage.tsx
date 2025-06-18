import React from 'react';
import { TrendingUp, Clock, Star, ArrowRight, Users, BookOpen } from 'lucide-react';
import { mockStories } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: 'home' | 'browse' | 'write' | 'story' | 'profile', storyId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredStories = mockStories.slice(0, 3);
  const trendingStories = mockStories.slice(3, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-500/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where Stories
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Come Alive
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in a world of captivating tales, share your own stories, 
            and connect with a community of passionate writers and readers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('browse')}
              className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Explore Stories</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => onNavigate('write')}
              className="group border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
            >
              Start Writing
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">12,847</div>
                <div className="text-slate-400">Active Writers</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <BookOpen className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">43,291</div>
                <div className="text-slate-400">Stories Published</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <Star className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">892,156</div>
                <div className="text-slate-400">Stories Read</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
              <Star className="h-8 w-8 text-amber-400" />
              <span>Featured Stories</span>
            </h2>
            <button
              onClick={() => onNavigate('browse')}
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
                onClick={() => onNavigate('story', story.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                    {story.genre}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{story.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                      {story.author.charAt(0)}
                    </div>
                    <span className="text-sm text-slate-300">{story.author}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span className="text-sm">{story.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-amber-400" />
              <span>Trending Now</span>
            </h2>
          </div>
          <div className="space-y-6">
            {trendingStories.map((story, index) => (
              <div
                key={story.id}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate('story', story.id)}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                        {story.title}
                      </h3>
                      <span className="bg-amber-400/20 text-amber-300 px-2 py-1 rounded text-sm">
                        {story.genre}
                      </span>
                    </div>
                    <p className="text-slate-400 mb-3 line-clamp-2">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">by {story.author}</span>
                      <div className="flex items-center space-x-4 text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span className="text-sm">{story.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{story.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}