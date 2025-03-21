"use client";

import { createContext, useState, ReactNode } from 'react';

export const AccountsContext = createContext<{
    accounts: Array<{ id: number; name: string; balance: number; type: string; isActive: boolean }>;
    setAccounts: React.Dispatch<React.SetStateAction<any[]>>;
}>({
    accounts: [],
    setAccounts: () => {},
});

export function AccountsProvider({ children }: { children: ReactNode }) {
    const [accounts, setAccounts] = useState([
        { id: 1, name: 'Tithe', balance: 45000, type: 'Operating', isActive: true },
        { id: 2, name: 'Evangelism local church', balance: 150000, type: 'Savings', isActive: true },
        { id: 3, name: 'Msamaria Mwema', balance: 25000, type: 'Restricted', isActive: true },
        { id: 4, name: 'Elders Account', balance: 8500, type: 'Operating', isActive: true },
        { id: 5, name: 'Singles Account', balance: 30000, type: 'Savings', isActive: true },
        { id: 6, name: 'Funeral Monicah Odek', balance: 30000, type: 'Savings', isActive: true },
        { id: 7, name: 'Funeral Joyce Opondo', balance: 30000, type: 'Savings', isActive: true },
    ]);

    return (
        <AccountsContext.Provider value={{ accounts, setAccounts }}>
            {children}
        </AccountsContext.Provider>
    );
}
