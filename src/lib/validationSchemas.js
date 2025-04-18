import { z } from 'zod';

export const personalInfoSchema = z.object({
  birthDate: z.string().nonempty('Please select your birth date'),
  gender: z.enum(['male', 'female', 'other']),
  address: z.string().nonempty(10, 'Address is required'),
  sin: z.string().min(9).max(9, 'SIN must be 9 digits'),
});

export const financialInfoSchema = z.object({
  incomeSource: z.enum([
    'employment',
    'self-employment',
    'disability',
    'pension',
    'other',
  ]),
  annualIncome: z.string().min(1, 'Enter your income'),
  bankName: z.string().min(2, 'Bank name required'),
  accountNumber: z.string().min(5, 'Account number too short'),
});

export const loanDetailsSchema = z.object({
  loanAmount: z.string().min(1, 'Enter amount'),
  loanPurpose: z.string().min(2, 'Purpose required'),
  repaymentTerm: z.enum(['3-months', '6-months', '12-months', '24-months']),
  acceptTerms: z.boolean().refine((val) => val, 'Accept terms to proceed'),
});

export const fullFormSchema = personalInfoSchema
  .merge(financialInfoSchema)
  .merge(loanDetailsSchema);
