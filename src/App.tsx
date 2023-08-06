import { useState } from "react";
import Rays from "./assets/rays.svg";
import Apple from "./assets/apple.svg";
import PlayStore from "./assets/playstore.svg";
import Twitch from "./assets/twitch.svg";
import Twitter from "./assets/twitter.svg";
import Insta from "./assets/insta.svg";
import CashApp from "./assets/cashapp.svg";
import Illuminati from "./assets/eye-button.svg";
import { Static } from "./utils/static";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-between lg:h-[50%]">
      <div className="flex justify-between p-4 lg:flex lg:flex-row lg:justify-between lg:p-4 lg:bg-black lg:items-center">
        <img src={CashApp} className="w-7 h-7" alt="cashapp-logo" />
        <div className=" hidden list-none bg-black text-white lg:block w-full transition-width h-full">
          <div className="p-4 lg:flex lg:flex-row lg:justify-between">
            {Static.menuItems.map((menuItem: string) => (
              <li className="cursor-pointer uppercase pt-2 px-2" key={menuItem}>
                {menuItem}
              </li>
            ))}
          </div>
        </div>
        <button
          className="text-white 
        h-7"
          onClick={() =>
            window.innerWidth <= 1023 ? handleToggleClick() : null
          }
        >
          <img src={Illuminati} alt="eye-icon" />
        </button>
        {toggleMenu && (
          <div className="flex flex-col justify-between">
            <ul className="list-none bg-black text-white absolute w-full transition-width left-0 top-0 h-full ">
              <button
                className="absolute top-4 right-7"
                onClick={() => setToggleMenu(false)}
              >
                X
              </button>
              <div className="p-4 ">
                {Static.menuItems.map((menuItem: string) => (
                  <li
                    className="cursor-pointer uppercase pt-2 px-2"
                    key={menuItem}
                  >
                    {menuItem}
                  </li>
                ))}
              </div>
            </ul>
            <div className="absolute flex w-full justify-between bottom-5 right-0 px-5">
              <img src={Twitch} alt="twitch-logo" />
              <img src={Twitter} alt="twitter-logo" />
              <img src={Insta} alt="insta-logo" />
            </div>
          </div>
        )}
      </div>
      <img className="my-2 bg-black" src={Rays} alt="cash-app" />
      <div className="text-white  px-4 lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-32">
        <div className="flex justify-center gap-6 pt-10">
          <div className="flex gap-2 h-7 items-center p-4 border rounded-md">
            <img src={Apple} alt="apple logo" />
            <p className="uppercase">app store</p>
          </div>
          <div className="flex gap-2 h-7 items-center p-4 border rounded-md">
            <img src={PlayStore} alt="google play logo" />
            <p className="uppercase">google play</p>
          </div>
        </div>

        <p className="text-xs text-cash-gray pt-16 lg:max-w-lg lg:pb-5">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
      </div>
      <div className="p-5 flex justify-between  lg:absolute lg:bottom-[-200px] lg:p-0 lg:right-6">
        <img src={Twitch} alt="twitch-logo" className="pl-2" />
        <img src={Twitter} alt="twitter-logo" className="pl-2" />
        <img src={Insta} alt="insta-logo" className="pl-2" />
      </div>
    </div>
  );
}

export default App;
