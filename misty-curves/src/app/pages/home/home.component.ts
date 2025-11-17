import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showMoreWhyChoose: boolean = false;
  showMoreCTA: boolean = false;

  toggleWhyChoose() {
    this.showMoreWhyChoose = !this.showMoreWhyChoose;
  }

  toggleCTA() {
    this.showMoreCTA = !this.showMoreCTA;
  }
  featuredTours = [
    {
      title: 'Himachal Delights',
      description: 'Explore Shimla, Manali, Kasol and more.',
      image: 'assets/images/tours/himachal.jpg'
    },
    {
      title: 'Magical Kashmir',
      description: 'Srinagar, Gulmarg, Pahalgam & Sonamarg.',
      image: 'assets/images/tours/kashmir.jpg'
    },
    {
      title: 'Kerala Bliss',
      description: 'Backwaters, beaches and green landscapes.',
      image: 'assets/images/tours/kerala_tour.jpg'
    }
  ];

 blogPosts = [
  {
    id: 1,
    title: 'Top 10 Hidden Gems in India',
    snippet: 'Tired of the usual tourist spots? Discover lesser-known destinations...',
    image: 'assets/images/blog1.jpg'
  },
  {
    id: 2,
    title: 'Adventure Escapes for 2025',
    snippet: 'Thrill-seekers rejoice! These are the top destinations for adrenaline junkies...',
    image: 'assets/images/blog2.jpg'
  },
  {
    id: 3,
    title: 'Romantic Getaways in the Hills',
    snippet: 'Planning a couple’s trip? Here are serene and scenic places you’ll love...',
    image: 'assets/images/blog3.jpg'
  }
];

}
