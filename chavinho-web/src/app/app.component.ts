import { Quote } from '@angular/compiler';
import { Component } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [];
  loading = true;

  constructor(
    private readonly quoteService: QuoteService
  ) {}

  ngOnInit(): void {
    this.quoteService.findAll()
      .pipe(
        delay(3000),
        finalize(() => (this.loading = false))
      )
      .subscribe((quotes) => this.quotes = quotes);
  }
}
