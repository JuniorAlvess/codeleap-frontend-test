import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from '../services/axios';
import toast from 'react-hot-toast';

const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

// eslint-disable-next-line react/prop-types
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const fetchPosts = async (url, append = false) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setPosts(prev => append ? [...prev, ...data.results] : data.results);
      setNextPageUrl(data.next);
    } catch (err) {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetPosts = useCallback(() => {
    fetchPosts('/careers/');
  }, []);

  const getMorePosts = useCallback(() => {
    if (!isLoading && nextPageUrl && isNearBottom()) {
      fetchPosts(nextPageUrl, true);
    }
  }, [isLoading, nextPageUrl]);

  const isNearBottom = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    return scrollHeight - (scrollTop + clientHeight) < 200;
  };

  useEffect(() => {
    handleGetPosts();
  }, [handleGetPosts]);

  useEffect(() => {
    if (!nextPageUrl) return;

    window.addEventListener('scroll', getMorePosts);
    return () => window.removeEventListener('scroll', getMorePosts);
  }, [getMorePosts, nextPageUrl]);

  return (
    <PostsContext.Provider value={{ posts, isLoading, handleGetPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
