// NODE MODULES...
import { getUser } from '@/lib/user';
import supabase from '../services/supabaseConfig';

const newLoanRequest = async (formData) => {
  try {
    const user = await getUser();

    const { error } = await supabase
      .from('newLoans')
      .insert({ userId: user.id, ...formData });

    if (error) return error.message;
  } catch (error) {
    console.log('error creating loan request: ', error);
    return error.message;
  }
};

export default newLoanRequest;
