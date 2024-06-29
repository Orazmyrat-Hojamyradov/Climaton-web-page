import React from "react";
import HelpCard from "../../components/help-card/HelpCard";
import "./Help.css";

const Help = () => {
  return (
    <div className="help" id="Help">
      <div className="help-content">
        <h2 className="help-title">How you can help our shelter</h2>
        <div className="help-cards">
          <HelpCard
            title="Pet food"
            image="./src/components/help-card/icons/icon-pet-food.png"
          />
          <HelpCard
            title="Transportation"
            image="./src/components/help-card/icons/transportation.png"
          />
          <HelpCard
            title="Toys"
            image="./src/components/help-card/icons/toys.png"
          />
          <HelpCard
            title="Bowls and cups"
            image="./src/components/help-card/icons/icon-bowls-and-cups.svg"
          />
          <HelpCard
            title="Shampoos"
            image="./src/components/help-card/icons/shampoos.png"
          />
          <HelpCard
            title="Vitamins"
            image="./src/components/help-card/icons/vitamins.png"
          />
          <HelpCard
            title="Medicines"
            image="./src/components/help-card/icons/icon-medicines.svg"
          />
          <HelpCard
            title="Collars / leashes"
            image="./src/components/help-card/icons/icon-collars-leashes.svg"
          />
          <HelpCard
            title="Sleeping areas"
            image="./src/components/help-card/icons/sleeping-area.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
