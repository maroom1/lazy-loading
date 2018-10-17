import { Injectable } from '@angular/core';
import {SharedModule} from './shared/shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class UserService {

  constructor() { }
}
