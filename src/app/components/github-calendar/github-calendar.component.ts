import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { GithubCalendarService } from 'src/app/shared/services/github-calendar.service';

@Component({
  selector: 'app-github-calendar',
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.css']
})
export class GithubCalendarComponent implements OnInit {


  @ViewChild('dataSvg') dataSvg: ElementRef;

  constructor(private githubCalendarService: GithubCalendarService) { }

  ngOnInit(): void {
    this.getSvg();
  }


  private async getSvg() {

    const user = 'Christianesk'
    const year = '2020';

    const svg = await this.githubCalendarService.getSvgGithubCalendar(user, year);

    this.dataSvg.nativeElement.innerHTML = svg;

  }

}
