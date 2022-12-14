import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";
import UpcomingPage from './pages/UpcomingPage'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorPage from './pages/actorDetailsPage'

import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";
import MovieProvider from "./moviesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <AuthProvider>
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/movies/upcoming" element={<UpcomingPage />} />
                <Route path="/actor/:id" element={<ActorPage />} />
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              </Route>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </AuthProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);