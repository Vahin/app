import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/RoutePath';
import HomeIcon from '../../assets/icons/home.svg';
import AboutIcon from '../../assets/icons/list.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import ArticlesIcon from '../../assets/icons/articles.svg';
import { NavbarItemType } from '../types/navbar';

export const getNavbarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const navbarItemsList: NavbarItemType[] = [
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

    ];

    if (authData) {
      navbarItemsList.push(
        {
          path: RoutePath.profile + authData.id,
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
      );
    }

    return navbarItemsList;
  },
);
