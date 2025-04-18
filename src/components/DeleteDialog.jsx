import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { useState } from 'react';
import deleteLoan from '@/services/apiDeleteLoan';
import {
  useLocation,
  useNavigate,
  useNavigation,
  useRevalidator,
} from 'react-router';
import { Loader2 } from 'lucide-react';

const DeleteDialog = ({ children, loanId }) => {
  const [dialogClose, setDialogClose] = useState(false);
  const { revalidate } = useRevalidator();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Dialog
        onOpenChange={setDialogClose}
        open={dialogClose}
      >
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure to delete this loan request?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              loan request.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setDialogClose(false)}>Cancel</Button>
            <Button
              variant='destructive'
              className='mb-2'
              desabled={loading || navigation.state === 'loading'}
              onClick={async () => {
                setLoading(true);
                await deleteLoan(loanId);
                revalidate();
                setLoading(false);
                location.pathname !== '/dashboard/loans' &&
                  navigate('/dashboard/loans');
                setDialogClose(false);
              }}
            >
              {loading || navigation.state === 'loading' ? (
                <Loader2 className='animate-spin' />
              ) : (
                'Delete'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
