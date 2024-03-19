import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'd042d007-12c6-4da5-b592-be05a5de1e1a',
        props.user.username,
        props.user.secret
    );
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
    </div>
  );
};

export default ChatsPage;