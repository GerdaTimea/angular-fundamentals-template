import { Injectable } from '@angular/core';
import { UserStoreService } from '../services/user-store.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard {
    // Add your code here
    constructor(private userStoreService: UserStoreService, private router: Router) {}

    canActivate() {

    }
}
