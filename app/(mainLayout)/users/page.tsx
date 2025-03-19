export default function Users() {
    const users = [
      { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Administrator', lastActive: '2 minutes ago' },
      { id: 2, name: 'Finance Officer', email: 'finance@example.com', role: 'Finance', lastActive: '1 hour ago' },
      { id: 3, name: 'Member Manager', email: 'members@example.com', role: 'Manager', lastActive: '3 hours ago' },
      { id: 4, name: 'Events Coordinator', email: 'events@example.com', role: 'Coordinator', lastActive: '1 day ago' },
    ];
  
    return (
      <div className="space-y-6 my-14">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
              <p className="mt-2 text-sm text-gray-600">A list of all users who have access to the organization management system.</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Add User
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last Active</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                            {user.role}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.lastActive}</td>
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