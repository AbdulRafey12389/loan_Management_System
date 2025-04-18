const ReviewStep = ({ form }) => {
  const watch = form.watch;

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='font-medium mb-2'>Personal Information</h3>
        <div className='grid md:grid-cols-2 gap-4 text-sm'>
          <p>
            <strong>Birth of Date:</strong> {watch('birthDate')}
          </p>
          <p>
            <strong>Gender:</strong> {watch('gender')}
          </p>
          <p>
            <strong>Address:</strong> {watch('address')}
          </p>
          <p>
            <strong>SIN:</strong> {watch('sin')}
          </p>
        </div>
      </div>

      <div>
        <h3 className='font-medium mb-2'>Financial Information</h3>
        <div className='grid md:grid-cols-2 gap-4 text-sm'>
          <p>
            <strong>Income Source:</strong> {watch('incomeSource')}
          </p>
          <p>
            <strong>Annual Income:</strong> {watch('annualIncome')}
          </p>
          <p>
            <strong>Bank:</strong> {watch('bankName')}
          </p>
          <p>
            <strong>Account:</strong> {watch('accountNumber')}
          </p>
        </div>
      </div>

      <div>
        <h3 className='font-medium mb-2'>Loan Details</h3>
        <div className='grid md:grid-cols-2 gap-4 text-sm'>
          <p>
            <strong>Loan Amount:</strong> {watch('loanAmount')}
          </p>
          <p>
            <strong>Purpose:</strong> {watch('loanPurpose')}
          </p>
          <p>
            <strong>Term:</strong> {watch('repaymentTerm')}
          </p>
          <p>
            <strong>Terms Accepted:</strong>{' '}
            {watch('acceptTerms') ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
