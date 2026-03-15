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

  public user!: RegistroUser;
  public errors: RegistroErrors = {};
  public isLoading = false;

  public hide_1 = true;
  public inputType_1: 'password' | 'text' = 'password';

  public edades: Array<{ value: number }> = [];

  

  constructor() { }

  ngOnInit(): void {
  }

}
