import './App.css';
import Menus from './Menu';
import { useNavigate } from 'react-router-dom';
export const Header = ({onSearch, showsearch})=> {
const navigate = useNavigate();
return(
    <div class ="shopping-cart-header">
      <span className="brand-name" onClick={()=>{
        navigate("/")
      }}>Urban Layer</span>
      {showsearch === "true" && 
      <input
        type="text"
        placeholder="Search products..."
        className="search-products"
        onChange={(e) => onSearch(e.target.value)}
      />}
      <Menus></Menus>
    </div>
)
};
export default Header;