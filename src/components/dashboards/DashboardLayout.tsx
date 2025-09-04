import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserRole } from '@/types';
import Sidebar from '@/components/navigation/Sidebar';
import BottomNav from '@/components/navigation/BottomNav';
import TouristDashboard from './TouristDashboard';
import WorkerDashboard from './WorkerDashboard';
import AdminDashboard from './AdminDashboard';
import AuthorityDashboard from './AuthorityDashboard';
import { cn } from '@/lib/utils';

const DashboardLayout = () => {
  const { role } = useParams<{ role: string }>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!role || !['tourist', 'worker', 'admin', 'authority'].includes(role)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Invalid Role</h1>
          <p className="text-slate-600">The specified role is not recognized.</p>
        </div>
      </div>
    );
  }

  const userRole = role as UserRole;

  const renderDashboard = () => {
    switch (userRole) {
      case 'tourist':
        return <TouristDashboard />;
      case 'worker':
        return <WorkerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'authority':
        return <AuthorityDashboard />;
      default:
        return <div>Dashboard not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar userRole={userRole} className="fixed left-0 top-0 h-full" />
      )}
      
      {/* Main Content */}
      <div className={cn(
        'transition-all duration-300',
        !isMobile ? 'ml-64' : 'mb-20'
      )}>
        <main className="p-4 md:p-6">
          {renderDashboard()}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav userRole={userRole} />}
    </div>
  );
};

export default DashboardLayout;