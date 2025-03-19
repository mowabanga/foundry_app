'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

export default function Home() {
  // const router = useRouter();
  
  // useEffect(() => {
  //   // Check if user is authenticated
  //   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
  //   if (isAuthenticated) {
  //     // Redirect to dashboard if authenticated
  //     router.push('/dashboard');
  //   } else {
  //     // Redirect to login if not authenticated
  //     router.push('/login');
  //   }
  // }, [router]);

  // Return a loading state while checking auth
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="spinner"></div>
    </div>
  );
}