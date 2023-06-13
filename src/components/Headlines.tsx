import mobileBanner from "../assets/images/image-web-3-mobile.jpg";
import desktopBanner from "../assets/images/image-web-3-desktop.jpg";

const Headlines = () => {
  return (
    <div className="headline-container">
      <picture className="banner-container">
        <source srcSet={desktopBanner} media="(min-width:50em)" />
        <source srcSet={mobileBanner} />
        <img src={mobileBanner} className="banner-img" alt="banner-img" />
      </picture>
      <h1 className="headline-heading">The Bright Future of Web 3.0?</h1>
      <div className="headline-info">
        <p className="headline-desc">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="headline-readmore-btn">Read more</button>
      </div>
    </div>
  );
};

export default Headlines;
