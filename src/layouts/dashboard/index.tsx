import DashboardSidebar from '~/layouts/dashboard/DashboardSidebar';

export type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-background">
      <div className="grid lg:grid-cols-5">
        <DashboardSidebar className="hidden lg:block" />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
