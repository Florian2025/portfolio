import { Container } from "./Container";
import google from "./../assets/branding/Google.svg";
import Netflix from "./../assets/branding/Netflix.svg";
import Slack from "./../assets/branding/Slack.svg";
import zoom from "./../assets/branding/Zoom.svg";

const Branding = () => {
  const branding = [
    {
      src: google,
      alt: "Google",
      id: 1,
    },
    {
      src: Netflix,
      alt: "Netflix",
      id: 2,
    },
    {
      src: Slack,
      alt: "Slack",
      id: 3,
    },
    {
      src: zoom,
      alt: "Zoom",
      id: 4,
    },
  ];

  return (
    <div>
      <Container>
        <div className="flex flex-wrap justify-between items-center max-w-[80rem] mx-auto py-10 w-full p-5 md:px-10">
          {branding.map((brand, id) => (
            <div
              key={id}
              className="w-1/2 md:w-1/4 p-5 flex justify-center items-center"
            >
              <img src={brand.src} alt={brand.alt} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Branding;
