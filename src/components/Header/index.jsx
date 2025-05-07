import { useNavigate } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';

import { StyledHeaderWrapper, StyledHeaderTitle } from './styles';
import { useAuthStore } from '../../store/authStore';
import colors from '../../styles/colors';

const Header = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderTitle>CodeLeap Network</StyledHeaderTitle>
      <IoMdLogOut
        size={24}
        color={colors.primary}
        onClick={handleLogout}
        aria-label="Logout"
        role="button"
        style={{ cursor: 'pointer' }}
      />
    </StyledHeaderWrapper>
  );
};

export default Header;
