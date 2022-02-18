import { ReactNode } from "react";
import Navbar from "./Navbar";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="">{children}</main>
      <Navbar />
    </div>
  );
};
export default Layout;
