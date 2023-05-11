import { mainLinks } from "@/constants/common";
import Context from "@/lib/context";
import { useContext, useEffect } from "react";
import AnchorLink from "./AnchorLink";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useCheckMobileScreen } from "@/utils/hooks";

const MobileMenu = () => {
  const { mobileMenuIsOpened, setMobileMenuIsOpened } = useContext(Context);
  const isMobile = useCheckMobileScreen();
  const control = useAnimation();

  const handleCloseMenu = () => {
    setMobileMenuIsOpened(false);
  };

  useEffect(() => {
    if (mobileMenuIsOpened) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, mobileMenuIsOpened]);

  if (!isMobile) {
    return null;
  }

  return (
    <motion.div
      className="mobile-menu"
      key={"12da2f"}
      variants={{
        visible: { opacity: 1, zIndex: 5, transition: { duration: 0.4 } },
        hidden: { opacity: 0, zIndex: -1, },
      }}
      initial="hidden"
      animate={control}
    >
      <div className="list">
        {mainLinks.map((item) => (
          <AnchorLink
            key={item.name}
            href={item.url}
            className="link text-thin"
            onClick={handleCloseMenu}
          >
            {item.name}
          </AnchorLink>
        ))}
      </div>
      <Button className="menu-cta" title="Free Trial" onClick={() => {}} />
    </motion.div>
  );
};

export default MobileMenu;
