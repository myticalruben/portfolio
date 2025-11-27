import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [Button],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {
  greeingText:string = "Hello! My name is"
  fullName:string = "Ruben Alexander"
  roleText:string = "I'm technology consultant"
  intruductionText: string = `I'm a technology consultant 
  passionate about transforming ideas
  into real digital solutions.`

  aboutMeButtonText:string = 'About me'

  constructor(public router: Router){}

  navigate(){
    this.router.navigate([
    '/about-me'
    ])
  }
}
