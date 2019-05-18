import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import ViewPostStack from "./view_post_stack";
import UploadPost from "./upoad_post_stack";
import Profile from "./profile_stack";
import Notification from "./notification_stack";
import Chat from "./chat_stack";

const root = createBottomTabNavigator({
  Home: {
    screen: ViewPostStack
  },
  Notification: {
    screen: Notification
  },
  Upload: {
    screen: UploadPost
  },
  Chat: {
    screen: Chat
  },
  Profile: {
    screen: Profile
  }
});

const App =  createAppContainer(root);

export default App;
