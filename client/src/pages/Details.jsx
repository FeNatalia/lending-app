import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCallback, useEffect, useState } from "react";
import { getUser } from "../api";

export const Details = () => {
  let { state } = useLocation();
  let navigate = useNavigate();
  const goBackButton = () => navigate('/feed');
  let [owner, setOwner] = useState({})

  const fetchUser = useCallback(async () => {
    const itemOwner = await getUser(state.item.owner);
    setOwner(itemOwner);
  }, [setOwner, state.item.owner]);

  useEffect(() => fetchUser(), [fetchUser]);

  let itemPosition;
  switch (state.item.city) {
    case 'Stockholm':
      itemPosition = [59.334591, 18.06324];
      break;
    case 'Malmo':
      itemPosition = [55.607075, 13.002716];
      break;
    case 'Gothenburg':
      itemPosition = [57.70887, 11.97456];
      break;
    case 'Uppsala':
      itemPosition = [59.858227, 17.632252];
      break;
    case 'Lund':
      itemPosition = [55.70466, 13.191007];
      break;
    default:
      itemPosition = [62.0, 15.0];
      break;
  }

  return (
    <div className="details">
      <section className='details__upper'>
        <div className="details__image">
          <img src={state.item.image} alt={state.item.name} />
        </div>
        <div id="map">
          <MapContainer center={itemPosition} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={itemPosition}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
      <section className='details__lower'>
        <article className="details__body">
          <div className='details__body-container'>
            <p className='published-date'>Published on: {state.item.createdAt.split('T')[0]}</p>
            <h1>{state.item.name}</h1>
            <h2>{state.item.city}</h2>
            <h3>Description:</h3>
            <p>{state.item.description}</p>
          </div>
        </article>
        <article className="details__owner">
          <div className='owner__wrapper'>
            <h3>Posted by:</h3>
            <div className="owner__avatar">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <p>{owner.name}</p>
            </div>
            <div className='details__button'>
              <a href={`mailto:${owner.email}`}>Contact {owner.name}</a>
            </div>
          </div>
        </article>
      </section>
      <div className="details___button">
        <button className="btn--primary" onClick={() => goBackButton()}>
          Go back
        </button>
      </div>
    </div>
  );
};
