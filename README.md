#create new proyect angular cli
  ng new  name-proyect

# create comand generete
  ng g c name-component                           ->  create componente
  ng g module pages/name-component                -> create module
  ng g component pages/folder/name-list -m name   -> create files

# configuration route in app-routing.module.ts
      const routes: Routes = [
        { path: '', loadChildren: './home/home.module#HomeModule' },
        { path: '**', redirectTo: 'error/ec' }
      ];

#configuration route in component
    exports: [HomeComponent],     -> export component to call it from the main router

      import { Routes, RouterModule } from '@angular/router';
        const routes: Routes = [
          { path: '', component: HomeComponent }
        ];
