export type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default AuthLayout;
