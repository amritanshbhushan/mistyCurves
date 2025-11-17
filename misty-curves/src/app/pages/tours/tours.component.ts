import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent {
   tours = [
    {
      title: 'Himachal Delights',
      description: 'Explore Shimla, Manali, Kasol and more in the land of hills.',
      image: 'assets/images/tours/himachal.jpg'
    },
    {
      title: 'Magical Kashmir',
      description: 'Witness the beauty of Srinagar, Gulmarg, Pahalgam and Sonamarg.',
      image: 'assets/images/tours/kashmir.jpg'
    },
    {
      title: 'North East Wonders',
      description: 'Dive into the charm of Sikkim, Meghalaya and Arunachal Pradesh.',
      image: 'assets/images/tours/northeast.jpg'
    },
    {
      title: 'Uttarakhand Escapes',
      description: 'Perfect mix of spirituality and adventure: Rishikesh, Nainital, Auli.',
      image: 'assets/images/tours/uttarakhand.jpg'
    },
    {
      title: 'Kerala Backwaters',
      description: 'Enjoy houseboats, greenery and beaches in God’s Own Country.',
      image: 'assets/images/tours/kerala_tour.jpg'
    },
    {
      title: 'Royal Rajasthan',
      description: 'Experience forts, palaces, and deserts in the royal state.',
      image: 'assets/images/tours/rajasthan_tour.jpg'
    }
  ];
}
