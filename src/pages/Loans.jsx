// COMPONENTS...
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Circle, CircleOff, MoreHorizontal, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link, useLoaderData } from 'react-router';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useToggle } from '@/contexts/ToggleContext';
import ToggleButton from '@/components/ToggleButton';
import DeleteDialog from '@/components/DeleteDialog';

const Loans = () => {
  const loanData = useLoaderData();

  const { isSidebarOpen, setIsSidebarOpen } = useToggle();

  return (
    <div className='p-4 md:p-6'>
      <div className='flex items-center justify-between border border-zinc-200 rounded-lg py-6 px-4 mb-10 shadow-md'>
        <h1 className='text-2xl font-bold'>My Loan Requests</h1>

        <ToggleButton onclick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      <div className='flex justify-between items-center mb-10'>
        <div className='relative'>
          <Input
            type='text'
            placeholder='Search loan requests...'
            className='border-zinc-300 h-11 pl-8'
          />
          <Search
            className='absolute left-2 top-[31%] text-zinc-400 '
            size={19}
          />
        </div>

        <Link to='/dashboard/newLoan'>
          <Button className='bg-black font-bold px-12'>New loan</Button>
        </Link>
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>LoanPurpose</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loanData.length === 0 && (
              <TableRow className='h-96'>
                <TableCell
                  colSpan={7}
                  className='h-24 font-extrabold text-center gap-2 text-2xl '
                >
                  No loan requests found.
                </TableCell>
              </TableRow>
            )}
            {loanData.map((loan, index) => (
              <TableRow
                key={loan.id}
                className='relative'
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {loan.created_at.split('T')[0].split('-').reverse().join('/')}
                </TableCell>
                <TableCell>{loan.loanAmount}</TableCell>
                <TableCell>{loan.repaymentTerm}</TableCell>
                <TableCell>{loan.loanPurpose}</TableCell>
                <TableCell
                  className={`${loan.status === 'Pending' ? 'text-yellow-600' : loan.status === 'Approved' ? 'text-green-600' : 'text-red-600'}`}
                >
                  {loan.status}
                </TableCell>
                <TableCell className='relative z-10'>
                  <DeleteDialog loanId={loan.id}>
                    <DropdownMenu>
                      <DropdownMenuTrigger alignment='right'>
                        {' '}
                        <Button
                          variant='ghost'
                          size='icon'
                          className='hover:bg-zinc-200 hover:shadow-md'
                        >
                          <MoreHorizontal className='h-4 w-4' />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </DeleteDialog>
                </TableCell>
                <Link
                  to={`/dashboard/requestDetail/${loan.id}`}
                  key={loan.id}
                  className='absolute inset-0'
                ></Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className='flex justify-between items-center mt-4 mb-4'>
        <p className='mt-4text-sm text-muted-foreground'>
          Showing 1 to {loanData.length} of {loanData.length} entries
        </p>

        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href='#'
                  className='bg-black text-white font-bold transition-all duration-50 hover:bg-zinc-300 shadow-md'
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href='#'
                  className='bg-black text-white font-bold transition-all duration-50 hover:bg-zinc-300 shadow-md'
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href='#'
                  className='bg-black text-white font-bold transition-all duration-50 hover:bg-zinc-300 shadow-md'
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <div className='mt-2 text-sm text-muted-foreground'>
        Note: You can view the details of each loan request by clicking on the
        action menu.
      </div>
    </div>
  );
};

export default Loans;
