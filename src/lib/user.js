// NODE MODULES...
import supabase from '../services/supabaseConfig';

export const getUser = async () => {
  const { data } = await supabase.auth.getUser();
  const { data: user } = await supabase
    .from('users')
    .select()
    .eq('email', data.user.email)
    .single();

  return user;
};
