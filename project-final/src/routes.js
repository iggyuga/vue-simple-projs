// import Home from './components/Home.vue';
// import Header from './components/Header.vue';

// //lazy loading, webpack async function
// const Portfolio = resolve => {
// 	require.ensure(['./components/portfolio/Portfolio.vue'], () => {
// 		resolve(require('./components/portfolio/Portfolio.vue'));
// 	}, 'portfolio'); // 3rd param used to package modules
// };
// const PortfolioStock = (resolve) => {
//   require.ensure(["./components/portfolio/Stock.vue"], () => {
//     resolve(require("./components/portfolio/Stock.vue"));
//   }, 'portfolio');
// };
// const Stocks = (resolve) => {
//   require.ensure(["./components/stocks/Stocks.vue"], () => {
//     resolve(require("./components/stocks/Stocks.vue"));
//   }, 'stocks');
// };
// const Stock = (resolve) => {
//   require.ensure(["./components/stocks/Stock.vue"], () => {
//     resolve(require("./components/stocks/Stock.vue"));
//   }, 'stocks');
// };

// export const routes = [
// 	{	path: '', name: 'home', components: {
// 		default: Home,
// 		'header-top': Header
// 	} },
// 	{	path: '/portfolio',
// 		components: {
// 			default: Profile,
// 		}, children: [
// 			{ path: ''
// 				, component: Portfolio 
// 			},
// 			{ 	path: ':stock'
// 				, component: PortfolioStock
// 				, beforeEnter: (to, from, next) => {
// 					console.log('inside route setup');
// 					next();
// 			} },
// 		],
// 	},
// 	{	path: '/stocks',
// 		components: {
// 			default: Stocks,
// 			}, children: [
// 			{ path: ''
// 				, component: Stocks 
// 			},
// 			{ path: ':stock'
// 				, component: Stock
// 				, beforeEnter: (to, from, next) => {
// 					console.log('inside route setup');
// 					next();
// 			} },

// 		],
// 	},
// 	{ path: '/redirect-me', redirect: { name: 'home' } },
// 	{ path: '*', redirect: '/' }
// ];

import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/stocks', component: Stocks },

]