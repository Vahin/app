import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.linkbox}>
        <AppLink to={"/"} theme={AppLinkTheme.INVERTED}>
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
          О сайте
        </AppLink>
      </div>
    </nav>
  );
};
