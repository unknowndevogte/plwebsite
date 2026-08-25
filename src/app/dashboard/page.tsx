'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const stats = [
    { label: 'Total Projects', value: '12', change: '+2 this month', icon: '📁' },
    { label: 'Active Tasks', value: '24', change: '5 due soon', icon: '✅' },
    { label: 'Team Members', value: '8', change: '2 new', icon: '👥' },
    { label: 'Revenue', value: '$45.2K', change: '+18%', icon: '💰' },
  ];

  const recentActivity = [
    { id: 1, action: 'Project "Website Redesign" completed', time: '2 hours ago' },
    { id: 2, action: 'New client onboarding: Tech Corp', time: '5 hours ago' },
    { id: 3, action: 'Quarterly report generated', time: '1 day ago' },
    { id: 4, action: 'Team meeting scheduled for Friday', time: '1 day ago' },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {session.user?.name}!</h1>
          <p className="text-gray-600">Here's what's happening with your business.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-sm text-green-600 font-semibold">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full text-left p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition flex items-center gap-4">
                <span className="text-2xl">➕</span>
                <div>
                  <div className="font-semibold">Create New Project</div>
                  <div className="text-sm text-gray-600">Start a new business initiative</div>
                </div>
              </button>
              <button className="w-full text-left p-4 bg-green-50 rounded-lg hover:bg-green-100 transition flex items-center gap-4">
                <span className="text-2xl">📊</span>
                <div>
                  <div className="font-semibold">Generate Report</div>
                  <div className="text-sm text-gray-600">View analytics and metrics</div>
                </div>
              </button>
              <button className="w-full text-left p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition flex items-center gap-4">
                <span className="text-2xl">👥</span>
                <div>
                  <div className="font-semibold">Invite Team Member</div>
                  <div className="text-sm text-gray-600">Add collaborators to your workspace</div>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold">{item.action}</div>
                    <div className="text-sm text-gray-500">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
