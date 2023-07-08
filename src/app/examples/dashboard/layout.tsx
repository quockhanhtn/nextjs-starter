export type DashBoardLayoutProps = {
  children: React.ReactNode;
};

const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
};

export default DashBoardLayout;
