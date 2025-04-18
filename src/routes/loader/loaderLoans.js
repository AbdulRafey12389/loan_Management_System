// NODE MODULES...
import supabase from '@/services/supabaseConfig';

// CUSTOM MODULES...
import { getUser } from '@/lib/user';

const loaderLoans = async () => {
  const user = await getUser();

  const { data } = await supabase
    .from('newLoans')
    .select()
    .eq('userId', user.id);

  return data;
};

export default loaderLoans;
