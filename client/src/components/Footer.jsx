import { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();
      const today = date.toLocaleString();
      setTime(today);
    }, 0);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <p className="footer__copyright">© Copyright {time.substring(6, 10)}</p>
      <p className="footer__text">All Rights Reserved</p>
      <p className="footer__date">{time}</p>
    </footer>
  );
};
export default Footer;
