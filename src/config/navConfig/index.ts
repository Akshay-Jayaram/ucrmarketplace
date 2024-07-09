import { Bed, Bike, MonitorSmartphone, House, CircleEllipsis } from "lucide-react";

export const PRODUCT_CATEGORIES = [
    {
      label: 'Buy',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Furniture',
          href: `/products?category=furniture`,
          icon: Bed,
        },
        {
          name: 'Electronics',
          href: '/products?category=electronics&sort=desc',
          icon: MonitorSmartphone,
        },
        {
          name: 'Transportation',
          href: '/products?category=transportation',
          icon: Bike,
        },
        {
          name: 'Housing',
          href: '/products?category=housing',
          icon: House,
        },
        {
          name: 'Others',
          href: '/products?category=others',
          icon: CircleEllipsis,
        },
      ],
    },
    {
      label: 'Events',
      value: 'icons' as const,
      featured: [
        
      ],
    },
  ]