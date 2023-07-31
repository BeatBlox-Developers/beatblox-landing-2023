export const ComingSoonPopUp = ({ handleVisibility }) => {
  return (
    <div className="pop-up">
      <div className="pop-up-content">
        <div className="pop-up-navbar">
          <h2 className="pop-up-title">Coming soon</h2>
          <button
            className="pop-up-close"
            onClick={() => {
              handleVisibility();
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="pop-up-body">
          <img
            src="/images/LOGO_GIF.gif"
            alt="Beatblox logo"
            className="pop-up-image"
          />
        </div>
      </div>
    </div>
  );
};
