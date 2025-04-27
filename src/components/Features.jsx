import { useState } from "react";
import propTypes from "prop-types";

export default function Features() {
  const [btnActive, setBtnsActive] = useState(0);

  const featuresBtns = [
    { id: 0, name: "simple bookmarking" },
    { id: 1, name: "speedy searching" },
    { id: 2, name: "easy sharing" },
  ];

  const mapingFeaturesBtn = featuresBtns.map((btn, index) => {
    return (
      <button
        className={btnActive === btn.id ? "active" : ""} 
        id={`tab-${btn.id}`}
        role="tab"
        aria-selected={btnActive === btn.id}
        aria-controls={`tabpanel-${btn.id}`}
        tabIndex={btnActive === btn.id ? 0 : -1}
        onClick={() => {
          setBtnsActive(index);
        }}
        key={index}
      >
        {btn.name}
      </button>
    );
  });


  const FeaturesDetailsContent = [
    {
      src: "assets/images/illustration-features-tab-1.svg",
      title: "book mark in one click",
      prag: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      src: "assets/images/illustration-features-tab-2.svg",
      title: "intelligent search",
      prag: "Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks..",
    },
    {
      src: "assets/images/illustration-features-tab-3.svg",
      title: "share your bookmarks",
      prag: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];


  return (
    <section className="features" id="feature">
      <h2 className="section__title">Features</h2>
      <p className="section__prag">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="features__btns" role="tablist" aria-label="Feature Taps">{mapingFeaturesBtn}</div>
      {/* rendering features taps */}
      <FeaturesDetails
        src={FeaturesDetailsContent[btnActive].src}
        title={FeaturesDetailsContent[btnActive].title}
        prag={FeaturesDetailsContent[btnActive].prag}
        btnActive={btnActive}
      />
    </section>
  );
}

function FeaturesDetails({ src, title, prag,btnActive }) {
  return (
    <div className="features__details" id={`tabpanel-${btnActive}`} aria-labelledby={`tap-${btnActive}`} tabIndex={0} role="tabpanel">
      {/* features img */}
      <div className="features__img">
        <img src={src} alt="" />
      </div>
      {/* feature content */}
      <div className="features__content">

        <h1 className="section__title">{title}</h1>
        <p className="section__prag">{prag}</p>
        <button className="features__button" aria-label="Learn more about this feature">more info</button>
      </div>
    </div>
  );
}


FeaturesDetails.propTypes = {
  src : propTypes.string.isRequired,
  title : propTypes.string.isRequired,
  prag : propTypes.string.isRequired,
  btnActive: propTypes.number.isRequired,

}