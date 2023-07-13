import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faq from "../assets/trusted-section.webp";
import bgImage from "../assets/pexels-daniel-putzer-633409.jpg";

const Faq = () => {
  const [open, setOpen] = useState(true);
  const [questions, setQuestion] = useState([
    {
      id: 1,
      title: "What is Sarubashi Token?",
      details: `Sarubashi Token is a cryptocurrency that was created in May 2021. It is a decentralized, community-driven token with a focus on rewarding holders and supporting charities.`,
      open: false,
    },
    {
      id: 2,
      title: "How does Sarubashi Token work?",
      details:
        "Sarubashi Token operates on the Binance Smart Chain network and uses a deflationary model. Each transaction incurs a small fee, a portion of which is burned, reducing the total supply of the token over time. Additionally, holders are rewarded with a portion of each transaction fee",
      open: false,
    },
    {
      id: 3,
      title: "What is the symbol for Sarubashi Token?",
      details: `The symbol for Sarubashi Token is $BASHI.`,
      open: false,
    },
    {
      id: 4,
      title: "Where can I buy Sarubashi Token?",
      details: `Sarubashi Token can be bought and sold on various decentralized exchanges (DEXs) such as PancakeSwap, and can be traded for other cryptocurrencies like Binance Coin (BNB). Click Here to buy`,
      open: false,
    },
    {
      id: 5,
      title: "What is the total supply of Sarubashi Token?",
      details: `The total supply of Sarubashi Token is (87,937,363,828).`,
      open: false,
    },

    {
      id: 6,
      title: "What is the purpose of Sarubashi Token?",
      details: `The purpose of Sarubashi Token is to create a community-driven, deflationary cryptocurrency with a focus on rewarding holders and supporting charities.`,
      open: false,
    },

    {
      id: 7,
      title: "Sarubashi Token supported charities ?",
      details: `Sarubashi Token supports a variety of charities, with a particular focus on those that support animal welfare and conservation efforts.`,
      open: false,
    },

    {
      id: 8,
      title: " How to get involved with Sarubashi!",
      details: `You can get involved with Sarubashi Token by buying and holding the token, participating in the community on social media platforms like Twitter and Telegram, and spreading the word about the project to others who may be interested.`,
      open: false,
    },
  ]);

  const openFaqs = (id) => {
    setQuestion(
      questions.map((question) =>
        question.id === id ? { ...question, open: !question.open } : question
      )
    );
    setOpen(!open);
  };
  return (
    <>
      <section
        id="faqs"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          display: "block",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="faqs-container">
          <img src={faq} alt={"faq"} />

          <div className="faqs">
            <h1
              style={{
                fontSize: "16px",
                textAlign: "center",
                color: "rgba(89, 205, 153, 0.682)",
              }}
            >
              {" "}
              Frequently Asked Questions{" "}
            </h1>
            {questions.map((question) => (
              <div key={question.id} className="faqs">
                <button
                  onClick={() => {
                    openFaqs(question.id);
                  }}
                >
                  {" "}
                  {question.title}{" "}
                  {question.open ? (
                    <FaMinus style={{ float: "right", transition: "0.9s" }} />
                  ) : (
                    <FaPlus style={{ float: "right", transition: "0.9s" }} />
                  )}{" "}
                </button>
                <div
                  style={{
                    height: question.open && "140px",
                    transition: "0.3s ease-in-out",
                    padding: "0px 14px",
                  }}
                  className="answer"
                >
                  <p> {question.details} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
