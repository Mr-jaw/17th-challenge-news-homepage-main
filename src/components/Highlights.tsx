const Highlights = () => {
  return (
    <div className="highlights-container">
      <h2 className="highlight-heading">New</h2>
      <dl className="highlight-list">
        <div className="highlight-item">
          <dt className="highlight-topic">
            <a href="#" className="topic-link">
              Hydrogen VS Electric Cars
            </a>
          </dt>
          <dd className="highlight-desc">
            Will hydrogen-fueled cars ever catch up to EVs?
          </dd>
        </div>
        <div className="highlight-item">
          <dt className="highlight-topic">
            <a href="#" className="topic-link">
              The Downsides of AI Artistry
            </a>
          </dt>
          <dd className="highlight-desc">
            What are the possible adverse effects of on-demand AI image
            generation?
          </dd>
        </div>
        <div className="highlight-item">
          <dt className="highlight-topic">
            <a href="#" className="topic-link">
              Is VC Funding Drying Up?
            </a>
          </dt>
          <dd className="highlight-desc">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Highlights;
