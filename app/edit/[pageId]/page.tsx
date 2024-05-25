import { Navbar } from '@/components/Navbar'
import React from 'react'
import EditPage from './Editpage'
import { getUser } from '@/lib/getUser';
import { createClient } from '@/utils/supabase/server';


export default async function Page ({ params }: { params: { pageId: string } }){
    const { pageId } = params;
    const supabase = createClient();
    const user = await getUser();
    const { data, error} = await supabase.from('landing_pages').select('*').eq('user_id', user?.id).eq('id', pageId);
   
    if(!data || data?.length === 0){
        return <div className="text-white di text-3xl w-full flex justify-center items-center" style={{
            height: "calc(100vh - 5rem)",
          }}>
            
            This page does not exist or you do not have permission to view it
          </div>
    }
    return (
        <div>
            <Navbar />
            {data && data?.length > 0 && <EditPage data={data} />}
        </div>
    )
}
