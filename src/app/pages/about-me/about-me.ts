import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [Button],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

  sectionTitle:string = 'About me'
  introductionText:string = 'Learn more'
  aboutMeParagraph1: string = `I am a technology consultant with hands-on experience
  in the key areas that drive digital performance for both homes and businesses. 
  Over the years, I have worked in computer repair and installation,
  web and software development, as well as network installation and configuration, 
  ranging from home solutions to the setup and management of professional network racks.`
  
  aboutMeParagraph2: string = `My background includes diplomas in cybersecurity,
  cyber defense, information security, and auxiliary cybersecurity services, 
  which allows me to deliver secure, efficient, 
  and modern technology solutions aligned with today’s protection standards.`
  
  aboutMeParagraph3: string = `I combine technical expertise with a strategic vision that helps clients choose the right technology,
  optimize their processes, and protect their information. 
  If you’re looking for a professional who can guide you, solve your technological needs, 
  and elevate your project to the next level, you’re in the right place.`
  
  buttonText:string = "View Projects"

  constructor(public router: Router){}

  navigate(){
    this.router.navigate(['/portfolio'])
  }

}
