import Headlines from "./Headlines";
import Highlights from "./Highlights";
import NavBar from "./NavBar";
import OffTopics from "./OffTopics";

const Layout = () => {
  return (
    <main className="layout">
      <NavBar />
      <Headlines />
      <Highlights />
      <OffTopics />
    </main>
  );
};

export default Layout;
