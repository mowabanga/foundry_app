import OverviewTable from '@/components/general/OverviewTable'
import { TransactionsChart } from '@/components/general/TransactionsChart'
import React from 'react'

type Props = {}

const TransactionsPage = (props: Props) => {
  return (
    <div className='flex flex-col'>
      <OverviewTable />
    </div>
  )
}

export default TransactionsPage