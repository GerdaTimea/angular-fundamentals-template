import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  debounceTime,
  filter,
  forkJoin,
  map,
  Observable,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { MockDataService } from './mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  searchTermByCharacters = new Subject<string>();
  charactersResults$!: Observable<any>;
  planetAndCharactersResults$!: Observable<any>;
  isLoading: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.initLoadingState();
    this.initCharacterEvents();
  }

  changeCharactersInput(element: any): void {
    const inputValue: string = element.target.value;
    this.searchTermByCharacters.next(inputValue);
  }

  initCharacterEvents(): void {
    this.charactersResults$ = this.searchTermByCharacters
      .pipe(        
        filter((item) => item.length >= 3),                        
        switchMap((item) => this.mockDataService.getCharacters(item)),
        debounceTime(500)
      );
  }

  loadCharactersAndPlanet(): void {
    this.planetAndCharactersResults$ = forkJoin([
      this.mockDataService.getCharacters(), 
      this.mockDataService.getPlanets()])
      .pipe(map(result => [...result[0], ...result[1]]));
  }

  initLoadingState(): void {
    this.subscriptions.push(combineLatest([
      this.mockDataService.getCharactersLoader(),
      this.mockDataService.getPlanetLoader()
    ]).subscribe((results) => this.isLoading = this.areAllValuesTrue(results)));
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  areAllValuesTrue(elements: boolean[]): boolean {
    return elements.every((el) => el);
  }
}
