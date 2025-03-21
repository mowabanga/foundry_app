'use client';

import { Input } from '@/components/ui/input';
import { ChevronDown, File, SearchIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Members() {
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doer', email: 'john@example.com', phone: '0712838112' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '0727282811' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', phone: '0112228752'},
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '0718293200' },
    { id: 5, name: 'David Wilson', email: 'david@example.com', phone: '0792372821' },
    { id: 6, name: 'David Wilson', email: 'david@example.com', phone: '0791721255' },
    { id: 7, name: 'Jayden Otis', email: 'jayden@example.com', phone: '0712172931'},
    { id: 8, name: 'Ivy Karen', email: 'ivy@example.com', phone: '02718121122'},
    { id: 9, name: 'Collins Levy', email: 'levy@example.com', phone: '0718293200'},
    { id: 10, name: 'Benjamin Ian', email: 'ian@example.com', phone: '0700296217'},
    { id: 11, name: 'Yvonne Kawi', email: 'kawi@example.com', phone: '0721928826'},
    { id: 12, name: 'Karen Ung', email: 'karen@example.com', phone: '0734157266'},
    { id: 13, name: 'Timothy Lee', email: 'timothy@example.com', phone: '0725172822'},
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchBy, setSearchBy] = useState('');
  const searchOptions = ['Name', 'Email', 'Phone'];
  const [newMember, setNewMember] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleAddMember = (e: FormEvent) => {
    e.preventDefault();
    const member = {
      id: members.length + 1,
      ...newMember,
      status: 'Active',
      joinDate: new Date().toISOString().split('T')[0],
    };
    setMembers([...members, member]);
    setNewMember({ name: '', phone: '', email: '' });
    setIsAddModalOpen(false);
  };

  return (
    <div className="my-14 px-0 w-full max-w-full">
      <div className="bg-white shadow rounded-lg p-4 w-full">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-semibold text-gray-800">Members</h2>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="block rounded-full bg-primary py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:cursor-pointer"
            >
              Add Member
            </button>
          </div>
        </div>
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
      
        <div className="mt-8 w-full overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 min-w-[150px]">Name</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 min-w-[180px]">Email</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 min-w-1/4">Phone</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 min-w-1/4">Transactions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {members.map((member) => (
                  <tr key={member.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{member.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {member.email.replace(/(.{2}).+(@.+)/, '$1***$2')}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {member.phone.replace(/(\d{3})\d{4}(\d{3})/, '$1****$2')}
                    </td>
                    <td className="whitespace-nowrap text-right px-3 py-4 text-sm">
                      <File 
                        size={20} 
                        className="text-gray-500  hover:cursor-pointer hover:text-blue-600 hover:ring-1 hover:ring-opacity-90 hover: transition-all hover:ring-blue-600 hover:ring-offset-8 hover:rounded-full"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Member Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-500">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Member</h3>
            <form onSubmit={handleAddMember}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={newMember.phone}
                    onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={newMember.email}
                    onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
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
                  Add Member
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false); // Ensure modal state is updated
                  }}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}