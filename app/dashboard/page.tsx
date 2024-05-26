import React from 'react'
import { supabase } from '@/utils/supabase/client';
import { createClient } from '@/utils/supabase/server';
import { Dashboard } from './dashboard';
import { Navbar } from '@/components/Navbar';
import { redirect } from 'next/navigation';

export interface Metrics {
  totalPages: number;
  publishedPages: number;
  draftPages: number;
  totalViews: number;

}
export default async function Page (){
  const serverSupabase = createClient();

  const { data: { user } } = await serverSupabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }
  const { data, error } = await supabase
      .from('landing_pages')
      .select('*')
      .eq('user_id', user?.id)
        ;
    // Calculate metrics
  const metrics : Metrics= {
    totalPages: 0,
    publishedPages: 0,
    draftPages: 0,
    totalViews: 0,
  };
  if(data && data?.length > 0){
    metrics.totalPages = data.length;
    metrics.publishedPages = data.filter(page => page.published).length;
    metrics.draftPages = data.filter(page => !page.published).length;
    metrics.totalViews = data.reduce((acc, page) => acc + page.views, 0);
  }

  if (error) {
    console.error('Error fetching landing pages:', error.message);
    return <div>Error fetching landing pages</div>;
  }

  return (
    <div className='flex flex-col min-h-[100dvh]'>
        <Navbar />
        <Dashboard data={data} metrics={metrics} />
      {/* <Dashboard data={data} metrics={metrics} /> */}
    </div>
  )
}

