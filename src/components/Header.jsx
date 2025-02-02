import { Container } from "./Container";
import logo from "../../public/logo.svg";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="border-b border-[#1c243f]">
      <Container>
        <div className="flex justify-between items-center py-3">
          <a href="/" className="flex flex-row gap-4">
            <img src={logo} alt="logo" width={32} height={32} />
            <h1>Portfolio</h1>
          </a>
          <Button theme="secondary">Login</Button>
        </div>
      </Container>
    </div>
  );
};
