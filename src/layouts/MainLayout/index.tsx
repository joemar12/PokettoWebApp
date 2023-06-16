import Sidebar from "./Sidebar";
import Header from "./Header";
import MainWrapper from "./MainWrapper";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <MainWrapper>
          <Header />
          <MainContainer>
            <Outlet />
          </MainContainer>
          <Footer />
        </MainWrapper>
      </div>
    </>
  );
};

export default MainLayout;
