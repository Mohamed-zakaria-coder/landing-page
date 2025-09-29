export default function Cover() {
  return (
    <div className="cover-container" id="home">
      <div className="cover-background"></div>
      <div className="cover">
        <div className="prod-description">
          <h1>Best Natural Based Products For Your Daily Routine.</h1>
          <p>
            Get the best combination of hair products for, get the best results
            instantly and make your hair shine.
          </p>
        </div>
        <div className="cover-img">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/26/12/52/bottle-1860617__340.png"
            alt="cover-img"
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginBottom: "-1px" }}
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
