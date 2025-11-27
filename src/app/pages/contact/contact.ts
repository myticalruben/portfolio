import { Component } from '@angular/core';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-contact',
  imports: [Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  phoneNumber = "+1 849 351 9817"
  email = 'rubenalexandercanojimenez@gmail.com'
  sendData(){}
}
