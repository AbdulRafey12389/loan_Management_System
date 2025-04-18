// src/pages/dashboard/RequestDetails.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLoaderData, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getUser } from '@/lib/user';
import LoadingPage from '@/components/LoadingPage';
import DeleteDialog from '@/components/DeleteDialog';

const RequestDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      setLoading(true);
      const user = await getUser();
      setUser(user);
      setLoading(false);
    })();
  }, []);

  const detailData = useLoaderData();

  console.log(detailData);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className='p-4 md:p-6 space-y-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Request Details</h1>
            <Button
              variant='outline'
              onClick={() => navigate('/dashboard/loans')}
            >
              Back to Loans
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className='font-extrabold text-2xl'>
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>Name</TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {user?.fullName}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>
                      Birth Date
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.birthDate?.split('-').reverse().join('/')}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>Email</TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {user?.email}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>Phone</TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {user?.phone}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>Gender</TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.gender}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>
                      Social Insurance Number
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.sin}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Reference Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Relationship</TableHead>
                    <TableHead>Phone</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>Reference 1</TableCell>
                    <TableCell>dad (&lt; )</TableCell>
                    <TableCell>4505770869</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>Reference 2</TableCell>
                    <TableCell>Olyvier Boulerice (&lt; )</TableCell>
                    <TableCell>4505770869</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card> */}

          <Card>
            <CardHeader>
              <CardTitle className='font-extrabold text-2xl'>
                Loan Application Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>
                      BankName
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.bankName}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>
                      loan Purpose
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.loanPurpose}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>
                      Income Source
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.incomeSource}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>
                      Duration
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.repaymentTerm}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>
                      Loan Amount
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.loanAmount}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>Status</TableCell>
                    <TableCell
                      className={`${detailData?.status === 'Pending' ? 'text-yellow-600' : detailData?.status === 'Approved' ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {detailData?.status}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className='font-bold text-xl'>
                      Loan Request
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.created_at
                        ?.split('T')[0]
                        .split('-')
                        .reverse()
                        .join('/')}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>status</TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.sin}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className='font-bold text-xl'>
                      Annual Income
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.annualIncome}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>Address</TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.address}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className='font-bold text-xl'>
                      AccountNumber
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.accountNumber}
                    </TableCell>
                    <TableCell className='font-bold text-xl'>
                      AcceptTerms
                    </TableCell>
                    <TableCell className='font-semibold text-zinc-600'>
                      {detailData?.acceptTerms ? 'Yes' : 'No'}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className='flex justify-end gap-4'>
            <DeleteDialog loanId={detailData?.id}>
              <Button>Delete Request</Button>
            </DeleteDialog>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestDetails;
