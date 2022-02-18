import Link from "next/link";

interface HeaderProps {
  title: string;
  goBack?: string;
}

const Header = ({ title, goBack }: HeaderProps) => {
  return (
    <header className="bg-primary text-white  text-center">
      {goBack && (
        <Link href={goBack}>
          <a className="absolute left-3 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </Link>
      )}
      <h1 className="text-2xl p-3 ">{title}</h1>
    </header>
  );
};
export default Header;
