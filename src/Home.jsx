import React, { useEffect, useRef, useState } from "react";
import logo from "../src/img/logo.png";
import bari from "../src/img/bari.png";
import windowman from "../src/img/windowman.png";
import sleep from "../src/img/sleep.png";
import paisa from "../src/img/paisa.png";
import chain from "../src/img/chain.png";
import z from "../src/img/z.png";
import batuk1 from "../src/img/batuk1.webp";
import batuk2 from "../src/img/batuk2.webp";
import batuk3 from "../src/img/batuk3.webp";
import video from "../src/img/shop.mp4";
import a from "../src/img/a.webp";
import b from "../src/img/b.webp";
import curry from "../src/img/curry.png";
import paper from "../src/img/paper.png";
import faq from "../src/img/faq1.png";
import fream1 from "../src/img/frame-1.svg";
import layer1 from "../src/img/layer-1.svg";
import layer12 from "../src/img/layer-1.2.svg";
import twitter from "../src/img/twitter.svg";
import fream2 from "../src/img/frame-2.svg";
import layer2 from "../src/img/layer-2.svg";
import layer22 from "../src/img/layer-2.2.svg";
import telegram from "../src/img/talegram.svg";
import fream3 from "../src/img/frame-3.svg";
import layer3 from "../src/img/layer-3.svg";
import layer32 from "../src/img/layer-3-2.svg";
import youtube from "../src/img/youtube.svg";
import fream4 from "../src/img/frame-4.svg";
import layer4 from "../src/img/layer-4.svg";
import layer42 from "../src/img/layer-4.2.svg";
import ar1 from "../src/img/ar1.jpg";
import ar2 from "../src/img/ar2.jpg";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import discord from "../src/img/discord.svg";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import WOW from "wowjs";
import "animate.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Platform Overview");
  const [openQuestions, setOpenQuestions] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const explorSectionRef = useRef(null);
  const blockchainSectionRef = useRef(null);
  const roadmapSectionRef = useRef(null);
  const socialSectionRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(283);

  const scrollToSection = (sectionRef) => {
    // Check if the ref exists, then scroll
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqData = {
    "Platform Overview": [
      {
        question: "01. What is Grabit Shop?",
        answer:
          "Grabit Shop is a next-generation shopping platform that combines Augmented Reality (AR), Virtual Reality (VR), and blockchain technology to offer an immersive, interactive shopping experience. Users can explore virtual showrooms, interact with products as if they were in a physical store, and purchase items using various payment methods, including cryptocurrencies.",
      },
      {
        question:
          "02. How does Grabit Shop enhance the traditional shopping experience?",
        answer:
          "Grabit Shop provides an immersive experience where users can walk through virtual showrooms, examine products from all angles, and even visualize how items would look in their personal space. This interactive environment replicates the in-store experience while offering the convenience of online shopping.",
      },
      {
        question:
          "03. What is the difference between the Immersive Showroom Experience and Personal Virtual Space?",
        answer:
          "The Immersive Showroom Experience allows users to explore and interact with products in a virtual store setting, similar to visiting a physical showroom. The Personal Virtual Space, on the other hand, is a customizable digital area where users can store, organize, and interact with their purchased items, such as trying on clothes or arranging furniture.",
      },
      {
        question: "04. Who is the target audience for Grabit Shop?",
        answer:
          "Grabit Shop is designed for tech-savvy consumers, online shoppers looking for a more engaging experience, and cryptocurrency enthusiasts. It's ideal for anyone who values a blend of convenience, technology, and immersive shopping.",
      },
    ],
    "Blockchain Integration": [
      {
        question: "01. How does Grabit Shop use blockchain technology?",
        answer:
          "Grabit Shop integrates blockchain technology to ensure secure, transparent, and decentralized transactions. This technology provides a tamper-proof record of all purchases and enhances user trust in the platform by protecting their data.",
      },
      {
        question:
          "02. What is Grabit Coin, and how does it function within the platform?",
        answer:
          "Grabit Coin is the native cryptocurrency of the Grabit Shop platform. It facilitates transactions, enables users to earn rewards, and unlocks exclusive features within the ecosystem. Grabit Coin also plays a key role in the platform’s reward and incentive programs.",
      },
      {
        question: "03. Can users make payments using other currencies?",
        answer:
          "Can users make payments using other currencies?** Yes, Grabit Shop supports multiple currencies, including both fiat and cryptocurrencies. This multi-currency support ensures that users can transact using the payment method they prefer, making the platform accessible to a global audience.",
      },
      {
        question:
          "04. Why is blockchain integration important for Grabit Shop?",
        answer:
          "Blockchain integration provides a secure and transparent framework for all transactions, ensuring that users’ data is protected and that transactions are tamper-proof. It also enables the use of Grabit Coin, which enhances the platform's functionality and user experience.",
      },
    ],
    "User Experience": [
      {
        question:
          "01. What kind of products can users purchase on Grabit Shop?",
        answer:
          "Users can purchase a wide range of products, including fashion, electronics, home goods, and more. The platform partners with various brands to offer a diverse selection of items that can be explored in virtual showrooms.",
      },
      {
        question:
          "02. How does AR enhance the shopping experience on Grabit Shop?",
        answer:
          "How does AR enhance the shopping experience on Grabit Shop?** Augmented Reality (AR) allows users to visualize how products will look in their real-world environment. For example, users can try on clothes virtually or see how a piece of furniture fits in their home, providing a more informed and confident shopping decision.",
      },
      {
        question: "03. What is the VR showroom experience like?",
        answer:
          "The VR showroom experience is highly immersive, allowing users to navigate through virtual stores, interact with products as if they were physically present, and make purchases based on a realistic preview. This experience closely mimics the feeling of shopping in a physical store.",
      },
      {
        question: "04. How does the Personal Virtual Space benefit users?",
        answer:
          "The Personal Virtual Space allows users to store, organize, and interact with their purchased items. This space is customizable, offering users the ability to revisit their purchases, try on items, or showcase them in different settings, enhancing the overall user experience",
      },
    ],
    "Tokenomics & Roadmap": [
      {
        question: "01. How will Grabit Coins be distributed?",
        answer:
          "Grabit Coins will be allocated across several key areas, including early investors, the development team, marketing efforts, and community rewards. The distribution is designed to support the platform’s growth and ensure long-term sustainability.",
      },
      {
        question: "02. What incentives are available for Grabit Shop users?",
        answer:
          "Users can earn Grabit Coins through various activities on the platform, such as making purchases, referring friends, and participating in platform events. These rewards can be used for future purchases or traded on supported exchanges.",
      },
      {
        question: "03. What are the key milestones in the Grabit Shop roadmap?",
        answer:
          "The Grabit Shop roadmap includes the development of the AR/VR platform, the beta launch with select brands, the full platform launch with multi-currency support, and the introduction of Grabit Coin. Each phase is designed to expand the platform’s capabilities and user base.",
      },
      {
        question: "04. When will Grabit Coin be available to the public?",
        answer:
          "Grabit Coin will be introduced during Phase 2 of the roadmap, following the full launch of the Grabit Shop platform. This phase will also include integration with external cryptocurrency exchanges, allowing users to trade Grabit Coins.",
      },
      // {
      //   question: "05. How does Grabit Shop plan to sustain long-term growth?",
      //   answer:
      //     "Grabit Shop plans to sustain long-term growth by continuously enhancing platform features, expanding brand partnerships, and growing its user base. The platform’s innovative use of AR, VR, and blockchain technology positions it for sustained success in the evolving retail landscape.",
      // },
      // {
      //   question: "06. How will Grabit Shop expand its brand ecosystem?",
      //   answer:
      //     "Grabit Shop will expand its brand ecosystem by partnering with a diverse range of brands and retailers, offering users an ever-growing selection of products. This expansion will also include adding new features and functionalities to enhance the shopping experience.",
      // },
      // {
      //   question:
      //     "07. What role does the community play in the Grabit Shop ecosystem?",
      //   answer:
      //     "The community plays a vital role in the Grabit Shop ecosystem. Users are encouraged to engage with the platform, provide feedback, and participate in events. The platform’s reward system is designed to incentivize active community participation, fostering a vibrant and engaged user base.",
      // },
      // {
      //   question:
      //     "08. What future developments can users expect from Grabit Shop?",
      //   answer:
      //     "Future developments for Grabit Shop include the introduction of new AR/VR features, expanded payment options, and additional brand partnerships. The platform will continue to innovate, offering users an increasingly immersive and convenient shopping experience.",
      // },
    ],
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (category, index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

   useEffect(() => {
     const wow = new WOW.WOW();
     wow.init();
   }, []);

   const handleScroll = () => {
     if (
       document.body.scrollTop > 20 ||
       document.documentElement.scrollTop > 20
     ) {
       setShowButton(true);
     } else {
       setShowButton(false);
     }
   };

   const backToTop = () => {
     document.documentElement.style.scrollBehavior = "smooth";
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   };
   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  const [visibleImageIndex, setVisibleImageIndex] = useState(0); // Track which image to show
  const images = [batuk1, batuk2, batuk3];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 1500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50; // Reduced movement for inner tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50; // Reduced movement for inner tilt
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  const handleMouseMove2 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50; // Reduced movement for inner tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50; // Reduced movement for inner tilt
    setPosition2({ x, y });
  };

  const handleMouseLeave2 = () => {
    setPosition2({ x: 0, y: 0 });
  };

  const [position3, setPosition3] = useState({ x: 0, y: 0 });

  const handleMouseMove3 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50; // Reduced movement for inner tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50; // Reduced movement for inner tilt
    setPosition3({ x, y });
  };

  const handleMouseLeave3 = () => {
    setPosition3({ x: 0, y: 0 });
  };

  const [position4, setPosition4] = useState({ x: 0, y: 0 });

  const handleMouseMove4 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 50; // Reduced movement for inner tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 50; // Reduced movement for inner tilt
    setPosition4({ x, y });
  };

  const handleMouseLeave4 = () => {
    setPosition4({ x: 0, y: 0 });
  };

  return (
    <div className="bg-[#070a29] overflow-x-hidden">
      <div className="tapka">
        {/* header */}
        <div className="xl:flex lg:flex md:flex sm:hidden mm:hidden ss:hidden md:px-[15px] lg:px-[80px] xl:px-[100px] h-[80px] justify-between items-center">
          <div>
            <img
              data-wow-delay="0.6s"
              className="wow animate__animated animate__lightSpeedInLeft"
              src={logo}
              alt=""
            />
          </div>
          <div className="flex text-white md:text-md xl:text-xl hat">
            <div
              onClick={() => scrollToSection(homeSectionRef)}
              className="wow animate__animated animate__fadeInDown  md:pe-[12px] xl:pe-[35px] cursor-pointer transition-all duration-300 hover:text-[#19c1f2]"
            >
              Home
            </div>
            <div
              onClick={() => scrollToSection(aboutSectionRef)}
              data-wow-delay="0.1s"
              className="wow animate__animated animate__fadeInDown md:pe-[12px] xl:pe-[35px] cursor-pointer transition-all duration-300 hover:text-[#19c1f2]"
            >
              About
            </div>
            <div
              onClick={() => scrollToSection(explorSectionRef)}
              data-wow-delay="0.2s"
              className="wow animate__animated animate__fadeInDown md:pe-[12px] xl:pe-[35px] cursor-pointer transition-all duration-300 hover:text-[#19c1f2]"
            >
              Explor
            </div>
            <div
              onClick={() => scrollToSection(blockchainSectionRef)}
              data-wow-delay="0.3s"
              className="wow animate__animated animate__fadeInDown md:pe-[12px] xl:pe-[35px] cursor-pointer transition-all duration-300 hover:text-[#19c1f2]"
            >
              Blockchain
            </div>
            <div
              onClick={() => scrollToSection(roadmapSectionRef)}
              data-wow-delay="0.4s"
              className="wow animate__animated animate__fadeInDown md:pe-[12px] xl:pe-[35px] cursor-pointer transition-all duration-300 hover:text-[#19c1f2]"
            >
              RoadMap
            </div>
            <div
              onClick={() => scrollToSection(socialSectionRef)}
              data-wow-delay="0.5s"
              className=" wow animate__animated animate__fadeInDown cursor-pointer transition-all duration-300 hover:text-[#19c1f2]"
            >
              Socials
            </div>
          </div>
        </div>

        <div className="relative ss:pt-5 mm:pt-5 sm:pt-5 md:pt-0 lg:pt-0 xl:pt-0">
          {/* Hamburger Menu for mobile screens */}
          <div className="ss:flex mm:flex sm:flex md:hidden lg:hidden xl:hidden h-[70px] bg-[#070a29] items-center justify-between border rounded-[30px] border-[#19c1f2] mx-5 mb-8 px-10">
            <img className="cursor-pointer" src={logo} alt="logo" />
            <button
              className="text-xl text-white"
              onClick={() => setSidebarOpen(!isSidebarOpen)} // You will manage this state
            >
              <FaBars />
            </button>
          </div>

          {/* Sidebar for mobile screens */}
          <div
            className={`ss:fixed mm:fixed sm:fixed md:hidden lg:hidden xl:hidden top-0 left-0 h-full w-[250px] bg-[#070a29] z-10 p-6 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `} // Sidebar state to show or hide
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="flex items-center">
                <button
                  className="text-2xl text-white"
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                  <IoClose />
                </button>
              </div>
            </div>
            <ul className="space-y-6">
              <li
                className="bg-og-color bg-clip-text text-transparent text-xl cursor-pointer hat "
                onClick={() => {
                  scrollToSection(homeSectionRef);
                  setSidebarOpen(false);
                }}
              >
                Home
              </li>
              <li
                className="bg-og-color bg-clip-text text-transparent hat text-xl cursor-pointer"
                onClick={() => {
                  scrollToSection(aboutSectionRef);
                  setSidebarOpen(false);
                }}
              >
                About
              </li>
              <li
                className="bg-og-color bg-clip-text text-transparent hat text-xl cursor-pointer"
                onClick={() => {
                  scrollToSection(explorSectionRef);
                  setSidebarOpen(false);
                }}
              >
                Explor
              </li>
              <li
                className="bg-og-color bg-clip-text text-transparent hat text-xl cursor-pointer"
                onClick={() => {
                  scrollToSection(blockchainSectionRef);
                  setSidebarOpen(false);
                }}
              >
                Blockchain
              </li>
              <li
                className="bg-og-color bg-clip-text text-transparent hat text-xl cursor-pointer"
                onClick={() => {
                  scrollToSection(roadmapSectionRef);
                  setSidebarOpen(false);
                }}
              >
                RoadMap
              </li>
              <li
                className="bg-og-color bg-clip-text text-transparent hat text-xl cursor-pointer"
                onClick={() => {
                  scrollToSection(socialSectionRef);
                  setSidebarOpen(false);
                }}
              >
                Socials
              </li>
            </ul>
          </div>
        </div>

        {/* banner-section  */}

        <div ref={homeSectionRef} className="flex justify-center">
          {/* <iframe
            src="https://my.spline.design/applevisionpro3dportfolioconceptcopycopycopycopy-6ff024e0f11a22ff2dd69ed35e15eaa0/"
            frameborder="0"
            width="95%"
            height="615px"
          ></iframe> */}
          <video
            className="w-[100%]"
            type="video/mp4"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>

        {/* about-section  */}
        <div ref={aboutSectionRef}>
          <div className="grid justify-center ss:gap-10 mm:gap-10 sm:gap-10 ss:grid-cols-[80%] mm:grid-cols-[80%] sm:grid-cols-[80%] md:grid-cols-[80%] lg:grid-cols-[45%_45%] xl:grid-cols-[40%_45%]">
            <div data-aos="fade-right" className="md:pt-[60px] xl:py-[100px]">
              <div
                // data-wow-delay="0.3s"
                className=" py-3"
              >
                <span className=" flash-text border border-[#19c1f2] px-4 py-1 rounded-full hat">
                  ABOUT US
                </span>
              </div>
              <h1 className=" text-white ss:text-[30px] mm:text-[40px] sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[50px] pb-3 hat">
                Welcome to GrabIT Shop
              </h1>
              <p className="text-white text-md py-3">
                where we’re revolutionizing the shopping experience!
              </p>
              <p className="text-white text-md pb-3">
                Unlike traditional shopping, GrabIT Shop introduces an entirely
                new way of shopping. You can interact with products in detail
                and pay with various methods, including cryptocurrencies. So,
                Get ready to experience shopping like never before!
              </p>
              <h6
                className=" text-xl py-5 bg-og-color bg-clip-text text-transparent hat
"
              >
                Vision
              </h6>
              <p className="text-white text-md pb-3">
                Our vision is to create an exceptional shopping experience where
                users can explore virtual stores, try on items digitally, and
                make payments seamlessly with cryptocurrencies.
              </p>
              <h6
                className=" text-xl py-5 bg-og-color bg-clip-text text-transparent hat
"
              >
                Mission
              </h6>
              <p className="text-white text-md">
                Our mission is to redefine how consumers interact with brands
                and products by creating a platform that makes shopping more
                engaging, immersive, and accessible to everyone, anywhere in the
                world.
              </p>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="flex ss:justify-center sm:justify-center md:justify-center xl:justify-end">
                <img
                  className="lg:py-[60px] xl:pt-[100px] ss:h-[410px] mm:h-[410px] sm:h-[410px] md:h-[600px] lg:h-[700px] xl:h-[797px]"
                  src={bari}
                  alt=""
                />
              </div>
              <img
                data-aos="fade-left"
                data-aos-delay="250"
                data-aos-offset="10"
                className="ss:w-[142px] ss:h-[158px] mm:w-[142px] mm:h-[158px] sm:w-[142px] sm:h-[158px] md:w-[242px] md:h-[250px] lg:w-[242px] lg:h-[250px] xl:w-[272px] xl:h-[301px] absolute ss:left-[0px] ss:top-[117px] mm:left-[17px] mm:top-[117px] sm:left-[40px] sm:top-[115px] md:left-[90px] md:top-[140px] lg:left-[10px] lg:top-[190px] xl:left-[205px] xl:top-[250px]"
                src={windowman}
                alt=""
              />
              <img
                data-aos="fade-down-left"
                className="absolute ss:w-[205px] ss:h-[130px] mm:w-[205px] mm:h-[130px] sm:w-[205px] sm:h-[130px] md:w-[284px] md:h-[180px] lg:w-[284px] lg:h-[180px] xl:w-[284px] xl:h-[180px] ss:bottom-[-50px] ss:right-[45px] mm:bottom-[-50px] mm:right-[65px] sm:bottom-[-50px] sm:right-[80px] md:bottom-[-60px] md:right-[175px] lg:bottom-[95px] lg:right-[90px] xl:bottom-[25px] xl:right-[95px]"
                src={sleep}
                alt=""
              />
              <img
                data-aos="fade-down-left"
                className="absolute ss:w-[55px] ss:h-[55px] mm:w-[55px] mm:h-[55px] sm:w-[55px] sm:h-[55px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] ss:bottom-[70px] ss:left-[40px] mm:bottom-[70px] mm:left-[50px] sm:bottom-[70px] sm:left-[70px] md:bottom-[110px] md:left-[160px] lg:bottom-[250px] lg:left-[70px] xl:bottom-[190px] xl:left-[280px]"
                src={paisa}
                alt=""
              />
              <img
                data-aos="fade-up-left"
                className="absolute ss:w-[45px] ss:h-[45px] mm:w-[45px] mm:h-[45px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px] ss:top-[105px] ss:right-[60px] mm:top-[105px] mm:right-[80px] sm:top-[105px] sm:right-[80px] md:top-[225px] md:right-[180px] lg:top-[225px] lg:right-[120px] xl:top-[285px] xl:right-[120px]"
                src={chain}
                alt=""
              />
              <img
                data-aos="fade-left"
                className="absolute ss:w-[60px] ss:h-[60px] mm:w-[60px] mm:h-[60px] sm:w-[66px] sm:h-[66px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] ss:right-[40px] ss:bottom-[120px] mm:right-[60px] mm:bottom-[120px] sm:right-[70px] sm:bottom-[120px] md:right-[150px] md:bottom-[150px] lg:right-[90px] lg:bottom-[300px] xl:right-[70px] xl:bottom-[300px]"
                src={z}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* batuk-section  */}
        <div ref={explorSectionRef} className="pt-[80px]">
          <div className="py-3 flex justify-center">
            <span
              data-aos="fade-down"
              className="flash-text border border-[#19c1f2] px-4 py-1 rounded-full hat"
            >
              Platform Overview
            </span>
          </div>
          <h1
            data-aos="fade-down"
            className="text-white ss:text-[30px] mm:text-[40px] sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[50px] pb-3 text-center sm:leading-[60px] md:leading-[60px] lg:leading-[60px] xl:leading-[60px] hat"
          >
            Explore the Future of <br /> Immersive Experiences
          </h1>
          <p
            data-aos="fade-up"
            className="text-white text-md text-center mm:px-3 sm:px-3 md:px-0 lg:px-0 xl:px-0"
          >
            Our Platform Empowers Creators to Build Immersive Worlds, Merging
            Virtual <br /> and Augmented Realities Seamlessly.
          </p>

          <div className="grid relative justify-center ss:grid-cols-[90%] mm:grid-cols-[90%] sm:grid-cols-[90%] md:grid-cols-[30%_60%] lg:grid-cols-[30%_60%] xl:grid-cols-[30%_60%]">
            <div>
              <div
                data-aos="fade-right"
                className="ss:hidden mm:hidden sm:hidden md:flex lg:flex xl:flex justify-center mt-[50px] items-center h-screen"
              >
                {/* Center images */}
                <img
                  className="md:w-[228px] md:h-[580px] lg:w-[300px] lg:h-[560px] xl:w-[368px] xl:h-[560px] absolute md:top-[150px] lg:top-12 xl:top-10 transition-opacity duration-500"
                  src={images[visibleImageIndex]}
                  alt={`Image ${visibleImageIndex + 1}`}
                />
              </div>
            </div>
            <div>
              <div className="lg:flex xl:flex gap-5">
                <div data-aos="fade-up">
                  <div className="bg-[#1a2238] border-2 border-[#19c1f2] rounded-2xl p-5 mt-[50px] ss:mb-[30px] mm:mb-[30px] sm:mb-[30px] animated-section">
                    <div className="flex justify-start  pb-[20px]">
                      <span className="bg-og-color bg-clip-text text-transparent border border-[#19c1f2] px-4 py-1 rounded-full hat">
                        First Stage
                      </span>
                    </div>
                    <h1 className="text-white hat text-[30px] pb-[20px]">
                      Virtual Stores
                    </h1>
                    <p className="text-white text-md">
                      Explore virtual showrooms as if you were actually there.
                      Walk through a path, check out products closely, and get a
                      feel for what you’re buying.
                    </p>
                  </div>
                </div>
                <div data-aos="fade-down">
                  <div className="bg-[#1a2238] border-2 border-[#19c1f2] rounded-2xl p-5 ss:mb-[30px] mm:mb-[30px] sm:mb-[30px] md:mt-[30px] lg:mt-[50px] xl:mt-[50px] animated-section">
                    <div className="flex justify-start pb-[20px]">
                      <span className="bg-og-color bg-clip-text text-transparent border border-[#19c1f2] px-4 py-1 rounded-full hat">
                        Second Stage
                      </span>
                    </div>
                    <h1 className="text-white hat text-[30px] pb-[20px]">
                      Digital Try-Ons
                    </h1>
                    <p className="text-white text-md pe-5">
                      See how items look on you or in your space before you buy.
                      Whether it’s clothes, furniture, or accessories, you can
                      try them out easily.
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="flex justify-center">
                <div className="xl:w-[465px] border-2 bg-[#1a2238] border-[#19c1f2] rounded-2xl p-5 sm:mb-[30px] md:mb-[60px] md:mt-[0px] xl:mt-[0px] animated-section">
                  <div className="flex justify-start pb-[20px]">
                    <span className="bg-og-color bg-clip-text text-transparent border border-[#19c1f2] px-4 py-1 rounded-full hat">
                      Third Stage
                    </span>
                  </div>
                  <h1 className="text-white hat text-[30px] pb-[20px]">
                    Evolve
                  </h1>
                  <p className="text-white text-md pe-5">
                    Pay using various methods, including cryptocurrencies. It’s
                    fast, secure, and flexible, making your shopping experience
                    smooth and hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="grid  justify-center grid-cols-[40%_40%]">
            <div>
              <div className="flex justify-center"></div>
            </div>
            <div className="">
              <div className="flex justify-start pt-[90px] pb-[50px]">
                <span className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#19c1f2] px-4 py-1 rounded-full hat">
                  Second Stage
                </span>
              </div>
              <h1 className="text-white hat text-[50px] pb-[50px]">
                Digital Try-Ons
              </h1>
              <p className="text-white text-md">
                See how items look on you or in your space before you buy.
                Whether it’s clothes, furniture, or accessories, you can try
                them out easily.
              </p>
            </div>
          </div>
          <div className="grid  justify-center grid-cols-[40%_40%]">
            <div>
              <div className="flex justify-center">
                <img className="w-[368px] h-[560px]" src={batuk3} alt="" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-start pt-[90px] pb-[50px]">
                <span className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#19c1f2] px-4 py-1 rounded-full hat">
                  Third Stage
                </span>
              </div>
              <h1 className="text-white hat text-[50px] pb-[50px]">Evolve</h1>
              <p className="text-white text-md">
                Pay using various methods, including cryptocurrencies. It’s
                fast, secure, and flexible, making your shopping experience
                smooth and hassle-free.
              </p>
            </div>
          </div> */}
        </div>
        {/* 1-2-3-section  */}
        <div
          ref={blockchainSectionRef}
          className="ss:pt-[80px] mm:pt-[80px] sm:pt-[80px] md:pt-[80px] lg:pt-[80px] xl:pt-0"
        >
          <div className="py-3 flex justify-center">
            <span
              data-aos="fade-down"
              className="flash-text ss:text-[18px] border border-[#19c1f2] px-4 py-1 rounded-full hat"
            >
              Blockchain Integration
            </span>
          </div>
          <h1
            data-aos="fade-up"
            className="text-white ss:text-[30px] mm:text-[40px] sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[50px] pb-5 text-center sm:leading-[60px] md:leading-[60px] lg:leading-[60px] xl:leading-[60px] hat"
          >
            Where Immersive Reality <br /> Meets Immutable Security
          </h1>
          <div className="grid ss:grid-cols-1 mm:grid-cols-1 sm:grid-cols-1 mg:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ss:px-[20px] mm:px-[20px] sm:px-[20px] md:px-[30px] xl:px-[150px] ss:gap-5 mm:gap-5 sm:gap-5 md:gap-5 xl:gap-10">
            <div className="bg-[#2222228f] rounded-[30px] hover:bg-[#2b2b2bd9] group transition-all duration-300 ss:p-5 mm:p-5 sm:p-8 md:p-8 lg:p-8 xl:p-8">
              <h1
                data-aos="fade-right"
                className="num hat py-4 group-hover:text-white transition-all duration-700"
              >
                01
              </h1>
              <h2
                data-aos="fade-right"
                className="hat bg-og-color bg-clip-text text-transparent text-[30px] pt-3 pb-5"
              >
                Grabit Coin
              </h2>
              <p data-aos="fade-right" className="text-white pb-5">
                The platform introduces Grabit Coin, a native cryptocurrency for
                the Grabit ecosystem. Users can use Grabit Coins for purchases.
                They can also earn rewards and access exclusive features.
              </p>
              <div data-aos="fade-left" className="pb-5">
                <img className="rounded-[20px]" src={ar1} alt="" />
              </div>
            </div>
            <div className="bg-[#2222228f] hover:bg-[#2b2b2bd9] group transition-all duration-300 rounded-[30px] ss:p-5 mm:p-5 sm:p-8 md:p-8 lg:p-8 xl:p-8">
              <div>
                <img
                  data-aos="fade-left"
                  className="rounded-[20px]"
                  src={ar2}
                  alt=""
                />
              </div>
              <h1
                data-aos="fade-right"
                className="num hat py-4 group-hover:text-white transition-all duration-700"
              >
                02
              </h1>
              <h2
                data-aos="fade-right"
                className="hat bg-og-color bg-clip-text text-transparent text-[28px] pt-3 pb-5"
              >
                Seamless and Secure Transactions
              </h2>
              <p data-aos="fade-right" className="text-white">
                Grabit Shop uses blockchain technology to secure all
                transactions. It ensures that transactions are transparent and
                decentralized. This protects user data and provides a
                verifiable, reliable record of all purchases.
              </p>
            </div>
          </div>
          <div className="md:block lg:flex xl:flex items-center mt-8 ss:mx-[20px] mm:mx-[20px] sm:mx-[20px] md:mx-[30px] xl:mx-[150px] bg-[#2222228f] rounded-[30px] hover:bg-[#2b2b2bd9] group transition-all duration-300 ss:p-5 mm:p-5 sm:p-8 md:p-8 lg:p-8 xl:p-8">
            <div>
              <h1
                data-aos="fade-right"
                className="num hat py-4 group-hover:text-white transition-all duration-700"
              >
                03
              </h1>
              <h2
                data-aos="fade-right"
                className="hat bg-og-color bg-clip-text text-transparent text-[30px] pt-3 pb-5"
              >
                Multi-Currency Support
              </h2>
              <p
                data-aos="fade-right"
                className="text-white ss:pb-5 mm:pb-5 sm:pb-5"
              >
                In addition to Grabit Coin, the platform supports various fiat
                and cryptocurrency payment options. This makes it accessible to
                a global audience. Users can transact in the currency they
                prefer.
              </p>
            </div>
            <div>
              <div>
                <img
                  data-aos="fade-left"
                  className="rounded-[20px]"
                  src={curry}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* road-map */}
        <div ref={roadmapSectionRef} className="pt-[80px] relative">
          <div data-aos="fade-down" className="py-3 flex justify-center">
            <span className="flash-text border border-[#19c1f2] px-4 py-1 rounded-full hat">
              Road Map
            </span>
          </div>
          <h1
            data-aos="fade-up"
            className="text-white ss:text-[30px] mm:text-[40px] sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[50px] pb-5 text-center sm:leading-[60px] md:leading-[60px] lg:leading-[60px] xl:leading-[60px] hat"
          >
            The Journey of
            <br /> Grabit Shop
          </h1>

          <div className="md:flex lg:flex xl:flex justify-between ss:px-[20px] mm:px-[30px] sm:px-[30px] md:px-[40px] md:gap-8 lg:px-[150px] xl:px-[100px] mb-[30px]">
            <div
              data-aos="fade-right"
              className="bg-[#1a2238] border border-[#19c1f2] shadow-[#19c1f2] shadow-md ss:p-7 mm:p-5 sm:p-7 md:p-5 lg:p-7 xl:p-7 ss:mb-[30px] mm:mb-[30px] sm:mb-[30px] md:mb-0 lg:mb-0 xl:mb-0 rounded-3xl "
            >
              <div className="relative border-l-4 border-[#2166b0] ss:pl-6 ss:pb-7 mm:pl-6 mm:pb-6 sm:pl-6 sm:pb-6 md:pl-6 md:pb-6 lg:pl-6 lg:pb-6 xl:pl-6 xl:pb-6 ">
                <h3 className="text-md font-semibold text-[#19c1f2]">
                  Phase 1
                </h3>
                <p className="text-white mb-4 ss:text-md mm:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl hat">
                  3rd Quarter 2024
                </p>
                <ul className="list-disc list-inside space-y-2 ss:text-[14px] mm:text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-white">
                  <li>Social Media Launching</li>
                  <li>Website Launching</li>
                  <li>Whitepaper</li>
                  <li>Social Media Marketing</li>
                  <li>Community Growth</li>
                </ul>
                <div className="ball absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                  1
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="xl:block lg:hidden md:hidden sm:hidden mm:hidden ss:hidden border border-[#19c1f2] items-center rounded-[30px] flex justify-center p-5"
            >
              <div className=" overflow-hidden relative rounded-[30px] object-cover flex justify-center">
                <img
                  className="rounded-[30px] transform transition-transform duration-300 hover:scale-110"
                  src={paper}
                  alt=""
                />
                <div className="relative">
                  <a
                    href="GrabitShop_WhitePaper_V1.pdf"
                    download="GrabitShop_WhitePaper_V1.pdf"
                  >
                    <div className="group bg-[#19c1f2] w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl text-white absolute right-5 bottom-3 cursor-pointer transition-all duration-300 overflow-hidden hover:w-[160px]">
                      <MdOutlineDownloadForOffline />
                      <span className="hidden ml-3 text-white text-sm font-semibold transition-opacity duration-300 group-hover:block hat">
                        Download
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-[#1a2238] border border-[#19c1f2] shadow-[#19c1f2] shadow-md ss:p-7 mm:p-5 sm:p-7 md:p-5 lg:p-7 xl:p-7 rounded-3xl"
            >
              <div className="relative border-r-4 border-[#2166b0] ss:pr-6 ss:pb-2 mm:pr-6 mm:pb-6 sm:pr-6 sm:pb-8 md:pr-6 md:pb-9 lg:pr-6 lg:pb-9 xl:pr-6 xl:pb-6 ">
                <h3 className="text-md font-semibold text-[#19c1f2]">
                  Phase 2
                </h3>
                <p className="text-white mb-4 ss:text-md mm:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl hat">
                  4th Quarter 2024
                </p>
                <ul className="list-disc list-inside space-y-[3px] ss:text-[14px] mm:text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-white">
                  <li>Audit Report</li>
                  <li>KYC Completion & Doxxed Team</li>
                  <li>Website Final Version</li>
                  <li>1st Phase Presale</li>
                  <li>Beta Grabitshop App Version</li>
                  <li>2nd Phase Presale & launching</li>
                </ul>
                <div className="ball-2 absolute top-0 right-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                  2
                </div>
              </div>
            </div>
          </div>

          <div className="xl:hidden lg:block md:block sm:block mm:block ss:block mb-[30px] ss:mx-[20px] mm:mx-[30px] sm:mx-[30px] lg:mx-[220px] md:mx-[100px] border border-[#19c1f2] items-center rounded-[30px] flex justify-center ss:p-3 mm:p-3 sm:p-3 md:p-5 lg:p-5">
            <div className=" overflow-hidden relative rounded-[30px] object-cover flex justify-center">
              <img
                className="rounded-[30px] transform transition-transform duration-300 hover:scale-110"
                src={paper}
                alt=""
              />
              <div className="relative">
                <a
                  href="GrabitShop_WhitePaper_V1.pdf"
                  download="GrabitShop_WhitePaper_V1.pdf"
                >
                  <div className="group bg-[#19c1f2] ss:w-[35px] ss:h-[35px] mm:w-[40px] mm:h-[40px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center text-2xl text-white absolute ss:right-2 ss:bottom-3 mm:right-3 mm:bottom-3 sm:right-5 sm:bottom-3 md:right-5 md:bottom-3 lg:right-5 lg:bottom-3 cursor-pointer transition-all duration-300 overflow-hidden hover:w-[160px]">
                    <MdOutlineDownloadForOffline />
                    <span className="hidden ml-3 text-white text-sm font-semibold transition-opacity duration-300 group-hover:block hat">
                      Download
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="md:flex lg:flex xl:flex justify-between gap-8 ss:px-[20px] mm:px-[30px] sm:px-[30px] md:px-[40px] lg:px-[150px] xl:px-[400px]">
            <div
              data-aos="fade-right"
              className="bg-[#1a2238] border border-[#19c1f2] shadow-[#19c1f2] shadow-md ss:p-7 mm:p-5 sm:p-7 md:p-5 lg:p-7 xl:p-7 ss:mb-[30px] mm:mb-[30px] sm:mb-[30px] md:mb-[0px] lg:mb-[0px] xl:mb-[0px] rounded-3xl"
            >
              <div className="relative border-l-4 border-[#2166b0] ss:pl-6 ss:pb-6 mm:pl-6 mm:pb-10 sm:pl-6 sm:pb-8 md:pl-6 md:pb-6 lg:pl-6 lg:pb-6 xl:pl-6 xl:pb-6">
                <h3 className="text-md font-semibold text-[#19c1f2]">
                  Phase 3
                </h3>
                <p className="text-white ss:text-md mm:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl hat mb-4">
                  1nd Quarter 2025
                </p>
                <ul className="list-disc list-inside space-y-2 ss:text-[14px] mm:text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-white">
                  <li>CG & CMC Listing </li>
                  <li>Final Grabit App Version</li>
                  <li>Launch in Playstore & Appstore</li>
                </ul>
                <div className="ball-3 absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                  3
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="bg-[#1a2238] border border-[#19c1f2] shadow-[#19c1f2] shadow-md ss:p-7 mm:p-5 sm:p-7 md:p-5 lg:p-7 xl:p-7 rounded-3xl"
            >
              <div className="relative border-r-4 border-[#2166b0] ss:pr-6 ss:pb-8 mm:pr-6 mm:pb-6 sm:pr-6 sm:pb-6 md:pr-6 md:pb-6 lg:pr-6 lg:pb-6 xl:pr-6 xl:pb-6">
                <h3 className="text-md font-semibold text-[#19c1f2]">
                  Phase 4
                </h3>
                <p className=" mb-4 ss:text-md mm:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl hat  text-white">
                  2nd Quarter 2025
                </p>
                <ul className="list-disc list-inside space-y-2 ss:text-[14px] mm:text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-white">
                  <li>
                    Partnership with Worldwide Top Brand <br /> and Bring
                    Together
                  </li>
                  <li>Tier 1 Cex Listing</li>
                  <li>More Coming Soon</li>
                </ul>
                <div className="ball-4 absolute top-0 right-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                  4
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <div className="absolute">
            <div className="relative border-l-4 border-[#2166b0] pl-6 pb-6 ms-[80px] mb-[30px]">
              <h3 className="text-xl font-semibold text-[#19c1f2]">Phase 1</h3>
              <p className="text-white mb-4">3rd Quarter 2024</p>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>Social Media Launching</li>
                <li>Website Launching</li>
                <li>Whitepaper</li>
                <li>Social Media Marketing</li>
                <li>Community Growth</li>
              </ul>
              <div className="ball absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                1
              </div>
            </div>
          </div>

          <div className="absolute bottom-[170px] left-[-30px]">
            <div className="relative border-l-4 border-[#2166b0] pl-6 pb-6 ms-[380px] mt-[30px]">
              <h3 className="text-xl font-semibold text-[#19c1f2]">Phase 2</h3>
              <p className="text-white mb-4">4th Quarter 2024</p>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>Audit Report</li>
                <li>KYC Completion & Doxxed Team</li>
                <li>Website Final Version</li>
                <li>1st Phase Presale</li>
                <li>Beta Grabitshop App Version</li>
                <li>2nd Phase Presale & launching</li>
              </ul>
              <div className="ball-2 absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                2
              </div>
            </div>
          </div>

          <div className="absolute bottom-[180px] left-[-100px]">
            <div className="relative border-l-4 border-[#2166b0] ms-[780px] pl-6 pb-6 mt-[30px]">
              <h3 className="text-xl font-semibold text-[#19c1f2]">Phase 3</h3>
              <p className="text-white mb-4">1nd Quarter 2025</p>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>CG & CMC Listing </li>
                <li>Final Grabit App Version</li>
                <li>Launch in Playstore & Appstore</li>
              </ul>
              <div className="ball-3 absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                3
              </div>
            </div>
          </div>

          <div className="absolute bottom-[130px] left-[40px]">
            <div className="relative border-l-4 border-[#2166b0] pl-6 pb-6 ms-[980px] mt-[30px]">
              <h3 className="text-xl font-semibold text-[#19c1f2]">Phase 4</h3>
              <p className="text-white mb-4">2nd Quarter 2025</p>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>Partnership with Worldwide Top Brand and Bring Together</li>
                <li>Tier 1 Cex Listing</li>
                <li>More Coming Soon</li>
              </ul>
              <div className="ball-3 absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                4
              </div>
            </div>
          </div> */}

            {/* <div className="grid grid-cols-2 justify-center px-[250px]">
            <div>
              <div className="relative border-l-4 border-[#2166b0] pl-6 pb-6 mb-[100px]">
                <h3 className="text-xl font-semibold text-[#19c1f2]">
                  Phase 1
                </h3>
                <p className="text-white mb-4">3rd Quarter 2024</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>Social Media Launching</li>
                  <li>Website Launching</li>
                  <li>Whitepaper</li>
                  <li>Social Media Marketing</li>
                  <li>Community Growth</li>
                </ul>
                <div className="ball absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                  1
                </div>
              </div>

              <div className="relative border-l-4 border-[#2166b0] pl-6 pb-6">
                <h3 className="text-xl font-semibold text-[#19c1f2]">
                  Phase 3
                </h3>
                <p className="text-white mb-4">1nd Quarter 2025</p>
                <ul className="list-disc list-inside space-y-2 text-white">
                  <li>CG & CMC Listing </li>
                  <li>Final Grabit App Version</li>
                  <li>Launch in Playstore & Appstore</li>
                </ul>
                <div className="ball-3 absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                  3
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="relative border-l-4 border-[#2166b0] pl-6 pb-6 mt-[100px]">
                  <h3 className="text-xl font-semibold text-[#19c1f2]">
                    Phase 2
                  </h3>
                  <p className="text-white mb-4">4th Quarter 2024</p>
                  <ul className="list-disc list-inside space-y-2 text-white">
                    <li>Audit Report</li>
                    <li>KYC Completion & Doxxed Team</li>
                    <li>Website Final Version</li>
                    <li>1st Phase Presale</li>
                    <li>Beta Grabitshop App Version</li>
                    <li>2nd Phase Presale & launching</li>
                  </ul>
                  <div className="ball-2 absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                    2
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative border-l-4 border-[#2166b0] pl-6 pb-6 mt-[100px]">
                  <h3 className="text-xl font-semibold text-[#19c1f2]">
                    Phase 4
                  </h3>
                  <p className="text-white mb-4">2nd Quarter 2025</p>
                  <ul className="list-disc list-inside space-y-2 text-white">
                    <li>
                      Partnership with Worldwide Top Brand and Bring Together
                    </li>
                    <li>Tier 1 Cex Listing</li>
                    <li>More Coming Soon</li>
                  </ul>
                  <div className="ball-3 absolute top-0 left-[-18px] w-8 h-8 bg-[#19c1f2] rounded-full flex items-center justify-center text-gray-900 font-semibold">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
        {/* faq-section  */}
        <div className="py-[80px]">
          <div data-aos="fade-down" className="py-3 flex justify-center">
            <span className="flash-text border border-[#19c1f2] px-4 py-1 rounded-full hat">
              FAQs
            </span>
          </div>
          <h1
            data-aos="fade-down"
            className="text-white ss:text-[30px] mm:text-[40px] sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[50px]  text-center sm:leading-[60px] md:leading-[60px] lg:leading-[60px] xl:leading-[60px] hat"
          >
            Frequently
            <br /> Aksed Questions
          </h1>
          <p
            data-aos="fade-up"
            className="text-white text-center text-md py-3 mb-[15px] "
          >
            Get the Facts: All About Our Immersive Technology of AR/VR in our
            Grabit Shop
          </p>
          <div
            data-aos="zoom-in"
            className="xl:flex lg:flex md:flex sm:block sm:text-center mm:block mm:text-center ss:block ss:text-center justify-center md:px-2 gap-3 mb-12"
          >
            {Object.keys(faqData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-[250px] hat py-2 mt-5 text-sm  rounded-md transition-colors duration-300
              ${
                selectedCategory === category
                  ? "bg-[#19c1f2] text-white"
                  : "bg-[#ffffff1a] text-white"
              }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid ss:grid-cols-[90%] mm:grid-cols-[90%] sm:grid-cols-[90%] md:grid-cols-[40%_60%] lg:grid-cols-[40%_60%] xl:grid-cols-[40%_60%] ss:justify-center mm:justify-center sm:justify-center md:px-[30px] xl:px-[120px]">
            <div data-aos="fade-right">
              <img className=" px-3 img" src={faq} alt="" />
            </div>
            <div
              data-aos="fade-left"
              className="ss:pt-[80px] mm:pt-[80px] sm:pt-[80px] md:pt-0 lg:pt-0 xl:pt-0 space-y-6"
            >
              {faqData[selectedCategory].map((faq, index) => (
                <div
                  key={index}
                  className=" border border-[#19c1f2] shadow-[#19c1f2] p-5 rounded-lg mb-5 shadow-sm"
                >
                  <h3
                    onClick={() => toggleQuestion(selectedCategory, index)}
                    className="ss:text-sm mm:text-md sm:text-md md:text-lg lg:text-xl xl:text-xl text-white hat font-semibold cursor-pointer flex justify-between"
                  >
                    {faq.question}
                    <span
                      className={`transform transition-transform duration-300 `}
                    >
                      {openQuestions[selectedCategory] === index ? "-" : "+"}
                    </span>
                  </h3>

                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                      openQuestions[selectedCategory] === index
                        ? "max-h-40"
                        : "max-h-0"
                    }`}
                  >
                    <p
                      data-aos="fade-down"
                      className="text-white ss:text-[11.5px] mm:text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] mt-2"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Social media */}
        <div ref={socialSectionRef} className=" md:px-[30px] xl:px-[150px]">
          <div className="py-3 flex justify-center">
            <span
              data-aos="fade-down"
              className="flash-text border border-[#19c1f2] px-4 py-1 rounded-full hat"
            >
              Socials
            </span>
          </div>
          <h1
            data-aos="fade-up"
            className="text-white ss:text-[30px] mm:text-[40px] sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[50px] pb-10 text-center leading-[60px] hat"
          >
            Social media
          </h1>
          <div className="xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row ss:flex ss:flex-col ss:items-center sm:flex sm:flex-col sm:items-center justify-around mm:flex mm:flex-col mm:items-center">
            <div data-aos="fade-right">
              <div
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${
                    position.y / 1.5
                  }deg) rotateY(${
                    position.x / 1.5
                  }deg) scale3d(1.02, 1.02, 1.02)`,
                  transition: "transform 0.4s ease",
                  willChange: "transform",
                }}
              >
                <img className="w-[266px] h-[376px]" src={fream1} alt="" />
                <div>
                  <img
                    style={{
                      transform: `translate(${position.x / 1.5}px, ${
                        position.y / 1.5
                      }px) rotateX(${-position.y / 12}deg) rotateY(${
                        -position.x / 12
                      }deg)`,
                      transition: "transform 0.4s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[215px] ss:h-[320px] ss:top-[29px] ss:left-[32px] mm:w-[215px] mm:h-[320px] mm:top-[29px] mm:left-[32px] sm:w-[215px] sm:h-[320px] sm:top-[29px] sm:left-[32px] md:w-[130px] md:h-[330px] md:top-[23px] md:left-[27px] lg:w-[198px] lg:h-[320px] lg:top-[28px] lg:left-[26px] xl:w-[215px] xl:h-[320px] xl:top-[29px] xl:left-[32px]"
                    src={layer1}
                    alt=""
                  />
                  <img
                    style={{
                      transform: `translate(${position.x / 1.5}px, ${
                        position.y / 1.5
                      }px) rotateX(${-position.y / 60}deg) rotateY(${
                        -position.x / 60
                      }deg)`,
                      transition: "transform 0.2s ease-out",
                      willChange: "transform",
                    }}
                    className="absolute z-10 ss:w-[100px] ss:h-[93px] ss:top-[130px] ss:left-[90px] mm:w-[100px] mm:h-[93px] mm:top-[130px] mm:left-[90px] sm:w-[100px] sm:h-[93px] sm:top-[130px] sm:left-[90px] md:w-[80px] md:h-[87px] md:top-[140px] md:left-[55px] lg:w-[90px] lg:h-[93px] lg:top-[130px] lg:left-[80px] xl:w-[100px] xl:h-[93px] xl:top-[130px] xl:left-[90px]"
                    src={twitter}
                    alt=""
                  />
                  <h4 className="ss:text-[18px] mm:text-[18px] sm:text-[18px] md:text-[16px] lg:text-[18px] xl:text-[18px] absolute ss:bottom-[60px] ss:left-[85px] mm:bottom-[60px] mm:left-[85px] sm:bottom-[60px] sm:left-[85px] md:bottom-[100px] md:left-[45px] lg:bottom-[63px] lg:left-[73px] xl:bottom-[60px] xl:left-[85px] l-t-1 text-white hat">
                    TWITTER
                  </h4>
                </div>
                <div>
                  <img
                    style={{
                      transform: `translate(${position.x / 1.5}px, ${
                        position.y / 1.5
                      }px) rotateX(${-position.y / 15}deg) rotateY(${
                        -position.x / 15
                      }deg)`,
                      transition: "transform 0.2s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[195px] ss:h-[303px] ss:top-[39px] ss:left-[42px] mm:w-[195px] mm:h-[303px] mm:top-[39px] mm:left-[42px] sm:w-[195px] sm:h-[303px] sm:top-[39px] sm:left-[42px] md:w-[145px] md:h-[303px] md:top-[35px] md:left-[20px] lg:w-[185px] lg:h-[303px] lg:top-[37px] lg:left-[33px] xl:w-[195px] xl:h-[303px] xl:top-[39px] xl:left-[42px]"
                    src={layer12}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* <div
              className="relative "
              onMouseMove={handleMouseMove2}
              onMouseLeave={handleMouseLeave2}
              style={{
                transform: `perspective(1000px) rotateX(${
                  position2.y / 15
                }deg) rotateY(${
                  position2.x / 15
                }deg) scale3d(1.02, 1.02, 1.02)`, // Slight 3D scale on hover
                transition: "transform 0.4s ease",
                willChange: "transform",
              }}
            >
              <img className="w-[286px] h-[396px]" src={fream2} alt="" />
              <div>
                <img
                  style={{
                    transform: `translate(${position2.x / 1.5}px, ${
                      position2.y / 1.5
                    }px) rotateX(${-position2.y / 12}deg) rotateY(${
                      -position2.x / 12
                    }deg)`,
                    transition: "transform 0.4s ease",
                    willChange: "transform",
                  }}
                  className="absolute w-[245px] h-[344px] top-[29px] left-[22px]"
                  src={layer2}
                  alt=""
                />
                <img
                  style={{
                    transform: `translate(${position2.x / 1.5}px, ${
                      position2.y / 1.5
                    }px) rotateX(${-position2.y / 60}deg) rotateY(${
                      -position2.x / 60
                    }deg)`,
                    transition: "transform 0.2s ease-out",
                    willChange: "transform",
                  }}
                  className="absolute z-10 w-[100px] h-[93px] top-[150px] left-[100px]"
                  src={telegram}
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    transform: `translate(${position2.x / 1.5}px, ${
                      position2.y / 1.5
                    }px) rotateX(${-position2.y / 15}deg) rotateY(${
                      -position2.x / 15
                    }deg)`,
                    transition: "transform 0.2s ease",
                    willChange: "transform",
                  }}
                  className="absolute w-[225px] h-[323px] top-[39px] left-[32px]"
                  src={layer22}
                  alt=""
                />
              </div>
            </div> */}

            <div data-aos="fade-right">
              <div
                className="relative "
                onMouseMove={handleMouseMove2}
                onMouseLeave={handleMouseLeave2}
                style={{
                  transform: `perspective(1000px) rotateX(${
                    position2.y / 1.5
                  }deg) rotateY(${
                    position2.x / 1.5
                  }deg) scale3d(1.02, 1.02, 1.02)`, // Slight 3D scale on hover
                  transition: "transform 0.4s ease",
                  willChange: "transform",
                }}
              >
                <img className="w-[266px] h-[376px]" src={fream2} alt="" />
                <div>
                  <img
                    style={{
                      transform: `translate(${position2.x / 1.5}px, ${
                        position2.y / 1.5
                      }px) rotateX(${-position2.y / 12}deg) rotateY(${
                        -position2.x / 12
                      }deg)`,
                      transition: "transform 0.4s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[215px] ss:h-[320px] ss:top-[29px] ss:left-[25px] mm:w-[215px] mm:h-[320px] mm:top-[29px] mm:left-[25px] sm:w-[215px] sm:h-[320px] sm:top-[29px] sm:left-[25px] md:w-[130px] md:h-[330px] md:top-[23px] md:left-[24px] lg:w-[202px] lg:h-[320px] lg:top-[28px] lg:left-[20px] xl:w-[215px] xl:h-[320px] xl:top-[29px] xl:left-[25px]"
                    src={layer2}
                    alt=""
                  />
                  <img
                    style={{
                      transform: `translate(${position2.x / 1.5}px, ${
                        position2.y / 1.5
                      }px) rotateX(${-position2.y / 60}deg) rotateY(${
                        -position2.x / 60
                      }deg)`,
                      transition: "transform 0.2s ease-out",
                      willChange: "transform",
                    }}
                    className="absolute z-10 ss:w-[100px] ss:h-[93px] ss:top-[130px] ss:left-[80px] mm:w-[100px] mm:h-[93px] mm:top-[130px] mm:left-[80px] sm:w-[100px] sm:h-[93px] sm:top-[130px] sm:left-[80px] md:w-[80px] md:h-[87px] md:top-[140px] md:left-[50px] lg:w-[90px] lg:h-[93px] lg:top-[130px] lg:left-[80px] xl:w-[100px] xl:h-[93px] xl:top-[130px] xl:left-[80px]"
                    src={telegram}
                    alt=""
                  />
                  <h4 className="ss:text-[18px] mm:text-[18px] sm:text-[18px] md:text-[16px] lg:text-[18px] xl:text-[18px] absolute ss:bottom-[60px] ss:left-[65px] mm:bottom-[60px] mm:left-[70px] sm:bottom-[60px] sm:left-[60px] md:bottom-[100px] md:left-[29px] lg:bottom-[63px] lg:left-[55px] xl:bottom-[60px] xl:left-[60px] l-t-2 text-white hat">
                    TELEGRAM
                  </h4>
                </div>
                <div>
                  <img
                    style={{
                      transform: `translate(${position2.x / 1.5}px, ${
                        position2.y / 1.5
                      }px) rotateX(${-position2.y / 15}deg) rotateY(${
                        -position2.x / 15
                      }deg)`,
                      transition: "transform 0.2s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[195px] ss:h-[303px] ss:top-[39px] ss:left-[36px] mm:w-[195px] mm:h-[303px] mm:top-[39px] mm:left-[36px] sm:w-[195px] sm:h-[303px] sm:top-[39px] sm:left-[36px] md:w-[145px] md:h-[303px] md:top-[35px] md:left-[17px] lg:w-[185px] lg:h-[303px] lg:top-[37px] lg:left-[28px] xl:w-[195px] xl:h-[303px] xl:top-[39px] xl:left-[36px]"
                    src={layer22}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div
                className="relative "
                onMouseMove={handleMouseMove3}
                onMouseLeave={handleMouseLeave3}
                style={{
                  transform: `perspective(1000px) rotateX(${
                    position3.y / 1.5
                  }deg) rotateY(${
                    position3.x / 1.5
                  }deg) scale3d(1.02, 1.02, 1.02)`, // Slight 3D scale on hover
                  transition: "transform 0.4s ease",
                  willChange: "transform",
                }}
              >
                <img className="w-[266px] h-[376px]" src={fream3} alt="" />
                <div>
                  <img
                    style={{
                      transform: `translate(${position3.x / 1.5}px, ${
                        position3.y / 1.5
                      }px) rotateX(${-position3.y / 12}deg) rotateY(${
                        -position3.x / 12
                      }deg)`,
                      transition: "transform 0.4s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[215px] ss:h-[334px] ss:top-[20px] ss:left-[26px] mm:w-[215px] mm:h-[334px] mm:top-[20px] mm:left-[26px] sm:w-[215px] sm:h-[334px] sm:top-[20px] sm:left-[26px] md:w-[130px] md:h-[330px] md:top-[23px] md:left-[26px] lg:w-[202px] lg:h-[320px] lg:top-[28px] lg:left-[20px] xl:w-[215px] xl:h-[334px] xl:top-[20px] xl:left-[26px]"
                    src={layer3}
                    alt=""
                  />
                  <img
                    style={{
                      transform: `translate(${position3.x / 1.5}px, ${
                        position3.y / 1.5
                      }px) rotateX(${-position3.y / 60}deg) rotateY(${
                        -position3.x / 60
                      }deg)`,
                      transition: "transform 0.2s ease-out",
                      willChange: "transform",
                    }}
                    className="absolute z-10 ss:w-[100px] ss:h-[93px] ss:top-[130px] ss:left-[85px] mm:w-[100px] mm:h-[93px] mm:top-[130px] mm:left-[85px] sm:w-[100px] sm:h-[93px] sm:top-[130px] sm:left-[85px] md:w-[80px] md:h-[87px] md:top-[140px] md:left-[55px] lg:w-[90px] lg:h-[93px] lg:top-[130px] lg:left-[80px] xl:w-[100px] xl:h-[93px] xl:top-[130px] xl:left-[85px]"
                    src={youtube}
                    alt=""
                  />
                  <h4 className="ss:text-[18px] mm:text-[18px] sm:text-[18px] md:text-[16px] lg:text-[18px] xl:text-[18px] absolute ss:bottom-[60px] ss:left-[78px] mm:bottom-[60px] mm:left-[80px] sm:bottom-[60px] sm:left-[80px] md:bottom-[100px] md:left-[40px] lg:bottom-[63px] lg:left-[65px] xl:bottom-[60px] xl:left-[80px] l-t-3 text-white hat">
                    YOUTUBE
                  </h4>
                </div>
                <div>
                  <img
                    style={{
                      transform: `translate(${position3.x / 1.5}px, ${
                        position3.y / 1.5
                      }px) rotateX(${-position3.y / 15}deg) rotateY(${
                        -position3.x / 15
                      }deg)`,
                      transition: "transform 0.2s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[195px] ss:h-[303px] ss:top-[37px] ss:left-[36px] mm:w-[195px] mm:h-[303px] mm:top-[37px] mm:left-[36px] sm:w-[195px] sm:h-[303px] sm:top-[37px] sm:left-[36px] md:w-[145px] md:h-[303px] md:top-[35px] md:left-[18px] lg:w-[185px] lg:h-[303px] lg:top-[37px] lg:left-[28px] xl:w-[195px] xl:h-[303px] xl:top-[37px] xl:left-[36px]"
                    src={layer32}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div
                className="relative "
                onMouseMove={handleMouseMove4}
                onMouseLeave={handleMouseLeave4}
                style={{
                  transform: `perspective(1000px) rotateX(${
                    position4.y / 1.5
                  }deg) rotateY(${
                    position4.x / 15
                  }deg) scale3d(1.02, 1.02, 1.02)`, // Slight 3D scale on hover
                  transition: "transform 0.4s ease",
                  willChange: "transform",
                }}
              >
                <img className="w-[266px] h-[366px]" src={fream4} alt="" />
                <div>
                  <img
                    style={{
                      transform: `translate(${position4.x / 1.5}px, ${
                        position4.y / 1.5
                      }px) rotateX(${-position4.y / 12}deg) rotateY(${
                        -position4.x / 12
                      }deg)`,
                      transition: "transform 0.4s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[215px] ss:h-[330px] ss:top-[25px] ss:left-[22px] mm:w-[215px] mm:h-[330px] mm:top-[25px] mm:left-[22px] sm:w-[215px] sm:h-[330px] sm:top-[25px] sm:left-[22px] md:w-[130px] md:h-[330px] md:top-[23px] md:left-[22px] lg:w-[197px] lg:h-[320px] lg:top-[28px] lg:left-[20px] xl:w-[215px] xl:h-[330px] xl:top-[25px] xl:left-[22px]"
                    src={layer4}
                    alt=""
                  />
                  <img
                    style={{
                      transform: `translate(${position4.x / 1.5}px, ${
                        position4.y / 1.5
                      }px) rotateX(${-position4.y / 60}deg) rotateY(${
                        -position4.x / 60
                      }deg)`,
                      transition: "transform 0.2s ease-out",
                      willChange: "transform",
                    }}
                    className="ss:w-[100px] ss:h-[93px] ss:top-[135px] ss:left-[80px] mm:w-[100px] mm:h-[93px] mm:top-[135px] mm:left-[80px] sm:w-[100px] sm:h-[93px] sm:top-[135px] sm:left-[80px] md:w-[80px] md:h-[87px] md:top-[140px] md:left-[49px] absolute z-10 lg:w-[90px] lg:h-[93px] lg:top-[130px] lg:left-[75px] xl:w-[100px] xl:h-[93px] xl:top-[135px] xl:left-[80px]"
                    src={discord}
                    alt=""
                  />
                  <h4 className="ss:text-[18px] mm:text-[18px] sm:text-[18px] md:text-[16px] lg:text-[18px] xl:text-[18px] absolute ss:bottom-[45px] ss:left-[82px] mm:bottom-[45px] mm:left-[82px] sm:bottom-[47px] sm:left-[80px] md:bottom-[93px] md:left-[45px] lg:bottom-[57px] lg:left-[72px] xl:bottom-[55px] xl:left-[82px] l-t-4 text-white hat">
                    DISCORD
                  </h4>
                </div>
                <div>
                  <img
                    style={{
                      transform: `translate(${position4.x / 1.5}px, ${
                        position4.y / 1.5
                      }px) rotateX(${-position4.y / 15}deg) rotateY(${
                        -position4.x / 15
                      }deg)`,
                      transition: "transform 0.2s ease",
                      willChange: "transform",
                    }}
                    className="absolute ss:w-[195px] ss:h-[323px] ss:top-[30px] ss:left-[32px] mm:w-[195px] mm:h-[323px] mm:top-[30px] mm:left-[32px] sm:w-[195px] sm:h-[323px] sm:top-[30px] sm:left-[32px] md:w-[145px] md:h-[303px] md:top-[35px] md:left-[14px] lg:w-[185px] lg:h-[303px] lg:top-[37px] lg:left-[26px] xl:w-[195px] xl:h-[323px] xl:top-[30px] xl:left-[32px]"
                    src={layer42}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="fream1w-[268px] h-[396px] m-5">
            <div className="layer1 w-[255px] h-[354px] p-5  ">
              <div className="layer1-2 w-[255px] h-[353px] ">
                <div className="flex justify-center items-center">
                  <img src={twitter} alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* footer-section  */}
        <div className="pt-[80px] pb-[50px]">
          <div className="ss:px-3 mm:px-3 sm:px-3 xl:px-[150px] ss:flex ss:flex-col ss:justify-between ss:gap-2 ss:items-center mm:flex mm:flex-row mm:justify-between mm:items-center sm:flex sm:flex-row sm:justify-between sm:items-center md:flex md:flex-col md:items-center md:gap-5 lg:flex lg:flex-row lg:justify-between lg:items-center xl:flex xl:flex-row xl:justify-between xl:items-center">
            <div>
              <img
                data-aos="fade-right"
                className="cursor-pointer"
                onClick={() => scrollToSection(homeSectionRef)}
                src={logo}
                alt=""
              />
            </div>
            <div>
              <div
                data-aos="zoom-in"
                className="ss:hidden mm:hidden sm:hidden md:flex lg:flex xl:flex text-white text-md hat"
              >
                <div
                  onClick={() => scrollToSection(homeSectionRef)}
                  className="md:pe-[35px] lg:pe-[25px] xl:pe-[35px] cursor-pointer"
                >
                  Home
                </div>
                <div
                  onClick={() => scrollToSection(aboutSectionRef)}
                  className="md:pe-[35px] lg:pe-[25px] xl:pe-[35px] cursor-pointer"
                >
                  About
                </div>
                <div
                  onClick={() => scrollToSection(explorSectionRef)}
                  className="md:pe-[35px] lg:pe-[25px] xl:pe-[35px] cursor-pointer"
                >
                  Explor
                </div>
                <div
                  onClick={() => scrollToSection(blockchainSectionRef)}
                  className="md:pe-[35px] lg:pe-[25px] xl:pe-[35px] cursor-pointer"
                >
                  Blockchain
                </div>
                <div
                  onClick={() => scrollToSection(roadmapSectionRef)}
                  className="md:pe-[35px] lg:pe-[25px] xl:pe-[35px] cursor-pointer"
                >
                  RoadMap
                </div>
                <div
                  onClick={() => scrollToSection(socialSectionRef)}
                  className="cursor-pointer"
                >
                  Socials
                </div>
              </div>
            </div>
            <div>
              <button
                data-aos="fade-left"
                className="flash-button text-white ss:py-[12px] ss:px-[35px] mm:py-[12px] mm:px-[15px] sm:py-[12px] sm:px-[35px] md:py-[15px] md:px-[44px] lg:py-[13px] lg:px-[15px] xl:py-[15px] xl:px-[44px] btn rounded-[15px] hat relative overflow-hidden"
              >
                Contact Now
              </button>
            </div>
          </div>
          <p className="text-md text-[#ffffff33] text-center ss:pt-3 mm:pt-3 sm:pt-3 md:pt-3">
            Copyright © 2024 by Grabit Shop. All Rights Reserved.
          </p>
        </div>

        {/* bottomTotop-Button */}
        {showButton && (
          // <TERipple rippleColor="light">
          <button
            type="button"
            onClick={backToTop}
            className={` ${
              showButton
                ? `inline-block base:hidden ss:hidden mm:hidden sm:hidden rt:block md:block :block xl:block rt:fixed md:fixed lg:fixed lgxl:fixed rt:bottom-[100px] rt:left-[550px] md:bottom-[110px] md:left-[700px] lg:bottom-[40px] lg:left-[950px] xl:bottom-[80px] xl:left-[1400px] p-3 bg-og-color text-white font-medium text-xs  rounded-full shadow-md hover:bg-white hover:scale-110  transition duration-150 ease-in-out`
                : `hidden`
            }`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
          // </TERipple>
        )}
      </div>
    </div>
  );
};

export default Home;
