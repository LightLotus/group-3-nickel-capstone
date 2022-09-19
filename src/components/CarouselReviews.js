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
                  "Leah Gotti is a wonderful trainer. She is so sweet and captivating to watch with her dogs.
                   Her videos are professional and she teaches each new trick or command in a step-by-step
                   fashion that makes them easy to follow. I have taken two of her courses now and am hoping
                    to take another in the near future. Thank you so much!"
                </p>
                <p className="customer-reviews-details"><strong>Jhonny Saints</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "I love SpiritDog Training. She has good advice and constantly keeps in touch. 
                   She will respond to questions. Her training videos are easy to follow. 
                   She constantly checks to give new tips and helpful ideas. She always encourages response or questions. 
                   Also her courses are affordable."
                </p>
                <p className="customer-reviews-details"><strong>Rocco</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "I’ve only been using this course for a couple of days now and already 
                   have noticed a huge difference in our barking reactive dog! I love how the
                   training is so easy to understand and implement, and usable for the whole family! 
                   Thank you!!!."
                </p>
                <p className="customer-reviews-details"><strong>Niel Armstrong</strong></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="customer-reviews-container">
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "Today’s we adopted Linda into our little family were 
                   she is already making herself at home after just a couple hours
                   the staff were super helpful in finding us the perfect fur baby 
                   thank you again Charming Pets."
                </p>
                <p className="customer-reviews-details"><strong>Shyla Styles</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "I really enjoy the short lessons and games from Charming Pets Training. 
                   Always very clearly explained as to why and how to teach your dog, 
                   the videos are easy to follow. I am glad to learn more fun and simple 
                   training ideas from Spirit Dog with my dog! Thanks!."
                </p>
                <p className="customer-reviews-details"><strong>Nica Tejada</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "As a newly-certified dog trainer, I am obsessed with learning new things. 
                  Kieth and Charming Pets are an absolute treasure! The positive reinforcement 
                  approach is ALWAYS the way to go, and  Kieth explains WHY his methods work 
                  so well in a way that actually makes sense! I learned a lot of this in school, 
                  but the way information is presented in this course makes it more applicable to
                  daily life and super easy to follow!."
                </p>
                <p className="customer-reviews-details"><strong>Kevin Wines</strong></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="customer-reviews-container">
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  " I can’t count how many times I exclaimed, “oh, wow!” 
                  out loud during the Reactivity course, and I’m so excited to keep learning!!."
                </p>
                <p className="customer-reviews-details"><strong>Lester Bacsarsa</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "The place, all the animals and kennels are very clean. and people there very helpful.
                  The process is simple.."
                </p>
                <p className="customer-reviews-details"><strong>Manny Villar</strong></p>
              </div>
              <div className="customer-reviews">
                <p className="customer-reviews-details">
                  "The staff at Charming Pets save a lot of lives. They deserve to be praised.."
                </p>
                <p className="customer-reviews-details"><strong>Rodrigo Duterte</strong></p>
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
