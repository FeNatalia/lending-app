import { Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { PlusIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useAuth } from '../contexts/AuthProvider';
import { ModalContext } from '../contexts/ModalProvider';
import logo from '../static/logo.svg';
import logoDesktop from '../static/logo-text-w.svg';
import Popup from './shared/Popup';

const navigation = [
  { name: 'Feed', to: '/feed', current: false },
  { name: 'About', to: '/about', current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Navigation = () => {
  const { setIsLogged, setUser, isLogged, user } = useAuth();
  const { setShow } = useContext(ModalContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setShow(false);
    localStorage.setItem('uid', '');
    setUser({});
    setIsLogged(false);
    navigate('/');
  };

  return (
    <>
      <Popup>
        <h1>You are about to sign out now</h1>
        <div className="flex justify-center mt-3">
          <button
            className="p-2 bg-red-600 text-white uppercase rounded hover:bg-red-800 transition-all duration-200"
            type="submit"
            onClick={handleLogout}
          >
            confirm
          </button>
        </div>
      </Popup>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to="/">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-10 w-auto"
                        src={logo}
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src={logoDesktop}
                        alt="Workflow"
                      />
                    </div>
                  </Link>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link to="/add-item">
                    <button
                      type="button"
                      className="bg-green-700 p-1 rounded-full text-white hover:text-green-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      {/* Lend/Borrow */}

                      <span className="sr-only">Lend/Borrow an Item</span>
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </Link>
                  {!isLogged && (
                    <button
                      onClick={() => navigate('/login')}
                      className="ml-2 bg-green-700 p-2 rounded-full text-white hover:text-green-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <i className="fa-solid fa-user mr-1"></i>Login
                    </button>
                  )}
                  {/* Profile dropdown */}
                  {isLogged && (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={
                              user.avatar
                                ? user.avatar
                                : 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
                            }
                            alt={user.name}
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
                                )}
                                onClick={e => {
                                  e.preventDefault();
                                  setShow(true);
                                }}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map(item => (
                  <Disclosure.Button
                    key={Math.random().toString(36).substring(2, 5)}
                    className="flex"
                  >
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navigation;
