import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';

import Button from '../Button';
import Form from '../Form';
import InputGroup from '../InputGroup';
import TextareaGroup from '../TextareaGroup';
import Post from './Post';

import axios from '../../services/axios';

import { PostsProvider, usePosts } from '../../contexts/PostsContext';
import EmptyState from '../EmptyState';
import { PostsContainer } from './styles';

function AllPosts() {
  const [titleState, setTitleState] = useState('');
  const [contentState, setContentState] = useState('');
  const [isCreatePostLoadingState, setIsCreatePostLoadingState] = useState(false);

  const user = useAuthStore((state) => state.user);
  const { posts, isLoading, handleGetPosts } = usePosts();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setIsCreatePostLoadingState(true);

    try {
      const data = {
        username: user,
        title: titleState,
        content: contentState,
      };

      await axios.post('/careers/', data);
      toast.success('Post created successfully');
    } catch (err) {
      console.error(err);
    } finally {
      handleGetPosts('/careers/');
      setTitleState('');
      setContentState('');
      setIsCreatePostLoadingState(false);
    }
  };

  return (
    <PostsContainer>
      <Form title="What’s on your mind?" onSubmit={handleCreatePost}>
        <InputGroup
          label="Title"
          placeholder="Hello world"
          value={titleState}
          onChange={(e) => setTitleState(e.target.value)}
        />
        <TextareaGroup
          label="Content"
          placeholder="Content here"
          value={contentState}
          onChange={(e) => setContentState(e.target.value)}
        />
        <Button
          type="submit"
          text="Create"
          isDisabled={!titleState.trim() || !contentState.trim()}
          isLoading={isCreatePostLoadingState}
        />
      </Form>

      {posts &&
        posts.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            user={post.username}
            title={post.title}
            content={post.content}
            dateTime={post.created_datetime}
          />
        ))}

      {isLoading && (
        <>
          <Post />
          <Post />
          <Post />
        </>
      )}

      {posts.length === 0 && !isLoading && (
        <EmptyState />
      )}
    </PostsContainer>
  );
}

const Posts = () => {
  return (
    <PostsProvider>
      <AllPosts />
    </PostsProvider>
  );
};

export default Posts;
