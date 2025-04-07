import {h} from "../core/roboto.js";
import { RouteParams } from "../utils/router.js";
import { getRouter } from "../utils/router-instance.js";


interface LinkProps {
  to: string;
  params?: RouteParams;
  query?: Record<string, string>;
  className?: string;
  children: any;
  [key: string]: any;
}

export const Link = ({ to, params, query, className, children, ...props }: LinkProps) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    try {
      const router = getRouter();
      const url = router.generateUrl(to, params, query);
      router.navigate(url);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const router = getRouter();
  const href = router.generateUrl(to, params, query);

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};