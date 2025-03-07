import LoginForm from '@/components/forms/LoginForm'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
        <div className='flex w-full max-w-sm flex-col gap-6'>
            <Link href="/" className='self-center'>
                <h1 className='text-2xl font-bold text-primary'>Foundry</h1>
            </Link>
            
            <LoginForm />
        </div>
    </div>
  )
}

export default Login