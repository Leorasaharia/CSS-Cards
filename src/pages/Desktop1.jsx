import RectangleComponent from "../components/RectangleComponent";
import "./Desktop1.css";

const Desktop = () => {
  return (
    <div className="desktop-container">
      <div className="desktop-grid">
        {[...Array(6)].map((_, index) => (
          <div className="desktop1" key={index}>
            <section className="hello-leora-parent">
              <h1 className="hello-leora">Hello Leora!</h1>
              <div className="welcome-to-our">
                "Welcome to our website! Here, we specialize in creating customized
                designs on clothing, accessories, drinkware, and home decor items.
                Take a moment to browse through our site and discover more about what
                sets us apart."
              </div>
              <RectangleComponent />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;
