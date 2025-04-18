// NODE MODULES...
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

// COMPONENTS...
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';
import PageTitle from '@/components/PageTitle';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// ICONS...
import { Mail, Lock, User, Phone, Eye, EyeOff, Loader2 } from 'lucide-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const actionData = useActionData();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (actionData) {
      setErrorMessage(actionData);
    }
  }, [actionData]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      setErrorMessage(null);
    }
  }, [errorMessage]);

  return (
    <>
      <PageTitle title='Create Your Account | Join Us Today' />

      <div className='min-h-screen flex items-center justify-center px-4 bg-[#f1f5f9]'>
        <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
          <div className='mb-6 text-center'>
            <h1 className='text-3xl font-bold text-zinc-800'>
              Create a new account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Already have an account?{' '}
              <Link
                to='/signin'
                className='text-blue-600 font-medium hover:underline'
              >
                Sign in
              </Link>
            </p>
          </div>

          <Form
            method='post'
            className='space-y-4'
          >
            <div className='flex gap-2'>
              <div className='flex-1'>
                <Label htmlFor='firstName'>First Name</Label>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500'>
                    <User size={16} />
                  </span>
                  <Input
                    name='firstName'
                    placeholder='John'
                    className='pl-9'
                  />
                </div>
              </div>

              <div className='flex-1'>
                <Label htmlFor='lastName'>Last Name</Label>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500'>
                    <User size={16} />
                  </span>
                  <Input
                    name='lastName'
                    placeholder='Doe'
                    className='pl-9'
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor='email'>Email</Label>
              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500'>
                  <Mail size={16} />
                </span>
                <Input
                  type='email'
                  name='email'
                  placeholder='you@example.com'
                  className='pl-9'
                />
              </div>
            </div>

            <div>
              <Label htmlFor='phoneNumber'>Phone Number</Label>
              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500'>
                  <Phone size={16} />
                </span>
                <Input
                  type='tel'
                  name='phoneNumber'
                  placeholder='1234567890'
                  className='pl-9'
                />
              </div>
            </div>

            <div>
              <Label htmlFor='password'>Password</Label>
              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500'>
                  <Lock size={16} />
                </span>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='********'
                  className='pl-9 pr-10'
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer'
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </span>
              </div>
            </div>

            <div className='flex items-start space-x-2'>
              <input type='checkbox' />
              <p className='text-xs text-muted-foreground'>
                I agree to the{' '}
                <span className='text-blue-600 font-medium cursor-pointer hover:underline'>
                  Terms
                </span>{' '}
                and{' '}
                <span className='text-blue-600 font-medium cursor-pointer hover:underline'>
                  Conditions
                </span>
              </p>
            </div>

            <Button
              type='submit'
              className='w-full'
              disbled={navigation.state === 'submitting'}
            >
              {navigation.state === 'submitting' ? (
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <>Create Account</>
              )}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
