import "./App.css";
import Menu from "./components/Menu";
import Introduction from "./components/Introduction";
import Countdown from "./components/Countdown";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import Pie from "./components/Pie";
import Referral from "./components/Referral";
import Services from "./components/Services";
import Roadmapcarousel from "./components/Roadmapcarousel";
import Customer from "./components/Customer";
import Whyus from "./components/Whyus";
import Faq from "./components/Faq";
import Unity from "./components/Unity";
import Footer from "./components/Footer";
import Wallet from "./components/Wallet";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Helmet } from "react-helmet";
import Logo from "./assets/mobilelogo.jpg";

function App() {
  const { address } = useAccount();
  const [balance, setBalance] = useState("");

  fetch(`https://sarubashi-app.onrender.com/signup`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ wallet: address }),
  })
    .then((response) => response.json())
    .then((res) => {
      setBalance(res.balance);
    });
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"Organization",
            "url":"https://sarubashi.com",
            "logo":${Logo}
          }`}
        </script>
      </Helmet>

      <div style={{ background: "black" }}>
        <Menu />
        <Introduction userBalance={balance} />
        <Countdown />
        <Welcome />
        <Pie />
        <Wallet />
        <Features header="Features" subheading="Our Best Features" />

        <Referral />
        <Services />

        <Roadmapcarousel />
        <Customer
          h1={"+262k"}
          p="Registered users"
          h2="99.9%"
          p2="Customer satisfaction"
          h3="<0.10%"
          p3="Lowest transaction fee"
          h4="+34k"
          p4="country clients"
        />
        <Whyus />
        <Faq />
        <Unity />
        <Footer />
      </div>
    </>
  );
}

export default App;
