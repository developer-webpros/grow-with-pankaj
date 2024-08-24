import React from "react";
import "./App.css";
import Increase from "./assets/increase.png";
import GoogleSearchForm from "./GoogleSearchForm";
import Tradingview from "./assets/tradingview.png";
import Chatgpt from "./assets/chatgpt.png";
import Blackbox from "./assets/blackbox.png";
import Idea from "./assets/idea.png";
import News from "./assets/news.png";
import Youtube from "./assets/youtube.png";
import Search from "./assets/search.png";
import Excel from "./assets/excel.png";
import Heatmap from "./assets/heatmap.png";
import ButtonComponent from "./ButtonComponent";
import Quote from "./Quote"
import BlinkingTex from './BlinkingText';
import Swing from "./assets/swing.png"
import Swing2 from "./assets/swing2.png"
import RiskCalculator from "./RiskCalculator";


function Buttons() {

  return (
    <>
      <div className="full-container">
          <RiskCalculator/>
        <div className="search-container">
          <GoogleSearchForm />
         
        </div>
       
        <BlinkingTex/>
        
        <Quote/>
        <div className="container">
        <ButtonComponent
            href={"https://www.youtube.com/"}
            name={"YouTube"}
            img={Youtube}
          />
          <ButtonComponent
            href={"https://in.tradingview.com/chart/aQQMslBo/"}
            name={"Chart"}
            img={Tradingview}
          />

          <ButtonComponent
            href={"https://trade.fyers.in/"}
            name={"Fyers"}
            img={Increase}
          />

          <ButtonComponent
            href={"https://chatgpt.com/"}
            name={"ChatGpt"}
            img={Chatgpt}
          />

          <ButtonComponent
            href={"https://www.blackbox.ai/"}
            name={"BlackBox"}
            img={Blackbox}
          />

         

          <ButtonComponent
            href={"https://in.tradingview.com/news/#markets "}
            name={"News"}
            img={News}
          />

          <ButtonComponent
            href={"https://in.tradingview.com/community/"}
            name={"Ideas"}
            img={Idea}
          />

          <ButtonComponent
            href={"https://in.tradingview.com/screener/"}
            name={"Screener"}
            img={Search}
          />

        

          <ButtonComponent
            href={
              "https://docs.google.com/spreadsheets/d/1mD_yNE4280KuJxqhLFlwyQJL_KCt-VEQ-83TWW3N97U/edit?gid=0#gid=0"
            }
            name={"Excel"}
            img={Excel}
          />

          <ButtonComponent
            href={
              "https://in.tradingview.com/heatmap/stock/#%7B%22dataSource%22%3A%22CNX500%22%2C%22blockColor%22%3A%22change%22%2C%22blockSize%22%3A%22market_cap_basic%22%2C%22grouping%22%3A%22sector%22%7D"
            }
            name={"HeatMap"}
            img={Heatmap}
          />
        </div>
      </div>
    </>
  );
}

export default Buttons;
