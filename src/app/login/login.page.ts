import { Component, OnInit } from '@angular/core';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fingerprintOptions: FingerprintOptions;

  constructor(
    private faio: FingerprintAIO,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    const fingerOptions = {
      clientId: 'Fingerprint-Demo',
      clientSecret: 'o7aoOMYUbyxaD23oFAnJ', //Necessary for Android encrpytion of keys. Use random secret key.
      disableBackup: true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    };
    this.faio.show(fingerOptions)
      .then((result: any) => {
        alert(result);
        this.router.navigate(['/tabs']);
      })
      .catch((error: any) => alert(JSON.parse(error)));
  }

}
