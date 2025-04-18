import { Loader } from 'lucide-react';

const LoadingPage = () => {
  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm'>
        <div className='text-black font-semibold text-xl animate-pulse flex gap-2 items-center justify-center w-60 h-20 rounded-lg bg-zinc-300 shadow-lg'>
          <Loader className='animate-spin' /> Loading...
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
