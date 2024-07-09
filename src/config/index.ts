export const PRODUCT_CATEGORIES = [
    {
      label: 'Furniture',
      value: 'furniture' as const,
      featured: [
        {
          name: 'New Listings',
          href: '/products?category=furniture&sort=desc',
          imageSrc: '/nav/ui-kits/blue.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=furniture',
          imageSrc: '/nav/ui-kits/purple.jpg',
        },
      ],
    },
    {
      label: 'Electronics',
      value: 'electronics' as const,
      featured: [
        {
          name: 'New Listings',
          href: '/products?category=electronics&sort=desc',
          imageSrc: '/nav/icons/new.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=electronics',
          imageSrc: '/nav/icons/bestsellers.jpg',
        },
      ],
    },
    {
      label: 'Transportation',
      value: 'transportation' as const,
      featured: [
        {
          name: 'New Listings',
          href: '/products?category=ui_kits&transportation=desc',
          imageSrc: '/nav/ui-kits/blue.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=transportation',
          imageSrc: '/nav/ui-kits/purple.jpg',
        },
      ],
    },
    {
      label: 'Housing',
      value: 'housing' as const,
      featured: [
        {
          name: 'New Listings',
          href: '/products?category=housing&sort=desc',
          imageSrc: '/nav/ui-kits/blue.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=housing',
          imageSrc: '/nav/ui-kits/purple.jpg',
        },
      ],
    },
    {
      label: 'Others',
      value: 'others' as const,
      featured: [
        
      ],
    },
  ]