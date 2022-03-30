import React from 'react';
import about1 from '../static/about-planet.jpg';
import about2 from '../static/about-hands.svg';
import about3 from '../static/about-people.svg';

const About = () => {
  return (
    <div className="about">
      <header className="about__header">
        <h1>About us</h1>
      </header>
      <section className="about__body">
        <div className="about__body-card">
          <img src={about1} alt="planet" loading="lazy" />
          <h2>About Lending App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            elementum eros, pellentesque feugiat libero. Quisque at consequat
            lectus. Quisque aliquam urna in faucibus tempor. Nam sit amet leo
            ultricies purus congue consectetur. Curabitur tincidunt nibh et
            sollicitudin cursus. Vestibulum suscipit vehicula dapibus. Maecenas
            blandit tortor vel sapien porttitor rutrum. Aliquam lacinia arcu
            elementum massa fermentum, ac faucibus leo pulvinar. Praesent ut
            libero eu nisi viverra condimentum. Integer pellentesque justo nec
            aliquet ultricies.
          </p>
        </div>
        <div className="about__body-card">
          <img src={about2} alt="hands" />
          <h2>Our purpose</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            elementum eros, pellentesque feugiat libero. Quisque at consequat
            lectus. Quisque aliquam urna in faucibus tempor. Nam sit amet leo
            ultricies purus congue consectetur. Curabitur tincidunt nibh et
            sollicitudin cursus. Vestibulum suscipit vehicula dapibus. Maecenas
            blandit tortor vel sapien porttitor rutrum. Aliquam lacinia arcu
            elementum massa fermentum, ac faucibus leo pulvinar. Praesent ut
            libero eu nisi viverra condimentum. Integer pellentesque justo nec
            aliquet ultricies.
          </p>
        </div>
        <div className="about__body-card">
          <img src={about3} alt="two people" loading="lazy" />
          <h2>The company behind</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            elementum eros, pellentesque feugiat libero. Quisque at consequat
            lectus. Quisque aliquam urna in faucibus tempor. Nam sit amet leo
            ultricies purus congue consectetur. Curabitur tincidunt nibh et
            sollicitudin cursus. Vestibulum suscipit vehicula dapibus. Maecenas
            blandit tortor vel sapien porttitor rutrum. Aliquam lacinia arcu
            elementum massa fermentum, ac faucibus leo pulvinar. Praesent ut
            libero eu nisi viverra condimentum. Integer pellentesque justo nec
            aliquet ultricies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
