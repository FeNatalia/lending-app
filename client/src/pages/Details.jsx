import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Details = () => {
  let { state } = useLocation();
  let navigate = useNavigate();
  const goBackButton = () => navigate('/feed');
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
      <div className="details__image">
        <img src={state.item.image} alt={state.item.name} />
      </div>
      <header className="details__header">
        <h1>Name: {state.item.name}</h1>
      </header>
      <section className="details__body">
        <h2>Description: {state.item.description}</h2>
        <h2>Location: {state.item.city}</h2>
      </section>
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
      <div className="details___button">
        <button className="btn--primary" onClick={() => goBackButton()}>
          Go back
        </button>
      </div>
    </div>
  );
};
