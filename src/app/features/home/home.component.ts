import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { DataService } from "../../core/services/data.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly dataService = inject(DataService);

  async ngOnInit() {
    // console.log(await this.dataService.getLocations());
  }
}
