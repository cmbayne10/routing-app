import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  constructor(private http: HttpClient) {}

  @Input() data= 'Результаты будут опубликованы здесь'

  name: string = '';
  imageUrl: string = '';

   async buttonPress() {
    const response = this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto')
    const result = await firstValueFrom(response)
    console.log(result);
    this.name = result.name;
    this.imageUrl = result.sprites.front_default;
  }
}

