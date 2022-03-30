// NPM Packages
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../state/ModalProvider';

// Project files
import InputField from '../components/InputField';
import Modal from '../components/Modal';
import fields from '../data/fields-signup.json';
import { createAccount } from '../scripts/authentication';
import { createDocumentWithId } from '../scripts/fireStore';

export const SignUp = () => {
  // Global state
  const { setVisibility } = useContext(ModalContext);

  // Local state
  const [form, setForm] = useState({});
  const [errorMassage, setErrorMessage] = useState('');

  // Methods
  const onChange = (key, value) => {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  };

  const onSuccess = async uid => {
    const newUser = { name: form.name, isAdmin: false };
    await createDocumentWithId('users', uid, newUser);
    setVisibility(true);
  };

  const onFailure = message => {
    setErrorMessage(message);
  };

  const onSubmit = async event => {
    event.preventDefault();
    setErrorMessage('');
    const account = await createAccount(form.email, form.password);

    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  };

  // Components
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
      </Modal>
      <div id="signup-page">
        <header>
          <div className="signup-logo">Logo</div>
          <div className="signin-link">
            <Link to="/login">Sign In</Link>
          </div>
        </header>
        <div className="signup-page-content">
          <div className="signup-form">
            <h2>Create an account to start using LendingApp</h2>
            <h3>Just this step and you're finished! We hate paperwork, too.</h3>
            <form onSubmit={onSubmit} className="form-sign">
              {InputFields}
              <p>{errorMassage}</p>
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
