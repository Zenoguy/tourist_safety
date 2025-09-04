import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Bell, 
  Users, 
  Settings,
  MapPin,
  AlertTriangle,
  BarChart3,
  Shield
} from 'lucide-react';
import { UserRole } from '@/types';
import { useNavigate, useLocation } from 'react-router-dom';

interface BottomNavProps {
  userRole: UserRole;
  className?: string;
}

const BottomNav = ({ userRole, className }: BottomNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getRoleMenuItems = (role: UserRole) => {
    switch (role) {
      case 'tourist':
        return [
          { icon: Home, label: 'Dashboard', path: '/dashboard/tourist' },
          { icon: MapPin, label: 'Map', path: '/safety-map' },
          { icon: Bell, label: 'Alerts', path: '/alerts' },
          { icon: Shield, label: 'Emergency', path: '/emergency' },
        ];
      case 'worker':
        return [
          { icon: Home, label: 'Dashboard', path: '/dashboard/worker' },
          { icon: AlertTriangle, label: 'Incidents', path: '/incidents' },
          { icon: Users, label: 'Tourists', path: '/tourists' },
          { icon: BarChart3, label: 'Reports', path: '/reports' },
        ];
      case 'admin':
        return [
          { icon: Home, label: 'Dashboard', path: '/dashboard/admin' },
          { icon: Users, label: 'Users', path: '/users' },
          { icon: Settings, label: 'Config', path: '/config' },
          { icon: BarChart3, label: 'Analytics', path: '/analytics' },
        ];
      case 'authority':
        return [
          { icon: Home, label: 'Dashboard', path: '/dashboard/authority' },
          { icon: AlertTriangle, label: 'Response', path: '/emergency-response' },
          { icon: Shield, label: 'Ops', path: '/operations' },
          { icon: BarChart3, label: 'Intel', path: '/intelligence' },
        ];
    }
  };

  const menuItems = getRoleMenuItems(userRole);

  return (
    <nav className={cn('fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 z-50', className)}>
      <div className="flex justify-around items-center max-w-md mx-auto">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Button
              key={item.path}
              variant="ghost"
              size="sm"
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 h-auto min-w-0',
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              )}
              onClick={() => navigate(item.path)}
            >
              <IconComponent className={cn('h-5 w-5', isActive && 'text-blue-600')} />
              <span className={cn('text-xs font-medium', isActive && 'text-blue-600')}>
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;