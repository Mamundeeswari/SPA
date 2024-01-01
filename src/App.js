import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import {useRoutes, Link} from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import NotFound from './Components/Not-Found';
import {useState} from 'react';

function App() {
  const [products,setProducts]=useState([
    {id:1,name:"Apple",description:"This is Apple",price:10, src:"https://media.istockphoto.com/id/626208912/photo/single-fresh-apple-on-white.jpg?s=612x612&w=0&k=20&c=JMIzNyLMPjeJkf0M7Tf9jCSqw4CgSN2MFpKuNr6WX7c="},
    {id:2,name:"Orange",description:"This is Orange",price:20, src:"https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE="},
    {id:3,name:"Banana",description:"This is Banana",price:30, src:"https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU="},
    {id:4,name:"Grape",description:"This is Grape",price:40, src:"https://media.istockphoto.com/id/157503760/photo/purple-grapes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UXkzK3rpwtaseIb67JAKgAz1xVXsQrN_gkKQ2m7HlSo="},
]);

let routeElements=useRoutes([
  {
    path:'/',
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/products',
        element:<Products products={products}/>,
        children:[
          {
            path:':id',
            element:<ProductDetails />
          }
        ]

      },
      {
        path:'*',
        element:<NotFound/>
      }
    ]
  }
])
  return (
    <div className="App">
      <nav>
      <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/about">About</Link></li>
     </ul>
      </nav>
   
    {routeElements}
    </div>
  );
}

export default App;
