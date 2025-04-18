// src/pages/dashboard/Dashboard.tsx
import ToggleButton from '@/components/ToggleButton';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useToggle } from '@/contexts/ToggleContext';
import { Activity, DollarSign, Clock, UserCheck } from 'lucide-react';
import { Link } from 'react-router';

const UserDashboard = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useToggle();

  return (
    <div className='flex flex-col p-4 md:p-6'>
      <div className='flex items-center justify-between border border-zinc-200 rounded-lg py-6 px-4 mb-8 shadow-md'>
        <h1 className='text-2xl font-bold'>Welcome, John</h1>

        <ToggleButton
          
          onclick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Loans</CardTitle>
            <Activity className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>0</div>
            <p className='text-xs text-muted-foreground'>50min</p>
            <p className='text-xs text-green-500'>Good Standing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Approved Loans
            </CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>0</div>
            <p className='text-xs text-muted-foreground'>Total Amount</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Pending Requests
            </CardTitle>
            <Clock className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>0</div>
            <p className='text-xs text-muted-foreground'>Last Request</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>References</CardTitle>
            <UserCheck className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>0</div>
            <p className='text-xs text-muted-foreground'>52min</p>
            <p className='text-xs text-yellow-500'>Not notified</p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-4 grid-cols-1'>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground'>
              No recent activity to display.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl text-center'>
              Apply for New Loan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link to={'/dashboard/newLoan'}>
              <Button className='w-full'>Start Application</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
