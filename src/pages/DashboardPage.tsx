import React, { useState, useEffect } from 'react';
import { FaUser, FaGraduationCap, FaBook, FaClock, FaTrophy, FaChartLine, FaCalendarAlt, FaBell, FaSignOutAlt, FaPlay, FaCheckCircle, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components.css';

interface Course {
  id: number;
  title: string;
  progress: number;
  duration: string;
  level: string;
  status: 'active' | 'completed' | 'locked';
  nextLesson?: string;
  totalLessons: number;
  completedLessons: number;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  date?: string;
}

const DashboardPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [notifications] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    // Charger les données simulées
    loadDashboardData();
  }, [navigate]);

  const loadDashboardData = () => {
    // Simuler les cours
    const mockCourses: Course[] = [
      {
        id: 1,
        title: 'Développement Web Complet',
        progress: 65,
        duration: '3 mois',
        level: 'Intermédiaire',
        status: 'active',
        nextLesson: 'React Hooks Avancés',
        totalLessons: 45,
        completedLessons: 29
      },
      {
        id: 2,
        title: 'Introduction à la Cybersécurité',
        progress: 100,
        duration: '2 mois',
        level: 'Débutant',
        status: 'completed',
        totalLessons: 30,
        completedLessons: 30
      },
      {
        id: 3,
        title: 'Data Science avec Python',
        progress: 0,
        duration: '4 mois',
        level: 'Avancé',
        status: 'locked',
        totalLessons: 50,
        completedLessons: 0
      }
    ];

    // Simuler les achievements
    const mockAchievements: Achievement[] = [
      {
        id: 1,
        title: 'Premiers Pas',
        description: 'Complétez votre première leçon',
        icon: '🎯',
        unlocked: true,
        date: '2024-01-15'
      },
      {
        id: 2,
        title: 'Développeur Web',
        description: 'Terminez le cours de Développement Web',
        icon: '🌐',
        unlocked: false
      },
      {
        id: 3,
        title: 'Expert en Sécurité',
        description: 'Maîtrisez les bases de la cybersécurité',
        icon: '🔒',
        unlocked: true,
        date: '2024-02-20'
      }
    ];

    setCourses(mockCourses);
    setAchievements(mockAchievements);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'locked': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <FaPlay className="text-blue-600" />;
      case 'completed': return <FaCheckCircle className="text-green-600" />;
      case 'locked': return <FaLock className="text-gray-600" />;
      default: return null;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold text-gray-900">ARCHYVE ACADEMY</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                  <FaBell className="text-gray-600" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>
              
              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">Étudiant</p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaUser className="text-white" />
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                  title="Déconnexion"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenue, {user.name} ! 👋
          </h1>
          <p className="text-gray-600">
            Continuez votre apprentissage et atteignez vos objectifs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Cours actifs</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaBook className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Heures d'apprentissage</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FaClock className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Cours complétés</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <FaTrophy className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Succès</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <FaChartLine className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Mes Cours</h2>
              
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.level}</span>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${getStatusColor(course.status)}`}>
                        {getStatusIcon(course.status)}
                        <span className="capitalize">
                          {course.status === 'active' ? 'En cours' : 
                           course.status === 'completed' ? 'Terminé' : 'Verrouillé'}
                        </span>
                      </div>
                    </div>

                    {course.status === 'active' && (
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>{course.completedLessons}/{course.totalLessons} leçons</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Prochaine leçon : {course.nextLesson}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-end">
                      {course.status === 'active' ? (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Continuer
                        </button>
                      ) : course.status === 'completed' ? (
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Revoir
                        </button>
                      ) : (
                        <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg cursor-not-allowed">
                          Verrouillé
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link 
                  to="/courses" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Découvrir plus de cours →
                </Link>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Succès</h2>
              
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`flex items-start space-x-3 p-3 rounded-lg ${
                      achievement.unlocked ? 'bg-yellow-50' : 'bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${
                        achievement.unlocked ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${
                        achievement.unlocked ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.date && (
                        <p className="text-xs text-gray-500 mt-1">
                          Débloqué le {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Prochains cours</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FaCalendarAlt className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">React Hooks Avancés</p>
                    <p className="text-sm text-gray-600">Aujourd'hui, 14:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FaCalendarAlt className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Workshop pratique</p>
                    <p className="text-sm text-gray-600">Demain, 10:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
