import {
  GET_NAME_CATEGORY,
  GET_POSTS,
  GET_POSTS_CATEGORY,
  SET_POSTS,
} from "../types";

const GalleryReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postsFilter: state.posts,
      };
    case SET_POSTS:
      return { ...state, posts: action.payload, postsFilter: action.payload };
    case GET_POSTS_CATEGORY:
      return {
        ...state,
        postsFilter: state.posts.filter(
          (post) => post.category == action.payload
        ),
      };
    case GET_NAME_CATEGORY:
      return {
        ...state,
        categories: state.posts.map((post) => post.category),
      };
    default:
      return state;
  }
};

export default GalleryReducer;
