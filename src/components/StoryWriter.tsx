import React, { useState } from 'react';
import { Save, Eye, ArrowLeft, Type, Palette, BookOpen } from 'lucide-react';

interface StoryWriterProps {
  onNavigate: (page: 'home' | 'browse' | 'write' | 'story' | 'profile', storyId?: string) => void;
}

export default function StoryWriter({ onNavigate }: StoryWriterProps) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [content, setContent] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const genres = [
    'Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Thriller',
    'Horror', 'Adventure', 'Drama', 'Comedy', 'Historical Fiction'
  ];

  const handleSave = () => {
    // In a real app, this would save to a backend
    alert('Story saved successfully!');
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim() || !genre) {
      alert('Please fill in all fields before publishing.');
      return;
    }
    // In a real app, this would publish to the platform
    alert('Story published successfully!');
    onNavigate('home');
  };

  if (isPreview) {
    return (
      <div className="min-h-screen">
        {/* Preview Header */}
        <div className="sticky top-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsPreview(false)}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Editor</span>
              </button>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Draft</span>
                </button>
                <button
                  onClick={handlePublish}
                  className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Publish</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-12 text-center">
            {genre && (
              <div className="inline-block bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {genre}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {title || 'Untitled Story'}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                  Y
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">You</div>
                  <div className="text-sm">Draft</div>
                </div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="text-slate-200 leading-relaxed space-y-6">
                {content ? (
                  content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-400 italic">Start writing your story...</p>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Writer Header */}
      <div className="sticky top-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPreview(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                <Save className="h-4 w-4" />
                <span>Save Draft</span>
              </button>
              <button
                onClick={handlePublish}
                className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
              >
                <BookOpen className="h-4 w-4" />
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Writer Interface */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Story Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 sticky top-32">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Palette className="h-5 w-5 text-amber-400" />
                <span>Story Details</span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Genre
                  </label>
                  <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg p-3 text-white focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200"
                  >
                    <option value="">Select genre</option>
                    {genres.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Word Count
                  </label>
                  <div className="bg-slate-700/30 rounded-lg p-3 text-slate-400">
                    {content.split(/\s+/).filter(word => word.length > 0).length} words
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Estimated Read Time
                  </label>
                  <div className="bg-slate-700/30 rounded-lg p-3 text-slate-400">
                    {Math.max(1, Math.ceil(content.split(/\s+/).filter(word => word.length > 0).length / 200))} min
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Editor */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              {/* Title Input */}
              <div className="p-6 border-b border-slate-700/50">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your story title..."
                  className="w-full bg-transparent border-none text-3xl font-bold text-white placeholder-slate-400 focus:outline-none"
                />
              </div>

              {/* Content Editor */}
              <div className="p-6">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Once upon a time..."
                  className="w-full h-[600px] bg-transparent border-none text-lg text-slate-200 placeholder-slate-400 focus:outline-none resize-none leading-relaxed"
                  style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
                />
              </div>
            </div>

            {/* Writing Tips */}
            <div className="mt-8 bg-amber-400/10 border border-amber-400/20 rounded-xl p-6">
              <h4 className="text-amber-300 font-semibold mb-3 flex items-center space-x-2">
                <Type className="h-5 w-5" />
                <span>Writing Tips</span>
              </h4>
              <ul className="text-amber-100 space-y-2 text-sm">
                <li>• Start with an engaging hook to capture your readers' attention</li>
                <li>• Use descriptive language to paint vivid scenes</li>
                <li>• Show, don't tell - let actions and dialogue reveal character</li>
                <li>• Keep paragraphs short for better readability</li>
                <li>• End with a satisfying conclusion that ties up loose ends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}