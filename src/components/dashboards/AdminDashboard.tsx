import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Settings, BarChart3, Shield } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,247',
      description: 'Active platform users',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'System Health',
      value: '99.8%',
      description: 'Platform uptime',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Security Alerts',
      value: '2',
      description: 'Requiring attention',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Configurations',
      value: '45',
      description: 'Active system settings',
      icon: Settings,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Administration Panel</h1>
        <p className="text-slate-600">System overview and administrative controls.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.title} className="border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <IconComponent className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Platform services and their current status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="font-medium text-green-800">User Authentication</span>
              <span className="text-green-600 text-sm font-semibold">Operational</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="font-medium text-green-800">Emergency System</span>
              <span className="text-green-600 text-sm font-semibold">Operational</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <span className="font-medium text-yellow-800">Notification Service</span>
              <span className="text-yellow-600 text-sm font-semibold">Degraded</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="font-medium text-green-800">Location Services</span>
              <span className="text-green-600 text-sm font-semibold">Operational</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Recent Actions</CardTitle>
            <CardDescription>Latest administrative activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <p className="font-medium">User permissions updated</p>
                  <p className="text-slate-500">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="font-medium">System backup completed</p>
                  <p className="text-slate-500">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                <div>
                  <p className="font-medium">Security alert acknowledged</p>
                  <p className="text-slate-500">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <p className="font-medium">Configuration updated</p>
                  <p className="text-slate-500">8 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;