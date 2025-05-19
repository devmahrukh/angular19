import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [
    { title: 'Tech Conference 2025', date: 'July 20, 2025', location: 'New York' },
    { title: 'Art & Design Fest', date: 'August 15, 2025', location: 'Paris' },
    { title: 'Jazz Night', date: 'September 1, 2025', location: 'Chicago' },
    { title: 'Web Development Bootcamp', date: 'October 5, 2025', location: 'New York' }
  ];

  locations = ['All', 'New York', 'Paris', 'Chicago'];

  selectedLocation = 'All'; // Default location filter
  searchQuery = ''; // Holds the search query for event titles
  bookingMessage = '';

  // Filter events by location and search query
  getFilteredEvents() {
    let filteredEvents = this.events;

    // Apply location filter
    if (this.selectedLocation !== 'All') {
      filteredEvents = filteredEvents.filter(event => event.location === this.selectedLocation);
    }

    // Apply search filter (case-insensitive)
    if (this.searchQuery) {
      filteredEvents = filteredEvents.filter(event =>
        event.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    return filteredEvents;
  }

  // Handle booking an event
  bookEvent(event: any) {
    this.bookingMessage = `You booked: ${event.title}!`;
  }
}
