/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DEVj2lSw02V
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-4 md:p-8 grid gap-4 md:gap-8">
        <section className="bg-white dark:bg-gray-950 rounded-lg p-4 md:p-6 grid gap-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Welcome back, Jane!</h1>
              <p className="text-gray-500 dark:text-gray-400">Here's a quick overview of your landing pages.</p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Create New
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Landing Pages</CardTitle>
                <FileIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+12 since last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Published Pages</CardTitle>
                <GlobeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+8 since last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Drafts</CardTitle>
                <DeleteIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+4 since last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <EyeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+120K since last month</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-950 rounded-lg p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">All Landing Pages</h2>
            <div className="flex items-center gap-2">
              <Input
                className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-500 dark:text-gray-400 focus-visible:ring-0 focus-within:ring-offset-0"
                placeholder="Search pages..."
                type="search"
              />
              <Button size="icon" variant="outline">
                <FilterIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Page Thumbnail"
                      className="rounded-lg"
                      height="32"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width="32"
                    />
                    <div className="grid gap-0.5">
                      <div className="font-medium">Home Page</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">/home</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/50 dark:text-green-400">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                    Published
                  </div>
                </TableCell>
                <TableCell>12,345</TableCell>
                <TableCell>
                  <div className="text-sm text-gray-500 dark:text-gray-400">May 23, 2023</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="ghost">
                      <EyeIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <DeleteIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ShareIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Page Thumbnail"
                      className="rounded-lg"
                      height="32"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width="32"
                    />
                    <div className="grid gap-0.5">
                      <div className="font-medium">About Us</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">/about</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400">
                    <div className="h-2 w-2 rounded-full bg-yellow-600 dark:bg-yellow-400" />
                    Draft
                  </div>
                </TableCell>
                <TableCell>3,456</TableCell>
                <TableCell>
                  <div className="text-sm text-gray-500 dark:text-gray-400">May 15, 2023</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="ghost">
                      <EyeIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <DeleteIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ShareIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Page Thumbnail"
                      className="rounded-lg"
                      height="32"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width="32"
                    />
                    <div className="grid gap-0.5">
                      <div className="font-medium">Contact Us</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">/contact</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/50 dark:text-green-400">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                    Published
                  </div>
                </TableCell>
                <TableCell>8,901</TableCell>
                <TableCell>
                  <div className="text-sm text-gray-500 dark:text-gray-400">May 10, 2023</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="ghost">
                      <EyeIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <DeleteIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ShareIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
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