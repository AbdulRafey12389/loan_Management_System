import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  fullFormSchema,
  personalInfoSchema,
  financialInfoSchema,
  loanDetailsSchema,
} from '@/lib/validationSchemas';

import { Form } from '@/components/ui/form';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

import PersonalInfoStep from '@/components/PersonalInfoStep';
import FinancialInfoStep from '@/components/FinancialInfoStep';
import LoanDetailsStep from '@/components/LoanDetailsStep';
import ReviewStep from '@/components/ReviewStep';
import newLoanRequest from '@/services/apiLoanSupabase';
import { useNavigate } from 'react-router';
import { useToggle } from '@/contexts/ToggleContext';
import ToggleButton from '@/components/ToggleButton';

const steps = [
  { id: 'personal', title: 'Personal Information' },
  { id: 'financial', title: 'Financial Information' },
  { id: 'loan', title: 'Loan Details' },
  { id: 'review', title: 'Review & Submit' },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [lastStep, setLastStep] = useState();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { isSidebarOpen, setIsSidebarOpen } = useToggle();

  const form = useForm({
    resolver: zodResolver(fullFormSchema),
    defaultValues: {
      birthDate: '',
      gender: '',
      address: '',
      sin: '',
      incomeSource: 'employment',
      annualIncome: '',
      bankName: '',
      accountNumber: '',
      loanAmount: '',
      loanPurpose: '',
      repaymentTerm: '6-months',
      acceptTerms: false,
    },
  });

  const validateStep = async () => {
    let schema;
    if (currentStep === 0) schema = personalInfoSchema;
    if (currentStep === 1) schema = financialInfoSchema;
    if (currentStep === 2) schema = loanDetailsSchema;

    if (!schema) return true;

    const fields = Object.keys(schema.shape);
    const valid = await form.trigger(fields);
    return valid;
  };

  const nextStep = async () => {
    const isValid = await validateStep();
    if (!isValid) return;

    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const navigate = useNavigate();

  const onSubmit = (data) => setFormData(data);

  const submitForm = useCallback(async () => {
    setLoading(true);
    setLastStep(3);
    const error = await newLoanRequest(formData);

    setLoading(false);

    if (error) return alert(error);

    navigate('/dashboard/loans');
  }, [formData, navigate]);

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center bg-zinc-200 rounded-md shadow-xl mb-10 p-5'>
        <h1 className='text-3xl font-bold'>New Loan Application</h1>
        <p className='md:block hidden text-sm text-zinc-500 font-semibold'>
          Step {currentStep + 1} of {steps.length}
        </p>

        <ToggleButton
          classes='bg-zinc-200 border border-zinc-300 shadow-md md:hidden block'
          onclick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Progress Bar */}
      <div className='mb-8 '>
        <ol className='grid grid-cols-4 gap-2 w-full'>
          {steps.map((step, index) => (
            <li
              key={step.id}
              className='w-full bg-zinc-200 relative mr-2 py-3 rounded-lg shadow-lg px-4'
            >
              <div className='flex flex-col items-center'>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= index
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground'
                  } ${completedSteps.includes(index) ? 'ring-2 ring-primary' : ''}`}
                >
                  {completedSteps.includes(index) ? '✓' : index + 1}
                </div>
                <span
                  className={`mt-2 text-xs ${
                    currentStep >= index
                      ? 'text-primary font-bold'
                      : 'text-muted-foreground'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {steps.length - 1 && (
                <div
                  className={`h-1  mx-2 absolute z-20 -left-2 rounded-lg top-0 ${
                    currentStep > index || lastStep === 3
                      ? 'bg-black w-full transition-all duration-500 ease-in-out'
                      : 'bg-muted w-0 transition-all duration-500 ease-out'
                  }`}
                />
              )}
            </li>
          ))}
        </ol>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 0 && <PersonalInfoStep form={form} />}
              {currentStep === 1 && <FinancialInfoStep form={form} />}
              {currentStep === 2 && <LoanDetailsStep form={form} />}
              {currentStep === 3 && <ReviewStep form={form} />}
            </CardContent>
          </Card>

          {/* Step Navigation */}
          <div className='flex justify-between'>
            {currentStep > 0 ? (
              <Button
                type='button'
                onClick={prevStep}
                variant='outline'
              >
                <ChevronLeft className='mr-2 h-4 w-4' />
                Previous
              </Button>
            ) : (
              <div />
            )}
            {currentStep < steps.length - 1 ? (
              <Button
                type='button'
                onClick={nextStep}
              >
                Next
                <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            ) : (
              <Button
                type='submit'
                onClick={submitForm}
                disabled={loading}
                className='w-40'
              >
                {loading ? (
                  <Loader2 className='animate-spin' />
                ) : (
                  'Submit Application'
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MultiStepForm;
