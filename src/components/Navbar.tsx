import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-lg bg-primary text-white flex justify-evenly p-3 fixed bottom-0 w-full">
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
