import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIcon from '../../assets/icons/home.svg';
import AboutIcon from '../../assets/icons/list.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import ArticlesIcon from '../../assets/icons/articles.svg';
import { NavbarItemType } from '../types/navbar';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getNavbarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const navbarItemsList: NavbarItemType[] = [
      {
        path: getRouteMain(),
        text: 'Главная',
        Icon: HomeIcon,
      },
      {
        path: getRouteAbout(),
        text: 'О сайте',
        Icon: AboutIcon,
      },

    ];

    if (authData) {
      navbarItemsList.push(
        {
          path: getRouteProfile(authData.id),
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          text: 'Статьи',
          Icon: ArticlesIcon,
          authOnly: true,
        },
      );
    }

    return navbarItemsList;
  },
);
