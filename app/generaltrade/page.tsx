
export default function Page() {
    return (
      <div className="bg-white mt-16">
      <section className="w-full py-12 md:py-24 lg:py-32 container mx-auto px-4 py-8 max-w-7xl">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Trade Expertise</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover our diverse trade capabilities across key commodity sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <DrillIcon className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">Crude Oil</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Comprehensive solutions for crude oil trading, logistics, and risk management.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <FuelIcon className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">Refined Products & Energy</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Expertise in trading and logistics for refined petroleum products and energy commodities.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <TruckIcon className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">Bulk Materials</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Comprehensive solutions for trading and logistics of bulk commodities.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <BeakerIcon className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">Petro Chemicals</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Expertise in trading and logistics for a wide range of petrochemical products.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <HandMetalIcon className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">Steel</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Comprehensive solutions for trading and logistics of steel products.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
  
  function BeakerIcon(props:any) {
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
        <path d="M4.5 3h15" />
        <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
        <path d="M6 14h12" />
      </svg>
    )
  }
  
  
  function DrillIcon(props:any) {
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
        <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" />
        <path d="M18 6h4" />
        <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
        <path d="m5 10-2 8" />
        <path d="M12 10v3c0 .6-.4 1-1 1H8" />
        <path d="m7 18 2-8" />
        <path d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" />
      </svg>
    )
  }
  
  
  function FuelIcon(props:any) {
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
        <line x1="3" x2="15" y1="22" y2="22" />
        <line x1="4" x2="14" y1="9" y2="9" />
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
      </svg>
    )
  }
  
  
  function HandMetalIcon(props:any) {
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
        <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
        <path d="M14 11V9a2 2 0 1 0-4 0v2" />
        <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
        <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
      </svg>
    )
  }
  
  
  function TruckIcon(props:any) {
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
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    )
  }