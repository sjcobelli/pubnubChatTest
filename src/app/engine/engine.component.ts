import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

var pnConfig = require("../../pubnub.config.json");
var ChatEngineCore = require("chat-engine");


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
    this.ChatEngine= ChatEngineCore.create(pnConfig);
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
      
  }


//TODO:APPEND MESSAGE

}
