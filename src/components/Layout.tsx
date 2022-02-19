import { ReactNode } from "react";
import Navbar from "./Navbar";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col  min-h-screen bg-primary">
      <main className="max-w-lg sm:mx-auto">{children}</main>
      <Navbar />
    </div>
  );
};
export default Layout;
