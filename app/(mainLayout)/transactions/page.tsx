export default function Transactions() {
  const transactions = [
    { id: 1, type: 'Income', category: 'Tithe', amount: 1200, date: '2023-09-15', member: 'Alice Brown' },
    { id: 2, type: 'Income', category: 'Offering', amount: 500, date: '2023-09-15', member: 'Bob Wilson' },
    { id: 3, type: 'Expense', category: 'Utilities', amount: -450, date: '2023-09-14', member: 'Admin' },
    { id: 4, type: 'Income', category: 'Donation', amount: 2500, date: '2023-09-14', member: 'Carol Smith' },
    { id: 5, type: 'Expense', category: 'Maintenance', amount: -800, date: '2023-09-13', member: 'Admin' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-semibold text-gray-800">Transactions</h2>
            <p className="mt-2 text-sm text-gray-600">A list of all transactions including tithes, offerings, and expenses.</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Add Transaction
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Member</th>
                    <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">{transaction.date}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.type}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.category}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.member}</td>
                      <td className={`whitespace-nowrap px-3 py-4 text-sm text-right ${
                        transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ${Math.abs(transaction.amount).toLocaleString()}
                      </td>
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