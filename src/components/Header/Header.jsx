// CSS
import styles from "./Header.module.css";

import Tittle from "./Tittle";
import Nav from "./Nav";
import SectionHeader from "./SectionHeader";

const Header = () => {
  return (
    <header
      className={`${styles.paralax01} min-w-full relative bg-transparent flex flex-row justify-between p-2 text-[#816e26] overflow-hidden bg-no-repeat
      bg-fixed shadow-xl`}
      id="inicio"
    >
      <Tittle />
      <Nav />
      <SectionHeader />
    </header>
  );
};

export default Header;
