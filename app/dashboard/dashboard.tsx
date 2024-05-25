"use client"
import { Navbar } from '@/components/Navbar';
import { PortfolioCardMenu } from '@/components/PortfolioCardMenu';
import { Button } from '@/components/ui/button'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Metrics } from './page';
import { handleDelete } from '@/lib/deletePage';

interface LandingPage {
    id: string;
    title: string;
    description: string;
    status: string;
    views: number;
    clicks: number;
    published: boolean;
    created_at: string;

  } 
export const Dashboard = ({data, metrics}: {data: LandingPage[], metrics: Metrics}) => {
  const [pages,setPages] = React.useState<LandingPage[]>(data)
  const onDeletePage = (id: string) => {
    setPages((prev) => prev.filter((page) => page.id !== id))
  }
  return (
    <>
    <main className="flex-1 bg-[#252525] dark:bg-gray-800 p-4 md:p-8 grid gap-4 md:gap-8">
        <section className="bg-background dark:bg-gray-950 rounded-lg p-4 md:p-6 grid gap-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Welcome back 
              👋
                 
              </h1>
              <p className="text-gray-500 dark:text-gray-400">Here's a quick overview of your landing pages.</p>
            </div>
            <Button asChild className='ml-auto'>
                <Link href="/create" className='bg-primary'>
                    Create New 
                </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card className='bg-[#252525] text-foreground border-0'>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Landing Pages</CardTitle>
                <FileIcon className="w-4 h-4 text-currentColor text-currentColor dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.totalPages}</div>
              </CardContent>
            </Card>
            <Card className='bg-[#252525] text-foreground border-0'>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Published Pages</CardTitle>
                <GlobeIcon className="w-4 h-4 text-currentColor dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.publishedPages}</div>
              </CardContent>
            </Card>
            <Card className='bg-[#252525] text-foreground border-0'>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Drafts</CardTitle>
                <DeleteIcon className="w-4 h-4 text-currentColor dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.draftPages}</div>
              </CardContent>
            </Card>
            <Card className='bg-[#252525] text-foreground border-0'>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <EyeIcon className="w-4 h-4 text-currentColor dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.totalViews}</div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="bg-background dark:bg-gray-950 rounded-lg md:p-6">
         
          <Table className='text-white'>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead>Page Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>
                  Click Through Rate
                </TableHead>

                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page: LandingPage) => {
                return (
                    <>
                    <TableRow key={page.id} className='hover:bg-transparent'>
                       <TableCell>
                        <div className="flex items-center gap-2">
                        
                          <div className="grid gap-0.5">
                            <div className="font-medium">{page.title}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Status published={page.published} />
                      </TableCell>
                      <TableCell>{page.views}</TableCell>
                      <TableCell>{
                        page.clicks > 0 ? `${((page.clicks / page.views) * 100).toFixed(2)}%` : "0%"
                        }</TableCell>

                      <TableCell>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {
                            new Date(page.created_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })
                          }
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button size="icon" variant="ghost" asChild>
                            <Link href={`/view/${page.id}`} className='flex justify-between'>
                              <EyeIcon className="h-5 w-5" />
                            </Link>
                          </Button>
                          <Button size="icon" variant="ghost" asChild>
                              <Link href={`/edit/${page.id}`} className='flex justify-between'>
                                <EditIcon className="h-5 w-5" />
                            </Link>
                          </Button>
                          <Button size="icon" variant="ghost" onClick={() => {
                            onDeletePage(page.id)
                            handleDelete(page.id)
                          }}>
                            <DeleteIcon className="h-5 w-5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    </>
                )
              })}
            </TableBody>
          </Table>
        </section>
      </main>

      {/* <div className="w-full">
      <main className='w-full flex justify-center items-center mt-[20px] flex-col'>
      <div className='w-[80%] flex flex-col gap-3'>
          <Button asChild className='ml-auto'>
                <Link href="/create" className='bg-primary'>
                    Create New 
                </Link>
            </Button>
            <ul 
              className='flex justify-center items-center' 
              style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, 300px)"
                  }}>
                {pages.map((page: LandingPage) => (
                    <li key={page.id} className='w-full py-2 px-3 rounded-md hover:bg-btn-background-hover flex flex-col gap-2'>
                      <Link href={`/view/${page.id}`} className='flex justify-between'>
                        <div className='bg-[#333333] w-full h-[370px] flex justify-center items-center' style={{
                          "boxShadow": '#0000 0 0 2px 1px, #00000006 0 .6021px 2.0474px, #00000017 0 2.2885px 7.781px, #0006 0 10px 34px'
                        }} >

                          <Image style={{
                            filter: 'brightness(0.3)'
                          }} width={60} height={60} src="/logo.png" alt="logo"  objectFit="contain" />
                        </div>
                      </Link>
                      <div>
                        <div className='flex justify-between relative'>
                          <h2 className='text-base font-[600]'>{page.title}</h2>
                          <div className='absolute right-0'>
                            <PortfolioCardMenu id={page.id} onDeletePage={onDeletePage} />
                          </div>
                        </div>
                        <p className='mt-1 opacity-[60%]'>{page.description}</p>
                      </div>
                      
                    </li>
                ))}
            </ul>
      </div>
      </main>
  
    </div> */}
    </>
  )
}

function DeleteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
function EditIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
  
  )
}


function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

const Status = ({published}: {published: boolean}) => {
  if(published){
    return (
      <>
         <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/50 dark:text-green-400">
                <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                <div>{published ? "Published" : "Draft"}</div>
          </div>
      </>
    )
  }
  return (
    <>
    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400">
      <div className="h-2 w-2 rounded-full bg-yellow-600 dark:bg-yellow-400" />
      <div>{published ? "Published" : "Draft"}</div>

    </div>
    </>
  )

}