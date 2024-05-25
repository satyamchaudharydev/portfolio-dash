// app/view/[pageId]/page.tsx
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { Suspense } from 'react';
import ViewPage from './ViewPage';
import { getUser } from '@/lib/getUser';


export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const supabase = createClient();
  const user = await getUser();
  const { data, error} = await supabase.from('landing_pages').select('*').or(`user_id.eq.${user?.id},published.eq.true`).eq('id', id);
  
  if (error || !data) {
      console.error('Error fetching landing page:', error ? error.message : 'No data found');
      return <div>Error fetching landing page</div>;
    }


  return (
    <ViewPage data={data} />
  );
}
