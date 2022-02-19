import Image from "next/image";
import Link from "next/link";
import LeftIcon from "../../public/left.svg";
interface HeaderProps {
  title: string;
  goBack?: string;
}

const Header = ({ title, goBack }: HeaderProps) => {
  return (
    <header className="bg-primary text-white  text-center">
      {goBack && (
        <Link href={goBack}>
          <a className="absolute left-3 top-4 text-orange">
 
          <Image src={LeftIcon} alt="Left icon" height={25} width={25} />

          </a>
        </Link>
      )}
      <h1 className="text-2xl p-3 ">{title}</h1>
    </header>
  );
};
export default Header;
