import DM from "../chat/DM";
import SideBar from "../components/sidebar/SideBar";

const Chat = () => {
  return (
    <div>
      <SideBar />
      <DM roomname="test_room" username="User admin" />
    </div>
  );
};

export default Chat;
