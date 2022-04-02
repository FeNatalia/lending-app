import background from '../static/lend-borrow.jpg';
import SearchBar from './SearchBar';

const HeroSection = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('${background}')`,
    backgroundPosition: 'center',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <header className="hero" style={styles}>
      <SearchBar homeSearch={true} />
    </header>
  );
};

export default HeroSection;
