import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Link from "@mui/material/Link";
import { CiHome } from "react-icons/ci";
import { useContext } from "react";


const Navigation = () => {

  
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>

          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline w-100">
              <li className="list-inline-item ml-auto">
                <Link to="/"> <CiHome/> &nbsp; <Button>HOME</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button utton>MEN</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>WOMEN</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>BEAUTY</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>WATCHES</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>KIDS</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>GIFT</Button></Link>
              </li>
               <li className="list-inline-item">
                <Link to="/"><Button>BLOG</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>CONTACT</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
