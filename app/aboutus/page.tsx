import Image from "next/image";
import Link from "next/link"

export default function Page() {
  return (
    <div className="bg-white mt-16">
      <section className="w-full md:py-24 lg:py-32 container mx-auto px-4 py-8 max-w-7xl">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                About PENTABAY
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Delivering Performance Excellence
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                PENTABAY is a leading commodity trade and project developer in the Sultanate of Oman. We work closely
                with top executives to help them make better decisions, convert those decisions into actions, and
                deliver performance excellence.
              </p>
            </div>
            <div className="space-y-4">
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our passion is to achieve better results for our clients and partners. We provide not just optimal
                product solutions, but also integrated business solutions across strategy, marketing, operations,
                technology, transformations, finance, investment, and mergers & acquisitions.
              </p>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We have a unique and optimized approach to traditional change management, helping our clients and
                partners measure and manage change effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:py-24 lg:py-32 container mx-auto px-4 py-8 max-w-7xl">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <Image
                alt="PENTABAY Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height={310}
                src="/about_us.jpg"
                width={550}
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experienced Professionals</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team is composed of experienced professionals with a deep understanding of the commodity trade and
                project development industry. We work closely with our clients to provide tailored solutions that meet
                their unique needs.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:py-24 lg:py-32 container mx-auto px-4 py-8 max-w-7xl">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Integrated Business Solutions
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At PENTABAY, we offer a wide range of services to help our clients and partners achieve their goals. Our
                integrated business solutions cover strategy, marketing, operations, technology, transformations,
                finance, investment, and mergers & acquisitions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 shadow-slate-600 shadow-sm dark:bg-gray-950">
                  <BriefcaseIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                  <h3 className="mt-2 text-lg font-semibold">Strategy</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We help our clients develop and implement effective strategies to achieve their business objectives.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-slate-600 shadow-sm dark:bg-gray-950">
                  <BarChartIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                  <h3 className="mt-2 text-lg font-semibold">Risk Management</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                  Our optimized approach helps clients and partners measure and manage risk and overcome the odds to realize results.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-slate-600 shadow-sm dark:bg-gray-950">
                  <GaugeIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                  <h3 className="mt-2 text-lg font-semibold">Operations</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We optimize our client&aposs operations to improve efficiency and productivity.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-slate-600 shadow-sm dark:bg-gray-950">
                  <CodeIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                  <h3 className="mt-2 text-lg font-semibold">Technology</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our technology solutions help our clients leverage the latest tools and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BarChartIcon(props:any) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BriefcaseIcon(props:any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CodeIcon(props:any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}