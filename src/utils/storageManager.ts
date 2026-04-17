interface SubmissionData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  formation: string;
  level: string;
  message?: string;
  timestamp: string;
  status: 'pending' | 'contacted' | 'enrolled' | 'completed';
  notes?: string;
}

class StorageManager {
  private readonly SUBMISSIONS_KEY = 'archyve_submissions';
  private readonly ADMIN_PASSWORD = 'archyve_admin_2024';

  // Sauvegarder une nouvelle soumission
  saveSubmission(submission: Omit<SubmissionData, 'id' | 'timestamp' | 'status'>): SubmissionData {
    const newSubmission: SubmissionData = {
      ...submission,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    const submissions = this.getAllSubmissions();
    submissions.push(newSubmission);
    localStorage.setItem(this.SUBMISSIONS_KEY, JSON.stringify(submissions));

    return newSubmission;
  }

  // Récupérer toutes les soumissions
  getAllSubmissions(): SubmissionData[] {
    try {
      const data = localStorage.getItem(this.SUBMISSIONS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Erreur lors de la récupération des soumissions:', error);
      return [];
    }
  }

  // Récupérer les soumissions par statut
  getSubmissionsByStatus(status: SubmissionData['status']): SubmissionData[] {
    return this.getAllSubmissions().filter(sub => sub.status === status);
  }

  // Mettre à jour le statut d'une soumission
  updateSubmissionStatus(id: string, status: SubmissionData['status'], notes?: string): boolean {
    try {
      const submissions = this.getAllSubmissions();
      const index = submissions.findIndex(sub => sub.id === id);
      
      if (index !== -1) {
        submissions[index].status = status;
        if (notes) {
          submissions[index].notes = notes;
        }
        submissions[index].timestamp = new Date().toISOString();
        
        localStorage.setItem(this.SUBMISSIONS_KEY, JSON.stringify(submissions));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
      return false;
    }
  }

  // Supprimer une soumission
  deleteSubmission(id: string): boolean {
    try {
      const submissions = this.getAllSubmissions();
      const filteredSubmissions = submissions.filter(sub => sub.id !== id);
      
      if (filteredSubmissions.length !== submissions.length) {
        localStorage.setItem(this.SUBMISSIONS_KEY, JSON.stringify(filteredSubmissions));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      return false;
    }
  }

  // Exporter les données en CSV
  exportToCSV(): string {
    const submissions = this.getAllSubmissions();
    
    const headers = [
      'ID',
      'Nom complet',
      'Email',
      'Téléphone',
      'Formation',
      'Niveau',
      'Message',
      'Date de soumission',
      'Statut',
      'Notes'
    ];

    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        sub.id,
        `"${sub.fullName}"`,
        `"${sub.email}"`,
        `"${sub.phone}"`,
        `"${sub.formation}"`,
        `"${sub.level}"`,
        `"${sub.message || ''}"`,
        `"${new Date(sub.timestamp).toLocaleString('fr-CM')}"`,
        sub.status,
        `"${sub.notes || ''}"`
      ].join(','))
    ].join('\n');

    return csvContent;
  }

  // Télécharger le fichier CSV
  downloadCSV(): void {
    const csvContent = this.exportToCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `inscriptions_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Obtenir des statistiques
  getStatistics(): {
    total: number;
    pending: number;
    contacted: number;
    enrolled: number;
    completed: number;
    byFormation: Record<string, number>;
    byLevel: Record<string, number>;
  } {
    const submissions = this.getAllSubmissions();
    
    const stats = {
      total: submissions.length,
      pending: submissions.filter(s => s.status === 'pending').length,
      contacted: submissions.filter(s => s.status === 'contacted').length,
      enrolled: submissions.filter(s => s.status === 'enrolled').length,
      completed: submissions.filter(s => s.status === 'completed').length,
      byFormation: {} as Record<string, number>,
      byLevel: {} as Record<string, number>
    };

    submissions.forEach(sub => {
      stats.byFormation[sub.formation] = (stats.byFormation[sub.formation] || 0) + 1;
      stats.byLevel[sub.level] = (stats.byLevel[sub.level] || 0) + 1;
    });

    return stats;
  }

  // Vérifier le mot de passe administrateur
  verifyAdminPassword(password: string): boolean {
    return password === this.ADMIN_PASSWORD;
  }

  // Nettoyer les anciennes soumissions (plus de 6 mois)
  cleanupOldSubmissions(): number {
    const submissions = this.getAllSubmissions();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const filteredSubmissions = submissions.filter(sub => {
      const submissionDate = new Date(sub.timestamp);
      return submissionDate > sixMonthsAgo || sub.status === 'pending' || sub.status === 'contacted';
    });

    const removedCount = submissions.length - filteredSubmissions.length;
    
    if (removedCount > 0) {
      localStorage.setItem(this.SUBMISSIONS_KEY, JSON.stringify(filteredSubmissions));
    }

    return removedCount;
  }
}

export default StorageManager;
