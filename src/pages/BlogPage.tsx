import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUser, FaTag, FaSearch, FaClock, FaArrowRight, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/components.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Simuler le chargement des articles de blog
    const mockPosts: BlogPost[] = [
      {
        id: 1,
        title: 'Les 10 compétences les plus demandées en développement web en 2024',
        excerpt: 'Découvrez les compétences essentielles que les entreprises recherchent chez les développeurs web cette année.',
        content: `Le développement web évolue rapidement, et rester à jour avec les dernières tendances est crucial pour les développeurs. En 2024, certaines compétences sont particulièrement recherchées par les entreprises...

**1. React et Next.js**
React continue de dominer le marché des frameworks JavaScript. Next.js, avec son rendu côté serveur et ses performances optimales, est devenu indispensable.

**2. TypeScript**
La typage statique n'est plus une option, mais une nécessité pour les projets d'envergure.

**3. Node.js et Express**
Le développement backend avec JavaScript reste très populaire grâce à son écosystème riche.

**4. GraphQL**
Cette alternative à REST gagne en popularité pour son efficacité et sa flexibilité.

**5. Docker et Kubernetes**
La conteneurisation et l'orchestration sont devenus des standards dans le développement moderne.

...`,
        author: 'Jean Dupont',
        date: '2024-03-15',
        readTime: '8 min',
        category: 'Développement',
        tags: ['React', 'JavaScript', 'Web', 'Tendances'],
        image: '/images/web-dev.jpg',
        featured: true
      },
      {
        id: 2,
        title: 'Comment lancer votre carrière en cybersécurité',
        excerpt: 'Un guide complet pour débuter dans le domaine passionnant de la cybersécurité.',
        content: `La cybersécurité est l'un des domaines les plus porteurs actuellement. Voici comment commencer votre carrière...

**Pourquoi la cybersécurité ?**
- Demande croissante
- Salaires attractifs
- Impact réel sur la sécurité des entreprises
- Évolution constante des technologies

**Les compétences de base**
1. Connaissances en réseaux
2. Programmation (Python, Bash)
3. Systèmes d'exploitation
4. Cryptographie

**Certifications recommandées**
- CompTIA Security+
- CISSP
- CEH
- OSCP

...`,
        author: 'Marie Curie',
        date: '2024-03-10',
        readTime: '6 min',
        category: 'Cybersécurité',
        tags: ['Sécurité', 'Carrière', 'Certifications'],
        image: '/images/cybersec.jpg',
        featured: true
      },
      {
        id: 3,
        title: 'Data Science : Les outils essentiels pour commencer',
        excerpt: 'Les outils et technologies que tout data scientist débutant devrait maîtriser.',
        content: `Le data science combine statistiques, programmation et expertise métier. Voici les outils indispensables...

**Langages de programmation**
1. Python - Le plus populaire
2. R - Pour les statistiques
3. SQL - Pour les bases de données

**Librairies Python essentielles**
- Pandas pour la manipulation de données
- NumPy pour les calculs numériques
- Matplotlib et Seaborn pour la visualisation
- Scikit-learn pour le machine learning

**Outils de visualisation**
- Tableau
- Power BI
- Google Data Studio

...`,
        author: 'Paul Martin',
        date: '2024-03-05',
        readTime: '7 min',
        category: 'Data Science',
        tags: ['Python', 'Data Science', 'Outils', 'Machine Learning'],
        image: '/images/data-science.jpg',
        featured: false
      },
      {
        id: 4,
        title: 'Les meilleures pratiques pour apprendre à coder',
        excerpt: 'Stratégies et méthodes efficaces pour progresser rapidement en programmation.',
        content: `Apprendre à coder demande de la méthode et de la persévérance. Voici les meilleures pratiques...

**1. Pratique régulière**
Codez tous les jours, même 30 minutes suffisent.

**2. Projets personnels**
Appliquez ce que vous apprenez dans des projets concrets.

**3. Code review**
Faites examiner votre code par d'autres développeurs.

**4. Documentation**
Lisez la documentation officielle des technologies.

**5. Communauté**
Participez à des forums, meetups et conférences.

...`,
        author: 'Sophie Bernard',
        date: '2024-02-28',
        readTime: '5 min',
        category: 'Apprentissage',
        tags: ['Méthodologie', 'Pratique', 'Conseils'],
        image: '/images/coding-best.jpg',
        featured: false
      }
    ];

    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filtrer par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filtrer par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm, posts]);

  const categories = ['all', 'Développement', 'Cybersécurité', 'Data Science', 'Apprentissage'];

  const featuredPosts = posts.filter(post => post.featured);

  const handleShare = (platform: string, post: BlogPost) => {
    const url = window.location.href;
    const text = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text} ${url}`;
        break;
    }
    
    window.open(shareUrl, '_blank');
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/blog" 
              className="text-blue-600 hover:text-blue-700 flex items-center"
            >
              ← Retour au blog
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
            
            <div className="flex items-center space-x-4 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <FaUser />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt />
                <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPost.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="bg-gray-200 h-64 rounded-lg mb-8"></div>
          </header>

          <div className="prose prose-lg max-w-none">
            {selectedPost.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Partager cet article</h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'whatsapp'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => handleShare(platform, selectedPost)}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {platform === 'facebook' && <FaFacebook className="text-blue-600" />}
                  {platform === 'twitter' && <FaTwitter className="text-blue-400" />}
                  {platform === 'linkedin' && <FaLinkedin className="text-blue-700" />}
                  {platform === 'whatsapp' && <FaWhatsapp className="text-green-500" />}
                </button>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog ARCHYVE ACADEMY</h1>
          <p className="text-xl text-blue-100">
            Actualités, tutoriels et conseils pour les développeurs et professionnels du numérique
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Rechercher</h3>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un article..."
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category === 'all' ? 'Toutes les catégories' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Tags populaires</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Python', 'Sécurité', 'Data Science', 'Web'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles en vedette</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="bg-gray-200 h-48"></div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                        >
                          Lire la suite <FaArrowRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'all' ? 'Tous les articles' : selectedCategory}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
                  <p className="text-gray-600">Aucun article trouvé pour cette recherche.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="bg-gray-200 h-48 md:h-full"></div>
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              {post.category}
                            </span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <FaUser />
                              <span>{post.author}</span>
                            </div>
                            <button
                              onClick={() => setSelectedPost(post)}
                              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                            >
                              Lire la suite <FaArrowRight className="ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
