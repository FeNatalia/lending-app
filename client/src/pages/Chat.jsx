import DM from '../chat/DM';
import SideBar from '../components/sidebar/SideBar';

const Chat = () => {
  return (
    <div>
      <SideBar />
      <DM roomname="hi" username="John" />
    </div>
  );
};

export default Chat;
