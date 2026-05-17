import React, { useContext, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const CountryDropdown = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const [selectedTab, setselectedTab] = useState(null);

  const [countryList, setcountryList] = useState([]);

   const context = useContext(MyContext);

  const selectedCountry = (index, country) => {
    setselectedTab(index);
    setOpenModal(false);
    context.setselectedCountry(country);
  };

  useEffect(() => {
    setcountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <Button className="countryDrop" onClick={() => setOpenModal(true)}>
        <div className="into d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== "" ?context.selectedCountry.length>10 
              ? context.selectedCountry?.substr(0,10)+'...'
              : context.selectedCountry: "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        className="locationModal"
        TransitionComponet={Transition}
      >
        <h4>Choose your Delivery Location</h4>
        <p>Enter your Address and we will specify the offer your area.</p>
        <button className="close_" onClick={() => setOpenModal(false)}>
          <IoMdClose />
        </button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area....."
            onChange={filterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${selectedTab === index ? "active" : ""}`}
                >
                  <button onClick={() => selectedCountry(index, item.country)}>
                    {item.country}
                  </button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
