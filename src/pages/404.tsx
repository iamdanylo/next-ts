import { Header } from "@/components";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <Header disabledNav className={"active"} />
      <div className="page-404">
        <div className="container">
          <div className="content">
            <h1 className="text-lg title">404 - Page Not Found</h1>
            <Link className="btn-purple btn btn-text" href="/">
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
