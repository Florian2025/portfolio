import { Button } from "./Button";
import { Container } from "./Container";
import icon from "./../assets/arrow-left-fill.svg";

export const CallToAction = () => {
  return (
    <div>
      <Container>
        <div className="max-w-[80rem] mx-auto py-10 w-full p-5 md:px-10">
          <div className="bg-secondary p-10 gap-8 flex flex-col items-center rounded-xl">
            <div className="text-center space-y-4">
              <div className="text-white">Ready to start?</div>
              <h2 className="font-bold text-3xl text-white">
                Start your trial today
              </h2>
            </div>

            <Button
              theme="primary"
              className={"flex items-center justify-center gap-2"}
            >
              <span>Get Started</span>
              <img src={icon} alt="icon" width={24} height={24} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
