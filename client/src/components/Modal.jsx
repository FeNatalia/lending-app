import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../state/ModalProvider';

const Modal = ({ children }) => {
  const { visibility, setVisibility } = useContext(ModalContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setVisibility(false);
    navigate('/login');
  };

  return (
    <div
      style={{
        visibility: visibility ? 'visible' : 'hidden',
        opacity: visibility ? '1' : '0',
      }}
      className="overlay"
    >
      <div className="popup">
        <span className="popup__close" onClick={() => setVisibility(false)}>
          &times;
        </span>
        <div className="popup__content">{children}</div>
        <button className="button--popup" type="submit" onClick={handleClick}>
          login
        </button>
      </div>
    </div>
  );
};

export default Modal;
