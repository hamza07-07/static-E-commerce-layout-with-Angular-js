import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';

@Component({
  selector: 'app-home',
  imports: [Header,Banner,Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
