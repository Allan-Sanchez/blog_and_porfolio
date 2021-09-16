import React, { useReducer } from "react";
import GalleryContext from "./GalleryContext";
import GalleryReducer from "./GalleryReducer";
import {
  SET_POSTS,
  GET_POSTS_PAGE,
  GET_POSTS_CATEGORY,
  GET_POSTS,
  GET_NAME_CATEGORY,
} from "../types";

const GalleryState = ({ children }) => {
  const initalState = {
    posts: [],
    postsFilter: [],
    prevent: 6,
    next: 6,
    categories: [],
  };

  const [state, dispatch] = useReducer(GalleryReducer, initalState);

  const setPosts = (posts) => {
    dispatch({
      type: SET_POSTS,
      payload: posts,
    });
  };

  const getPostPage = (page) => {
    dispatch({
      type: GET_POSTS_PAGE,
      payload: page,
    });
  };

  const getPostWithCategory = (category) => {
    dispatch({
      type: GET_POSTS_CATEGORY,
      payload: category,
    });
  };

  const getAllPosts = () => {
    dispatch({
      type: GET_POSTS,
    });
  };

  const getNameCategories = () => {
    dispatch({
      type: GET_NAME_CATEGORY,
    });
  };

  return (
    <GalleryContext.Provider
      value={{
        postsG: state.posts,
        postsFilter: state.postsFilter,
        categories: state.categories,
        setPosts,
        getPostWithCategory,
        getAllPosts,
        getNameCategories,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryState;
