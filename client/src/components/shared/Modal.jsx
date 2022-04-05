import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalProvider';

const Modal = ({ children }) => {
  const { visibility, setVisibility } = useContext(ModalContext);

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
      </div>
    </div>
  );
};

export default Modal;
