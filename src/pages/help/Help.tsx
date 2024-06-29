import HelpCard from "../../components/help-card/HelpCard";
import "./Help.css";
import { HelpCardData } from "./HelpData";

export default function Help() {
  return (
    <div className="help" id="Help">
      <div className="help-content">
        <h2 className="help-title">How you can help our shelter</h2>
        <div className="help-cards">
          {HelpCardData.map((data) => (
            <HelpCard key={data.id} title={data.title} image={data.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
