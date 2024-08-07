import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { Users, CheckCircle, HandCoins } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: 'Exclusive UCR Community',
    Icon: Users,
    description:
      'Enjoy a secure and trusted environment where only UCR students can buy and sell, ensuring a community-focused marketplace.',
  },
  {
    name: 'Convenient and Local',
    Icon: CheckCircle,
    description:
      'Find items you need right on campus, making pickups and exchanges easy and hassle-free without the need for long-distance travel.',
  },
  {
    name: 'Cost-Effective Solutions',
    Icon: HandCoins,
    description:
      "Save money by purchasing pre-loved items at affordable prices, and make extra cash by selling things you no longer need.",
  },
]


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your Campus Marketplace: <span style={{ color: '#003DA5' }}> Buy, Sell, Connect</span></h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Discover a seamless way to buy and sell within the UCR community. From furniture and 
            electronics to bikes and textbooks, connect with fellow students to find what you need or 
            pass on items you no longer use. Safe, convenient, and exclusively for UCR students.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants({ variant: "custom", size: "lg"  })}>
              Browse Latest
            </Link>
            <Link 
            href='/sell'
              className={buttonVariants({variant:'ghost'})}>
              Seller Dashboard &rarr;
            </Link>
          </div>
      </div>
      <ProductReel
          query={{ sort: 'asc', limit: 4 }}
          href='/products?sort=recent'
          title='Trending'
        />
        <ProductReel
          query={{ category: "furniture", sort: 'asc', limit: 4 }}
          href='/products?category=furniture'
          title='Furniture'
          subtitle={"Pre-Loved Furniture for Comfy Dorms and Apartments"}
        />
        <ProductReel
          query={{ category: "electronics", sort: 'asc', limit: 4 }}
          href='/products?category=electronics'
          title='Electronics'
          subtitle={"Upgrade Your Gadgets without Breaking the Bank"}
        />
        <ProductReel
          query={{ category: "housing", sort: 'asc', limit: 4 }}
          href='/products?category=housing'
          title='Housing'
          subtitle={"Student Housing Deals: Find Your Next Room or Apartment"}
        />
    </MaxWidthWrapper>

<section className='border-t border-gray-200 bg-gray-50'>
<MaxWidthWrapper className='py-20'>
  <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
    {perks.map((perk) => (
      <div
        key={perk.name}
        className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
        <div className='md:flex-shrink-0 flex justify-center'>
          <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
            {<perk.Icon className='w-1/3 h-1/3' />}
          </div>
        </div>

        <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
          <h3 className='text-base font-medium text-gray-900'>
            {perk.name}
          </h3>
          <p className='mt-3 text-sm text-muted-foreground'>
            {perk.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</MaxWidthWrapper>
</section>
</>
  );
}
