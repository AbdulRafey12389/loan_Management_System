// NODE MODULES...
import { useEffect, useState } from 'react';
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';
import { toast } from 'sonner';

// COMPONENTS...
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';

// ICONS...
import { EyeIcon, EyeOffIcon, Loader, Loader2, Lock } from 'lucide-react';

const SignIn = () => {
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
    <div className='min-h-screen flex items-center justify-center bg-[#f1f5f9] px-4'>
      <Card className='w-full max-w-md shadow-xl'>
        <CardContent className='py-8 px-6'>
          <h2 className='text-3xl font-bold text-center mb-1'>
            Sign in to your account
          </h2>
          <p className='text-center text-sm text-muted-foreground mb-6 mt-2'>
            Or{' '}
            <Link
              to='/signup'
              className='text-blue-600 hover:underline'
            >
              create a new account
            </Link>
          </p>

          <Form
            method='post'
            action='/signin'
            className='space-y-5'
          >
            <div>
              <Label htmlFor='email'>Email address</Label>
              <div className='relative'>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='you@example.com'
                  className='pl-10'
                />
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm'>
                  📧
                </span>
              </div>
            </div>

            <div>
              <Label htmlFor='password'>Password</Label>
              <div className='relative'>
                <Input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder='********'
                  className='pl-10 pr-10'
                />
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm'>
                  <Lock size={18} />
                </span>
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                >
                  {showPassword ? (
                    <EyeOffIcon size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='remember'
                  name='remember'
                />
                <Label
                  htmlFor='remember'
                  className='text-sm'
                >
                  Remember me
                </Label>
              </div>
              <Link
                to='/forgot-password'
                className='text-sm text-primary underline'
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type='submit'
              className='w-full'
              disabled={navigation.state === 'submitting'}
            >
              {navigation.state === 'submitting' ? (
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <>Sign in</>
              )}
            </Button>
          </Form>

          <div className='mt-4 text-center'>
            <Link
              to='/'
              className='text-sm text-primary underline'
            >
              Back to home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
