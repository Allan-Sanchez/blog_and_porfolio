import React, { useReducer } from "react";
import GalleryContext from "./GalleryContext";
import GalleryReducer from "./GalleryReducer";
import {
  SET_POSTS,
  GET_POSTS_PAGE,
  GET_POSTS_CATEGORY,
  GET_POSTS,
  GET_NAME_CATEGORY,
  GET_POST_WITH_PAGINATION,
  SET_PREVIOUS_PAGE,
  SET_NEXT_PAGE,
} from "../types";

const GalleryState = ({ children }) => {
  const initalState = {
    // global posts all
    posts: [],
    //array with categories
    categories: [],
    // post filter with category
    postsFilter: [],
    // post filter with pagination
    postsPage: [],
    //prevent page
    previous: 0,
    //next page
    next: 5,
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

  const getPostwithPagination = () => {
    dispatch({
      type: GET_POST_WITH_PAGINATION,
    });
  };

  const setPreviousPage = (numberPage) => {
    dispatch({
      type: SET_PREVIOUS_PAGE,
      payload: numberPage,
    });
  };

  const setNextPage = (numberPage) => {
    dispatch({
      type: SET_NEXT_PAGE,
      payload: numberPage,
    });
  };

  return (
    <GalleryContext.Provider
      value={{
        postsG: state.posts,
        postsFilter: state.postsFilter,
        categories: state.categories,
        postsPage: state.postsPage,
        previous: state.previous,
        next: state.next,
        setPosts,
        getPostWithCategory,
        getAllPosts,
        getNameCategories,
        getPostwithPagination,
        setPreviousPage,
        setNextPage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryState;
