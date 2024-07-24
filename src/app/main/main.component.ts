// src/app/main/main.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  enableChatGPT = true;
  apiKey = '';
  promptPersonality = '';
  promptComment = '';
  urlPlaylist = '';
  videos = [
    { title: 'titulo', comment: 'bla bla', selected: false },
    { title: 'titulo', comment: 'bla bla', selected: false }
  ];

  loadPlaylist() {
    // Aquí deberías agregar la lógica para cargar la lista de reproducción de YouTube
    console.log('Cargar playlist: ', this.videos);
  }

  submitComments() {
    // Aquí deberías agregar la lógica para enviar los comentarios
    console.log('Enviar comentarios');
    console.log('API Key: ', this.apiKey);
    console.log('Personality Prompt: ', this.promptPersonality);
    console.log('Comment Prompt: ', this.promptComment);
    console.log('Videos: ', this.videos.filter(video => video.selected));
  }
}


