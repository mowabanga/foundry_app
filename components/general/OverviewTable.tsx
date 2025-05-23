import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

const members = [
    {
        name: "John Doe",
        number: "0740088697",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "Mary Doe",
        number: "0728328112",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "Peter Doe",
        number: "0711234123",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "John Doe",
        number: "0718283912",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "John Doe",
        number: "0701234152",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },

]

const OverviewTable = () => {
  return (
    <Table>
        <TableCaption>Recent Transactions</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone number</TableHead>
                <TableHead>Group</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Created</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {members.map((transaction) => (
                <TableRow key={transaction.number}>
                    <TableCell className='font-medium'>{transaction.name}</TableCell>
                    <TableCell>{transaction.number}</TableCell>
                    <TableCell>{transaction.group}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.created}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default OverviewTable