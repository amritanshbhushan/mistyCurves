import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
ngOnInit(): void {
  // throw new Error('Method not implemented.');
}

destinations = [
  {
    name: 'Spiti Valley',
    description: 'High-altitude Himalayan beauty with monasteries and moon-like terrain.',
    category: 'Hill',
    tag: 'Popular',
    image: 'assets/images/destinations/spiti.jpg'
  },
  {
    name: 'Ladakh',
    description: 'A desert in the sky—explore blue lakes, culture, and mountains.',
    category: 'Hill',
    tag: 'Popular',
    image: 'assets/images/destinations/ladakh.jpg'
  },
  {
    name: 'Kerala',
    category: 'Hill',
    tag: 'Popular',
    description: 'Backwaters, spice plantations, and coastal serenity.',
    image: 'assets/images/destinations/kerala.jpg'
  },
  {
    name: 'Meghalaya',
    category: 'Hill',
    tag: 'Popular',
    description: 'Mystic clouds, root bridges, and living forests.',
    image: 'assets/images/destinations/meghalaya.jpg'
  },
  {
    name: 'Rajasthan',
    category: 'Deserts',
    description: 'Desert sands, royal palaces, and cultural heritage.',
    image: 'assets/images/destinations/rajasthan.jpg'
  },
  {
    name: 'Andaman Islands',
    category: 'Beach',
    description: 'Turquoise waters, coral reefs, and tropical paradise.',
    image: 'assets/images/destinations/andaman.jpg'
  }
];

categories = ['All', 'Hill', 'Beach', 'Deserts'];
selectedCategory = 'All';

filteredDestinations = [...this.destinations];

filterCategory(cat: string) {
  this.selectedCategory = cat;
  this.filteredDestinations =
    cat === 'All'
      ? [...this.destinations]
      : this.destinations.filter(dest => dest.category === cat);
}


}