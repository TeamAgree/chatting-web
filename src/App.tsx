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
    <div>
      <Routes>
        <Route element={<Private />}>
          <Route
            path="/addChatting"
            element={<AddChatting />}
          ></Route>
          <Route
            path="/addFriend"
            element={<AddFriend />}
          ></Route>
          <Route
            path="/chatList"
            element={<ChatList />}
          ></Route>
          <Route
            path="/chatting"
            element={<Chatting />}
          ></Route>
          <Route
            path="/friendList"
            element={<FriendList />}
          ></Route>
          <Route
            path="/profile"
            element={<Profile />}
          ></Route>
          <Route
            path="/setting"
            element={<Setting />}
          ></Route>
        </Route>
        <Route element={<Public />}>
          <Route
            path="/"
            element={
              <Navigate to="/login" replace={true} />
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/signup"
            element={<Signup />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
