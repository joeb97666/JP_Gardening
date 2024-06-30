import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  titleClassName?: string; // Make titleClassName optional
}

export function AboutUs() {
  return (
    <section key="1" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1">
          <section className="flex mt-12 flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full">
            <div>
              <ServiceCard
                title="Our Company"
                description="Welcome to your destination for professional lawn care and landscape design services. We serve the Long Beach, Lakewood and Lakewood Village area. As a newly established business, we are dedicated to providing top-quality solutions to meet our clients' outdoor maintenance and design needs."
                titleClassName="text-2xl font-semibold text-green-600" // Add this
              />
              <h2 className="text-gray-400 justify-text-left md:text-base dark:text-orange-400">
                
                <br /><br /><b className="text-orange-400 dark:text-orange-200"> We specialize in two core areas:</b><br /><br />
              </h2>
              <ServiceCard
                title="Lawn Care"
                description="Our team is passionate about transforming ordinary lawns into verdant, healthy landscapes that enhance the beauty and value of your property. From regular mowing and edging to fertilization and weed control, we offer comprehensive lawn care services to keep your lawn looking its best year-round."
                titleClassName="text-xl font-semibold text-green-600" // Add this
              />
              <br />
              <ServiceCard
                title="Budget-Friendly Landscape Design"
                description="We believe that every outdoor space has the potential to be beautiful, regardless of budget constraints. Our small-budget landscape design services are tailored to meet your aesthetic preferences and financial considerations, providing creative solutions to maximize the visual appeal and functionality of your outdoor environment."
                titleClassName="text-xl font-semibold text-green-600" // Add this
              />
            </div>
          </section>

          <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8">
          <Link
            href="/Contact"
            className="inline-block py-3 px-6 text-black bg-orange-400 rounded-md shadow-lg hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-opacity-50"
          
            style={{ backgroundColor: "#ff9900", 
                    textDecorationColor: "black"}}>
            Get a Free Quote
          </Link>
          </div>

        </div>
      </div>

    </section>
  );
}

function ServiceCard({ title, description, titleClassName }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h3 className={`text-lg mb-2 ${titleClassName}`}>{title}</h3> {/* Modify this line */}
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
