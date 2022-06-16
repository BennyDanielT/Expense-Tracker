import Header from "../Helpers/header";
import Footer from "../Helpers/footer";
import Menu from "../Helpers/menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
