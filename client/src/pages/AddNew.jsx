import React,{ useState }  from 'react'
import { addItem } from '../api';


const AddNew = () => {
  const [suceesMessage, setSuceesMessage] = useState([]);
  const [errors, setErrors] = useState([]);

  const initialItem = {
    name: '',
    description: '',
    category: '',
    city: '',
  };

  const [item, setItem] = useState(initialItem);

  const validateItem = (item) => {
    setErrors([]);
    setSuceesMessage("");
    let isValid = true;
    if (!item.name) {
      isValid = false;
      setErrors((prev) => [...prev, "Item name shouldn't be empty!"]);
    }
    if (!item.description) {
      isValid = false;
      setErrors((prev) => [...prev, "Item description shouldn't be empty!"]);
    }
    if (!item.category) {
      isValid = false;
      setErrors((prev) => [...prev, "Item category shouldn't be empty!"]);
    }
    if (!item.city) {
      isValid = false;
      setErrors((prev) => [...prev, "Item city shouldn't be empty!"]);
    }
  
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateItem(item)) {
        addItem(item);
  
      setSuceesMessage(
        `The "${item.name}" was successfully posted!`
      );
  
      setItem(initialItem);
    }
  };


  return (
    <div >
    Add New Item
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="add item name"
        value={item.name}
        onChange={e => {
          const { value } = e.target;
          setItem({...item, name: value });
          setErrors([]); 
          setSuceesMessage('');
        }} 
      />
      <input
        type='text'
        placeholder="add description"
        value={item.description}
        onChange={e => {
          const { value } = e.target;
          setItem({...item, description: value });
          setErrors([]); 
          setSuceesMessage('');
        }} 
      />

      <label>
        What Is The Category ?
      </label>
      <select
        value={item.category}
        onChange={e => {
          const { value } = e.target;
          setItem({...item, category: value });
          setErrors([]); 
          setSuceesMessage('');
        }} 
      >
        <option value=""> {""}Select a category</option>
        <option value="Electronics">Electronics</option>
        <option value="Tools">Tools</option>
        <option value="Camping">Camping</option>
        <option value="Garden">Garden</option>
        <option value="Renovation">Renovation</option>
      </select>
      <label >
        Choose Your City?
      </label>
      <select
        value={item.city}
        onChange={e => {
          const { value } = e.target;
          setItem({...item, city: value });
          setErrors([]); 
          setSuceesMessage('');
        }} 
      >
        <option value="">Cities</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Malmo">Malmo</option>
        <option value="Gothenburg">Gothenburg</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Lund">Lund</option>
      </select>

      <button type="submit" >
        Add
      </button>
      {suceesMessage && (
        <label className="success-label">
          <p>{suceesMessage}</p>
        </label>
      )}
      {errors && (
        <label className="error-label">
          {errors.map((error) => (
            <p>{error}</p>
          ))}
        </label>
      )}
    </form>
  </div>
  )
}

export default AddNew;
