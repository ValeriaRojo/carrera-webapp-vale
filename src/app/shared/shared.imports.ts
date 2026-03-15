import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

export const SHARED_IMPORTS = [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,

    NgxMaskDirective,
    NgxMaskPipe,
] as const;