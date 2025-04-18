// NODE MODULES...

import supabase from '../services/supabaseConfig';

export default async (id) => {
  await supabase.from('newLoans').delete().eq('id', id);
};
