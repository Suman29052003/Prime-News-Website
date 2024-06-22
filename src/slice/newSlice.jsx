// src/slice/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async ({ category, page }) => {
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  const apiKey = 'bc30c0f8aae848838f8fbc055cadbda2';
  const country = 'us'; // or any other country code
  try {
    const response = await axios.get(`${apiUrl}?country=${country}&category=${category}&page=${page}&apiKey=${apiKey}`);
    console.log('API Response:', response.data);
    return response.data.articles;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    page: 1,
    category: 'general'
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(article => article.url !== action.payload.url);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        console.log('Updated state articles:', state.articles); // Add this line
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addFavorite, removeFavorite, setPage, setCategory } = newsSlice.actions;

export default newsSlice.reducer;
