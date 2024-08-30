import React from "react";
import Ronaldo from "/assets/images/ronaldo.png";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-white">About Us</h2>
      <div className="flex flex-col md:flex-row items-start m-8">
        <div className="md:w-1/3 mb-4  mt-4 md:mb-0">
          <img
            src={Ronaldo}
            alt="About Us"
            className="w-full h-96 object-cover rounded-lg shadow-lg" // Adjust height here
          />
        </div>
        <div className="md:w-2/3 md:pl-6 mt-4">
          <h1 className="font-semibold text-green-300 text-xl mb-4">
            Welcome to Early Gurung7 Footwear Store! We believe that great
            footwear goes beyond just style and comfort—it’s about making every
            step you take a memorable experience. Founded with a passion for
            quality and a commitment to excellence, our store is dedicated to
            offering a curated selection of premium shoes that cater to every
            walk of life. Our Mission Our mission is simple: to deliver
            exceptional footwear that combines craftsmanship, innovation, and
            style.
          </h1>
          <p className="font-semibold text-green-300 text-xl mb-4">
            We are dedicated to bringing you the latest trends and timeless
            classics that not only look great but also provide unparalleled
            comfort and durability. Whether you're searching for the perfect
            pair of running shoes, elegant dress shoes, or casual sneakers, our
            diverse collection ensures that you’ll find exactly what you need.
          </p>
          <p className="font-semibold text-green-300 text-xl mb-4">
            Our Story Early Gurung7 was born from a love of fashion and an
            understanding of the importance of a good pair of shoes. With years
            of experience in the footwear industry, we’ve built a reputation for
            sourcing high-quality products that meet our rigorous standards.
          </p>

          <p className="font-semibold text-green-300 text-xl mb-4">
            Join Our Community We invite you to explore our store and discover
            the perfect pair of shoes to enhance your wardrobe. Follow us on
            social media and subscribe to our newsletter to stay updated on new
            arrivals, exclusive offers, and the latest trends in footwear.
          </p>
          <h1 className="font-semibold text-green-300 text-center text-xl">
            Thank you for choosing Early Gurung7 Footwear Store. We look forward
            to serving you and helping you find the ideal shoes for every
            occasion.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
