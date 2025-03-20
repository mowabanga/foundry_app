import React from 'react';

const TransactionsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <header style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                <h1>Transactions</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default TransactionsLayout;