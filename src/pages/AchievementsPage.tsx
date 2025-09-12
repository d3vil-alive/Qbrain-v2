import React from 'react';
import { Trophy, Calendar, MapPin, Award, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/ui/AnimatedSection';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useHackathons, useAchievements } from '../hooks/useFirebaseData';

const AchievementsPage = () => {
  const { hackathons, loading: hackathonsLoading } = useHackathons();
  const { achievements, loading: achievementsLoading } = useAchievements();

  const loading = hackathonsLoading || achievementsLoading;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white">
        <Header />
        <div className="pt-24 pb-20 flex items-center justify-center min-h-screen">
          <LoadingSpinner size="lg" text="Loading achievements..." />
        </div>
        <Footer />
      </div>
    );
  }

  const completedHackathons = hackathons.filter((h: any) => h.status === 'completed');

  return (
    <>
      <SEOHead
        title="Achievements - Qbrain Team | Hackathon Winners & Tech Competitions"
        description="Explore Qbrain Team's achievements including AUAT Techfest 2025 victory, hackathon wins, and technical excellence in AI, IoT, and innovation competitions."
        keywords="qbrain achievements, hackathon winners, AUAT techfest, tech competition victories, AI IoT projects, student achievements"
        url="https://qbrain.in/achievements"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              
              {/* Page Header */}
              <AnimatedSection animation="fadeIn" className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Our Achievements
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Celebrating our journey of innovation, competition victories, and technical excellence in the world of technology
                </p>
              </AnimatedSection>

              {/* Featured Achievement */}
              {completedHackathons.length > 0 && (
                <AnimatedSection animation="slideUp" className="mb-20">
                  <div className="relative group max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                      
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full mb-4">
                          <Star className="h-5 w-5 mr-2" />
                          <span className="font-bold">Featured Achievement</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          🏆 AUAT Techfest 2025 Winners
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                          Our flagship victory showcasing innovation in AI-powered smart helmet technology
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-slate-700/30 rounded-xl">
                          <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                          <h3 className="text-lg font-bold text-white mb-2">First Place</h3>
                          <p className="text-gray-400">Out of 200+ teams</p>
                        </div>
                        <div className="p-6 bg-slate-700/30 rounded-xl">
                          <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                          <h3 className="text-lg font-bold text-white mb-2">Innovation Award</h3>
                          <p className="text-gray-400">Best Technical Solution</p>
                        </div>
                        <div className="p-6 bg-slate-700/30 rounded-xl">
                          <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                          <h3 className="text-lg font-bold text-white mb-2">Team Excellence</h3>
                          <p className="text-gray-400">Outstanding Collaboration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Hackathons Grid */}
              {completedHackathons.length > 0 && (
                <AnimatedSection animation="slideUp" className="mb-20">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Competition History</h2>
                    <p className="text-gray-400 text-lg">Our journey through various hackathons and tech competitions</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {completedHackathons.map((hackathon: any, index: number) => (
                      <motion.div
                        key={hackathon.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-green-400/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-slate-800/50 border border-cyan-400/20 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 h-full">
                          
                          {hackathon.imageUrl && (
                            <div className="h-48 overflow-hidden">
                              <img
                                src={hackathon.imageUrl}
                                alt={hackathon.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                                hackathon.result?.toLowerCase().includes('first') || hackathon.result?.toLowerCase().includes('winner')
                                  ? 'bg-yellow-400/20 text-yellow-400'
                                  : 'bg-green-400/20 text-green-400'
                              }`}>
                                {hackathon.status}
                              </span>
                              {hackathon.result && (
                                <div className="flex items-center text-yellow-400">
                                  <Trophy className="h-4 w-4 mr-1" />
                                  <span className="text-sm font-semibold">{hackathon.result}</span>
                                </div>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-white mb-2">{hackathon.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{hackathon.description}</p>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-gray-400 text-xs">
                                <Calendar className="h-3 w-3 mr-2" />
                                {hackathon.date?.toDate ? format(hackathon.date.toDate(), 'MMM dd, yyyy') : 'TBD'}
                              </div>
                              {hackathon.location && (
                                <div className="flex items-center text-gray-400 text-xs">
                                  <MapPin className="h-3 w-3 mr-2" />
                                  {hackathon.location}
                                </div>
                              )}
                            </div>
                            
                            {hackathon.technologies && (
                              <div className="flex flex-wrap gap-1">
                                {hackathon.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {hackathon.technologies.length > 3 && (
                                  <span className="px-2 py-1 bg-slate-700/50 text-xs text-cyan-400 rounded">
                                    +{hackathon.technologies.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* Achievement Gallery */}
              {achievements.length > 0 && (
                <AnimatedSection animation="slideUp" className="mb-20">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Achievement Gallery</h2>
                    <p className="text-gray-400 text-lg">Showcasing our diverse accomplishments and recognitions</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement: any, index: number) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-slate-800/50 border border-purple-400/20 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 h-full">
                          
                          {achievement.images && achievement.images.length > 0 && (
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={achievement.images[0]}
                                alt={achievement.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              {achievement.images.length > 1 && (
                                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                                  +{achievement.images.length - 1} more
                                </div>
                              )}
                            </div>
                          )}
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                                achievement.category === 'hackathon' ? 'bg-purple-400/20 text-purple-400' :
                                achievement.category === 'competition' ? 'bg-blue-400/20 text-blue-400' :
                                achievement.category === 'award' ? 'bg-yellow-400/20 text-yellow-400' :
                                'bg-green-400/20 text-green-400'
                              }`}>
                                {achievement.category}
                              </span>
                              
                              {achievement.position && (
                                <div className="flex items-center text-yellow-400">
                                  <Trophy className="h-4 w-4 mr-1" />
                                  <span className="text-sm font-semibold">{achievement.position}</span>
                                </div>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{achievement.description}</p>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-gray-400 text-xs">
                                <Calendar className="h-3 w-3 mr-2" />
                                {achievement.date?.toDate ? format(achievement.date.toDate(), 'MMM dd, yyyy') : 'Unknown'}
                              </div>
                              {achievement.location && (
                                <div className="flex items-center text-gray-400 text-xs">
                                  <MapPin className="h-3 w-3 mr-2" />
                                  {achievement.location}
                                </div>
                              )}
                            </div>
                            
                            {achievement.technologies && (
                              <div className="flex flex-wrap gap-1">
                                {achievement.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* CTA Section */}
              <AnimatedSection animation="fadeIn" className="text-center">
                <div className="relative group max-w-2xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-slate-800/50 border border-cyan-400/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Achieve More?</h3>
                    <p className="text-gray-400 mb-6">
                      Join our team and be part of the next breakthrough achievement in technology and innovation.
                    </p>
                    <motion.button
                      onClick={() => window.location.href = '/#join'}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold rounded-full hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Our Team
                    </motion.button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AchievementsPage;