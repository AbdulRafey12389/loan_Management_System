import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const LoanDetailsStep = ({ form }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <FormField
        control={form.control}
        name='loanAmount'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Loan Amount *</FormLabel>
            <FormControl>
              <Input
                type='number'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='loanPurpose'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Loan Purpose *</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='repaymentTerm'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel>Repayment Term *</FormLabel>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex flex-col space-y-2'
            >
              <FormItem className='flex items-center gap-2'>
                <FormControl>
                  <RadioGroupItem value='3-months' />
                </FormControl>
                <FormLabel className='font-normal'>3 Months</FormLabel>
              </FormItem>
              <FormItem className='flex items-center gap-2'>
                <FormControl>
                  <RadioGroupItem value='6-months' />
                </FormControl>
                <FormLabel className='font-normal'>6 Months</FormLabel>
              </FormItem>
              <FormItem className='flex items-center gap-2'>
                <FormControl>
                  <RadioGroupItem value='12-months' />
                </FormControl>
                <FormLabel className='font-normal'>12 Months</FormLabel>
              </FormItem>
              <FormItem className='flex items-center gap-2'>
                <FormControl>
                  <RadioGroupItem value='24-months' />
                </FormControl>
                <FormLabel className='font-normal'>24 Months</FormLabel>
              </FormItem>
            </RadioGroup>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='acceptTerms'
        render={({ field }) => (
          <FormItem className='col-span-2 flex items-center justify-start gap-3'>
            <FormControl className='mt-2'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='text-sm leading-snug'>
              <FormLabel>I agree to the Terms and Conditions</FormLabel>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default LoanDetailsStep;
