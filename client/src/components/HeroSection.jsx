import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <header className="flex items-center bg-[url('/public/lend-borrow.jpg')] bg-gray-500 bg-blend-multiply bg-no-repeat bg-center h-[calc(100vh-64px)]">
      <SearchBar homeSearch={true} />
    </header>
  );
};

export default HeroSection;
