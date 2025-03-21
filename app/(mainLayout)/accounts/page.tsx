'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, EditIcon, SearchIcon, TrashIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Accounts() {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Tithe', balance: 45000, type: 'Operating', isActive: true },
    { id: 2, name: 'Evangelism local church', balance: 150000, type: 'Savings', isActive: true },
    { id: 3, name: 'Msamaria Mwema', balance: 25000, type: 'Restricted', isActive: true },
    { id: 4, name: 'Elders Account', balance: 8500, type: 'Operating', isActive: true },
    { id: 5, name: 'Singles Account', balance: 30000, type: 'Savings', isActive: true },
    { id: 6, name: 'Funeral Monicah Odek', balance: 30000, type: 'Savings', isActive: true },
    { id: 7, name: 'Funeral Joyce Opondo', balance: 30000, type: 'Savings', isActive: true },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const [editedAccount, setEditedAccount] = useState<{ id: number; name: string } | null>(null);
  const [newAccount, setNewAccount] = useState({
    name: '',
    type: 'Operating',
    balance: 0,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchBy, setSearchBy] = useState('');
  const searchOptions = ['Account Name', 'Type', 'Balance'];

  const handleAddAccount = (e: FormEvent) => {
    e.preventDefault();
    const account = {
      id: accounts.length + 1,
      ...newAccount,
      lastTransaction: new Date().toISOString().split('T')[0],
      isActive: true,
    };
    setAccounts([...accounts, account]);
    setNewAccount({ name: '', type: 'Operating', balance: 0 });
    setIsAddModalOpen(false);
  };

  const handleDeleteAccount = () => {
    setAccounts(accounts.filter(account => account.id !== selectedAccount));
    setIsDeleteModalOpen(false);
    setSelectedAccount(null);
  };

  const handleEditAccount = (e: FormEvent) => {
    e.preventDefault();
    if (editedAccount) {
      setAccounts(accounts.map(account => 
        account.id === editedAccount.id ? { ...account, name: editedAccount.name } : account
      ));
      setIsEditModalOpen(false);
      setEditedAccount(null);
    }
  };

  const handleToggleStatus = (id: number) => {
    setAccounts(accounts.map(account => 
      account.id === id ? { ...account, isActive: !account.isActive } : account
    ));
  };

  return (
    <div className="space-y-6 my-14">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-semibold text-gray-800">Accounts</h2>
            <div className='flex items-center gap-4'>
          <div className="flex mt-4 items-center gap-2 sm:gap-4 border border-black/50 rounded-2xl px-2 py-1 w-full sm:w-auto">
            <Input 
              placeholder="Search" 
              className="border border-transparent shadow-transparent  sm:w-auto"
            />
            <SearchIcon size={20} className="hover:cursor-pointer"/>
          </div>
          <div className="relative flex mt-4 items-center gap-2 sm:gap-4 border border-black/50 rounded-2xl px-2 py-1 w-fit sm:w-auto">
            <Input 
                placeholder="Search By" 
                className="border border-transparent shadow-transparent sm:w-auto"
                readOnly
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {searchBy}
            <ChevronDown 
              size={20} 
              className={`hover:cursor-pointer transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <ul className="absolute top-full right-0 mt-1 border border-gray-300 rounded-md shadow-lg z-10 text-sm text-gray-600 bg-white">
                {searchOptions.map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchBy(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div className='text-sm text-gray-500'>
                      {option}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            {/* <Button
              onClick={() => setIsAddModalOpen(true)}
              className="block rounded-full py-2 px-3 text-center text-sm font-semibold text-white shadow-sm"
            >
              Add Account
            </Button> */}
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Account Name</th>
                    <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Balance</th>
                    <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Active</th>
                    <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {accounts.map((account) => (
                    <tr key={account.id} className={!account.isActive ? 'bg-gray-50' : ''}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{account.name}</td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          account.type === 'Operating' ? 'bg-green-100 text-green-800' :
                          account.type === 'Savings' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {account.type}
                        </span>
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm text-gray-900">
                        ${account.balance.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap text-center px-3 py-4 text-sm">
                        <button
                          onClick={() => handleToggleStatus(account.id)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                            account.isActive ? 'bg-indigo-600' : 'bg-gray-200'
                          }`}
                        >
                          <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            account.isActive ? 'translate-x-5' : 'translate-x-0'
                          }`} />
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-right flex items-center justify-center gap-2">
                        <Button
                          onClick={() => {
                            setEditedAccount({ id: account.id, name: account.name });
                            setIsEditModalOpen(true);
                          }}
                          className="text-white rounded-full flex items-center gap-1"
                        >
                          <EditIcon size={24} />
                          Edit
                        </Button>
                        <Button
                          onClick={() => {
                            setSelectedAccount(account.id);
                            setIsDeleteModalOpen(true);
                          }}
                          className="text-white rounded-full bg-red-600 flex items-center gap-4"
                        >
                          <TrashIcon size={24} />
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add Account Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Account</h3>
            <form onSubmit={handleAddAccount}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Account Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newAccount.name}
                    onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    id="type"
                    value={newAccount.type}
                    onChange={(e) => setNewAccount({ ...newAccount, type: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Operating</option>
                    <option>Savings</option>
                    <option>Restricted</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="balance" className="block text-sm font-medium text-gray-700">Initial Balance</label>
                  <input
                    type="number"
                    id="balance"
                    value={newAccount.balance}
                    onChange={(e) => setNewAccount({ ...newAccount, balance: parseFloat(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:col-start-2"
                >
                  Add Account
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Account Modal */}
      {isEditModalOpen && editedAccount && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Account</h3>
            <form onSubmit={handleEditAccount}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="editName" className="block text-sm font-medium text-gray-700">Account Name</label>
                  <input
                    type="text"
                    id="editName"
                    value={editedAccount.name}
                    onChange={(e) => setEditedAccount({ ...editedAccount, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:col-start-2"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Delete Account</h3>
            <p className="text-sm text-gray-500">Are you sure you want to delete this account? This action cannot be undone.</p>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                onClick={handleDeleteAccount}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:col-start-2"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setSelectedAccount(null);
                }}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}