import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// 🔥 IMPORTS DO FIREBASE
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { firebaseConfig } from './environments/firebase';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),

    // 🔥 INICIALIZAÇÃO DO FIREBASE — ESSA PARTE É OBRIGATÓRIA
    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    // 🔥 AUTH E DATABASE (só funcionam depois do initializeApp)
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
});
