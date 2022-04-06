import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalProvider';

const Popup = ({ children }) => {
  const { show, setShow } = useContext(ModalContext);

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className="overlay"
    >
      <div className="popup">
        <span className="popup__close" onClick={() => setShow(false)}>
          &times;
        </span>
        <div className="popup__content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
