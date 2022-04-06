import { useCallback, useEffect } from "react";
import { getUser } from "../api";
import SideBar from "../components/sidebar/SideBar";
import { useAuth } from "../contexts/AuthProvider";

export const Profile = () => {
  const { user, setUser, isLogged } = useAuth();

  const fetchUser = useCallback(async () => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      const user = await getUser(uid);
      setUser(user);
    }
  }, [setUser]);

  useEffect(() => fetchUser(), [fetchUser]);
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
      console.log(
        '🚀 ~ file: Profile.jsx ~ line 23 ~ Profile ~ base64String',
        base64String,
      );
      setUser({ ...user, image: base64String });
    });
  };

  return (
    <div id="profile-page-wrapper">
      <SideBar />
      {isLogged && (
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          value={user.name}
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          value={user.email}
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <div className="grid-cols-2 mt-2">
                          <label
                            for="file-upload"
                            className="border border-solid inline-block border-gray-700 px-3 py-2 cursor-pointer"
                          >
                            <i className="fa fa-cloud-upload mr-1 text-lg"></i>
                            <span className="text-sm text-left">
                              {' '}
                              Upload Avatar
                            </span>
                          </label>
                          <input
                            id="file-upload"
                            className="hidden"
                            type="file"
                            onChange={handleUpload}
                          />
                        </div>
                      </div>
                      {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
