import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [Button],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  services:Array<ServicesItems> = [
    {
      title: "Website Development",
      description: `I design and develop modern, fast, and fully responsive websites. 
      Whether it's a personal site, a business page, or a project showcase, 
      I create visually appealing and user-friendly web solutions optimized
      for a great user experience.
      `
    },
    {
      title: "Cybersecurity Services",
      description: `I offer specialized support in implementing best practices, security policies, access protection,
      basic monitoring, and ongoing assistance to strengthen the digital security of individuals and small businesses.
      `
    },
    {
      title: "Computer Repair and Installation",
      description: `I provide complete computer repair, maintenance, and installation services to ensure your devices
      perform at their best. From hardware and software issues to system optimization, 
      I make sure your PC runs fast, stable, and secure.
      `
    },
    {
      title: "Home Network Installation",
      description: `I install and configure home networks to ensure a stable, secure, high-quality connection in every
      corner of your home. This includes router setup, access points, cabling, signal optimization
      and more.
      `
    },
  ]

  constructor(public router: Router){}


  navigate(){
    this.router.navigate(['/contact'])
  }
}

interface ServicesItems{title:string, description:string}