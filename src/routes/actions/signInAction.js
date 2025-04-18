// NODE MODULES...
import supabase from '@/services/supabaseConfig';
import { redirect } from 'react-router';

const signInAction = async ({ request }) => {
  const formdata = await request.formData();
  const email = formdata.get('email');
  const password = formdata.get('password');

  if (!email || !password) return 'All fields are required!';

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return error.message;

    return redirect('/dashboard');
  } catch (error) {
    console.error('Error signing in user:', error.message);
    return error.message;
  }
};

export default signInAction;
