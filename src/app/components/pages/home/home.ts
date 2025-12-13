import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';
import { SubscriptionBanner } from './subscription-banner/subscription-banner';
import { Testimonials } from './testimonials/testimonials';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar ,Banner, Cards, SubscriptionBanner,Testimonials,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {



   

}
