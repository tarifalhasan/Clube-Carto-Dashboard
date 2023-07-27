import SearchBar from "../ui/search";
const Mesbar = () => {
  return (
    <div>
      <h3 className=" py-2 text-lg sm:text-xl font-semibold  text-text-green">
        Mês
      </h3>
      <SearchBar      
        type="text"
        placeholder="Pesquisar mês"/>
    </div>
  );
};

export default Mesbar;
