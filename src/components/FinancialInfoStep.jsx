import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

const FinancialInfoStep = ({ form }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <FormField
        control={form.control}
        name='incomeSource'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Income Source *</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Select income source' />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value='employment'>Employment</SelectItem>
                <SelectItem value='self-employment'>Self Employment</SelectItem>
                <SelectItem value='disability'>Disability</SelectItem>
                <SelectItem value='pension'>Pension</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='annualIncome'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Annual Income *</FormLabel>
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
        name='bankName'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bank Name *</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='accountNumber'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Account Number *</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FinancialInfoStep;
