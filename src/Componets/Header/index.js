import Link from "@mui/material/Link";
import Logo from "../../assets/images/logo.png";
import CountryDropdown from "../CountryDropdown";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo"></img>
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown/>

                {/* Header Search Start Here */}

                  <div className="headerSearch">
                    <input type="text"/>
                    <Button><IoSearch/></Button>
                  </div>

                {/* Header Search End Here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
