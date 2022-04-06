import { useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem, getUser } from '../api';
import { useAuth } from '../contexts/AuthProvider';
import { ModalContext } from '../contexts/ModalProvider';
import Modal from '../components/shared/Modal';

const AddNew = () => {
  const [suceesMessage, setSuceesMessage] = useState([]);
  const [imgUploaded, setimgUploaded] = useState('');
  const [errors, setErrors] = useState([]);

  const { user, setUser, isLogged } = useAuth();
  const { setVisibility } = useContext(ModalContext);

  const navigate = useNavigate();

  const fetchUser = useCallback(async () => {
    const uid = localStorage.getItem('uid');
    if (uid) {
      const user = await getUser(uid);
      setUser(user);
    }
  }, [setUser]);

  useEffect(() => fetchUser(), [fetchUser]);

  const initialItem = {
    name: '',
    description: '',
    category: '',
    city: '',
    image: '',
    owner: user._id,
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
    if (!isLogged) {
      setVisibility(true);
    } else if (validateItem(item)) {
      addItem(item);
      setSuceesMessage(`The "${item.name}" was successfully posted!`);
      setItem(initialItem);
    }
  };

  const handleClick = e => {
    const { name } = e.target;
    setVisibility(false);
    if (name === 'login') {
      return navigate('/login');
    }
    return navigate('/signup');
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
    <>
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
                htmlFor="file-upload"
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
      <Modal>
        <h1>Please Login or Sign up</h1>
        <div className="flex flex-col justify-center mt-3 gap-1">
          <button
            className="self-center p-2 bg-red-600 text-white uppercase rounded hover:bg-red-800 transition-all duration-200"
            type="submit"
            name="login"
            onClick={handleClick}
          >
            <i className="fa-solid fa-key mr-2"></i>
            login
          </button>
          <button
            className="self-center p-2 bg-slate-600 text-white uppercase rounded hover:bg-slate-800 transition-all duration-200"
            type="submit"
            name="signup"
            onClick={handleClick}
          >
            <i className="fa-solid fa-user-plus mr-2"></i>
            signup
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddNew;
