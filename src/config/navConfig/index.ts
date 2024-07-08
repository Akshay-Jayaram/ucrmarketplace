import { Bed, Bike, MonitorSmartphone, House, CircleEllipsis } from "lucide-react";

export const PRODUCT_CATEGORIES = [
    {
      label: 'Buy',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Furniture',
          href: `/products?category=ui_kits`,
          icon: Bed,
        },
        {
          name: 'Electronics',
          href: '/products?category=ui_kits&sort=desc',
          icon: MonitorSmartphone,
        },
        {
          name: 'Transportation',
          href: '/products?category=ui_kits',
          icon: Bike,
        },
        {
          name: 'Housing',
          href: '/products?category=ui_kits',
          icon: House,
        },
        {
          name: 'Others',
          href: '/products?category=ui_kits',
          icon: CircleEllipsis,
        },
      ],
    },
    {
      label: 'Sell',
      value: 'icons' as const,
      featured: [
        
      ],
    },
  ]