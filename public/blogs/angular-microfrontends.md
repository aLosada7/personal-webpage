---
title: A guide start to micro-frontends in Angular
date: February 24th 2022
---

We will be using a tool called single-spa. Instead of a monolith, we will be creating different micro-frontends.

## What are micro-frontends

Micro-frontends orchestate everything through routing. They also provide strong boundaries with clear contracts, avoiding sharing logic.

This is a problem that have faced big companies like Netflix, descomposed their services into different subdomains, like Catalog, Subscriptions, Payments or the Player. Here is a very interesting conference talk by Luke Mezzalira speaking how they solved a similar problem to the Netflix one working at DAZN.

## What solves single-spa

Allows to create different microfronts combining the most popular SPA frameworks, like AngularJS, Angular, React or Vue.

## Let's do it

Before beginning, we have to install globally create-single-spa library. Run:

```bash
npm install --global create-single-spa
```

Then, we need to create an empty folder. Here is where our whole application resides, although each team will be specifically working on one single part (depends on the size of the team, maybe in more than one). Using a terminal or Visual Studio Code, we run:

```bash
create-single-spa
```

We have now to add the following configuration to our project:

-   **Directory for new project** - Directory where our microfront will reside. If we are going to create the header, let's call it header
-   **Type** - We have to select what we want to generate. In the near future, we will need a single-root config, but for now, let's select single-spa application/parcel
-   **Framework** - The framework we want to use. For this tutorial, I will select Angular, but feel free to choose the one you like.
-   Other config: **Project name** (al-header in my case), **Angular routing** (always add,we will explain later on), **stylesheet format** (like if you were creating a regular project)

Once all the packages has been installed, we can observe we have a regular Angular application with a new folder, called single-spa, and a new file, called main.single-spa.ts.

![Folder structure](/blogs/angular-microfrontends/Screenshot_2021-06-21_at_12.24.59.png)

We need to apply several changes:

-   Change the component selector, in app.component.ts. In my case, the new name for the selector is al-header, like the project name.
-   Following, in the main.single-spa.ts file, let's also change the lifecycle template.
    ![File modification](/blogs/angular-microfrontends/Screenshot_2021-06-21_at_12.29.26.png)
-   Optional: We can change the default prefix of our application, in our angular.json file. This is not mandatory
-   Now, we need to change our routing. This will allow empty-route folder component to be renderized.

```tsx
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
```

-   Now, we need to adjust our app.module.ts. After that, you can also edit the content in your template

```tsx
declarations: [AppComponent, EmptyRouteComponent],
```

-   With all this done, it's time to install dependencies. Once they have been install, you can start the applicationg

```bash
npm install
ng serve
```

Oh, you are already here. You have already probably notice that you see a blank window. It's completely normal. **It's time to create the routing.**

To do this, we again execute create-single-spa in a new terminal. We are going to call it container, and choose single-spa root config. We are going to use npm and typescript. Nevertheless, there is no need to use the single-spa engine. The organization name is important, choose one wisely (in my case I am going to name it alosada). We are going to use it in the future.

The container's folder has the following structure:

![Folder structure](/blogs/angular-microfrontends/Screenshot_2021-06-21_at_17.28.17.png)

alosada-root-config.ts contains a default registered application included by the creators of single-spa. Let's remove it and include our custom registered application.

![Root config](/blogs/angular-microfrontends/Screenshot_2021-06-21_at_17.30.36.png)

Now, at index.ejs, we can find the enviroment. We want to change the local environment. We need to change the imports. Here is the result:

```bash
"imports": {
    "@alosada/root-config": "//localhost:9000/alosada-root-config.js",
		"@alosada/al-header": "//localhost:4200/main.js"
}
```

By default, main.js is the file which exposes our micro frontend. We can also add different libraries to this file, as if it were a HTML with a script tag inside the body.

Let's uncomment ZoneJS, which will be useful for Angular, and add bootstrap. After that, install packages and run the application (npm install and npm start, respectively).

Now, if we change the content of the header, you will see changes reflected in the container window. This is how our application looks now.

![Creating%20y%205de9d/Screenshot_2021-06-21_at_17.38.05.png](Creating%20y%205de9d/Screenshot_2021-06-21_at_17.38.05.png)

We can now add as much microfrontends as we want. It's important to specify different ports to each of the applications you want to run.

We can also add some styles in our configuration file (in the container) and also structuring the content. I've created a couple of new micro frontends and here is how I set the structure.

```bash
"imports": {
	  "@alosada/root-config": "//localhost:9000/alosada-root-config.js",
	  "@alosada/al-header": "//localhost:4200/main.js",
	  "@alosada/al-landing": "//localhost:4202/main.js",
	  "@alosada/al-price-plan": "//localhost:4204/main.js"
}
```

Here is the final result after some refactoring:

![App result](/blogs/angular-microfrontends/Screenshot_2021-06-21_at_18.49.12.png)

## Extra, extra

There is an extension available for Firefox or Chrome which allows you to manage all your micro-frontends in one window of the developer tools.

You can download it [here](https://single-spa.js.org/docs/devtools/). Here is how it looks after I added a couple of new micro frontends:

![Extension to manage micro-frontends](/blogs/angular-microfrontends/Screenshot_2021-06-21_at_18.09.02.png)

## Conclusions

It's really easy to enter the world of micro frontends, but unfortunatelly, there is not so much documentation about how to do it. I hope to have helped you and introduced a new develop approach. This approach is going to be very useful when you want to develop a component in a specific techonology or you have different teams working in different parts of your application.

All the code used in this post is available at [https://github.com/aLosada7/cra-test](https://github.com/aLosada7/cra-test)
