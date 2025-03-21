"use client";

import { FormEvent, useState, useContext } from 'react';
import { Button } from '../ui/button';
import { AccountsContext } from '../../context/AccountsContext';

export default function AddAccount() {
    const { accounts, setAccounts } = useContext(AccountsContext);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newAccount, setNewAccount] = useState({
        name: '',
        type: 'Operating',
        balance: 0,
    });

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

    return (
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none w-full">
            <Button
                onClick={() => setIsAddModalOpen(true)}
                className="block w-full rounded-full py-2 px-3 text-center text-sm font-semibold text-white shadow-sm"
            >
                + Add Account
            </Button>

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
        </div>
    );
}