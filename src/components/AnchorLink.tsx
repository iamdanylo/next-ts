import NextLink from "next/link";
import { useCallback } from "react";
import { scrollIntoView } from "seamless-scroll-polyfill";

type Props = {
  children: any;
  href: string;
  as?: string;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string;
  target?: string;
  replace?: boolean;
  ref?: any;
  className?: string;
  onClick?: () => void;
  block?: ScrollLogicalPosition;
}

export  const AnchorLink: React.FC<Props> = ({
  children,
  block,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ref,
  className,
  onClick,
  ...anchorProps
}) => {
  const handleClick = useCallback(
    (e: any) => {
      onClick?.();
      if (href.startsWith("#")) {
        e.preventDefault();
        const destination = document.querySelector(href);
        if (destination) {
          scrollIntoView(destination, {
            behavior: "smooth",
            block: block || "start",
            inline: "center",
          });
        }
      }
    },
    [href]
  );

  return (
    <NextLink
      legacyBehavior
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a
        ref={ref}
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        onKeyDown={handleClick}
        className={`text-thin ${className ?? ''}`}
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default AnchorLink;
