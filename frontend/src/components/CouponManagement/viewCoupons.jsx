import Header from "./Helpers/header";
import Footer from "./Helpers/footer";
import Menu from "./Helpers/menu";
import Meta from "./Helpers/meta";

function ViewCoupons() {
  // page content
  const pageTitle = "Hurray! You've free coupons to redeem 🎉";
  const pageDescription = ". ";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
}

export { ViewCoupons };
