import React, { useState, useEffect } from 'react';
import { FaUsers, FaBook, FaChartBar, FaCog, FaSignOutAlt, FaUserGraduate, FaDollarSign, FaCalendarAlt, FaBell, FaPlus, FaEdit, FaTrash, FaEye, FaDownload, FaFilter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components.css';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  enrolledCourses: number;
  completedCourses: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

interface Course {
  id: number;
  title: string;
  students: number;
  duration: string;
  level: string;
  price: number;
  status: 'active' | 'draft';
  instructor: string;
}

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

const AdminPage: React.FC = () => {
  const [admin, setAdmin] = useState<any>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'admin est connecté
    const adminData = localStorage.getItem('admin');
    if (!adminData) {
      navigate('/admin/login');
      return;
    }

    const parsedAdmin = JSON.parse(adminData);
    setAdmin(parsedAdmin);

    // Charger les données
    loadAdminData();
  }, [navigate]);

  const loadAdminData = () => {
    // Simuler les étudiants
    const mockStudents: Student[] = [
      {
        id: 1,
        name: 'Jean Dupont',
        email: 'jean.dupont@email.com',
        phone: '+237 657 02 90 80',
        enrolledCourses: 3,
        completedCourses: 1,
        joinDate: '2024-01-15',
        status: 'active'
      },
      {
        id: 2,
        name: 'Marie Curie',
        email: 'marie.curie@email.com',
        phone: '+237 620 97 25 79',
        enrolledCourses: 2,
        completedCourses: 2,
        joinDate: '2024-02-01',
        status: 'active'
      },
      {
        id: 3,
        name: 'Paul Martin',
        email: 'paul.martin@email.com',
        phone: '+237 655 12 34 56',
        enrolledCourses: 1,
        completedCourses: 0,
        joinDate: '2024-03-10',
        status: 'inactive'
      }
    ];

    // Simuler les cours
    const mockCourses: Course[] = [
      {
        id: 1,
        title: 'Développement Web Complet',
        students: 45,
        duration: '3 mois',
        level: 'Intermédiaire',
        price: 150000,
        status: 'active',
        instructor: 'John Doe'
      },
      {
        id: 2,
        title: 'Cybersécurité',
        students: 32,
        duration: '2 mois',
        level: 'Débutant',
        price: 100000,
        status: 'active',
        instructor: 'Jane Smith'
      },
      {
        id: 3,
        title: 'Data Science',
        students: 28,
        duration: '4 mois',
        level: 'Avancé',
        price: 200000,
        status: 'draft',
        instructor: 'Mike Johnson'
      }
    ];

    setStudents(mockStudents);
    setCourses(mockCourses);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  const stats: StatCard[] = [
    {
      title: 'Total Étudiants',
      value: '127',
      change: '+12%',
      icon: <FaUsers />,
      color: 'blue'
    },
    {
      title: 'Cours Actifs',
      value: '8',
      change: '+2',
      icon: <FaBook />,
      color: 'green'
    },
    {
      title: 'Revenus Mensuels',
      value: '2.5M FCFA',
      change: '+18%',
      icon: <FaDollarSign />,
      color: 'purple'
    },
    {
      title: 'Taux de Complétion',
      value: '78%',
      change: '+5%',
      icon: <FaChartBar />,
      color: 'yellow'
    }
  ];

  const getStatColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'green': return 'bg-green-100 text-green-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      case 'yellow': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  if (!admin) {
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
                <div className="bg-purple-600 p-2 rounded-lg">
                  <FaCog className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold text-gray-900">Admin Panel</span>
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
              
              {/* Admin Menu */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{admin.name}</p>
                  <p className="text-xs text-gray-500">Administrateur</p>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <FaCog className="text-white" />
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

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Tableau de bord', icon: <FaChartBar /> },
              { id: 'students', label: 'Étudiants', icon: <FaUserGraduate /> },
              { id: 'courses', label: 'Cours', icon: <FaBook /> },
              { id: 'revenue', label: 'Revenus', icon: <FaDollarSign /> },
              { id: 'calendar', label: 'Calendrier', icon: <FaCalendarAlt /> },
              { id: 'settings', label: 'Paramètres', icon: <FaCog /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Tableau de bord</h1>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${getStatColor(stat.color)}`}>
                        {stat.icon}
                      </div>
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Activité récente</h2>
                <div className="space-y-4">
                  {[
                    { user: 'Jean Dupont', action: 's\'est inscrit à', target: 'Développement Web', time: 'Il y a 2 heures' },
                    { user: 'Marie Curie', action: 'a terminé', target: 'Cybersécurité', time: 'Il y a 3 heures' },
                    { user: 'Paul Martin', action: 'a commencé', target: 'Data Science', time: 'Il y a 5 heures' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">
                          {activity.user} {activity.action} <span className="text-blue-600">{activity.target}</span>
                        </p>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                      <FaEye className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Students Tab */}
          {activeTab === 'students' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Étudiants</h1>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <FaPlus />
                  <span>Ajouter un étudiant</span>
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Étudiant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cours</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {students.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{student.name}</div>
                              <div className="text-sm text-gray-500">{student.phone}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {student.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {student.enrolledCourses} inscrits / {student.completedCourses} terminés
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(student.joinDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              student.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {student.status === 'active' ? 'Actif' : 'Inactif'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <FaEye />
                              </button>
                              <button className="text-gray-600 hover:text-gray-900">
                                <FaEdit />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Cours</h1>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <FaPlus />
                  <span>Ajouter un cours</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        course.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {course.status === 'active' ? 'Actif' : 'Brouillon'}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Instructeur:</span>
                        <span className="text-gray-900">{course.instructor}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Durée:</span>
                        <span className="text-gray-900">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Niveau:</span>
                        <span className="text-gray-900">{course.level}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Étudiants:</span>
                        <span className="text-gray-900">{course.students}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Prix:</span>
                        <span className="text-gray-900 font-semibold">{course.price.toLocaleString()} FCFA</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        <FaEdit className="inline mr-1" /> Modifier
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                        <FaEye className="inline mr-1" /> Voir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs placeholder */}
          {activeTab !== 'dashboard' && activeTab !== 'students' && activeTab !== 'courses' && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">{activeTab}</h1>
              <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                <p className="text-gray-600">Cette section est en cours de développement...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
