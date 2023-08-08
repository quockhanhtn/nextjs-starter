'use client';

import DashboardSidebar from '~/layouts/dashboard/DashboardSidebar';

import { useMediaQuery } from '~/hooks';

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="bg-background w-screen h-screen flex flex-row">
      <DashboardSidebar className={isMobile ? 'hidden' : `w-[200px] block`} />
      <div className="flex-grow">
        <div className="h-full px-4 py-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
