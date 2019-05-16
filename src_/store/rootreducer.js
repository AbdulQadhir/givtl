import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import {
  postList, categoryList, subCategoryList
} from "../components/view/reducer";


const config = {
  key: "primary",

  storage,
  blacklist: [
    "postList",
    "categoryList",
    "subCategoryList"
  ]
};

const combinedReducers = {
  postList,
  categoryList,
  subCategoryList
};

export default persistCombineReducers(config, combinedReducers);
