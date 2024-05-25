import { supabase } from '@/utils/supabase/client';
import { getUser } from './getUser';


export const handleDelete = async (id: string) => {
    const user = await getUser()
    const { data,error } = await supabase
      .from('landing_pages')
      .delete()
      .eq('id', id)
      .eq('user_id', user?.id);
      ;

}
