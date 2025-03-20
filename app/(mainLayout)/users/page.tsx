"use client"

import { useState } from 'react';

export default function Users() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Peter', email: 'johnpeter@example.com', phone: "0700123492", role: 'Administrator' },
        { id: 2, name: 'Marvin Red', email: 'marvinred@example.com', phone: "0700123492", role: 'Finance' },
        { id: 3, name: 'Tracy Agran', email: 'tracyagran@example.com', phone: "0700123492", role: 'Manager' },
        { id: 4, name: 'Catherine Kate', email: 'catherinekate@example.com', phone: "0700123492", role: 'Coordinator' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addUser = (newUser: { name: string; email: string; phone: string; role: string }) => {
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
        setIsModalOpen(false);
    };

    const maskEmail = (email: string) => {
        const [name, domain] = email.split('@');
        const maskedName = name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
        return `${maskedName}@${domain}`;
    };

    const maskPhone = (phone: string) => {
        return phone.slice(0, 3) + '*'.repeat(phone.length - 6) + phone.slice(-3);
    };

    return (
        <div className="space-y-6 my-14">
            <div className="bg-white shadow rounded-lg p-6">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                        >
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
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{user.name}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{maskEmail(user.email)}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{maskPhone(user.phone)}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                                                    {user.role}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Add New User</h3>
                                <div className="mt-2">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const formData = new FormData(e.target);
                                            const newUser = {
                                                name: formData.get('name'),
                                                email: formData.get('email'),
                                                phone: formData.get('phone'),
                                                role: formData.get('role'),
                                            };
                                            addUser(newUser);
                                        }}
                                    >
                                        <div className="space-y-4">
                                            <input name="name" placeholder="Name" className="w-full border rounded px-3 py-2" required />
                                            <input name="email" placeholder="Email" className="w-full border rounded px-3 py-2" required />
                                            <input name="phone" placeholder="Phone" className="w-full border rounded px-3 py-2" required />
                                            <input name="role" placeholder="Role" className="w-full border rounded px-3 py-2" required />
                                        </div>
                                        <div className="mt-4 flex justify-end space-x-2">
                                            <button
                                                type="button"
                                                onClick={() => setIsModalOpen(false)}
                                                className="bg-gray-300 px-4 py-2 rounded text-gray-700"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="bg-indigo-600 px-4 py-2 rounded text-white"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}