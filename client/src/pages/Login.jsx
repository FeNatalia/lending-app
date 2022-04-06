import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import fields from '../data/fields-login.json';
import { signIn, signInWithGoogle } from '../auth/authentication';
import { useAuth } from '../contexts/AuthProvider';
import { addUser } from '../api';

const Login = () => {
  const { setIsLogged } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [errorMassage, setErrorMessage] = useState('');

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
    setIsLogged(true);
    localStorage.setItem('uid', uid);
    navigate('/profile');
  };

  const onGoogleSignIn = async user => {
    const newUser = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      avatar: user.photoURL,
    };
    await addUser(newUser);
    setIsLogged(true);
    localStorage.setItem('uid', user.uid);
    navigate('/profile');
  };

  const onFailure = message => {
    setErrorMessage(message);
  };

  const handleGoogle = async () => {
    setErrorMessage('');
    const account = await signInWithGoogle();
    account.isLogged ? onGoogleSignIn(account) : onFailure(account);
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
    <div id="signin-page">
      <div className="auth-content">
        <div className="auth-form">
          <h1>Sign In</h1>
          <form id="signin-form" onSubmit={onSubmit}>
            {InputFields}
            <p>{errorMassage}</p>
            <button>
              {' '}
              <i className="fa-solid fa-envelope mr-3"></i>Sign in with Email
            </button>
            <div>
              <button className="button" onClick={handleGoogle}>
                <i className="fab fa-google mr-3"></i>Sign in with Google
              </button>
            </div>
            <small>New to LenderApp?</small>
            <Link to="/signup">Sign up now</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
