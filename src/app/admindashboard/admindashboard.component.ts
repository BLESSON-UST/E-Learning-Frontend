import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdminDashboardComponent {
  courses:any[] = [
    { title: 'Java Course', description: 'Learn Java programming', image: 'assets/jav.png' },
    { title: 'Python Course', description: 'Explore Python programming', image: 'assets/py.png' },
    // Add more courses as needed
  ];

  addCourse() {
    // Logic for adding a new course
  }

  editCourse(course: any) {
    // Logic for editing a course
  }

  viewCourse(course: any) {
    // Logic for viewing a course
  }
}
