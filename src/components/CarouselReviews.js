import bootstrap from "bootstrap";
import "../css/CustomerReviews.css"
const CarouselReviews = () => {
  return (
    <bootstrap>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="customer-reviews-container">
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="customer-reviews-container">
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="customer-reviews-container">
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <p className="customer-reviews-details"><strong>Customer Name</strong></p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-button carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-button carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </bootstrap>
  );
};

export default CarouselReviews;
