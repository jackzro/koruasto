import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const NavbarComponent = ({ data }: any) => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative px-8 z-50 flex h-[100px] justify-between items-center py-2 border-b-2 bg-black text-white border-black">
      <a href="/">
        <img
          src={data.app_config_image}
          alt={"Koru"}
          height={150}
          width={150}
        />
      </a>

      {!matches && (
        <div
          className="space-y-1.5 cursor-pointer z-50"
          onClick={() => {
            setToggled((prevToggle) => !prevToggle);
            console.log("prev");
          }}
        >
          <motion.span
            animate={{
              rotateZ: toggled ? 45 : 0,
              y: toggled ? 8 : 0,
            }}
            className="block h-0.5 w-8 bg-white"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-white"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-white"
          ></motion.span>
        </div>
      )}

      {matches && (
        <div className="space-x-4">
          <a
            href="/tentang-kami"
            className="hover:font-bold hover:text-abukoru"
          >
            Tentang Kami
          </a>
          <a href="/product" className="hover:text-abukoru hover:font-bold">
            Product
          </a>
          {/* <a href="/contact-us" className="hover:text-abukoru hover:font-bold">
            Contact Us
          </a> */}
        </div>
      )}

      {toggled && !matches && (
        <div className="fixed flex bg-abukoru z-10 bottom-0 left-0 w-full h-screen items-center justify-center">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="/tentang-kami">
              Tentang Kami
            </motion.a>
            <motion.a variants={itemMotion} href="/product">
              Product
            </motion.a>
            {/* <motion.a variants={itemMotion} href="/contact-us">
              Contact Us
            </motion.a> */}
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
