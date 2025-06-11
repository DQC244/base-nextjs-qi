import Link, { LinkProps } from "next/link";
import { CSSProperties, forwardRef, memo, ReactNode, useMemo } from "react";

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
  const { href, as, children, ...otherProps } = props;

  const nextRouter = useMemo(() => href || "#", [href]);

  return (
    <Link href={nextRouter} as={as} passHref={true} ref={ref} {...otherProps}>
      {children}
    </Link>
  );
});

AppLink.displayName = "AppLink";

export type AppLinkProps = LinkProps & {
  children: ReactNode;
  style?: CSSProperties;
};

export default memo(AppLink);
