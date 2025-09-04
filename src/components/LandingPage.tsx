import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Settings, AlertTriangle, MapPin } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const userRoles = [
    {
      id: 'tourist',
      title: 'Tourist',
      description: 'Access safety information, emergency contacts, and local guidance',
      icon: MapPin,
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200 hover:border-blue-300',
    },
    {
      id: 'worker',
      title: 'Safety Worker',
      description: 'Manage incidents, respond to alerts, and coordinate safety measures',
      icon: Shield,
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-green-600',
      borderColor: 'border-green-200 hover:border-green-300',
    },
    {
      id: 'admin',
      title: 'Administrator',
      description: 'System administration, user management, and platform oversight',
      icon: Settings,
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200 hover:border-purple-300',
    },
    {
      id: 'authority',
      title: 'Authority',
      description: 'Emergency response coordination and official safety protocols',
      icon: AlertTriangle,
      color: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-red-600',
      borderColor: 'border-red-200 hover:border-red-300',
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    navigate(`/dashboard/${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-500 rounded-2xl">
              <Shield className="h-8 w-8 md:h-12 md:w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Tourist Safety App
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive safety platform connecting tourists, workers, administrators, and authorities
            for enhanced travel security and emergency response.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userRoles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card
                key={role.id}
                className={`${role.borderColor} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group`}
                onClick={() => handleRoleSelect(role.id)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full bg-slate-100 group-hover:bg-white transition-colors`}>
                      <IconComponent className={`h-8 w-8 ${role.textColor}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 mb-4 min-h-[48px] flex items-center">
                    {role.description}
                  </CardDescription>
                  <Button
                    className={`w-full ${role.color} text-white border-0 transition-all duration-300`}
                    size="lg"
                  >
                    Access Dashboard
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm">
          <p>Secure • Reliable • Always Available</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;