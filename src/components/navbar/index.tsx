import QuickWait from "../../assets/QuickWait.svg";
import Subtract from "../../assets/Subtract.svg";
import map from "../../assets/map-svgrepo-com.svg";
import news from "../../assets/newspaper-svgrepo-com.svg";
import stylebar from "../../assets/stylebar.svg";
import light from '../../assets/light.svg'
import {
  NavBarMenu,
  NavContainer,
  LogoHome,
  LinkToHome,
  HomeItem,
  NavBarListItem,
  NavItem,
  CustomLink,
} from "./styles";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";
import UserThumbNail from "./userAvatar";

import * as Sentry from "@sentry/react";

function ActiveRoute({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <CustomLink
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </CustomLink>
      {match && ""}
    </div>
  );
}

function NavBar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth")));
  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("auth")));
    }
  }, [user]);

  return (
    <>
      <NavBarMenu>
        <NavContainer>
          <LogoHome>
            <LinkToHome to="/">
              <HomeItem>
                <img src={Subtract} alt="logo quick wait" />
                <img className="-mx-3.5" src={QuickWait} alt="logoquick wait" />
              </HomeItem>
            </LinkToHome>
          </LogoHome>
          <NavBarListItem>

            <NavItem id="hospitais">
              <ActiveRoute to="/">
                <img src={map} alt="hospitais" />
                <span className="ml-2">Hospitais</span>
              </ActiveRoute>
            </NavItem>
            <NavItem id="noticias">
              <ActiveRoute to="/noticias">
                <img src={news} alt="noticias" className="text-cyan-600" />
                <span className="ml-2">Noticias</span>
              </ActiveRoute>
            </NavItem>
            <NavItem id="sobre">
              <ActiveRoute to="/sobre">
                <img src={light} alt="sobre" className="text-cyan-600" />
                <span className="ml-2">Sobre</span>
              </ActiveRoute>
            </NavItem>
            <li className="nav-item h-full -m-1">
              <img src={stylebar} alt="style content" />
            </li>
            <li className="nav-item h-full ">
              {user ? (
                <UserThumbNail>{{ userName: user.usuario }}</UserThumbNail>
              ) : (
                <Link to="/user/login">
                  <button
                    type="button"
                    className="text-sm rounded-lg shadow-md py-2 px-6 font-semibold bg-white text-gray-500 "
                  >
                    Entrar
                  </button>
                </Link>
              )}
            </li>

          </NavBarListItem>
        </NavContainer>
      </NavBarMenu>
    </>
  );
}

export default Sentry.withProfiler(NavBar);
