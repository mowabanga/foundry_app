"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'

type Props = {}


const FormSchema = z.object({
    mobile: z.string().min(10, {
        message: "Mobile number must be 10 digits long."
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 digits long."
    })
})

const LoginForm = (props: Props) => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        mobile: "",
        password: "",
      },
    })
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto p-4">
        <Card className="w-full">
            <CardHeader className='text-center text-xl sm:text-2xl font-semibold'>Welcome Back!</CardHeader>
            <CardContent>
                <div className='flex flex-col gap-4'>
                    <Form {...form}>
                        <form className='w-full'>
                            <div className='flex flex-col gap-3'>
                                <FormField
                                    control={form.control}
                                    name="mobile"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mobile</FormLabel>
                                            <FormControl>
                                                <Input placeholder='0712345678' {...field}/>
                                            </FormControl>
                                        </FormItem>  
                                    )}
                                / >

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Password' type="password" {...field}/>
                                            </FormControl>
                                        </FormItem>  
                                    )}
                                / >
                            </div>
                            <div className='mt-4'>
                                <Button className='w-full hover:cursor-pointer'>Login</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default LoginForm