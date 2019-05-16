import { createStackNavigator, createAppContainer } from "react-navigation";

import ViewPostStack from "./view_posts_stack";
import UploadPost from "../components/upload";

const root = createStackNavigator({
  UploadPost: {
    screen: UploadPost
  },
  ViewPostStack: {
    screen: ViewPostStack
  }
});

const App =  createAppContainer(root);

export default App;
