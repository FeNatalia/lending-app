import React, { useState } from 'react';
import { addItem } from '../api';

const AddNew = () => {
  const [suceesMessage, setSuceesMessage] = useState([]);
  const [imgUploaded, setimgUploaded] = useState('');
  const [errors, setErrors] = useState([]);

  const initialItem = {
    name: '',
    description: '',
    category: '',
    city: '',
    image: '',
  };

  const [item, setItem] = useState(initialItem);

  const validateItem = item => {
    setErrors([]);
    setSuceesMessage('');
    let isValid = true;
    if (!item.name) {
      isValid = false;
      setErrors(prev => [...prev, "Name can't be empty!"]);
    }
    if (!item.description) {
      isValid = false;
      setErrors(prev => [...prev, "Description can't be empty!"]);
    }
    if (!item.category) {
      isValid = false;
      setErrors(prev => [...prev, 'Please select a category']);
    }
    if (!item.city) {
      isValid = false;
      setErrors(prev => [...prev, 'Please select a city']);
    }

    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateItem(item)) {
      addItem(item);

      setSuceesMessage(`The "${item.name}" was successfully posted!`);

      setItem(initialItem);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
    setErrors([]);
    setSuceesMessage('');
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  const handleUpload = e => {
    let base64String = '';
    const img = e.target.files[0];
    getBase64(img, result => {
      base64String = result;
      setItem({ ...item, image: base64String });
      setimgUploaded('Image is uploaded');
    });
  };

  return (
    <div className="addnew-page-wraper">
      <div className="addnew-page">
        <form onSubmit={handleSubmit} className="addnew-form">
          <header className="addnew-form__header">
            <h2>Add an item to LenderApp</h2>
            <h3>Fill out the form to add your item!</h3>
          </header>
          <section className="addnew-form__body">
            <input
              type="text"
              className="addnew-form__input"
              id="addnew-form__name"
              name="name"
              placeholder="Item name"
              value={item.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="addnew-form__input"
              id="addnew-form__description"
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={handleChange}
            />

            <label className="addnew-form__label" id="addnew-form__category">
              What is the category ?
            </label>
            <select
              className="addnew-form__select"
              value={item.category}
              name="category"
              onChange={handleChange}
            >
              <option value=""> {''}Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Tools">Tools</option>
              <option value="Camping">Camping</option>
              <option value="Garden">Garden</option>
              <option value="Renovation">Renovation</option>
            </select>
            <label className="addnew-form__label" id="addnew-form__city">
              What is your location?
            </label>
            <select
              className="addnew-form__select"
              value={item.city}
              name="city"
              onChange={handleChange}
            >
              <option value="">Select a city</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Malmo">Malmo</option>
              <option value="Gothenburg">Gothenburg</option>
              <option value="Uppsala">Uppsala</option>
              <option value="Lund">Lund</option>
            </select>
            <input
              id="file-upload"
              className="hidden"
              type="file"
              onChange={handleUpload}
            />
            <label
              for="file-upload"
              className="border border-solid inline-block border-gray-700 bg-opacity-70 rounded-md bg-slate-100 px-3 py-1 cursor-pointer mb-6"
            >
              <i className="fa fa-cloud-upload mr-1 text-lg"></i>
              <span className="text-base font-bold"> Upload Picture ...</span>
              {item.image && imgUploaded && (
                <span className="text-green-700 ml-8 italic">
                  {imgUploaded}
                </span>
              )}
            </label>
            <div className="addnew-form__button-wrapper">
              <button className="addnew-form__button" type="submit">
                Add
              </button>
            </div>
            {suceesMessage && (
              <label className="addnew-form__success-label">
                <p>{suceesMessage}</p>
              </label>
            )}
            {errors && (
              <label className="addnew-form__error-label">
                {errors.map(error => (
                  <p>{error}</p>
                ))}
              </label>
            )}
          </section>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
