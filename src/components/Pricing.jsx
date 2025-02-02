import { Container } from "./Container";
import { Button } from "./Button";

export const Pricing = () => {
  const pricing = [
    {
      id: 1,
      plan: "Basic",
      amount: 0,
      featured: false,
      features: ["1 GB of space", "Support at $25/hour", "Limited Templates"],
    },
    {
      id: 2,
      plan: "Pro",
      amount: 25,
      featured: true,
      features: ["5 GB of space", "Support at $20/hour", "Limited Templates"],
    },
    {
      id: 3,
      plan: "Enterprise",
      amount: 50,
      featured: false,
      features: ["10 GB of space", "Support at $15/hour", "Limited Templates"],
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">Pricing</h1>
      <Container>
        <div className="grid md:grid-cols-3 gap-5 mb-10 rounded">
          {pricing.map((price, id) => (
            <div
              key={id}
              className={`${
                price.featured ? "bg-secondary" : "bg-primary"
              } rounded p-5 text-white text-start`}
            >
              <div className="text-center font-bold">{price.plan}</div>
              <div className="space-y-3 text-center">
                <span>$</span>
                <span>{price.amount}</span>
              </div>
              <hr
                className={`"border-t mt-7 mb-5" ${
                  price.featured ? "border-white" : "border-secondary"
                }`}
              />
              <div className="space-y-3 m-5 text-center font-bold">
                {price.features.map((feature, id) => (
                  <div key={id}> {feature} </div>
                ))}
                <div className="flex justify-center mt-5">
                  <Button className="bg-white px-5 py-2 rounded m-2 text-[#0059F8]">
                    {price.amount === 0 ? "Get Started" : "Buy Now"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
