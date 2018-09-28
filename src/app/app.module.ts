import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";
import { SigninComponent } from './signin/signin.component';




export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2151284485144421")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("977994430676-8lu8ktg7b9ej5g4o61ibg8hf7v3ao1f3.apps.googleusercontent.com")
        },
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("ua4kzlurk3k7")
          },
      ]
  )
  return config;
}


//google client secret dm-mvfZHgKX3_feWxwVJpzNl
//GoogleLoginProvider("977994430676-hqpaa4ga2h8oluh59jklourth75vet6r.apps.googleusercontent.com")

// facebook app secret dff45f91d8a51cac54fc29f024bd9349
//FacebookLoginProvider("2151284485144421")

// Client ID:	ua4kzlurk3k7

// Client Secret:	4erGicyfwu69XTuO
// https://localhost:4900/
// https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=ua4kzlurk3k7&redirect_uri=https%3A%2F%2Flocalhost:4900&state=987654321&scope=r_basicprofile

// https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=ua4kzlurk3k7&redirect_uri=https://localhost:4900/&state=987654321&scope=r_basicprofile
// https://www.linkedin.com/uas/js/userspace?v=1.0.342-1429&apiKey=ua4kzlurk3k7&secure=1&

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
