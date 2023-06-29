import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { articleRecommendationSchema } from '../types/articleRecommendationSchema';
import { fetchArticleRecommendation } from '../services/fetchArticleRecommendation';

const recommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getRecommendationState = recommendationAdapter.getSelectors<StateSchema>(
  (state) => state.articleRecommendation || recommendationAdapter.getInitialState(),
);

export const articleRecommendation = createSlice({
  name: 'articleRecommendation',
  initialState: recommendationAdapter.getInitialState<articleRecommendationSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  }),
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchArticleRecommendation.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(fetchArticleRecommendation.fulfilled, (state, action) => {
      state.isLoading = false;
      recommendationAdapter.setAll(state, action.payload);
    })
    .addCase(fetchArticleRecommendation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const {
  actions: articleRecommendationActions,
  reducer: articleRecommendationReducer,
} = articleRecommendation;
