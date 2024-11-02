import { Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="h-[80px] flex items-center px-5 mx-5 b bg-secondary-bg rounded-md shadow-lg shadow-secondary-bg">
      <div>
        <Link
          to="/"
          className="text-3xl bg-yellow-400 p-3 rounded-md font-bold"
        >
          StarWeb
        </Link>
      </div>
      <ul className="flex items-center gap-6 mx-auto"></ul>
    </footer>
  );
};
