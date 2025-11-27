import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { CustomCursor } from "./directives/custom-cursor";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CustomCursor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
