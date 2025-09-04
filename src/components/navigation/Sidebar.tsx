import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Home, 
  Bell, 
  Users, 
  Settings, 
  LogOut,
  MapPin,
  AlertTriangle,
  BarChart3
} from 'lucide-react';
import { UserRole } from '@/types';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  userRole: UserRole;
  className?: string;
}

const Sidebar = ({ userRole, className }: SidebarProps) => {
  const navigate = useNavigate();

  const getRoleConfig = (role: UserRole) => {
    switch (role) {
      case 'tourist':
        return {
          title: 'Tourist Portal',
          icon: MapPin,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          menuItems: [
            { icon: Home, label: 'Dashboard', path: '/dashboard/tourist' },
            { icon: MapPin, label: 'Safety Map', path: '/safety-map' },
            { icon: Bell, label: 'Alerts', path: '/alerts' },
            { icon: Shield, label: 'Emergency', path: '/emergency' },
          ]
        };
      case 'worker':
        return {
          title: 'Worker Console',
          icon: Shield,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          menuItems: [
            { icon: Home, label: 'Dashboard', path: '/dashboard/worker' },
            { icon: AlertTriangle, label: 'Incidents', path: '/incidents' },
            { icon: Users, label: 'Tourists', path: '/tourists' },
            { icon: BarChart3, label: 'Reports', path: '/reports' },
          ]
        };
      case 'admin':
        return {
          title: 'Admin Panel',
          icon: Settings,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
          menuItems: [
            { icon: Home, label: 'Dashboard', path: '/dashboard/admin' },
            { icon: Users, label: 'User Management', path: '/users' },
            { icon: Settings, label: 'System Config', path: '/config' },
            { icon: BarChart3, label: 'Analytics', path: '/analytics' },
          ]
        };
      case 'authority':
        return {
          title: 'Authority Command',
          icon: AlertTriangle,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          menuItems: [
            { icon: Home, label: 'Dashboard', path: '/dashboard/authority' },
            { icon: AlertTriangle, label: 'Emergency Response', path: '/emergency-response' },
            { icon: Shield, label: 'Operations', path: '/operations' },
            { icon: BarChart3, label: 'Intelligence', path: '/intelligence' },
          ]
        };
    }
  };

  const config = getRoleConfig(userRole);
  const IconComponent = config.icon;

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={cn('pb-12 w-64 bg-white border-r border-slate-200', className)}>
      <div className="space-y-4 py-4">
        {/* Header */}
        <div className="px-3 py-2">
          <div className={`flex items-center space-x-3 p-3 rounded-lg ${config.bgColor}`}>
            <IconComponent className={`h-6 w-6 ${config.color}`} />
            <h2 className="text-lg font-semibold text-slate-900">{config.title}</h2>
          </div>
        </div>

        <Separator />

        {/* Navigation Menu */}
        <div className="px-3">
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-2">
              {config.menuItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <Button
                    key={item.path}
                    variant="ghost"
                    className="w-full justify-start hover:bg-slate-100"
                    onClick={() => navigate(item.path)}
                  >
                    <ItemIcon className="mr-3 h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        <Separator />

        {/* Logout */}
        <div className="px-3">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-red-50 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;