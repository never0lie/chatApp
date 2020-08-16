import React from "react";
import Parse from  "parse";

class TestLiveQurey extends React.Component{
  
  componentDidMount(){
  var client = new Parse.LiveQueryClient({
    applicationId: 'myAppId',
    serverURL: 'ws://localhost:1337/',
    javascriptKey: 'myJavascriptKey'
  });
  client.open();

  let query = new Parse.Query('liveMessage');
  var subscription = client.subscribe(query);

  subscription.on("open", () => {
    console.log("Websocket Opened")
  })

  subscription.on("close", () => {
    console.log("Websocket Closed")
  })
  }

  handleonClick(){
    this.forceUpdate();
    console.log("re-rendered")
  }

  render(){
    return (
      <div>
        <button onClick={() => this.handleonClick()}>re-render!</button>
      </div>
    )
  }
}

export default TestLiveQurey;