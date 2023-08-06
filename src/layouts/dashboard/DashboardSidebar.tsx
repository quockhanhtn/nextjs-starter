'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { CircleDot as CircleDotIcon } from 'lucide-react';

import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/styles/utils';

import { sidebars } from './config';

export type DashboardSidebarProps = React.HTMLAttributes<HTMLDivElement> & {};

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ className, ...otherProps }) => {
  const pathname = usePathname();

  return (
    <div className={cn('pb-12', className)} {...otherProps}>
      <div className="space-y-4 py-4">
        {sidebars.map((sidebarOption, index) => (
          <div key={`sidebar-item-${index}`} className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {sidebarOption.subheader}
            </h2>
            <div className="space-y-1">
              {sidebarOption.items.map((item, idx) => (
                <NextLink
                  key={`sidebar-item-${index}-${idx}`}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: pathname === item.href ? 'secondary' : 'ghost' }),
                    'w-full justify-start',
                  )}
                >
                  {item.Icon ? (
                    <item.Icon className="mr-2 h-4 w-4" />
                  ) : (
                    <CircleDotIcon className="mr-2 h-4 w-4" />
                  )}
                  {item.title}
                </NextLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
