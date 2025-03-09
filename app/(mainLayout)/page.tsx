import OverviewTable from '@/components/general/OverviewTable'
import { TransactionsChart } from '@/components/general/TransactionsChart'
import { PlusIcon, TrendingUp } from 'lucide-react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='mt-4 h-full'>
      <div className='flex flex-row justify-start gap-4'>
        <div >
          <div>
            <h1 className='font-bold'>
              Total Members
            </h1>
            <p className='flex flex-row gap-4 items-center'>
              8,936 
            </p>
          </div>
          <div className='mt-4'>
            <h1 className='font-bold'>
              Total Transactions
            </h1>
            <p>KES 130,441</p>
          </div>
          <div className='mt-4'>
            <h1 className='font-bold'>
              Total Items
            </h1>
            <p>250</p>
          </div>
        </div>
       <TransactionsChart />
      </div>
      <div className='flex justify-center'>
        <OverviewTable />
      </div>
    </div>
  )
}

export default page