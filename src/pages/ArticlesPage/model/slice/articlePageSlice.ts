import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleView } from '@/entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types/SortOrder/SortOrder';
import { ArticleType } from '@/entities/Article/model/types/article';
import { ArticlesPageSchema } from '../types/ArticlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesPageAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    limit: 1,
    hasMore: true,
    _inited: false,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: 'ALL',
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.SMALL ? 9 : 4;
      state._inited = true;
    },
  },
  extraReducers: (builder) => builder
    .addCase(fetchArticlesList.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;

      if (action.meta.arg.replace) {
        articlesPageAdapter.removeAll(state);
      }
    })
    .addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = action.payload.length >= (state.limit ?? 0);

      if (action.meta.arg.replace) {
        articlesPageAdapter.setAll(state, action.payload);
      } else {
        articlesPageAdapter.addMany(state, action.payload);
      }
    })
    .addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const {
  actions: articlesPageActions,
  reducer: articlesPageReducer,
} = articlesPageSlice;
