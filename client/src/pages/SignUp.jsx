import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ModalContext } from '../contexts/ModalProvider';
import InputField from '../components/InputField';
import Modal from '../components/shared/Modal';
import fields from '../data/fields-signup.json';
import { createAccount } from '../auth/authentication';
import { addUser } from '../api';

export const SignUp = () => {
  const { setVisibility } = useContext(ModalContext);
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onChange = (key, value) => {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  };

  const onSuccess = async uid => {
    const newUser = { name: form.name, email: form.email, uid };
    await addUser(newUser);
    setVisibility(true);
  };

  const onFailure = message => {
    setErrorMessage(message);
  };

  const onSubmit = async event => {
    event.preventDefault();
    setErrorMessage('');
    setForm({});
    const account = await createAccount(form.email, form.password);

    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  };

  const handleClick = () => {
    setVisibility(false);
    navigate('/login');
  };

  const InputFields = fields.map(item => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <>
      <Modal>
        <h2> Your account is successfully created</h2>
        <h1>Please Login Now</h1>
        <div className="flex justify-center mt-3">
          <button
            className="p-2 bg-red-600 text-white uppercase rounded hover:bg-red-800 transition-all duration-200"
            type="submit"
            onClick={handleClick}
          >
            <i className="fa-solid fa-key mr-2"></i>
            login
          </button>
        </div>
      </Modal>
      <div id="signup-page">
        <div className="auth-content">
          <div className="auth-form">
            <h2>Create an account to start using LendingApp</h2>
            <form id="signup-form" onSubmit={onSubmit} className="form-sign">
              {InputFields}
              <p>{errorMessage}</p>
              <button>Sign up</button>
              <h3>Already have an account? </h3>
              <Link to="/login">Sign In</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
