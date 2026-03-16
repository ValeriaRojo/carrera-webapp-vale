import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.imports';
import { Router } from '@angular/router';

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

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  private llenarArrayEdades(): void {
    this.edades = Array.from({ length: 63 }, (_, i) => ({ value: i + 18 }));
  }

  public terminosCondiciones(): void {
    alert('Aquí se mostrarían los términos y condiciones');
  }

  public goLogin(): void {
    this.router.navigate(['']); //Ajustar según la app
  }

  public showPassword(): void{
    this.hide_1 = !this.hide_1;
    this.inputType_1 = this.hide_1 ? 'password' : 'text';
  }

  public registrar(): void {
  }

}