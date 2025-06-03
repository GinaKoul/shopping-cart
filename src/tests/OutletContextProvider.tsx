import { Outlet } from "react-router-dom";

export const OutletContextProvider = ({ context }: { context: any }) => {
  return <Outlet context={context} />;
};
