import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Users, CheckCircle, Clock } from 'lucide-react';

const WorkerDashboard = () => {
  const stats = [
    {
      title: 'Active Incidents',
      value: '7',
      description: 'Incidents requiring attention',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Tourists Assisted',
      value: '34',
      description: 'People helped today',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Cases Resolved',
      value: '28',
      description: 'Successfully closed today',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Response Time',
      value: '4.2m',
      description: 'Average response time',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Safety Worker Console</h1>
        <p className="text-slate-600">Manage incidents and assist tourists with safety concerns.</p>
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
            <CardTitle>Priority Incidents</CardTitle>
            <CardDescription>High-priority cases requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-1">Medical Emergency</h4>
              <p className="text-sm text-red-600">Tourist requiring immediate medical assistance</p>
              <p className="text-xs text-red-500 mt-1">5 minutes ago • Downtown Area</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-1">Lost Tourist</h4>
              <p className="text-sm text-orange-600">Family separated in crowded market area</p>
              <p className="text-xs text-orange-500 mt-1">12 minutes ago • Market Square</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-1">Safety Concern</h4>
              <p className="text-sm text-yellow-600">Potential unsafe conditions reported</p>
              <p className="text-xs text-yellow-500 mt-1">18 minutes ago • Beach Area</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Team Status</CardTitle>
            <CardDescription>Current team availability and deployment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium">Available Workers</span>
                <span className="text-green-600 font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">On Assignment</span>
                <span className="text-blue-600 font-semibold">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Off Duty</span>
                <span className="text-slate-600 font-semibold">4</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Coverage Areas</span>
                  <span className="text-purple-600 font-semibold">6/8</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkerDashboard;