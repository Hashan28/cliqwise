import React from 'react';
import Slider from 'react-slick';
import { reviews } from '../assets/assets';
import { Quote, Star } from 'lucide-react';

const ReviewSection = ({ heading }) => {
  // Slick Slider Settings
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // 3 slides at a time for large screens
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: false, // Optional: to make slides slide to the center
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3, // 3 slides at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1, // 1 slide at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-6 mt-20">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold mb-4">{heading}</p>
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <p className="text-paraText max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about their experience working with us.
        </p>
      </div>

      {/* Slick Slider */}
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-800 p-6 rounded-2xl border transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              <div className="flex items-start justify-center mb-6">
                <div className="bg-emerald-400/10 p-3 rounded-lg">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
              </div>

              <p className="text-paraText mb-6 italic text-sm md:text-base text-center">
                "{review.review}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg text-paraText text-center">{review.name}</h4>
                  <p className="text-gray-400 text-sm text-center">{review.position}</p>
                  <p className="text-primary text-sm text-center">{review.company}</p>
                </div>

                {/* Stars (Visible only on medium and larger screens) */}
                <div className=" gap-1 justify-center hidden md:flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-secondary fill-secondary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ReviewSection.defaultProps = {
  heading: '',
};

export default ReviewSection;
