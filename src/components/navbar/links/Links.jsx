import Link from "next/link";
import styles from "./links.module.css";
const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link, index) => {
        return (
          <>
            <Link href={link.path} key={index}>
              {link.title}
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Links;
