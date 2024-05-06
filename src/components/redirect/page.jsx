"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectHome = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/shop');
  }, [router]);

  return null; // This component doesn't render anything
};

export default RedirectHome;
