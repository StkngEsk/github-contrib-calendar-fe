import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { GithubCalendarService } from 'src/app/shared/services/github-calendar.service';

@Component({
  selector: 'app-github-calendar',
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.css']
})
export class GithubCalendarComponent implements OnInit {


  @ViewChild('dataSvgLight') dataSvgLight: ElementRef;

  @ViewChild('dataSvgDark') dataSvgDark: ElementRef;

  @ViewChild('form')
  form: any;

  constructor(private githubCalendarService: GithubCalendarService) { }

  ngOnInit(): void {
    this.getSvg('Christianesk','2020');
  }


  private async getSvg(username: string, year:string) {


    const svg = await this.githubCalendarService.getSvgGithubCalendar(username, year);

    this.dataSvgLight.nativeElement.innerHTML = svg;

    this.dataSvgDark.nativeElement.innerHTML = svg;
  }


  showCalendar(){

    let username = this.form.value.username;
    let year = this.form.value.year;
    this.getSvg(username,year);

  }

}
