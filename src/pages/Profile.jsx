// src/pages/dashboard/Profile.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToggle } from '@/contexts/ToggleContext';
import ToggleButton from '@/components/ToggleButton';
import { getUser } from '@/lib/user';
import { useEffect, useState } from 'react';
import LoadingPage from '@/components/LoadingPage';

const Profile = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useToggle();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const user = await getUser();
      setUser(user);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className='p-4 md:p-6 space-y-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Customer Profile</h1>
            <ToggleButton onclick={() => setIsSidebarOpen(!isSidebarOpen)} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Your personal details and information
              </CardDescription>
            </CardHeader>
            <CardContent className='grid grid-cols-1gap-6'>
              <div className='space-y-6'>
                <div className=''>
                  <Label htmlFor='fullname'>FullName</Label>
                  <Input
                    id='fullname'
                    value={user?.fullName}
                    readOnly
                  />
                </div>
                <div className=''>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    value={user?.email}
                    readOnly
                  />
                </div>
              </div>

              <div className='space-y-6'>
                <div className='mt-4'>
                  <Label htmlFor='phone'>Phone</Label>
                  <Input
                    id='phone'
                    value={user?.phone}
                    readOnly
                  />
                </div>
                <div className=''>
                  <Label htmlFor='account'>Accout</Label>
                  <Input
                    id='account'
                    value={user?.created_at
                      ?.split('T')[0]
                      .split('-')
                      .reverse()
                      .join('/')}
                    readOnly
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Address Information</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='address1'>Address line 1</Label>
                <Input
                  id='address1'
                  placeholder='Enter your address'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='address2'>Address line 2 (Optional)</Label>
                <Input
                  id='address2'
                  placeholder='Apartment, suite, etc.'
                />
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='city'>City</Label>
                  <Input
                    id='city'
                    placeholder='Enter your city'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='province'>Province</Label>
                  <Input
                    id='province'
                    placeholder='Enter your province'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='postal'>Postal Code</Label>
                  <Input
                    id='postal'
                    placeholder='A1A 1A1'
                  />
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      )}
    </>
  );
};

export default Profile;
