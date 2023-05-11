import Button from "./Button";
import AnchorLink from "./AnchorLink";
import { mainLinks } from "src/constants/common";
import { useCheckMobileScreen, useScrollDirection } from "@/utils/hooks";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import Context from "@/lib/context";

interface Props {
  className?: string;
  disabledNav?: boolean;
}

const Header: React.FC<Props> = ({ className, disabledNav = false }) => {
  const { mobileMenuIsOpened, setMobileMenuIsOpened } = useContext(Context);
  const stickyHeader = useRef<HTMLDivElement | null>(null);
  const scrollDirection = useScrollDirection();

  useLayoutEffect(() => {
    if (!stickyHeader?.current) return;
    const mainHeader = stickyHeader.current;

    const fixedTop = mainHeader.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add("fixedTop");
      } else {
        mainHeader.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  useEffect(() => {
    if (mobileMenuIsOpened) {
      document.body.classList.add("overflow-h");
    } else {
      document.body.classList.remove("overflow-h");
    }
  }, [mobileMenuIsOpened]);

  const isMobile = useCheckMobileScreen();
  const headerClassName = className ?? "";

  const handleMobileMenuClick = () => {
    setMobileMenuIsOpened(!mobileMenuIsOpened);
  };

  return (
    <div ref={stickyHeader}
      className={`header ${headerClassName} ${
        scrollDirection === "down" ? "hidden" : ""
      }`}
    >
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo-wrap">
            <img src="" alt="logo" />
          </div>
          {!disabledNav && (
            <>
              <div className="nav">
                {mainLinks.map((item) => (
                  <AnchorLink
                    key={item.name}
                    href={item.url}
                    block={item.block}
                    aria-label="Logo"
                    className="nav-link text-thin"
                  >
                    {item.name}
                  </AnchorLink>
                ))}
              </div>
              {!isMobile ? (
                <div className="btn-wrap">
                  <a
                    className="btn btn-text header-cta"
                  >
                    Free Trial
                  </a>
                </div>
              ) : (
                <div
                  onClick={handleMobileMenuClick}
                  className={`menu-btn ${mobileMenuIsOpened ? "active" : ""}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
