'use client'
import Link from "next/link";
import Head from "next/head";
import { TractorIcon } from "lucide-react";
import { FlowerIcon } from "lucide-react";
import { CropIcon } from "lucide-react";





  
export function ServicesPage() {

 

  return (
    
   

    <div className="">
      <Head>
        <title>Services - JP Gardening</title>
        <meta
          name="description"
          content="Explore our services including lawn care, garden design, and irrigation system installation."
        />
      </Head>
      <main className="container mx-auto py-24">
        <section className="mb-12">
          <ServiceCard
           icon={<TractorIcon className="w-12 h-12 " />}
            title="Our Company"
            description={
              <>
                <p className="mb-4">
                  <b>Welcome to your destination for professional lawn care and landscape design services. As a newly established business, we are dedicated to providing top-quality solutions to meet our clients outdoor maintenance and design needs.
                  </b>
                </p>
                <p className="mb-4">
                  <b>Fertilization and Weed Control:</b> Achieve a healthy,
                  vibrant lawn with our customized fertilization programs
                  designed to promote lush growth while effectively controlling
                  weeds.
                </p>
                <p className="mb-4">
                  <b>Aeration, Dethatching and Re-Seeding:</b> Improve soil
                  health and promote strong root growth with our aeration and
                  re-seeding services alleviating soil compaction and encourage
                  healthy turf.
                </p>
                <p className="mb-4">
                  <b>Lawn Pest and Disease Management:</b> Protect your lawn
                  from pests and diseases with our targeted treatment plans,
                  addressing common lawn issues.
                </p>
                <p>
                  <b>Seasonal Clean-Up:</b> From spring clean-ups to fall leaf
                  removal. We tidy your lawn and garden back to its best life.
                </p>
              </>
            }
          />
        </section>
        <section className="mb-12">
          <ServiceCard
            icon={<FlowerIcon className="w-12 h-12"  />}
            title="Garden Design"
            description={
              <>
                <p className="mb-4">
                  From selecting plants of your preference to finishing touches
                  like low-voltage lighting. We can build your beautiful and
                  functional garden space tailored to your needs. We have the
                  tools and know-how to create a landscape that augments your
                  home day and night.
                </p>
                <p>
                  We are currently focused on transforming landscapes and
                  gardens in the range of $500 to $3000. For budgets exceeding
                  $3000, please contact us and we will refer you to a designer
                  landscaping firm.
                </p>
              </>
            }
          />
        </section>
        <section>
          <ServiceCard
            icon={<CropIcon className="w-12 h-12" />}
            title="Irrigation System Installation"
            description={
              <p>
                We design and install efficient irrigation systems to ensure
                your plants get the right amount of water.
              </p>
            }
          />
        </section>
      </main>
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
  );
}

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="text-gray dark:text-gray-400">{description}</div>
    </div>
  );
}
