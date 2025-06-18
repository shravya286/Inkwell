import React, { useState } from 'react';
import { Search, Filter, Star, Clock, TrendingUp, Calendar } from 'lucide-react';
import { mockStories } from '../data/mockData';

interface BrowseStoriesProps {
  onNavigate: (page: 'home' | 'browse' | 'write' | 'story' | 'profile', storyId?: string) => void;
}

export default function BrowseStories({ onNavigate }: BrowseStoriesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const genres = ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Thriller', 'Horror', 'Adventure', 'Drama'];

  const filteredStories = mockStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = !selectedGenre || story.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const sortedStories = [...filteredStories].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.likes - a.likes;
      case 'recent':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Discover Stories</h1>
          <p className="text-xl text-slate-300">
            Explore thousands of captivating stories from talented writers around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stories, authors..."
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
              />
            </div>

            {/* Genre Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 appearance-none"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 appearance-none"
              >
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-400">
            Showing {sortedStories.length} {sortedStories.length === 1 ? 'story' : 'stories'}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedGenre && ` in ${selectedGenre}`}
          </p>
        </div>

        {/* Stories Grid */}
        {sortedStories.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-2">No stories found</h3>
            <p className="text-slate-400 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('');
              }}
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedStories.map((story) => (
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
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">
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
                    <div>
                      <div className="text-sm text-slate-300 font-medium">{story.author}</div>
                      <div className="text-xs text-slate-500">{story.publishedAt}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span className="text-sm">{story.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {sortedStories.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-slate-800/50 border border-slate-700/50 text-slate-300 px-8 py-3 rounded-full hover:bg-slate-700/50 hover:text-white transition-all duration-200">
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </div>
  );
}