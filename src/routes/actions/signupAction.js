// NODE MODULES...
import { redirect } from 'react-router';

// CUSTOM MODULES...
import supabase from '@/services/supabaseConfig';

const signupAction = async ({ request }) => {
  const formdata = await request.formData();
  const firstName = formdata.get('firstName');
  const lastName = formdata.get('lastName');
  const email = formdata.get('email');
  const phone = formdata.get('phoneNumber');

  // CREATE USER FROM DATABASE...

  if (!firstName || !lastName || !email || !phone)
    return 'All fields are required!';

  try {
    const { error } = await supabase.auth.signUp({
      email: formdata.get('email'),
      password: formdata.get('password'),
    });

    if (error) return error.message;

    await supabase
      .from('users')
      .insert({ fullName: `${firstName} ${lastName}`, email, phone });

    return redirect('/dashboard');
  } catch (error) {
    console.error('Error signing up user:', error.message);
    return error.message;
  }
};

export default signupAction;
