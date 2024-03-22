import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIconDeprecated from '../../assets/icons/home.svg';
import AboutIconDeprecated from '../../assets/icons/list.svg';
import ProfileIconDeprecated from '../../assets/icons/profile.svg';
import ArticlesIconDeprecated from '../../assets/icons/articles.svg';

import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';

import { NavbarItemType } from '../types/navbar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

export const getNavbarItemsDeprecated = createSelector(
  getUserAuthData,
  (authData) => {
    const navbarItemsList: NavbarItemType[] = [
      {
        path: getRouteMain(),
        text: 'Главная',
        Icon: HomeIconDeprecated,
      },
      {
        path: getRouteAbout(),
        text: 'О сайте',
        Icon: AboutIconDeprecated,
      },
    ];

    if (authData) {
      navbarItemsList.push(
        {
          path: getRouteProfile(authData.id),
          text: 'Профиль',
          Icon: ProfileIconDeprecated,
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          text: 'Статьи',
          Icon: ArticlesIconDeprecated,
          authOnly: true,
        },
      );
    }

    return navbarItemsList;
  },
);

export const getNavbarItems = createSelector(getUserAuthData, (authData) => {
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

  if (authData?.id) {
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
});
