import { ReactNode } from "react";
import Navbar from "./Navbar";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="md:grid md:place-items-center min-h-screen bg-primary">
      <main className="md:w-1/2 ">{children}</main>
      <Navbar />
    </div>
  );
};
export default Layout;
