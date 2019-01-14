import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {ChatEngineCore} from "chat-engine"

@Component({
  selector: "app-engine",
  templateUrl: "./engine.component.html",
  styleUrls: ["./engine.component.css"]
})
export class EngineComponent implements OnInit {
  myChat;
  publish;
  ChatEngine;
  constructor() {
    let ChatEngine;
    ChatEngine= ChatEngineCore.create({
      publishKey: "pub-c-30964bce-3955-4383-a5bd-a400af9d9f64",
      subscribeKey: "sub-c-a4ab9daa-1454-11e9-9cda-0ee81137d4bc"
    });
  }

  ngOnInit() {}

  getUsername() {
    const animals = [
      "zebra",
      "goat",
      "cow",
      "pig",
      "tiger",
      "wolf",
      "pony",
      "antelope"
    ];
    return animals[Math.floor(Math.random() * animals.length)];
  }
  getColor() {
    const colors = [
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Purple",
      "Teal"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }



  // TODO: Check if this is right lol
  messages: string[] = [];

  connect() {
      me = this.ChatEngine.connect('sbasavanahally@gmail.com', {color: "green"});
      this.ChatEngine.on('$.ready', (data) => {
        //TODO: Add reconnection features
        let me = data.me
    
        me.direct.on('$.invite', (payload) => {
    
            let chat = new ChatEngine.Chat(payload.data.channel);
    
            chat.on('$.connected', (payload) => {
                appendMessage(me.uuid, 'Connected to chat!');
            });
    
            chat.on('$.online.here', (payload) => {
                appendMessage(
                'Status',
                payload
                .user.uuid + ' is in the channel! Their color is ' + payload.user.state.color + '.'
            )
                ;
            })
                ;
    
            chat.on('$.online.join', (payload) => {
                appendMessage('Status', payload.user.uuid + ' has come online! Their color is ' + payload.user.state.color + '.'
            )
                ;
            })
                ;
    
            chat.on('message', (payload) => {
                appendMessage(payload.sender.uuid, payload.data.text
            )
                ;
            })
                ;
    
            $("#message").keypress(function (event) {
                if (event.which == 13) {
                    chat.emit('message', {
                        text: $('#message').val()
                    });
                    $("#message").val('');
                    event.preventDefault();
                }
            });
    });
    });
  }


//TODO:APPEND MESSAGE

}
