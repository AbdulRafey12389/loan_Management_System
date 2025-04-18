// NODE MODULES...
import { redirect } from 'react-router';
import supabase from '../services/supabaseConfig';

export default async () => {
  await supabase.auth.signOut();
  return redirect('/');
};
