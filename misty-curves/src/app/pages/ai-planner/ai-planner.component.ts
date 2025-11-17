import { Component } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-ai-planner',
  templateUrl: './ai-planner.component.html',
  styleUrls: ['./ai-planner.component.scss']
})
export class AiPlannerComponent {
  planner = {
    destination: '',
    days: 0,
    type: '',
    start: ''
  };
  itinerary: string[] = [];
  loading = false;
  error = '';
  constructor(private tourService: TourService){}
  generateItinerary() {
    const { destination, days, type, start } = this.planner;
    const payload = {
      startLocation: start,
      destination,
      days,
      category: type
    };

    this.itinerary = [];
    this.loading = true;
    this.error = '';

    this.tourService.generateItinerary(payload).subscribe({
      next: (res) => {
        this.loading = false;

        // Split GPT result into lines for display
        this.itinerary = res.itinerary.split('\n').filter(line => line.trim() !== '');
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Failed to generate itinerary';
        console.error(err);
      }
    });
  }
}
