import { Heading } from "./Heading/Heading";

export default function HomePage() {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Heading>
        Please register first. Once you are logged in, you will be able to
        access all the protected pages in the application
      </Heading>
    </div>
  );
}
