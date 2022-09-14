import axios from "axios";
import { startLoading, postsFetched } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const offset = getState().feed.posts.length;
    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=5`
    );
    console.log("response", response);
    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    console.log(e.message);
  }
};

//ESTE ES UN EJEMPLO  DE MATIAS PARA HACER EL THUNK QUE HICE ARRIBA PORQUE YO LO HACIA DE OTRA MANERA Y ME DABA ERROR, HACERLO ASI

export const thunkSkeleton = (id) => async (dispatch, getState) => {
  try {
    // here goes your fetching logic and state updates.
  } catch (e) {
    console.log(e.message);
  }
};
