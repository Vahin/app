import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from '../assets/icons/home.svg';
import AboutIcon from '../assets/icons/list.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import ArticlesIcon from '../assets/icons/articles.svg';

export interface NavbarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const NavbarItemsList: NavbarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    Icon: ArticlesIcon,
    authOnly: true,
  },
];
