import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield, BarChart3, Users } from 'lucide-react';

const AuthorityDashboard = () => {
  const stats = [
    {
      title: 'Active Operations',
      value: '12',
      description: 'Ongoing emergency responses',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Response Teams',
      value: '24',
      description: 'Deployed emergency units',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Threat Level',
      value: 'Medium',
      description: 'Current regional assessment',
      icon: BarChart3,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Personnel',
      value: '156',
      description: 'Available response staff',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Authority Command Center</h1>
        <p className="text-slate-600">Emergency response coordination and public safety oversight.</p>
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
            <CardTitle>Critical Alerts</CardTitle>
            <CardDescription>High-priority incidents requiring authority response</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-1">Level 3 Emergency</h4>
              <p className="text-sm text-red-600">Multiple casualties reported at tourist site</p>
              <p className="text-xs text-red-500 mt-1">ACTIVE • 8 minutes ago</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-1">Weather Alert</h4>
              <p className="text-sm text-orange-600">Severe storm approaching coastal areas</p>
              <p className="text-xs text-orange-500 mt-1">MONITORING • 23 minutes ago</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-1">Security Concern</h4>
              <p className="text-sm text-yellow-600">Suspicious activity at major landmark</p>
              <p className="text-xs text-yellow-500 mt-1">INVESTIGATING • 34 minutes ago</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Command Overview</CardTitle>
            <CardDescription>Regional coordination status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Emergency Services</span>
                  <span className="text-green-600 font-semibold">READY</span>
                </div>
                <div className="text-xs text-slate-600">All units operational and standing by</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Communication Systems</span>
                  <span className="text-green-600 font-semibold">OPERATIONAL</span>
                </div>
                <div className="text-xs text-slate-600">Full network connectivity maintained</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Coordination Centers</span>
                  <span className="text-blue-600 font-semibold">ACTIVE</span>
                </div>
                <div className="text-xs text-slate-600">5 regional centers coordinating response</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthorityDashboard;