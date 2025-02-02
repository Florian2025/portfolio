import { Container } from "./Container";
import dashboard from "./../assets/features/Dashboard.svg";
import comment from "./../assets/features/comment.svg";
import Comment2 from "./../assets/features/Comment2.svg";
import Statistic from "./../assets/features/Statistic.svg";
import Profiles from "./../assets/features/Profiles.svg";
import Folders from "./../assets/features/Folders.svg";

export const Features = () => {
  const features = [
    {
      id: 1,
      src: dashboard,
      alt: "dashboard",
      title: "Dashboard",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere impedit blanditiis quasi iste in reiciendis adipisci ex cumque dolorem nemo?!",
    },
    {
      id: 2,
      src: comment,
      alt: "comment",
      title: "Comment",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere impedit blanditiis quasi iste in reiciendis adipisci ex cumque dolorem nemo?",
    },
    {
      id: 3,
      src: Comment2,
      alt: "Comment2",
      title: "Comment",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere impedit blanditiis quasi iste in reiciendis adipisci ex cumque dolorem nemo?",
    },
    {
      id: 4,
      src: Statistic,
      alt: "Statistic",
      title: "Statistic",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere impedit blanditiis quasi iste in reiciendis adipisci ex cumque dolorem nemo?",
    },
    {
      id: 5,
      src: Profiles,
      alt: "Profiles",
      title: "Profiles",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere impedit blanditiis quasi iste in reiciendis adipisci ex cumque dolorem nemo?",
    },
    {
      id: 6,
      src: Folders,
      alt: "Folders",
      title: "Folders",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere impedit blanditiis quasi iste in reiciendis adipisci ex cumque dolorem nemo?",
    },
  ];
  return (
    <div>
      <Container>
        <div className="max-w-[80rem] mx-auto py-10 w-full p-5 md:px-10">
          <div className="space-y-4 mb-8 text-center lg:text-start max-w-[30rem] mx-auto">
            <h2 className="font-bold text-[1.75rem] leading-[2rem] text-center">
              Features
            </h2>
            <p className="text-[#7e8bb6] text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              impedit blanditiis quasi iste in reiciendis adipisci ex cumque
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 ">
            {features.map((feature, id) => (
              <div
                key={id}
                className="border border-primary rounded-xl p-8 cursor-pointer hover:bg-primary"
              >
                <img src={feature.src} alt={feature.alt} />
                <div className="space-y-4">
                  <h3 className=" text-xl font-bold mt-5">{feature.title}</h3>
                  <p className="text-[#7e8bb6]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
