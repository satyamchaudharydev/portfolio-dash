import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Component {
  type: 'footer' | 'header' | 'text' | 'image';
  content?: string;
}
export type template = 'default' | 'frisco';
interface PreviewSectionProps {
  title: string;
  description: string;
  components: Component[];
  template: template;
  handleClick?: () => void;
}




const PreviewSection: React.FC<PreviewSectionProps> = ({ title, description, components, template="frisco",handleClick  }) => {
  const getComponentContent = (
    type: Component['type'],
  ) => {
    const component = components.find((component) => component.type === type);
    return component?.content || "";

  }
  return templates[template]({ getComponentContent })
}

const DefaultTemplate= ({ getComponentContent }: {getComponentContent: (
  type: Component['type']
) => string | undefined}) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="bg-[#6366F1] text-white px-4 lg:px-6 h-14 flex items-center">
    
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[#F3F4F6]">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#1F2937]">
                {getComponentContent('header')}
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-[#6B7280] md:text-xl dark:text-[#9CA3AF]">
                {getComponentContent('text')}

              </p>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4338CA] disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            height="300"
            src={getComponentContent('image')}
            width="1270"
          />
        </div>
      </section>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-white">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F3F4F6] px-3 py-1 text-sm dark:bg-[#1F2937] text-[#6B7280]">
                  New Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F2937]">
                  Discover Our Innovative Solutions
                </h2>
                <p className="max-w-[900px] text-[#6B7280] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#9CA3AF]">
                  Explore our cutting-edge products and services that will revolutionize the way you work and play.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4338CA] disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-[#6366F1] text-white flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs">© 2024 Acme Inc. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  </div>
  )
}
const FriscoTemplate = ({ getComponentContent }: {getComponentContent: (
  type: Component['type']
) => string | undefined})  => {
 return (
  <>
  
<div className="flex flex-col min-h-[100dvh]">
  <header className="bg-[#0D9488] text-white px-4 lg:px-6 h-14 flex items-center">
    <a className="flex items-center justify-center" href="#">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Features
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Pricing
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        About
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Contact
      </a>
    </nav>
  </header>
  <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0D9488]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              {
                getComponentContent('header')
              }
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
            {
                getComponentContent('text')
              }
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#0D9488] shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Get Started
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-[#0D9488] px-3 py-1 text-sm text-white">New Features</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            Unleash Your Creativity
          </h2>
          <p className="mx-auto max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our cutting-edge products and services that will revolutionize the way you work and play.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-8 w-8 text-[#0D9488]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[#0D9488]">
                New
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Rapid Deployment</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Get your products to market faster with our streamlined deployment process.
              </p>
            </div>
            <div className="mt-6">
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-8 w-8 text-[#0D9488]"
              >
                <polyline points="18 8 22 12 18 16"></polyline>
                <polyline points="6 8 2 12 6 16"></polyline>
                <line x1="2" x2="22" y1="12" y2="12"></line>
              </svg>
              <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[#0D9488]">
                New
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Customizable Solutions</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Tailor our products to fit your unique business needs.
              </p>
            </div>
            <div className="mt-6">
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-8 w-8 text-[#0D9488]"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
              <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[#0D9488]">
                New
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Scalable Infrastructure</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Easily scale your business with our robust infrastructure.
              </p>
            </div>
            <div className="mt-6">
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#0D9488] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-[#0D9488] px-3 py-1 text-sm text-white">Customer Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from our satisfied customers about their experience with our products and services.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="rounded-lg border text-card-foreground bg-white dark:bg-gray-800 p-6 shadow-md"
            data-v0-t="card"
          >
            <div className="flex items-start gap-4">
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[#0D9488]">
                    CEO
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "The products and services from Acme Inc have been a game-changer for our business. Highly
                  recommended!"
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border text-card-foreground bg-white dark:bg-gray-800 p-6 shadow-md"
            data-v0-t="card"
          >
            <div className="flex items-start gap-4">
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JL</span>
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Jane Loe</h4>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[#0D9488]">
                    CTO
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "The team at Acme Inc has been incredibly helpful and responsive. Their products have exceeded our
                  expectations."
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border text-card-foreground bg-white dark:bg-gray-800 p-6 shadow-md"
            data-v0-t="card"
          >
            <div className="flex items-start gap-4">
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">SM</span>
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Sarah Mayer</h4>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[#0D9488]">
                    Product Manager
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "Acme Inc's products have streamlined our workflow and helped us deliver better results to our
                  clients."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-[#0D9488] px-3 py-1 text-sm text-white">Get in Touch</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            Contact Us
          </h2>
          <p className="mx-auto max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to learn more about our products and services? Get in touch with our team.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#0D9488] text-white hover:bg-[#0D9488]/90"
              type="submit"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-400">We'll get back to you as soon as possible.</p>
        </div>
      </div>
    </section>
  </main>
  <footer className="bg-[#0D9488] text-white flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs">{getComponentContent('footer')}</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Terms of Service
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Privacy
      </a>
    </nav>
  </footer>
</div>
  </>
 )
}
const templates = {
  default: DefaultTemplate,
  frisco: FriscoTemplate,
}



export default PreviewSection;
