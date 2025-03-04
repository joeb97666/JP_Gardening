
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/32CfKGrDx9w
 */
import Link from 'next/link'


export function HomePage() {


  return (
    <>
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 rounded-xl bg-grey-1000"
  style={{
    backgroundImage: "url('/iStock/blurry_artificial0.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Make the main element take up the entire viewport height
    maxHeight: "100vh", // Limit the height of the background image
  }}>
  <div>
    <section
      className="mx-auto mt-24 items-center w-full s:py-8 py-10 md:py-24 lg:py-32 bg-cover bg-center rounded-xl"
      style={{
        backgroundImage: "url('/iStock/artificial03.png')",
        backgroundSize: "cover", // Apply cover size to the background image
        backgroundPosition: "center", // Center the background image
        height: "75vh",
        maxHeight: "100vh", // Limit the height of the background image
      }}>
          <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-gray-200 bg-white rounded-lg bg-opacity-70 px-4 py-2 text-black">JP GARDENING</h2>
                <p className="mx-auto max-w-[700px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed border-gray-200 rounded-lg bg-white bg-opacity-70 px-4 py-2 dark:text-black">
                  Bringing your landscaping dreams to life.
                </p>
              </div>
              <div className="flex justify-center space-x-4 lg:justify-start">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="./contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>
        </main>
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 rounded-xl bg-grey-1000"
  style={{
    backgroundImage: "url('/iStock/blurry_landscape.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "85vh", // Make the main element take up the entire viewport height
    maxHeight: "100vh", // Limit the height of the background image
  }}>
  <div>
    <section
      className="mx-auto w-full mt-1 py-12 md:py-24 lg:py-32 bg-cover bg-center rounded-xl"
      style={{
        backgroundImage: "url('/iStock/Landscaping0.jpg')",
        backgroundSize: "cover", // Apply cover size to the background image
        backgroundPosition: "center", // Center the background image
        height: "75vh",
        maxHeight: "100vh", // Limit the height of the background image
      }}
    >
          <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-gray-200 bg-opacity-70 rounded-xl bg-white px-4 py-2 text-black">Our Services</h2>
                <p className="mx-auto max-w-[700px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  border-gray-200 bg-opacity-70 rounded-xl bg-white px-4 py-2 dark:text-black">
                  Explore the wide range of landscaping services we offer to make your landscape beautiful.
                </p>
              </div>
              <div className="flex justify-center space-x-4 lg:justify-start">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="./services"
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 dark:text-black">
        <Link
          href="./contact"
          className={`inline-block py-3 px-6 text-black rounded-md shadow-lg hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-opacity-50`}
          style={{ backgroundColor: "#ff9900", textDecorationColor: "black" }}

        >
          Get a Free Quote
        </Link>
      </div>
    </>
  );
}

export default HomePage;



function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TreesIcon(props:any) {
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
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
