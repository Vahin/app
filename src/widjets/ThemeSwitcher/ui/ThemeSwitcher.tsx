import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button/Button";
import { ThemeIcon } from "shared/ThemeIcon";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      <ThemeIcon className={cls.icon} />
    </Button>
  );
};
