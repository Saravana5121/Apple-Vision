import { features } from "../constants";
import { motion } from "framer-motion";
const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-sky-500 rounded-full h-6 text-lg font-large px-2 py-1 uppercase">
          features
        </span>
        <motion.h2
          initial={{ opacity: 0, x: 100, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"
        >
          Featuring the visionary
          <span className="bg-gradient-to-r from-sky-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            view of Apple!
          </span>
        </motion.h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex"
            >
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-sky-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
