import { bottombarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            to={link.route}
            key={link.label}
            className={cn(
              "flex-center flex-col gap-1 p-2 transition",
              isActive && "bg-primary-500 rounded-[10px]"
            )}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              className={cn("w-[16px] h-[16px]", isActive && "invert-white")}
            />
            <p className="tiny-medium text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
