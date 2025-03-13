"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { login, setAuthToken } from "@/services/auth";
import { AuthRequest } from "@/models/types";

// Schema validation for form inputs
const FormSchema = z.object({
  value: z.string().min(10, { message: "Mobile number must be at least 10 digits long." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
});

const LoginForm = () => {
  const form = useForm<AuthRequest>({
    resolver: zodResolver(FormSchema),
    defaultValues: { value: "", password: "" },
  });

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: AuthRequest) => {
    try {
      const response = await login({ value: data.value, password: data.password });
      setAuthToken(response.token); // Save token for future requests
      router.push("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto p-4">
      <Card className="w-full">
        <CardHeader className="text-center text-xl sm:text-2xl font-semibold">Welcome Back!</CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-center">{error}</p>}

            <Form {...form}>
              <form className="w-full flex flex-col gap-3" onSubmit={form.handleSubmit(onSubmit)}>
                {/* Mobile/Email Input */}
                <FormField
                  control={form.control}
                  name="value"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <Input placeholder="0712345678" {...field} />
                      </FormControl>
                      {/* Display validation error */}
                      {form.formState.errors.value && (
                        <p className="text-red-500 text-sm">
                            {form.formState.errors.value.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                {/* Password Input */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Password" type="password" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full mt-4 hover:cursor-pointer">
                  Login
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
