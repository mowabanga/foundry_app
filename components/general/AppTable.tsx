import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table'

const members = [
    {
        name: "John Doe",
        number: "0701234567",
        role: "usher",
        transactions: 2000
    },
    {
        name: "Betty Doe",
        number: "0701234567",
        role: "youth pastor",
        transactions: 2980
    },
    {
        name: "David Peters",
        number: "0701234567",
        role: "clergy",
        transactions: 200
    },
    {
        name: "Peterson Peters",
        number: "0701234567",
        role: "usher",
        transactions: 17000
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },
    {
        name: "Mary Watkins",
        number: "0701234567",
        role: "choir",
        transactions: 500
    },

]

const AppTable = () => {
  return (
    <Table>
        <TableCaption>A list of all your members</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone number</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Transactions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {members.map((member) => (
                <TableRow key={member.number}>
                    <TableCell className='font-medium'>{member.name}</TableCell>
                    <TableCell>{member.number}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>{member.transactions}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className='text-right'>27,290</TableCell>
            </TableRow>
        </TableFooter>
    </Table>
  )
}

export default AppTable