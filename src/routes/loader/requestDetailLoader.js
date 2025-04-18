// NODE MODULES...
import supabase from '@/services/supabaseConfig';

const requestDetailLoader = async ({ params }) => {
  const { requestId } = params;

  try {
    const { data } = await supabase
      .from('newLoans')
      .select()
      .eq('id', requestId)
      .single();

    return data;
  } catch (error) {
    console.log('Error: fetch detail data ' + error.message);

    return error.message;
  }
};

export default requestDetailLoader;
