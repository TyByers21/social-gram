import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex h-screen">
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.png"
            alt="logo"
            className="hidden xl:block h-full w-1/2 object-cover"
          />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
