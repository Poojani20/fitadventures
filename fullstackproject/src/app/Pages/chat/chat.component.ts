import { Component, OnInit, ViewChild } from '@angular/core';
import { ChattwoComponent } from '../chattwo/chattwo.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild(ChattwoComponent) chattwo: any;

  constructor() { }

 

  ngOnInit(): void {
   
  }

}
