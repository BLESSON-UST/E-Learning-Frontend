import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    { title: 'Java Course', description: 'Learn Java programming', image: 'assets/jav.png' },
    { title: 'Python Course', description: 'Explore Python programming', image: 'assets/py.png' },
    // Add more courses as needed
  ];

  isLoggedIn = false;
  showPopup = false;
  popupMessage = '';

  constructor(private router: Router) {}

  navigateTo(course: any) {
    if (this.isLoggedIn) {
      this.router.navigate(['/userdashboard']);
    } else {
      this.popupMessage = 'Please log in to continue.';
      this.showPopup = true;
      this.router.navigate(['/login']);
    }
  }

  searchQuery: string = '';

  get filteredCourses() {
    if (this.searchQuery.trim() === '') {
      return this.courses;
    } else {
      return this.courses.filter(course =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      }
}
}