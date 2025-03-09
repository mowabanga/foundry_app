import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table'

type Props = {}

const members = [
    {
        name: "John Doe",
        number: "0701234567",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "John Doe",
        number: "0701234567",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "John Doe",
        number: "0701234567",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "John Doe",
        number: "0701234567",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },
    {
        name: "John Doe",
        number: "0701234567",
        group: "usher",
        amount: 2000,
        created: "01/01/2025"
    },

]

const OverviewTable = (props: Props) => {
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
                <TableRow>
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