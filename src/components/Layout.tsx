import Headlines from "./Headlines";
import Highlights from "./Highlights";
import NavBar from "./NavBar";
import OffTopics from "./OffTopics";

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Headlines />
      <Highlights />
      <OffTopics />
    </div>
  );
};

export default Layout;
