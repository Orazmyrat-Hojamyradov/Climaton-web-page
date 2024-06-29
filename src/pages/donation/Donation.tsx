import React from "react";
import DonationDog from "../../images/donation-dog.png";
import "./Donation.css";

const Donation = () => {
  const icon = <i className="fa-solid fa-credit-card"></i>;
  return (
    <div className="donation" id="Donation">
      <div className="donation-content">
        <img className="donation-image" src={DonationDog} alt="Dog" />
        <div className="donation-info">
          <h2 className="donation-title">You can also make a donation</h2>
          <p className="donation-subtitle">
            Name of the bank / Type of bank account
          </p>
          <div className="donation-input">
            <i className="fa-solid fa-credit-card"></i>
            <input type="text" placeholder="8380 2880 8028 8791 7435" />
          </div>
          <div className="donation-text-container">
            Legal information and lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
