import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CartCountComponent } from './cart-count/cart-count.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductListComponent,
        title:'product list'
    },
    {
        path:'about-us',
        component:AboutUsComponent,
        title:'about us'
    },
    {
        path:'contact-us',
        component:ContactUsComponent,
        title:'add product'
    }
    ,
    {
        path:'details/:id',
        component:DetailsComponent,
        title:' product details'
    }
    ,
    {
        path:'add product',
        component:AddProductComponent,
        title:'add product'
    }
    ,
    {
        path:'test',
        component:TestComponent,
        title:'test'
    }
    ,
    {
        path:'login',
        component:LoginComponent,
        title:'login'
    }
    ,
    {
        path:'register',
        component:RegisterComponent,
        title:'register'
    }
    ,
    {
        path:'cart',
        component:CartComponent,
        title:'cart'
    }
    ,
    {
        path:'cart-count',
        component:CartCountComponent,
        title:'cart-count'
    }
    ,
    {
        path:'**',
        component:NotFoundComponent,
        title:'page not found'
    }
];
