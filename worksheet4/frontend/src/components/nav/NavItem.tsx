import { useRouter } from "next/router"; // 注意是 next/router for Pages Router
import React from "react";
import styles from "./Nav.module.scss";

type Props = {
  route?: string;
  children: React.ReactNode;
  end?: boolean;
  dropdown?: boolean;
  onClick?: boolean | (() => void);
  style?: React.CSSProperties;
};

const NavItem = ({ children, route, end, dropdown, onClick, style }: Props) => {
  const router = useRouter();

  const navigate: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (typeof route === "string") {
      router.push(route);
    }
    event.stopPropagation();
  };

  return (
    <div
      style={style}
      className={`${route || onClick ? styles.clickable : styles.navitem}${
        dropdown ? ` ${styles.dropdown}` : ""
      }${end ? ` ${styles.end}` : ""}`} // 修正了字符串模板的语法
      onClick={typeof onClick === "function" ? onClick : navigate}
    >
      {children}
    </div>
  );
};

export default NavItem;