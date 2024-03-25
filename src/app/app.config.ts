import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"employee-management-syst-37815","appId":"1:588363285147:web:c8d4636a29c98134c67c3e","storageBucket":"employee-management-syst-37815.appspot.com","apiKey":"AIzaSyDjUYZyxkYCZfWXxXmUOagxLwCWzQP8ROQ","authDomain":"employee-management-syst-37815.firebaseapp.com","messagingSenderId":"588363285147"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
