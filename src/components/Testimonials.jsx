import { testimonials } from "../constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <motion.h2
        initial={{ opacity: 0, x: 200, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
      >
        What people are saying!
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <motion.div
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin"
            >
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt="user"
                  className="h-12 w-12 mr-6 rounded-full border border-neutral-300"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
