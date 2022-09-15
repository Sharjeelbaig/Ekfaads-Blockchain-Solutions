import Home01 from "./Home01";
import Home02 from "./Home02";
import Explore01 from './Explore01'
import Explore02 from './Explore02'
import Creator from './Creator'
import Item from './Item'
import ItemDetails from './ItemDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Developers from './Developers'
import ConnectWallet from './ConnectWallet'
import CreateItem from './CreateItem'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'
import Signout from "./Signout";

const routes = [
    { path: '/', component: <Home02 />},
    // { path: '/home-02', component: <Home02 />},
    { path: '/explore', component: <Explore01 />},
    { path: '/explore-02', component: <Explore02 />},
    { path: '/creator', component: <Creator />},
    { path: '/item', component: <Item />},
    { path: '/item-details', component: <ItemDetails />},
    { path: '/blog', component: <Blog />},
    { path: '/blog-details', component: <BlogDetails />},
    { path: '/Developers', component: <Developers />},
    // { path: '/connect-wallet', component: <ConnectWallet />},
    { path: '/create-item', component: <CreateItem />},
    { path: '/login', component: <Login />},
    { path: '/register', component: <Register />},
    { path: '/contact', component: <Contact />},
    { path: '/signout', component: <Signout />}
]

export default routes;