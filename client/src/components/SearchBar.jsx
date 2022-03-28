const SearchBar = () => {
  return (
    <form>
      <input type="text" name="search" placeholder="what are you searching?" />
      <select>
        <option value="">Cities</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Malmo">Malmo</option>
        <option value="Gothenburg">Gothenburg</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Lund">Lund</option>
      </select>
    </form>
  )
}
export default SearchBar;
