import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.imports';

@Component({
  selector: 'app-registro-screen',
  imports: [
    ...SHARED_IMPORTS
  ],
  templateUrl: './registro-screen.html',
  styleUrl: './registro-screen.scss',
})
export class RegistroScreen implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
