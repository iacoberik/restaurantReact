import { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="about-page">
      <h1>Welcome to [{loggedInUser}]</h1>
      <p>
        Your ultimate destination for culinary delights and gastronomic
        adventures!
      </p>
      <button onClick={() => setUserName("ANDREI")}>asd</button>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At [Your Website Name], our mission is to connect food enthusiasts
          with the finest dining establishments in your city. We celebrate the
          rich tapestry of flavors that make each restaurant a unique culinary
          destination.
        </p>
      </section>

      <section className="culinary-tapestry-section">
        <h2>The Culinary Tapestry</h2>
        <p>
          Dive into a world of diverse tastes, as our website showcases a
          handpicked selection of restaurants spanning various cuisines,
          ambiances, and culinary philosophies.
        </p>
      </section>

      <section className="discover-section">
        <h2>Discover Your Next Culinary Adventure</h2>
        <p>
          Browse through our carefully curated collection of restaurants, each
          accompanied by enticing descriptions, mouthwatering images, and
          detailed information to help you make the perfect choice.
        </p>
      </section>
    </div>
  );
};

export default About;
