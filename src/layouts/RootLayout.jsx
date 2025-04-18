// src/pages/Welcome.tsx
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e8f1ff] to-[#f1f5f9] text-center px-4'>
      <h1 className='text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4'>
        Welcome to Our Platform
      </h1>
      <p className='text-muted-foreground max-w-md mb-8'>
        Experience the best service with our cutting-edge solutions.
      </p>

      <div className='flex gap-4'>
        <Button
          size='lg'
          onClick={() => navigate('/signin')}
        >
          Login
        </Button>
        <Button
          variant='outline'
          size='lg'
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default RootLayout;
