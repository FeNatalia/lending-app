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
      console.log("Error: ", error);
    };
  };

  const handleUpload = (e) => {
    let base64String = "";
    const img = e.target.files[0];
    getBase64(img, (result) => {
      base64String = result;
      console.log(
        "🚀 ~ file: Profile.jsx ~ line 23 ~ Profile ~ base64String",
        base64String
      );
      setUser({ ...user, image: base64String });
    });
  };

  return (
    <div id="profile-page-wrapper">
      <SideBar />
      {isLogged && (
        <div id="profile-page">
          <section className="profile-page___form">
            <div className="mt-10 sm:mt-0">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST" className="form-profile">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="profile__label">
                      First name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="form-control formInput__profile"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="profile__label">
                      Email address
                    </label>
                    <input
                      type="text"
                      value={user.email}
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="form-control formInput__profile"
                    />
                  </div>

                  <div className="flex flex-col items-center"></div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="profile__label">
                      Location
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="form-control formInput__profile"
                    >
                      <option>Sweden</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Profile;
