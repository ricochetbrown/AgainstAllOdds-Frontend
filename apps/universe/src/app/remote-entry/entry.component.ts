import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'against-all-odds-universe-entry',
  template: `<against-all-odds-nx-welcome></against-all-odds-nx-welcome>`,
})
export class RemoteEntryComponent {}
