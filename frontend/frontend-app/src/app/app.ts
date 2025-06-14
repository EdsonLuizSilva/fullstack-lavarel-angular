import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component ({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule],
  template:
  `<h1> Messagem da API </h1>
  <ul>
    <li *ngFor="let m of mensagens">{{m.texto}} </li>`
})



export class AppComponet implements OnInit{
  mensagens: any [] = [];
  htpp = inject (HttpClient);
  ngOnInit()
  {
    this.http.get<any[]>('https://shiny-fishstick-p97r656p9wrh6gxw-8000.app.github.dev/api/mensagens')
    .subscribe(data=> this.mensagem = data);
  }
}
bootstrapApplication(AppComponet,{
  providers: [provideHttpClient()]
});
