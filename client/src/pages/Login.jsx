// NPM Packages
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Project files
import InputField from '../components/InputField';
import fields from '../data/fields-login.json';
import { signIn } from '../scripts/authentication';
import { getDocument } from '../scripts/fireStore';
import { useAuth } from '../state/AuthProvider';

const Login = () => {
  // Global state
  const { setUser, setIsLogged } = useAuth();
  const navigate = useNavigate();

  // Local state
  const [form, setForm] = useState({});
  const [errorMassage, setErrorMessage] = useState('');

  // Methods
  const onChange = (key, value) => {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  };

  const onSubmit = async event => {
    event.preventDefault();
    setErrorMessage('');
    const account = await signIn(form.email, form.password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  };

  const onSuccess = async uid => {
    const document = await getDocument('users', uid);
    setUser(document);
    setIsLogged(true);
    localStorage.setItem('uid', uid);
    navigate('/');
  };

  const onFailure = message => {
    setErrorMessage(message);
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
    <div id="signin-page">
      <header>Logo</header>
      <div className="auth-content">
        <div className="auth-form">
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            {InputFields}
            <p>{errorMassage}</p>
            <button>Sign In</button>
            <small>New to LenderApp?</small>
            <Link to="/signup">Sign up now</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
