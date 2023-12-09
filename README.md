
<div align="center">
<img src="https://i.ibb.co/vmzcBN5/screencapture-localhost-5173-2023-12-07-16-57-05.png" alt="screencapture-localhost-5173-2023-12-07-16-57-05" border="0" />

<br/><br/>

<h1>✍🏻 WOODHY</h1>
<p>MERN Webapp to edit and preview markdown<p/><br/>

</div>


## ⭐ Features

* Live Preview
* Category wise product preview
* Ssort products by Price (low-high, high-low) and Name (A-Z, Z-A),price range
* Grid and list view.
* Add reviews, instantly displayed.
* Add delete cart & favorite items and update the quantity of items.
* Admin can create, delete, and edit products.
* Add multiple images to a single product.
* Access the admin panel using the provided email and password (email: w3gmail.co , password: 123456).

<br/>

## ⚙ Setup locally

### Requirements 🍫

- Node.js
- npm
- MongoDb
- Git (optional)

<br/>

### Common setup ⚒ 

Clone the repo and install the dependencies.

<br/>

```bash
git clone https://github.com/kopildas/furniture.git
cd furniture
```

```bash
npm install
```

```bash
npm start
```
###### This will start `server`

###### For Frontend

```bash
cd client
```
```bash
npm install
```

```bash
npm run dev
```

###### This will start `frontend` in `http://localhost:3000/`
<br/>

### Run in development mode 🧪

Execute the following command to run the app in the development mode.


```
npm start
```


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

<br/>

### Generate a Build 📦

```
npm run build
```

Builds the app for production to the `dist` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

Now the app is ready to be deployed!

<br/>


## 🌳 Project Tree

```
furniture
├─ client
│  ├─ .eslintrc.cjs
│  ├─ .gitignore
│  ├─ dist
│  │  ├─ assets
│  │  │  ├─ index-b735094b.js
│  │  │  ├─ index-d97fe186.css
│  │  │  ├─ modern-living-room-interior-design (1)-18057390.jpg
│  │  │  └─ woodhy-high-resolution-logo-transparent-0814405c.png
│  │  └─ index.html
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  ├─ README.md
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  ├─ component
│  │  │  ├─ Admin_Comp
│  │  │  │  ├─ Dashboard
│  │  │  │  │  ├─ Box.jsx
│  │  │  │  │  ├─ New_customers.jsx
│  │  │  │  │  ├─ New_order.jsx
│  │  │  │  │  ├─ OrderGraph.jsx
│  │  │  │  │  ├─ Seles_Report.jsx
│  │  │  │  │  ├─ Top_Products.jsx
│  │  │  │  │  └─ Transaction.jsx
│  │  │  │  ├─ DeleteProduct.jsx
│  │  │  │  ├─ EditProduct.jsx
│  │  │  │  ├─ GallaryImgShow.jsx
│  │  │  │  ├─ ImgInput.jsx
│  │  │  │  ├─ ImgShow.jsx
│  │  │  │  ├─ Sidebar
│  │  │  │  │  ├─ Sidebar.jsx
│  │  │  │  │  └─ SidebarItem.jsx
│  │  │  │  └─ Toggle_button.jsx
│  │  │  ├─ Footer
│  │  │  │  └─ Footer.jsx
│  │  │  ├─ Header
│  │  │  │  ├─ Header.jsx
│  │  │  │  └─ PrivateAdminRoute.jsx
│  │  │  ├─ Home
│  │  │  │  ├─ CartContainer.jsx
│  │  │  │  ├─ CartitemComponenet.jsx
│  │  │  │  ├─ Cata_wise_product.jsx
│  │  │  │  ├─ Category.jsx
│  │  │  │  ├─ InfoDiv_1.jsx
│  │  │  │  ├─ InfoDiv_2.jsx
│  │  │  │  ├─ ProductContainer.jsx
│  │  │  │  ├─ Review.jsx
│  │  │  │  └─ ViewProduct.jsx
│  │  │  ├─ Loader.jsx
│  │  │  ├─ Login
│  │  │  │  ├─ Login_popup.jsx
│  │  │  │  └─ SignUp_popup.jsx
│  │  │  ├─ Shop
│  │  │  │  └─ Add_To_Cart.jsx
│  │  │  └─ U_construction.jsx
│  │  ├─ context
│  │  │  ├─ initialState.js
│  │  │  ├─ reducer.js
│  │  │  └─ StateProvider.jsx
│  │  ├─ img
│  │  │  ├─ mid-century-modern-living-room-interior-design-with-monstera-tree.jpg
│  │  │  ├─ modern-living-room-interior-design (1).jpg
│  │  │  └─ woodhy-high-resolution-logo-transparent.png
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ About
│  │  │  │  └─ About.jsx
│  │  │  ├─ Account
│  │  │  │  └─ Account.jsx
│  │  │  ├─ Admin
│  │  │  │  ├─ AddProducts.jsx
│  │  │  │  ├─ All_Products.jsx
│  │  │  │  ├─ Dashboard.jsx
│  │  │  │  ├─ Orders.jsx
│  │  │  │  ├─ Review.jsx
│  │  │  │  └─ Users.jsx
│  │  │  ├─ Home
│  │  │  │  ├─ Home.css
│  │  │  │  └─ Home.jsx
│  │  │  ├─ Shop
│  │  │  │  ├─ Favourite.jsx
│  │  │  │  ├─ Shop.jsx
│  │  │  │  ├─ SingleItem.jsx
│  │  │  │  └─ ViewCart.jsx
│  │  │  ├─ Showroom
│  │  │  │  └─ Showroom.jsx
│  │  │  └─ SignInUp
│  │  │     ├─ Login.jsx
│  │  │     └─ Signin.jsx
│  │  └─ utils
│  │     └─ fetchLocalStorageData.js
│  ├─ tailwind.config.js
│  ├─ vercel.json
│  └─ vite.config.js
├─ config
│  └─ dbConn.js
├─ controllers
│  ├─ authController.js
│  └─ productsController.js
├─ errors
│  ├─ badREQerror.js
│  ├─ customAPIerror.js
│  ├─ index.js
│  └─ unauthenticated.js
├─ middleware
│  ├─ error-handler.js
│  └─ not-found.js
├─ models
│  ├─ Products.js
│  ├─ ProductsMongoDb.js
│  └─ Users.js
├─ package-lock.json
├─ package.json
├─ routes
│  ├─ authRoutes.js
│  └─ productsRoutes.js
├─ server.js
└─ vercel.json

```

## ✍🏻 Author
[Kopil Das](https://www.linkedin.com/in/kopildas/)