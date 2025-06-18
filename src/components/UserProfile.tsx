import React, { useState } from 'react';
import { User, BookOpen, Heart, MessageCircle, Calendar, Settings, Edit, Plus } from 'lucide-react';
import { mockStories } from '../data/mockData';

interface UserProfileProps {
  onNavigate: (page: 'home' | 'browse' | 'write' | 'story' | 'profile', storyId?: string) => void;
}

export default function UserProfile({ onNavigate }: UserProfileProps) {
  const [activeTab, setActiveTab] = useState<'stories' | 'favorites' | 'activity'>('stories');

  const userStories = mockStories.slice(0, 4); // Simulate user's stories
  const favoriteStories = mockStories.slice(2, 5); // Simulate favorite stories

  const stats = {
    storiesPublished: userStories.length,
    totalLikes: userStories.reduce((sum, story) => sum + story.likes, 0),
    totalViews: 12847,
    followers: 234
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 text-4xl font-bold">
                Y
              </div>
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 transition-colors">
                <Edit className="h-4 w-4" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Your Profile</h1>
                  <p className="text-slate-400">Storyteller & Reader</p>
                </div>
                <button className="flex items-center space-x-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors mt-4 sm:mt-0">
                  <Settings className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Passionate about crafting compelling narratives that transport readers to new worlds. 
                Specializing in fantasy and science fiction with a touch of mystery.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{stats.storiesPublished}</div>
                  <div className="text-sm text-slate-400">Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{stats.totalLikes}</div>
                  <div className="text-sm text-slate-400">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{stats.totalViews.toLocaleString()}</div>
                  <div className="text-sm text-slate-400">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{stats.followers}</div>
                  <div className="text-sm text-slate-400">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-slate-800/30 backdrop-blur-sm rounded-xl p-2 border border-slate-700/50">
          <button
            onClick={() => setActiveTab('stories')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'stories'
                ? 'bg-amber-400/20 text-amber-300'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span>My Stories</span>
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'favorites'
                ? 'bg-amber-400/20 text-amber-300'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Heart className="h-5 w-5" />
            <span>Favorites</span>
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'activity'
                ? 'bg-amber-400/20 text-amber-300'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <MessageCircle className="h-5 w-5" />
            <span>Activity</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'stories' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Your Stories</h2>
              <button
                onClick={() => onNavigate('write')}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>New Story</span>
              </button>
            </div>

            {userStories.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No stories yet</h3>
                <p className="text-slate-400 mb-6">Start writing your first story to share with the community</p>
                <button
                  onClick={() => onNavigate('write')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                >
                  Start Writing
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userStories.map((story) => (
                  <div
                    key={story.id}
                    className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
                    onClick={() => onNavigate('story', story.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                        {story.genre}
                      </span>
                      <div className="flex items-center space-x-3 text-slate-400">
                        <button className="hover:text-white transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {story.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-4 line-clamp-2">
                      {story.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4 text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{story.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{story.publishedAt}</span>
                        </div>
                      </div>
                      <span className="text-amber-400 font-medium">Published</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Favorite Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteStories.map((story) => (
                <div
                  key={story.id}
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
                  onClick={() => onNavigate('story', story.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                      {story.genre}
                    </span>
                    <Heart className="h-5 w-5 text-red-400 fill-current" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 line-clamp-2">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {story.author.charAt(0)}
                    </div>
                    <span className="text-sm text-slate-300">{story.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Recent Activity</h2>
            <div className="space-y-6">
              {[
                { type: 'comment', story: 'The Last Light', time: '2 hours ago' },
                { type: 'like', story: 'Echoes of Tomorrow', time: '1 day ago' },
                { type: 'publish', story: 'Your new story', time: '3 days ago' },
                { type: 'follow', user: 'Sarah Chen', time: '1 week ago' }
              ].map((activity, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                      {activity.type === 'comment' && <MessageCircle className="h-5 w-5" />}
                      {activity.type === 'like' && <Heart className="h-5 w-5" />}
                      {activity.type === 'publish' && <BookOpen className="h-5 w-5" />}
                      {activity.type === 'follow' && <User className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white">
                        {activity.type === 'comment' && `You commented on "${activity.story}"`}
                        {activity.type === 'like' && `You liked "${activity.story}"`}
                        {activity.type === 'publish' && `You published "${activity.story}"`}
                        {activity.type === 'follow' && `${activity.user} started following you`}
                      </p>
                      <p className="text-slate-400 text-sm mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}