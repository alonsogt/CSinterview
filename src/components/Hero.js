function Hero({props}) {
  console.log(props)
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-copy">
          <h1>{props.hero_header_one}</h1>
          <h1 className="purple">{props.hero_header_two}</h1>
          <p>
            {props.hero_copy}
          </p>
          <div className="nav-buttons">
            <button className="button-dark margin-0">Sign Up</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={props.hero_image.url}></img>
        </div>
      </div>
    </div>
  );
}
export default Hero;
