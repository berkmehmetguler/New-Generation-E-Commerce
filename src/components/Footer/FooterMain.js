import React from "react";
import { FooterServices } from "./FooterServices";
import "./style/footer.css";
import { FaTruck, FaCreditCard, FaIdCard } from "react-icons/fa";
import { IoMdHelpBuoy } from "react-icons/io";
import { FooterInner } from "./FooterInner";

const FooterMain = () => {
  return (
    <footer id="mainFooter">
      <div className="container-fluid">
        <div className="service-main">
          <div className="row  g-4 ">
            <FooterServices
              header="FREE DELIVERY"
              title="For all orders over $120"
              icon={<FaTruck size={45} className="service-icon" />}
            />
            <FooterServices
              header="SAFE PAYMENT"
              title="If goods have problems"
              icon={<FaCreditCard size={45} className="service-icon" />}
            />
            <FooterServices
              header="24/7 HELP CENTER"
              title="24/7 Customer Support"
              icon={<IoMdHelpBuoy size={45} className="service-icon" />}
            />
            <FooterServices
              header="FRIENDLY SERVICES"
              title="30 day satisfaction"
              icon={<FaIdCard size={45} className="service-icon" />}
            />
          </div>
        </div>
        <FooterInner />
      </div>
      <div className="copyright">
        Copyright 2022 &copy; SuperMarket | Powered by <span>BMG</span>
      </div>
    </footer>
  );
};

export default FooterMain;
