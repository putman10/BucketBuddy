import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BuddyListComponent } from './buddy-list/buddy-list.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component'
import { HomeComponent } from './home/home.component';
import { BuddyDetailComponent } from './buddy-detail/buddy-detail.component';
import { MutualBucketItemsComponent } from './mutual-bucket-items/mutual-bucket-items.component';
import { InboxComponent } from './inbox/inbox.component';


const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
   {
      path: 'bucketlist',
      component: BucketListComponent
    },
    {
      path: 'buddylist',
      component: BuddyListComponent
    },
    {
      path: 'profileuser',
      component: ProfileUserComponent
    },
    {
      path: 'profileuser/update',
      component: ProfileUpdateComponent
    },
    {
      path:'buddy/:id',
      component: BuddyDetailComponent
    },
    {
       path: 'items/:id',
       component: MutualBucketItemsComponent
     },
     {
        path: 'test',
        component: InboxComponent
      }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
