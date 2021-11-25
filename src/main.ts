import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import {
  Button,
  Icon,
  Search,
  Overlay,
  Popup,
  Form,
  Field,
  CellGroup,
  Tag,
  Swipe,
  SwipeItem,
  Picker,
  Uploader,
  RadioGroup,
  Radio,
  Empty,
  Stepper,
  Tab,
  Tabs,
  Step,
  Steps,
  Checkbox,
  CheckboxGroup,
  Calendar,
  Loading,
} from "vant";
createApp(App).use(router).use(Vant).mount("#app");
// createApp(App)
//   .use(router)
//   .use(Button)
//   .use(Icon)
//   .use(Search)
//   .use(Overlay)
//   .use(Popup)
//   .use(Form)
//   .use(Field)
//   .use(CellGroup)
//   .use(Tag)
//   .use(Swipe)
//   .use(SwipeItem)
//   .use(Picker)
//   .use(Uploader)
//   .use(RadioGroup)
//   .use(Radio)
//   .use(Empty)
//   .use(Stepper)
//   .use(Tab)
//   .use(Tabs)
//   .use(Step)
//   .use(Steps)
//   .use(Checkbox)
//   .use(CheckboxGroup)
//   .use(Calendar)
//   .use(Loading)
//   .mount("#app");
