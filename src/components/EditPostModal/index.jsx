import PropTypes from 'prop-types';
import colors from '../../styles/colors';
import Modal from '../Modal';
import Form from '../Form';
import InputGroup from '../InputGroup';
import TextareaGroup from '../TextareaGroup';
import Button from '../Button';

const EditPostModal = ({
  isOpen,
  title,
  content,
  setTitleEditState,
  setContentEditState,
  onCancel,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const isDisabled = !title.trim() && !content.trim();

  return (
    <Modal>
      <Form title="Edit item" onSubmit={onSubmit}>
        <InputGroup
          label="Title"
          placeholder="Hello world"
          value={title}
          onChange={(e) => setTitleEditState(e.target.value)}
        />
        <TextareaGroup
          label="Content"
          placeholder="Content here"
          value={content}
          onChange={(e) => setContentEditState(e.target.value)}
        />
        <span>
          <Button text="Cancel" onClick={onCancel} />
          <Button
            type="submit"
            text="Save"
            style={{
              backgroundColor: colors.tertiary,
              border: `1px solid ${colors.tertiary}`,
            }}
            isDisabled={isDisabled}
            onClick={!isDisabled ? onSubmit : undefined}
          />
        </span>
      </Form>
    </Modal>
  );
};

EditPostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  setTitleEditState: PropTypes.func.isRequired,
  setContentEditState: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditPostModal;
