import {
  GET_NAME_CATEGORY,
  GET_POSTS,
  GET_POSTS_CATEGORY,
  GET_POST_WITH_PAGINATION,
  SET_POSTS,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
} from "../types";

const GalleryReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        previous: 0,
        next: 5,
        postsFilter: state.posts,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsFilter: action.payload,
        categories: action.payload.map((post) => post.category),
      };
    case GET_POSTS_CATEGORY:
      return {
        ...state,
        previous: 0,
        next: 5,
        postsFilter: state.posts.filter(
          (post) => post.category == action.payload
        ),
      };
    case GET_NAME_CATEGORY:
      return {
        ...state,
        categories: state.posts.map((post) => post.category),
      };
    case GET_POST_WITH_PAGINATION:
      return {
        ...state,
        postsPage: state.postsFilter.filter(
          (item, index) => index >= state.previous && index <= state.next
        ),
      };
    case SET_PREVIOUS_PAGE:
      return {
        ...state,
        previous: action.payload,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        next: action.payload,
      };
    default:
      return state;
  }
};

export default GalleryReducer;
