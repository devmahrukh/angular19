import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  events = [
    {
      title: 'Tech Conference 2025',
      date: 'July 20, 2025',
      location: 'New York',
    },
    { title: 'Art & Design Fest', date: 'August 15, 2025', location: 'Paris' },
    { title: 'Jazz Night', date: 'September 1, 2025', location: 'Chicago' },
    {
      title: 'Web Dev Bootcamp',
      date: 'October 5, 2025',
      location: 'New York',
    },
  ];

  bookingMessage = '';
  showModal = false;
  bookedEventTitle = '';

  locations = ['All', 'New York', 'Paris', 'Chicago'];
  selectedLocation = 'All';
  searchQuery = '';

  favorites: any[] = [];
  showFavoritesOnly = false;
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => (this.showSplash = false), 2000);
  }

  getFilteredEvents() {
    let filteredEvents = this.events;

    if (this.selectedLocation !== 'All') {
      filteredEvents = filteredEvents.filter(
        (event) => event.location === this.selectedLocation
      );
    }

    if (this.searchQuery) {
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.showFavoritesOnly) {
      filteredEvents = filteredEvents.filter((event) => this.isFavorite(event));
    }

    return filteredEvents;
  }

  toggleFavorite(event: any) {
    const index = this.favorites.findIndex((fav) => fav.title === event.title);
    if (index > -1) {
      this.favorites.splice(index, 1); // Remove from favorites
    } else {
      this.favorites.push(event); // Add to favorites
    }
  }

  isFavorite(event: any): boolean {
    return this.favorites.some((fav) => fav.title === event.title);
  }

  toggleFavoritesView() {
    this.showFavoritesOnly = !this.showFavoritesOnly;
  }
  bookEvent(event: any) {
    this.bookedEventTitle = event.title;
    this.showModal = true;
    this.bookingMessage = `🎉 You’ve successfully booked "${event.title}"! Check your email for details.`;
  }

  // Close modal function
  closeModal() {
    this.showModal = false;
  }
}