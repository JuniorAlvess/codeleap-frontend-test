import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { usePosts } from '../../../contexts/PostsContext';
import { useAuthStore } from '../../../store/authStore';

import toast from 'react-hot-toast';

import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

import axios from '../../../services/axios';
import colors from '../../../styles/colors';
import DeleteConfirmationModal from '../../DeleteConfirmationModal';
import EditPostModal from '../../EditPostModal';
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostParagraph,
} from './styles';
import getTimeDifference from '../../../utils/getTimeDifference';

// eslint-disable-next-line react/prop-types
const Post = ({ user, id, title, content, dateTime }) => {
  const [isOpenDeletePostModal, setIsOpenDeletePostModal] = useState(false);
  const [isOpenEditPostModal, setIsOpenEditPostModal] = useState(false);
  const [titleEditState, setTitleEditState] = useState('');
  const [contentEdit, setContentEditState] = useState('');
  const [isDeletePostLoadingState, setIsDeletePostLoadingState] = useState(false);

  const username = useAuthStore((state) => state.user);
  const { handleGetPosts, isLoading } = usePosts();

  const targetDate = new Date(dateTime);

  const handleEditPost = async (e) => {
    e.preventDefault();
    if (user !== username) throw 'You are not authorized to edit this post.';

    if (!titleEditState.trim() && !contentEdit.trim())
      throw 'Please fill in the title or content field.';

    const data = {
      title: titleEditState || title,
      content: contentEdit || content,
    };

    try {
      await axios.patch(`/careers/${id}/`, data);
      toast.success('Post updated successfully!');
      setIsOpenEditPostModal(false);
      handleGetPosts('/careers/');
    } catch (err) {
      toast.error(err);
      setIsOpenEditPostModal(false);
    }
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    if (user !== username) throw 'You are not authorized to delete this post.';

    setIsDeletePostLoadingState(true);
    try {
      await axios.delete(`/careers/${id}/`);
      toast.success('Post deleted successfully!');
      setIsOpenDeletePostModal(false);
      handleGetPosts('/careers/');
    } catch (err) {
      toast.error(err);
      setIsOpenDeletePostModal(false);
    } finally {
      setIsDeletePostLoadingState(false);
    }
  };

  return (
    <PostContainer>
      <PostHeader>
        <h2>{isLoading ? <Skeleton width={70} /> : title}</h2>
        {username === user && (
          <span>
            <MdDeleteForever
              color={colors.primary}
              onClick={() => setIsOpenDeletePostModal(true)}
            />
            <BiEdit color={colors.primary} onClick={() => setIsOpenEditPostModal(true)} />
          </span>
        )}
      </PostHeader>
      <PostContent>
        {user && (
          <span>
            <strong>{isLoading ? <Skeleton width={50} /> : `@${user}`}</strong>
            <b>{isLoading ? <Skeleton width={30} /> : getTimeDifference(targetDate)}</b>
          </span>
        )}

        <PostParagraph>
          {isLoading ? <Skeleton count={3} containerClassName="post-skeleton" /> : content}
        </PostParagraph>
      </PostContent>

      <DeleteConfirmationModal
        isOpen={isOpenDeletePostModal}
        onCancel={() => setIsOpenDeletePostModal(false)}
        onConfirm={handleDeletePost}
        isLoading={isDeletePostLoadingState}
      />

      <EditPostModal
        isOpen={isOpenEditPostModal}
        title={titleEditState}
        content={contentEdit}
        setTitleEditState={setTitleEditState}
        setContentEditState={setContentEditState}
        onCancel={() => setIsOpenEditPostModal(false)}
        onSubmit={handleEditPost}
      />
    </PostContainer>
  );
};

export default Post;
