import React, { useState } from 'react';
import { BookOpen, PenTool, Home, Search, User, Heart, MessageCircle, Plus } from 'lucide-react';
import HomePage from './components/HomePage';
import StoryReader from './components/StoryReader';
import StoryWriter from './components/StoryWriter';
import BrowseStories from './components/BrowseStories';
import UserProfile from './components/UserProfile';

type Page = 'home' | 'browse' | 'write' | 'story' | 'profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const handleNavigate = (page: Page, storyId?: string) => {
    setCurrentPage(page);
    if (storyId) {
      setSelectedStoryId(storyId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'browse':
        return <BrowseStories onNavigate={handleNavigate} />;
      case 'write':
        return <StoryWriter onNavigate={handleNavigate} />;
      case 'story':
        return <StoryReader storyId={selectedStoryId} onNavigate={handleNavigate} />;
      case 'profile':
        return <UserProfile onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="backdrop-blur-md bg-slate-900/50 border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleNavigate('home')}
            >
              <BookOpen className="h-8 w-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
              <span className="text-2xl font-bold text-white group-hover:text-amber-100 transition-colors">
                Inkwell
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigate('home')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === 'home'
                    ? 'bg-amber-400/20 text-amber-300'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => handleNavigate('browse')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === 'browse'
                    ? 'bg-amber-400/20 text-amber-300'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Search className="h-4 w-4" />
                <span>Browse</span>
              </button>
              <button
                onClick={() => handleNavigate('write')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === 'write'
                    ? 'bg-amber-400/20 text-amber-300'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <PenTool className="h-4 w-4" />
                <span>Write</span>
              </button>
            </nav>

            {/* User Profile */}
            <button
              onClick={() => handleNavigate('profile')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'profile'
                  ? 'bg-amber-400/20 text-amber-300'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Profile</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-slate-700/50">
          <div className="flex items-center justify-around py-2">
            <button
              onClick={() => handleNavigate('home')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'home' ? 'text-amber-300' : 'text-slate-400'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => handleNavigate('browse')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'browse' ? 'text-amber-300' : 'text-slate-400'
              }`}
            >
              <Search className="h-5 w-5" />
              <span className="text-xs">Browse</span>
            </button>
            <button
              onClick={() => handleNavigate('write')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'write' ? 'text-amber-300' : 'text-slate-400'
              }`}
            >
              <PenTool className="h-5 w-5" />
              <span className="text-xs">Write</span>
            </button>
            <button
              onClick={() => handleNavigate('profile')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'profile' ? 'text-amber-300' : 'text-slate-400'
              }`}
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;