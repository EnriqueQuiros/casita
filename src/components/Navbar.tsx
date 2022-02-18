import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-lg bg-primary text-white flex justify-between p-3">
      Casita
      <div className="flex gap-3">
        <Link href="/">
          <a> Home</a>
        </Link>
        <Link href="/setup">
          <a> Setup</a>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
