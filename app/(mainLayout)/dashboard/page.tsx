export default function Dashboard() {
  const stats = [
    { name: 'Total Members', value: '2,847' },
    { name: 'Monthly Donations', value: '$24,500' },
    { name: 'Active Programs', value: '12' },
    { name: 'Upcoming Events', value: '8' },
  ];

  const recentActivities = [
    { type: 'New Member', name: 'John Smith', date: '2 hours ago' },
    { type: 'Donation', name: 'Sarah Johnson', amount: '$500', date: '4 hours ago' },
    { type: 'Event', name: 'Youth Meeting', attendees: '45', date: 'Yesterday' },
    { type: 'Program', name: 'Food Drive', status: 'Started', date: 'Yesterday' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white shadow rounded-lg p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="flow-root">
          <ul className="-mb-8">
            {recentActivities.map((activity, idx) => (
              <li key={idx}>
                <div className="relative pb-8">
                  {idx !== recentActivities.length - 1 && (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  )}
                  <div className="relative flex space-x-3">
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {activity.type === 'Donation' ? (
                            <>
                              <span className="font-medium text-gray-900">{activity.name}</span> donated{' '}
                              <span className="font-medium text-gray-900">{activity.amount}</span>
                            </>
                          ) : activity.type === 'Event' ? (
                            <>
                              <span className="font-medium text-gray-900">{activity.name}</span> had{' '}
                              <span className="font-medium text-gray-900">{activity.attendees}</span> attendees
                            </>
                          ) : activity.type === 'Program' ? (
                            <>
                              <span className="font-medium text-gray-900">{activity.name}</span> program{' '}
                              <span className="font-medium text-gray-900">{activity.status}</span>
                            </>
                          ) : (
                            <>
                              <span className="font-medium text-gray-900">{activity.name}</span> joined as a new member
                            </>
                          )}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        <time dateTime={activity.date}>{activity.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}