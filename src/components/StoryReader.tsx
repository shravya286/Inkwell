import React, { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Share2, Bookmark, User, Send, ThumbsUp } from 'lucide-react';
import { mockStories, mockComments } from '../data/mockData';

interface StoryReaderProps {
  storyId: string | null;
  onNavigate: (page: 'home' | 'browse' | 'write' | 'story' | 'profile', storyId?: string) => void;
}

export default function StoryReader({ storyId, onNavigate }: StoryReaderProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(mockComments);

  const story = mockStories.find(s => s.id === storyId);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Story not found</h2>
          <button
            onClick={() => onNavigate('home')}
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        author: 'You',
        content: newComment,
        timestamp: 'Just now',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isLiked 
                    ? 'bg-red-500/20 text-red-400' 
                    : 'text-slate-400 hover:text-red-400 hover:bg-red-500/10'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{story.likes + (isLiked ? 1 : 0)}</span>
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isBookmarked 
                    ? 'bg-amber-400/20 text-amber-400' 
                    : 'text-slate-400 hover:text-amber-400 hover:bg-amber-400/10'
                }`}
              >
                <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Story Header */}
        <header className="mb-12 text-center">
          <div className="inline-block bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {story.genre}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {story.title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-slate-400">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                {story.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-white font-medium">{story.author}</div>
                <div className="text-sm">Published {story.publishedAt}</div>
              </div>
            </div>
            <div className="hidden sm:block h-6 w-px bg-slate-600" />
            <div className="text-sm">
              {story.readTime} read
            </div>
          </div>
        </header>

        {/* Story Body */}
        <div className="prose prose-lg prose-invert max-w-none mb-16">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50">
            <div className="text-slate-200 leading-relaxed space-y-6">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-center space-x-8 mb-12 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{story.likes + (isLiked ? 1 : 0)}</div>
            <div className="text-sm text-slate-400">Likes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{comments.length}</div>
            <div className="text-sm text-slate-400">Comments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1.2k</div>
            <div className="text-sm text-slate-400">Views</div>
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section className="border-t border-slate-700/50 bg-slate-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
            <MessageCircle className="h-6 w-6 text-amber-400" />
            <span>Comments ({comments.length})</span>
          </h3>

          {/* Add Comment */}
          <div className="mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                  Y
                </div>
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts about this story..."
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg p-4 text-white placeholder-slate-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 resize-none"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-slate-400">
                      Be respectful and constructive
                    </div>
                    <button
                      onClick={handleAddComment}
                      disabled={!newComment.trim()}
                      className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="h-4 w-4" />
                      <span>Comment</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {comment.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-medium text-white">{comment.author}</span>
                      <span className="text-sm text-slate-400">{comment.timestamp}</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed mb-4">
                      {comment.content}
                    </p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-slate-400 hover:text-amber-400 transition-colors">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">{comment.likes}</span>
                      </button>
                      <button className="text-slate-400 hover:text-white transition-colors text-sm">
                        Reply
                      </button>
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