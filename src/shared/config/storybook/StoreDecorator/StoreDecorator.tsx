import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 'features/ArticleDetailsComments/model/slice/articleDetailsCommentsSlice';
import { addCommentFormReducer } from 'entities/addCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'features/editableProfileCard';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  articlePage: articlesPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
  <StoreProvider
    initialState={state as StateSchema}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <Story />
  </StoreProvider>
);
