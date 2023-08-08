import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./modeSwitch";

export default function NavbarDefault() {
  const navList = (
    <>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" className="p-1 font-normal">
          <DarkModeSwitch />
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-normal">
          <Link to={`/About`}>About</Link>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-normal">
          <Link to={`/Works`}>Work</Link>
        </Typography>
      </ul>
    </>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 sticky top-0 flex">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
          <Link to={`/`}>Home</Link>
        </Typography>
        <div className="flex">{navList}</div>
      </div>
    </Navbar>
  );
}
