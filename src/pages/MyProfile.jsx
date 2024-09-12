import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Mokles",
    image: assets.profile_pic,
    email: "moklesuddin@gmail.com",
    phone: "017XXXXXXXX",
    address: {
      line1: "57th Cross, Uttara,Dhaka",
      line2: "65th Cross, Uttara,Dhaka",
    },
    gender: "Male",
    dob: "2000-08-21",
  });

  const [isEdit, setIsEdite] = useState(true);
  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />

      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev.address,
                    line1: e.target.value,
                  }))
                }
                value={userData.address.line1}
              />
              <input
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev.address,
                    line2: e.target.value,
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p>
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p>Birthday</p>
          {isEdit ? (
            <input
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              type="date"
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
