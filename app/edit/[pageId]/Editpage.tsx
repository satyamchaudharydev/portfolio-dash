// import { EditForm } from '@/components/EditForm';
"use client"

import { CreateForm, FormValues } from "@/components/CreateLandingPageForm";
import { template } from "@/components/PreviewLandingPage";
import { TemplateDrawer } from "@/components/TemplateDrawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getUser } from "@/lib/getUser";

import { supabase } from "@/utils/supabase/client";
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react";
import {CreatePageModal, ModalFormValue } from "@/components/CreatePageModal";
import Link from "next/link";

export default  function EditPage ({data} : {data: any}){
  const [pageDetails, setPageDetails] = useState<ModalFormValue>();
  const [template, setTemplate] = useState<template>("default");
  const [updateComponents, setUpdateComponents] = useState<FormValues | null>(null);
  const [isPublished, setIsPublished]  = useState<boolean>(false);

  const id = data?.[0].id

  useEffect(() => {
    setPageDetails({ title: data?.[0].title, description: data?.[0].description });
    setUpdateComponents({ components: data?.[0].components });
    setTemplate(data?.[0].template_name);
    setIsPublished(data?.[0].published);
  }, [data]);
  
  const changeTemplate = (template: template) => {
    setTemplate(template);
  };
  const handleComponents = (data: FormValues) => {
    setUpdateComponents(data);
  };
  const handleSave = (data: ModalFormValue) => {
    setPageDetails(data);
  };
  const {components, published} = data?.[0] || {}

  const onSubmit = async () => {
    const user = await getUser();
    const { error: updateError } = await supabase
    .from('landing_pages')
    .update({ title: pageDetails?.title || "", description: pageDetails?.description || "", components: updateComponents?.components || components, published: false, template_name: template })
    .eq('id', id)
    .eq('user_id', user?.id);
    if (updateError) {
        console.error('Error updating data:', updateError.message);
    } else {
        console.log('Data updated successfully:');
    }
  }
  const handlePublish = async (checked: boolean) => {
    const user = await getUser();
    setIsPublished(checked);
    const { error: updateError } = await supabase
    .from('landing_pages')
    .update({ published: checked })
    .eq('id', id)
    .eq('user_id', user?.id);
   
  }
  return <>
      <div className="w-full">
      <div className="p-4 bg-background border-b border-b-[#252525] flex justify-center items-centers justify-between">
                <div>
                    <TemplateDrawer template={template} changeTemplate={changeTemplate} />
                </div>
                {pageDetails && (
                <CreatePageModal handleSave={handleSave} title={pageDetails?.title} desc={pageDetails?.description} />

                )}
                <div className="flex gap-5">
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="status">Live</Label>
                        <Switch 
                            id="edit-status" 
                            defaultChecked={isPublished}
                            onCheckedChange={(checked) => {
                                handlePublish(checked);
                            }}
                        />
                    </div>
                    <Button onClick={() => onSubmit()}>Save</Button>
                    <Button onClick={() => onSubmit()} asChild>
                      <Link href={`/view/${id}`}>
                        Preview
                      </Link>
                    </Button>

                </div>
            </div>
            
            <CreateForm mode="edit" pageDetails={pageDetails} template={template} data={data?.[0]} onSubmit={onSubmit} handleComponents={handleComponents} />
            <div>
            </div>
        </div>
  </>
};


