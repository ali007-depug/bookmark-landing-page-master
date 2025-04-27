export default function Download() {
  const browserContent = [
    {
      src: "/assets/images/logo-chrome.svg",
      title: "Chrome",
      minVersion: "62",
      hrSrc: "/assets/images/bg-dots.svg",
    },
    {
      src: "/assets/images/logo-firefox.svg",
      title: "Firefox",
      minVersion: "55",
      hrSrc: "/assets/images/bg-dots.svg",
    },
    {
      src: "/assets/images/logo-opera.svg",
      title: "Opera",
      minVersion: "46",
      hrSrc: "/assets/images/bg-dots.svg",
    },
  ];

  const cards = browserContent.map((browser, i) => {
    return (
      <Card
        key={i}
        src={browser.src}
        title={browser.title}
        version={browser.minVersion}
        hrSrc={browser.hrSrc}
      />
    );
  });
  return (
    <div className="download" id="pricing">
      <h2 className="section__title">Donwload the extension</h2>
      <p className="section__prag">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      {/* download content */}
      <div className="download__content">{cards}</div>
    </div>
  );
}

function Card({ src, title, version, hrSrc }) {
  return (
    <article className="card">
      <img src={src} alt={title} className="card__img" />
      <div className="card__text">
        <h2>Add to {title}</h2>
        <span>Minmum version {version}</span>
      </div>
      <img src={hrSrc} alt="" aria-hidden="true" />

      <button className="card__btn" aria-label={`Add and install extension for ${title}`}>Add & Install Extenstion</button>
    </article>
  );
}
