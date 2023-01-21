import { Component, OnInit, ViewChild } from '@angular/core';
import { ChattwoComponent } from '../chattwo/chattwo.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService} from 'src/app/service/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  
  signupForm!: FormGroup;

  //@ViewChild(ChattwoComponent) chattwo: any;

  constructor(private fb:FormBuilder, private chat:ChatService){
    this.signupForm = this.fb.group({
      'displayName': ['', Validators.required],
   
  })

 

  this.ngOnInit(); void {
  }
   signup();{

    const data = this.signupForm.value;
   }

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
function signup() {
  throw new Error('Function not implemented.');
}

