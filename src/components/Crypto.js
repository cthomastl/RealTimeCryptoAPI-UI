


import { useEffect,useState } from 'react';
import  Axios from 'axios';


function Crypto() {
const [symbol,setSymbol] = useState("");
const [price,setPrice] = useState("");
const getName = ()=> {
  Axios.get('https://api.blockchain.com/v3/exchange/tickers').then(
    (response)=>{
   setSymbol(response.data[33].symbol)
   setPrice(response.data[33].price_24h)
    
   
  }, [])
}
getName();
let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;

function go() {
<a href="https://code-boxx.com"/>
  
}

  return (
    <div className="App">
 <h1 className='font-[Open_Sans] font-thin'>{dateTime}</h1>
 <h2>More Cryptos Coming Soon!</h2>
 <div>
 <header>
  <nav
    class="navbar navbar-expand-md shadow-lg py-2 bg-white relative flex items-center w-full justify-between"
  >
    <div class="px-6">
      <button
        class="navbar-toggler border-0 py-3 px-2 md:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContentX"
        aria-controls="navbarSupportedContentX"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          class="w-5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
        <ul class="navbar-nav mr-auto flex flex-col md:flex-row">
          <li class="nav-item">
            <a
              class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >Pricing</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="p-12 text-center bg-gray-100 text-gray-700">
    <h2 class="font-semibold text-4xl mb-4">{symbol}</h2>
    <h4 class="font-semibold text-xl mb-6">{price}</h4>
    <button 
      type="button"
      class="inline-block px-6 py-2.5 mb-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      <a href="http://www.bitcoin.com" class="text-white hover:text-gray-100 transition duration-300 ease-in-out">Buy Bitcoin</a>
    </button>
  </div>
</header>
 </div>
 </div>
  );
}

export default Crypto;