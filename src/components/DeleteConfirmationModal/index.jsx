import PropTypes from 'prop-types';
import Button from '../Button';
import Form from '../Form';
import Modal from '../Modal';
import colors from '../../styles/colors';

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm, isLoading }) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <Form title="Are you sure you want to delete this item?">
        <span>
          <Button text="Cancel" onClick={onCancel} />
          <Button
            text="Delete"
            style={{
              backgroundColor: colors.quaternary,
              border: `1px solid ${colors.quaternary}`,
            }}
            isLoading={isLoading}
            isDisabled={isLoading}
            onClick={onConfirm}
          />
        </span>
      </Form>
    </Modal>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default DeleteConfirmationModal;
