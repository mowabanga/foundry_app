export default function Administration() {
    const settings = [
      {
        id: 1,
        section: 'Organization Details',
        settings: [
          { name: 'Organization Name', value: 'Grace Community Church' },
          { name: 'Email', value: 'contact@gracechurch.org' },
          { name: 'Phone', value: '(555) 123-4567' },
          { name: 'Address', value: '123 Faith Street, Spirit City, SC 12345' },
        ],
      },
      {
        id: 2,
        section: 'System Settings',
        settings: [
          { name: 'Default Currency', value: 'USD' },
          { name: 'Time Zone', value: 'Eastern Time (ET)' },
          { name: 'Language', value: 'English' },
          { name: 'Date Format', value: 'MM/DD/YYYY' },
        ],
      },
    ];
  
    return (
      <div className="space-y-6 my-14">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Administration</h2>
          
          {settings.map((section) => (
            <div key={section.id} className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{section.section}</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <dl className="divide-y divide-gray-200">
                  {section.settings.map((setting, index) => (
                    <div key={index} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt className="text-sm font-medium text-gray-500">{setting.name}</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{setting.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
          
          <div className="mt-6">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Update Settings
            </button>
          </div>
        </div>
      </div>
    );
  }