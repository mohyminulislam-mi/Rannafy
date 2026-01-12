import React from "react";
import Meals from "../../../assets/meals.jpg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "How do I order a meal?",
      answer:
        "To order a meal, simply browse the available home chefs in your area, select your favorite dish, and add it to your cart. You can then proceed to checkout and choose your preferred delivery or pickup time.",
    },
    {
      question: "Are there different cuisines available?",
      answer:
        "Yes, Rannafy features a wide variety of local home chefs offering everything from traditional comfort foods to authentic international cuisines. You can explore them all in the 'Explore Meals' section of the platform.",
    },
    {
      question: "Is the food prepared fresh?",
      answer:
        "Yes, all meals are prepared fresh by local home cooks upon receiving your order, ensuring you get high-quality, authentic flavors delivered straight to your door.",
    },
    {
      question: "Can I customize my order for dietary needs?",
      answer:
        "Yes, you can customize your meals by leaving specific instructions for the chef or selecting dietary preferences (like vegan or gluten-free) where available. For more details, check the 'Special Requests' section on the meal's page.",
    },
  ];
  return (
    <>
      <div className="w-8/12 mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0 my-10">
        <img
          className="max-w-sm w-full rounded-xl h-96"
          src={Meals}
          alt="Meals"
        />
        <div>
          <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
          <h1 className="text-3xl font-semibold">
            Authentic Meals, Made Simple.
          </h1>
          <p className="text-sm text-slate-500 mt-2 pb-4">
            Taste the Best Your Community Has to Offer — Handcrafted, Freshly
            Prepared, and Ready Whenever You Are.
          </p>
          {faqs.map((faq, index) => (
            <div
              className="border-b border-slate-200 py-4 cursor-pointer"
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
