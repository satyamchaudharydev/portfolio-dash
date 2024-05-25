"use client"
import { supabase } from "@/utils/supabase/client";
import PreviewSection from "@/components/PreviewLandingPage";
import { getUser } from "@/lib/getUser";
import CreatePageModal from "@/components/CreatePageModal";
import { useEffect } from "react";

export default async function ViewPage ({ data }: { data: any }){

  const {title,description,components, template_name} = data?.[0] || {}
  const trackAnalytics = async (type: 'view' | 'click') => {
    const functionName = type === 'view' ? 'increment_views' : 'increment_clicks';
    const { error } = await supabase.rpc(functionName, { page_id: data?.[0]?.id });
    if (error) {
      console.error(`Error incrementing ${type}:`, error.message);
    }
  };
  useEffect(() => {
    trackAnalytics('view');
  } , [])
  const handleClick = async () => {
    trackAnalytics('click');
  }

  if(data?.length === 0){
    return <div className="text-white di text-3xl w-full flex justify-center items-center" style={{
      height: "calc(100vh - 5rem)",
    }}>
      This page does not exist or you do not have permission to view it
    </div>
  }
  return <>
  <div className="w-full h-full">
             <div style={{
                    height: "calc(100vh)",
            }}>

                <PreviewSection title={title} description={description} components={components} template={template_name} handleClick={handleClick} />
            </div>
            <div>
             
            </div>
        </div>
  </>
};


