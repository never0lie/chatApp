import Parse from "parse";
import Join from '@/pages/Join.page';
import {Link} from "umi";
import {Button} from "antd";

export default function() {
  //initialize back4app
  Parse.initialize("myAppId", "myJavascriptKey");
  Parse.serverURL = "http://localhost:1337/parse";

  //render
  return (
    <div>
      <Join />
    </div>
  );
}
