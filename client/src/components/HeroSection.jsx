import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <header className="flex items-center justify-center bg-[url('/public/lend-borrow.jpg')] bg-gray-500 bg-blend-multiply bg-no-repeat bg-center bg-cover h-[calc(100vh-64px)]">
      <SearchBar homeSearch={true} />
    </header>
  );
};

export default HeroSection;
