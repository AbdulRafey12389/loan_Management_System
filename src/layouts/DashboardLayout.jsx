// NODE MODULES...
import { Link, Outlet, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// CUSTOM MODULES...
import logout from '@/lib/logout';

// COMPONENTS...
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// ICONS...
import { LogOut, User, FileText, Home, Wallet } from 'lucide-react';

import { useToggle } from '@/contexts/ToggleContext';
import { getUser } from '@/lib/user';
import { useEffect, useState } from 'react';

const DashboardLayout = () => {
  const location = useLocation();
  const { isSidebarOpen, setIsSidebarOpen } = useToggle();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  return (
    <div className='flex min-h-screen w-full'>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className='md:hidden w-screen h-screen bg-black opacity-40 fixed top-0 left-0 z-40 '
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`fixed ${isSidebarOpen ? 'translate-x-0 left-0 top-0 ease-in-out' : '-translate-x-full md:translate-x-0 ease-out'} z-50 border-r bg-white md:bg-muted/40 md:relative w-64 h-screen transition-all duration-500 ease-in-out`}
      >
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <h1 className='text-lg font-semibold'>Customer Portal</h1>
          </div>
          <div className='flex-1'>
            <NavigationMenu
              orientation='vertical'
              className='w-full'
            >
              <NavigationMenuList className='flex-col items-start space-x-0 space-y-4 p-4'>
                <NavigationMenuItem className='w-[230px]'>
                  <NavLink
                    to='/dashboard'
                    className={`${
                      location.pathname === '/dashboard'
                        ? 'bg-black text-white flex justify-start items-center px-6 rounded-md py-2 w-full'
                        : 'flex justify-start bg-zinc-200 hover:bg-zinc-300 shadow-lg transition-all duration-100 items-center text-black px-6 rounded-md py-2 w-full'
                    }}`}
                  >
                    <Home className='h-4 w-4 mr-2' />
                    Dashboard
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='w-full '>
                  <NavLink
                    to='/dashboard/loans'
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-black text-white flex justify-start items-center px-6 rounded-md py-2 w-full gap-2'
                        : 'flex justify-start items-center hover:bg-zinc-300 shadow-lg transition-all duration-100 bg-zinc-200 text-black px-6 rounded-md py-2 w-full gap-2'
                    }
                  >
                    <Wallet className='h-4 w-4' />
                    <span>My Loans requests </span>
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='w-full'>
                  <NavLink
                    to='/dashboard/newLoan'
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-black text-white flex justify-start items-center px-6 rounded-md py-2 w-full gap-2'
                        : 'flex justify-start bg-zinc-200 items-center hover:bg-zinc-300 shadow-lg transition-all duration-100 text-black px-6 rounded-md py-2 w-full gap-2'
                    }
                  >
                    <FileText className='h-4 w-4' />
                    New Loan
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='w-full'>
                  <NavLink
                    to='/dashboard/profile'
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-black text-white flex justify-start items-center px-6 rounded-md py-2 w-full gap-2'
                        : 'flex justify-start bg-zinc-200 items-center hover:bg-zinc-300 shadow-lg transition-all duration-100 text-black px-6 rounded-md py-2 w-full gap-2'
                    }
                  >
                    <User className='h-4 w-4' />
                    Profile
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className='mt-auto p-4'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='w-full justify-start gap-2 bg-zinc-200 hover:bg-zinc-300 shadow-md'
                >
                  <Avatar className='h-6 w-6'>
                    <AvatarImage src='/avatars/01.png' />
                    <AvatarFallback className='uppercase font-bold'>
                      {user?.fullName.split('')[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className='font-bold capitalize'>{user?.fullName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                <DropdownMenuItem
                  className='gap-2'
                  onClick={logout}
                >
                  <LogOut className='h-4 w-4' />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col flex-1'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
