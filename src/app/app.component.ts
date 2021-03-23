import { AfterViewInit, Component } from '@angular/core';
import { get } from 'scriptjs';
import { environment } from 'src/environments/environment';

// use this line instead for local
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Payment Modal Angular Demo';
  ngAfterViewInit() {
    get(
      `${environment.ANGULAR_APP_PAYMENT_MODAL_API_HOST_URL}/api/stripe_modals/script.js?siteId=${environment.ANGULAR_APP_PAYMENT_MODAL_SITE_ID}`,
      () => null
    );
  }
}
