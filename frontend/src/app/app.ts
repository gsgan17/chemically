import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gallery } from './components/gallery/gallery';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gallery, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
