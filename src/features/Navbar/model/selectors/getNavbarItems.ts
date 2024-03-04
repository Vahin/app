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
import { toggleFeatures } from '@/shared/lib/features';

export const getNavbarItems = createSelector(getUserAuthData, (authData) => {
  const navbarItemsList: NavbarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Главная',
      Icon: toggleFeatures({
        name: 'isAppRedisigned',
        on: () => HomeIcon,
        off: () => HomeIconDeprecated,
      }),
    },
    {
      path: getRouteAbout(),
      text: 'О сайте',
      Icon: toggleFeatures({
        name: 'isAppRedisigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
    },
  ];

  if (authData) {
    navbarItemsList.push(
      {
        path: getRouteProfile(authData.id),
        text: 'Профиль',
        Icon: toggleFeatures({
          name: 'isAppRedisigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Статьи',
        Icon: toggleFeatures({
          name: 'isAppRedisigned',
          on: () => ArticlesIcon,
          off: () => ArticlesIconDeprecated,
        }),
        authOnly: true,
      },
    );
  }

  return navbarItemsList;
});
