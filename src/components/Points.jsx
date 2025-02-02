import { Container } from "./Container";
import image1 from "./../assets/Group1.svg";
import image2 from "./../assets/Group2.svg";
import image3 from "./../assets/Group3.svg";
export const Points = () => {
  const points = [
    {
      id: 1,
      title: "How does it work?",
      description:
        "Our platform is easy to use. You can start by creating an account and then you can start adding your tasks. You can also set the status of your tasks.",
      src: image1,
      alt: "image1",
    },
    {
      id: 2,
      title: "How to manage your tasks?",
      description:
        "You can manage your tasks by adding new tasks, deleting tasks, and updating tasks. You can also set the status of your tasks.",
      src: image2,
      alt: "image2",
    },
    {
      id: 3,
      title: "How to track your progress?",
      description:
        "You can track your progress by checking the status of your tasks. You can also see the number of tasks that are completed and the number of tasks that are pending.",
      src: image3,
      alt: "image3",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        How does it work?
      </h1>
      <Container>
        <div className="w-full max-w-[80rem] mx-auto p-5 space-y-20 px-10">
          {points.map((point, id) => (
            <div
              key={id}
              className={`md:flex  space-y-5 gap-20 ${
                id % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-full flex justify-center md:w-7/12">
                <img src={point.src} alt={point.alt} className="px-20" />
              </div>

              <div className="w-full text-center md:w-5/12 flex flex-col justify-center space-y-4 max-w-md mx-auto md:text-left">
                <h2 className="text-2xl font-bold">{point.title}</h2>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
