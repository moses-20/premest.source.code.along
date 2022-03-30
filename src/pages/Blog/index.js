import { Outlet } from "react-router-dom";
import withLayout from "../withLayout";

function Blog() {
  return <Outlet />;
}

export default withLayout(Blog);
