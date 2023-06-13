import Growth from "../assets/images/image-gaming-growth.jpg";
import RetroPC from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";

const OffTopics = () => {
  return (
    <div className="offtopic-container">
      <ul role="list" className="offtopic-list">
        <li role="listitem" className="offtopic-item">
          <img
            src={RetroPC}
            alt="a retro computor"
            className="offtopic-image"
          />
          <div className="offtopic-text-content">
            <strong className="offtopic-number">01</strong>
            <a href="#" className="offtopic-link">
              <h2 className="offtopic-heading">Reviving Retro PCs</h2>
            </a>
            <p className="offtopic-desc">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </li>
        <li role="listitem" className="offtopic-item">
          <img
            src={Laptops}
            alt="a closeup view of a backlit laptop keyboard"
            className="offtopic-image"
          />
          <div className="offtopic-text-content">
            <strong className="offtopic-number">02</strong>
            <a href="#" className="offtopic-link">
              <h2 className="offtopic-heading">Top 10 Laptops of 2022</h2>
            </a>
            <p className="offtopic-desc">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </li>
        <li role="listitem" className="offtopic-item">
          <img
            src={Growth}
            alt="a controller floating over the hand"
            className="offtopic-image"
          />
          <div className="offtopic-text-content">
            <strong className="offtopic-number">03</strong>
            <a href="#" className="offtopic-link">
              <h2 className="offtopic-heading">The Growth of Gaming</h2>
            </a>
            <p className="offtopic-desc">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OffTopics;
