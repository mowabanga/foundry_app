import AppTable from '@/components/general/AppTable'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronDown, UserPlus } from 'lucide-react'
import React from 'react'

type Props = {}

const MembersPage = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <Button className='max-w-3xs text-white'>
          <UserPlus />
          Register Member
        </Button>
        <div className='flex items-center gap-4'>
          <Input placeholder='Search' className='max-w-3xs'/>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex justify-center flex-start items-center gap-2 border dark:border-white/20 dark:text-white p-1.5 m-1 rounded-sm'>
              <p className='text-[13px] dark:text-white/70'>
                  Search By
              </p>
                <ChevronDown size={14}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Name</DropdownMenuItem>
              <DropdownMenuItem>Phone Number</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>Search</Button>
        </div>
        <AppTable />
      </div>
    </div>
  )
}

export default MembersPage