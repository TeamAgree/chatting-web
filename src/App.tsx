import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Public/Login';
import Signup from './pages/Public/Signup';
import NotFound from './pages/Public/NotFount';
import AddChatting from './pages/Private/AddChatting';
import AddFriend from './pages/Private/AddFriend';
import ChatList from './pages/Private/ChatList';
import Chatting from './pages/Private/Chatting';
import FriendList from './pages/Private/FriendList';
import Profile from './pages/Private/Profile';
import Setting from './pages/Private/Setting';
import Private from './layouts/Private';
import Public from './layouts/Public';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Private />}>
          <Route
            path="/chat/addChatting"
            element={<AddChatting />}
          ></Route>
          <Route
            path="/chat/addFriend"
            element={<AddFriend />}
          ></Route>
          <Route
            path="/chat/chatList"
            element={<ChatList />}
          ></Route>
          <Route
            path="/chat/chatting"
            element={<Chatting />}
          ></Route>
          <Route
            path="/chat/friendList"
            element={<FriendList />}
          ></Route>
          <Route
            path="/chat/profile"
            element={<Profile />}
          ></Route>
          <Route
            path="/chat/setting"
            element={<Setting />}
          ></Route>
        </Route>
        <Route element={<Public />}>
          <Route
            path="/chat"
            element={
              <Navigate to="/chat/login" replace={true} />
            }
          />
          <Route
            path="/chat/login"
            element={<Login />}
          ></Route>
          <Route
            path="/chat/signup"
            element={<Signup />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
