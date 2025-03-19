export default function Logs() {
    const logs = [
      {
        id: 1,
        user: 'Admin User',
        action: 'Created new member',
        details: 'Added John Smith to the system',
        timestamp: '2023-09-15 14:30:00',
        type: 'create',
      },
      {
        id: 2,
        user: 'Finance Officer',
        action: 'Updated transaction',
        details: 'Modified donation amount from $450 to $500',
        timestamp: '2023-09-15 13:45:00',
        type: 'update',
      },
      {
        id: 3,
        user: 'Member Manager',
        action: 'Deactivated member',
        details: 'Deactivated account for Jane Doe',
        timestamp: '2023-09-15 12:15:00',
        type: 'delete',
      },
      {
        id: 4,
        user: 'System',
        action: 'Backup completed',
        details: 'Daily backup completed successfully',
        timestamp: '2023-09-15 00:00:00',
        type: 'system',
      },
    ];
  
    return (
      <div className="space-y-6 my-14">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-2xl font-semibold text-gray-800">Activity Logs</h2>
              <p className="mt-2 text-sm text-gray-600">A list of all system activities and changes.</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Export Logs
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Timestamp</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">User</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {logs.map((log) => (
                      <tr key={log.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500">{log.timestamp}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{log.user}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            log.type === 'create' ? 'bg-green-100 text-green-800' :
                            log.type === 'update' ? 'bg-yellow-100 text-yellow-800' :
                            log.type === 'delete' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {log.action}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{log.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }