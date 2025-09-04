import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useTranslation } from '@/hooks/useTranslation';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Shield, Bell, Users, CheckCircle, Clock, AlertTriangle, QrCode } from 'lucide-react';
import QRCode from 'react-qr-code';

const TouristDashboard = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  // Mock user data for QR code
  const userData = {
    id: 'TST-2024-001',
    name: 'John Doe',
    nationality: 'USA',
    emergencyContact: '+1-555-0123',
    bloodType: 'O+',
    allergies: 'None',
    hotel: 'Grand Palace Hotel',
    checkIn: '2024-01-15',
    checkOut: '2024-01-22'
  };

  const qrData = JSON.stringify(userData);

  const stats = [
    {
      title: t('dashboard.safetyScore'),
      value: '92%',
      description: t('dashboard.safetyScoreDesc'),
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: t('dashboard.activeAlerts'),
      value: '3',
      description: t('dashboard.activeAlertsDesc'),
      icon: Bell,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: t('dashboard.checkIns'),
      value: '12',
      description: t('dashboard.checkInsDesc'),
      icon: MapPin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: t('dashboard.helpNearby'),
      value: '8',
      description: t('dashboard.helpNearbyDesc'),
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const itineraryItems = [
    {
      id: 1,
      title: 'Red Fort',
      time: '09:00 AM',
      status: 'completed',
      location: 'Old Delhi',
      type: 'Historical Site'
    },
    {
      id: 2,
      title: 'India Gate',
      time: '11:30 AM',
      status: 'completed',
      location: 'Central Delhi',
      type: 'Monument'
    },
    {
      id: 3,
      title: 'Lotus Temple',
      time: '02:00 PM',
      status: 'upcoming',
      location: 'South Delhi',
      type: 'Religious Site'
    },
    {
      id: 4,
      title: 'Qutub Minar',
      time: '04:30 PM',
      status: 'upcoming',
      location: 'South Delhi',
      type: 'Historical Site'
    },
    {
      id: 5,
      title: 'Connaught Place',
      time: '07:00 PM',
      status: 'upcoming',
      location: 'Central Delhi',
      type: 'Shopping'
    }
  ];

  const handlePanicButton = async () => {
    setIsEmergencyActive(true);
    
    try {
      // Mock emergency alert
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Emergency Alert Sent",
        description: t('dashboard.alertSent'),
        variant: "default",
      });
      
      console.log('Emergency Alert:', {
        userId: userData.id,
        timestamp: new Date().toISOString(),
        location: 'Current GPS coordinates would be here',
        type: 'panic_button',
        userData
      });
      
    } catch (error) {
      toast({
        title: "Alert Failed",
        description: t('dashboard.alertError'),
        variant: "destructive",
      });
    } finally {
      setTimeout(() => setIsEmergencyActive(false), 3000);
    }
  };

  const upcomingItems = itineraryItems.filter(item => item.status === 'upcoming');
  const completedItems = itineraryItems.filter(item => item.status === 'completed');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{t('dashboard.title')}</h1>
          <p className="text-slate-600">{t('dashboard.subtitle')}</p>
        </div>
        <LanguageSwitcher />
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Itinerary */}
        <Card className="border-slate-200 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {t('dashboard.itinerary')}
            </CardTitle>
            <CardDescription>{t('dashboard.itineraryDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-slate-700 mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {t('dashboard.upcoming')}
              </h4>
              <div className="space-y-2">
                {upcomingItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <h5 className="font-medium text-blue-900">{item.title}</h5>
                      <p className="text-sm text-blue-600">{item.location} • {item.type}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-blue-700 border-blue-300">
                        {item.time}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-slate-700 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                {t('dashboard.completed')}
              </h4>
              <div className="space-y-2">
                {completedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <h5 className="font-medium text-green-900">{item.title}</h5>
                      <p className="text-sm text-green-600">{item.location} • {item.type}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {item.time}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Code and Panic Button */}
        <div className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                {t('dashboard.qrCode')}
              </CardTitle>
              <CardDescription>{t('dashboard.qrCodeDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg border-2 border-slate-200">
                <QRCode
                  size={160}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={qrData}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-900">{userData.name}</p>
                <p className="text-xs text-slate-500">ID: {userData.id}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5" />
                {t('dashboard.panicButton')}
              </CardTitle>
              <CardDescription className="text-red-600">
                {t('dashboard.panicButtonDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handlePanicButton}
                disabled={isEmergencyActive}
                className={`w-full h-16 text-lg font-bold ${
                  isEmergencyActive 
                    ? 'bg-red-400 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700 active:bg-red-800'
                } text-white transition-all duration-200 transform active:scale-95`}
              >
                {isEmergencyActive ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    SENDING ALERT...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    {t('dashboard.panicButton')}
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>{t('dashboard.quickActions')}</CardTitle>
            <CardDescription>{t('dashboard.quickActionsDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-1">{t('dashboard.emergencyContact')}</h4>
              <p className="text-sm text-red-600">{t('dashboard.emergencyContactDesc')}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-1">{t('dashboard.safetyCheckIn')}</h4>
              <p className="text-sm text-blue-600">{t('dashboard.safetyCheckInDesc')}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-1">{t('dashboard.findHelp')}</h4>
              <p className="text-sm text-green-600">{t('dashboard.findHelpDesc')}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>{t('dashboard.recentActivity')}</CardTitle>
            <CardDescription>{t('dashboard.recentActivityDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <p className="font-medium">Safety check-in completed</p>
                  <p className="text-slate-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                <div>
                  <p className="font-medium">Weather alert received</p>
                  <p className="text-slate-500">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="font-medium">Location updated</p>
                  <p className="text-slate-500">6 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TouristDashboard;