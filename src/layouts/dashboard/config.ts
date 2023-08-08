import { ForwardRefExoticComponent } from 'react';
import { LayoutGrid, LucideProps } from 'lucide-react';

export type SidebarItemType = {
  title: string;
  Icon?:
    | ((props: React.HTMLProps<HTMLDivElement> | any) => React.ReactElement | JSX.Element)
    | ForwardRefExoticComponent<LucideProps>;
  href: string;
  child?: Array<Omit<SidebarItemType, 'child'>>;
};

export type SidebarOptionType = {
  subheader: string;
  items: Array<SidebarItemType>;
};

export const sidebars: SidebarOptionType[] = [
  {
    subheader: 'App',
    items: [
      {
        title: 'Page 1',
        href: '/examples/dashboard',
        Icon: LayoutGrid,
      },
      {
        title: 'Page 2',
        href: '/examples/dashboard/page-2',
      },
    ],
  },
];
