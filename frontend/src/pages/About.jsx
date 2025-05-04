import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Mahee, we believe fashion should be more than just a trend — it
            should be a reflection of your individuality. Born from a dream to
            make stylish, high-quality clothing accessible to everyone, Mahee is
            not just an e-commerce platform, but a vision of self-expression,
            confidence, and creativity. Our journey began with a simple idea:
            everyone deserves to wear what makes them feel powerful,
            comfortable, and uniquely themselves.Mahee is here to walk that
            journey with you.
          </p>
          <p>
            Looking ahead, we have big dreams — from launching our own exclusive
            collections to introducing personalized styling tools, sustainable
            fashion initiatives, and immersive shopping experiences. We want
            Mahee to be a place where fashion meets purpose, where innovation
            meets emotion. As we grow, our mission remains the same: to make
            fashion inclusive.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Mahee, our mission is to redefine the way people experience
            fashion by making it more accessible, inclusive, and empowering for
            everyone. We’re here to inspire confidence through clothing —
            curating styles that not only follow trends but celebrate
            individuality. We believe fashion should be fun, fearless, and for
            all, which is why we’re dedicated to offering high-quality,
            affordable pieces that resonate with every personality and body
            type.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Mahee, quality isn’t just a checkbox — it’s a promise. Every
            piece we offer goes through a meticulous quality assurance process
            to ensure it meets the highest standards in fabric, stitching, and
            finish. We work closely with trusted manufacturers and designers who
            share our passion for excellence, durability, and comfort. From the
            softness of the cotton to the strength of the seams, every detail
            matters. Our customers deserve the best, and we make it our mission
            to deliver products that not only look great but also last.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shopping should be simple, and that's exactly what we deliver at
            Mahee. From easy navigation to smart filters and a clean user
            experience, finding your perfect outfit is faster than ever. With
            quick checkout, multiple payment methods, and order tracking, we
            make sure everything flows smoothly. Hassle-free returns and
            responsive support? Already included. We've built Mahee to save you
            time while keeping things stylish.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Shopping should be stress-free, and that’s why our customer care is
            designed to be fast, friendly, and helpful. Whether you need help
            tracking an order or picking the right size, our team is just a
            message away. We listen, we care, and we act—because you deserve
            more than just a purchase, you deserve a great experience. We’re
            committed to making every interaction smooth and satisfying.{" "}
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
