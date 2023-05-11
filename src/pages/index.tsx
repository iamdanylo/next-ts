import { useEffect, useState } from "react";
import {
  Head,
  Header,
  Button,
  FeatureCard,
  FAQItem,
  SubscriptionCard,
  Footer,
  ToggleButton,
  TestimonialsSlider,
  AnimatedBox,
  AnchorLink,
  CustomImage,
} from "src/components";
import { features, faq, pricing } from "src/constants/home";
import { Faq } from "src/types/common";
import Slider from "react-slick";
import { useCheckMobileScreen } from "@/utils/hooks";
import MobileMenu from "@/components/MobileMenu";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const settings = {
  customPaging: (i: number) => {
    return <div className="dot"></div>;
  },
  dotsClass: "slick-dots slick-thumb",
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  draggable: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const [faqs, setFaqs] = useState<Faq[]>(faq);
  const [isAnnualPricing, setIsAnnualPricing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const isMobile = useCheckMobileScreen();

  const { scrollYProgress } = useScroll();
  const hero1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const hero2 = useTransform(scrollYProgress, [0, 1], [0, -700]);

  const y1 = useParallax(scrollYProgress, -100);
  const y2 = useParallax(scrollYProgress, -400);
  const y3 = useParallax(scrollYProgress, -200);
  const y4 = useParallax(scrollYProgress, -300);

  useEffect(() => {
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const onPageLoad = () => {
    setLoading(false);
  };

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  const onHeroLoad = () => {
    setHeroLoaded(true);
  };

  return (
    <>
      <Head />
      <MobileMenu />
      <Header className={!loading ? "active" : ""} />
      <main className="main">
        <div className={`hero-image-wrap ${!loading ? "active" : ""}`}>
          <div className="elipse-lg"></div>
          <div className="elipse-md"></div>
          <div className="elipse-sm"></div>
        </div>
        <div id={"home"} />
        <section className={`hero-section ${!loading ? "active" : ""}`}>
          <div className="container">
            <motion.div className="box" style={{ y: !isMobile ? hero1 : 0 }}>
              <>
                <div className="text-wrap">
                  <AnimatedBox>
                    <h1 className="title text-lg">
                      Keep your equipment
                      <span className="gradient-text">
                        in top condition
                      </span>{" "}
                    </h1>
                  </AnimatedBox>
                  <AnimatedBox delay={0.24}>
                    <p className="desc text-body">
                      Perfect tool for the trucking and heavy equipment
                      industry, streamlining the workflow by providing a
                      comprehensive asset inspection within our user-friendly
                      app.
                    </p>
                  </AnimatedBox>
                </div>
                <AnimatedBox delay={0.27}>
                  <div className="btn-wrap">
                    <a
                      className="btn-contained btn btn-text"
                    >
                      Get Started
                    </a>
                    <AnchorLink
                      block="start"
                      href="#learn"
                      className="btn-outlined btn btn-text"
                    >
                      Learn more
                    </AnchorLink>
                  </div>
                </AnimatedBox>
              </>
            </motion.div>
            <AnimatedBox>
              <div id={"partners"} className="bottom-info">
                <p className="text-thin bottom-info-text">PARTNERS</p>
              </div>
            </AnimatedBox>
            <AnimatedBox>
              <div className="partners-wrap">
                <img src="./img/partner-1.png" alt="" />
                <img src="./img/partner-2.png" alt="" />
                <img src="./img/partner-3.png" alt="" />
                <img src="./img/partner-4.png" alt="" />
                <img src="./img/partner-5.png" alt="" />
                <img src="./img/partner-6.png" alt="" />
              </div>
            </AnimatedBox>
          </div>
        </section>
        <section className="steps-section">
          <div id={"learn"} className="container steps-container">
            <div className="title-wrap">
              <AnimatedBox>
                <h2 className="text-title steps-title">
                  Level up your inspections in 3 easy steps:
                </h2>
              </AnimatedBox>
            </div>
            <div className="steps-wrap">
              <div className="step-line-wrap step-line-1">
                <AnimatedBox>
                  <img src="./img/step-line-1.svg" alt="line" />
                </AnimatedBox>
              </div>
              <div className="step-line-wrap step-line-2">
                <AnimatedBox>
                  <img src="./img/step-line-2.svg" alt="line" />
                </AnimatedBox>
              </div>
              <div className="step-card left step-1">
                <div className="step-card-wrap">
                  <div className="step-image-wrap">
                    <AnimatedBox>
                      <img src="./img/step-1.svg" alt="" />
                    </AnimatedBox>
                  </div>
                  <AnimatedBox>
                    <h5 className="text-body step-card-title">CHECK OUT</h5>
                    <div className="step-card-list">
                      <p className="step-card-list-item text-sm">
                        1. Create <b>custom forms</b> and add vendors
                      </p>
                      <p className="step-card-list-item text-sm">
                        2. Make an inspection in less than <b>5 min</b>
                      </p>
                      <p className="step-card-list-item text-sm">
                        3. Enter the number of items given to the driver
                      </p>
                      <p className="step-card-list-item text-sm">
                        4. Driver signature and driver gets{" "}
                        <b>copy of inspection</b>
                      </p>
                    </div>
                  </AnimatedBox>
                </div>
              </div>
              <div className="step-card right step-2">
                <div className="step-card-wrap">
                  <div className="step-image-wrap">
                    <AnimatedBox>
                      <img src="./img/step-2.svg" alt="" />
                    </AnimatedBox>
                  </div>
                  <AnimatedBox>
                    <h5 className="text-body step-card-title">
                      DVIR <span>(Driver-Vehicle Inspection Report)</span>
                    </h5>
                    <div className="step-card-list">
                      <p className="step-card-list-item text-sm">
                        1. Daily <b>video inspections</b> by driver
                      </p>
                      <p className="step-card-list-item text-sm">
                        2. Cargo inspection
                      </p>
                      <p className="step-card-list-item text-sm">
                        3. Damages reporting{" "}
                      </p>
                      <p className="step-card-list-item text-sm">
                        4. <b>Analytics</b> of drivers behavior
                      </p>
                    </div>
                  </AnimatedBox>
                </div>
              </div>
              <div className="step-card left step-3">
                <div className="step-card-wrap">
                  <div className="step-image-wrap">
                    <AnimatedBox>
                      <img src="./img/step-3.svg" alt="" />
                    </AnimatedBox>
                  </div>
                  <AnimatedBox>
                    <h5 className="text-body step-card-title">CHECK IN</h5>
                    <div className="step-card-list">
                      <p className="step-card-list-item text-sm">
                        1. Check before and after
                      </p>
                      <p className="step-card-list-item text-sm">
                        2. If no damages - <b>ALL GOOD</b>
                      </p>
                      <p className="step-card-list-item text-sm">
                        3. If there is damages or missing items - <b>CLAIM</b>
                      </p>
                      <p className="step-card-list-item text-sm">
                        4. Drivers gets a copy to the email
                      </p>
                    </div>
                  </AnimatedBox>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section">
          <div className="container">
            <AnimatedBox>
              <h3 className="title text-title">Benefits</h3>
            </AnimatedBox>
            <AnimatedBox>
              <div className="features-wrap">
                {features.map((item) => (
                  <FeatureCard
                    key={item.title}
                    title={item.title}
                    iconUrl={item.iconUrl}
                    iconBgColor={item.iconBgColor}
                  />
                ))}
              </div>
            </AnimatedBox>
          </div>
        </section>
        <section
          className="mobile-product-section product-section"
          id={"about"}
        >
          <AnimatedBox disableYAnimation>
            <div className="sm-hidden gradient-1"></div>
          </AnimatedBox>
          <AnimatedBox disableYAnimation>
            <div className="gradient-2"></div>
          </AnimatedBox>
          <div className="container">
            <div className="content">
              <AnimatedBox>
                <motion.div className="box" style={{ y: y1 }}>
                  <div className="text-wrap">
                    <h3 className="title text-title">
                      Transform Your Inspection Game:
                    </h3>
                    <p className="desc text-sm">
                      Experience seamless performance and unlock the full
                      potential of your data with analytics at your fingertips.
                    </p>
                    <ul className="product-list">
                      <li className="list-item-text list-item">
                        <span className="icon">✅</span>Create inspections
                      </li>
                      <li className="list-item-text list-item">
                        <span className="icon">✅</span>Analyze data
                      </li>
                      <li className="list-item-text list-item">
                        <span className="icon">✅</span>Take instant action
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </AnimatedBox>
              <AnimatedBox>
                <div className="image-wrap">
                  <div className="elipse-bg">
                    <div className="elipse-lg"></div>
                    <div className="elipse-sm"></div>
                  </div>
                  <motion.div className="box" style={{ y: y3 }}>
                    <img src="./img/mobile-product.webp" alt="product-image" />
                  </motion.div>
                </div>
              </AnimatedBox>
            </div>
          </div>
        </section>
        <section className="web-product-section product-section">
          <div className="content">
            <AnimatedBox>
              <div className="image-wrap">
                <div className="elipse-bg">
                  <div className="elipse-lg"></div>
                  <div className="elipse-sm"></div>
                </div>
                <motion.div className="box" style={{ y: !isMobile ? y4 : 0 }}>
                  <img src="./img/web-product.webp" alt="product-image" />
                </motion.div>
              </div>
            </AnimatedBox>
            <AnimatedBox>
              <motion.div className="box" style={{ y: !isMobile ? y2 : 0 }}>
                <div className="text-wrap">
                  <h3 className="title text-title">
                    Keep your inventory in check and increase your profits!
                  </h3>
                  <p className="desc text-sm">
                    Accurate tracking provides a sense of clarity that allows
                    for better projections and more informed decision making.
                  </p>
                  <ul className="product-list">
                    <li className="list-item-text list-item">
                      <span className="icon">✅</span>Inventory/Vendor
                      Management
                    </li>
                    <li className="list-item-text list-item">
                      <span className="icon">✅</span>Location Management
                    </li>
                    <li className="list-item-text list-item">
                      <span className="icon">✅</span>Inventory Value
                    </li>
                  </ul>
                </div>
              </motion.div>
            </AnimatedBox>
          </div>
        </section>
        <section id={"reviews"} className="testimonials-section">
          <AnimatedBox disableYAnimation>
            <div className="sm-hidden gradient-1"></div>
          </AnimatedBox>
          <AnimatedBox disableYAnimation>
            <div className="sm-hidden gradient-2"></div>
          </AnimatedBox>
          <AnimatedBox disableYAnimation>
            <div className="sm-hidden gradient-3"></div>
          </AnimatedBox>
          <AnimatedBox disableYAnimation>
            <div className="sm-hidden gradient-4"></div>
          </AnimatedBox>
          <div className="container">
            <AnimatedBox>
              <div className="text-wrap">
                <h2 className="text-title title">A part of something bigger</h2>
                <p className="desc text-sm">
                  Our company is a part of a greater standalone heavy duty TMS
                  company called Fleet-Tec. This means that you will be able to
                  access many additional features just by being with us.
                </p>
                <p className="subtitle text-thin">
                  How are we helping our clients?
                </p>
              </div>
            </AnimatedBox>
            <AnimatedBox>
              <div className="slider-wrap">
                <TestimonialsSlider />
              </div>
            </AnimatedBox>
          </div>
        </section>
        <section id={"home"} className="pricing-section">
          <div className="content">
            <AnimatedBox>
              <h2 className="text-title title">Pricing</h2>
            </AnimatedBox>
            <AnimatedBox>
              <p className="desc text-thin">
                Get <span className="red-text">1 month free</span> with annual
                billing
              </p>
            </AnimatedBox>
            <AnimatedBox>
              <div className="toggle-wrap">
                <span className="text-thin toggle-label">Monthly</span>
                <ToggleButton
                  className="toggle-button"
                  onChange={() => setIsAnnualPricing(!isAnnualPricing)}
                  defaultIsChecked={isAnnualPricing}
                />
                <span className="text-thin toggle-label">Annual</span>
              </div>
            </AnimatedBox>
            <div className="container">
              <AnimatedBox>
                <div className="cards-wrap">
                  {isMobile ? (
                    <Slider {...settings}>
                      {pricing.map((p, i) => (
                        <SubscriptionCard
                          key={i}
                          title={p.title}
                          desc={p.desc}
                          reccuring={isAnnualPricing ? "year" : "month"}
                          price={isAnnualPricing ? p.annualPrice : p.price}
                          features={p.features}
                          isCustom={p?.isCustom}
                          hasTrial={p.hasTrial}
                        />
                      ))}
                    </Slider>
                  ) : (
                    pricing.map((p) => (
                      <SubscriptionCard
                        key={p.title}
                        title={p.title}
                        desc={p.desc}
                        reccuring={isAnnualPricing ? "year" : "month"}
                        price={isAnnualPricing ? p.annualPrice : p.price}
                        features={p.features}
                        isCustom={p?.isCustom}
                        hasTrial={p.hasTrial}
                      />
                    ))
                  )}
                </div>
              </AnimatedBox>
              <AnimatedBox>
                <div id={"contacts"} className="custom-option-wrap">
                  <div className="title-wrap">
                    <span className="text-md">Enterprise</span>
                    <span className="icon text-md">✨</span>
                  </div>
                  <div className="info-wrap">
                    <div className="info">
                      <div className="icon text-body">✅</div>
                      <span className="info-text text-body">
                        Custom solution for your enterprise
                      </span>
                    </div>
                    <a
                      href=""
                      rel="noreferrer"
                      target="_blank"
                      className="info-cta btn btn-text"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </AnimatedBox>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="content">
            <AnimatedBox>
              <h2 className="text-title title">Frequently Asked Questions</h2>
            </AnimatedBox>
            <AnimatedBox>
              <div className="faqs">
                {faqs.map((faq, index) => (
                  <FAQItem
                    faq={faq}
                    index={index}
                    key={index}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>
            </AnimatedBox>
          </div>
        </section>
        <section className="get-started-section">
          <div className="container">
            <div className="get-started-bg">
              <img
                src={
                  isMobile
                    ? "./img/get-started-bg-sm.svg"
                    : "./img/get-started-bg.svg"
                }
                alt=""
              />
            </div>
            <AnimatedBox>
              <div className="text-wrap">
                <h2 className="title text-title">Get started for free!</h2>
                <p className="desc text-body">
                  Effortlessly perform inspections and get consolidated analytic
                  reports in minutes.
                </p>
                <a
                  className="btn-purple btn btn-text"
                >
                  Start Free
                </a>
              </div>
            </AnimatedBox>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
