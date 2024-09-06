import React, { Component, useState } from "react";
import Home from "./Home";
import Cactus from "./component/cactus";
import Care from "./component/Care";
import Tree from "./component/Tree";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import moon from "./component/images/MoonCactus-removebg-preview.png";
import angel from "./component/images/angelWing2-removebg-preview.png";
import barel from "./component/images/BarrelCactus-removebg-preview.png";
import fishbone from "./component/images/FishboneCactus-removebg-preview.png";
import melo from "./component/images/Melocactus-removebg-preview.png";
import milk from "./component/images/milkTree-removebg-preview.png";
import saguara from "./component/images/SaguaroCactus2-removebg-preview.png";
import mistletoe from "./component/images/MistletoeCactus-removebg-preview.png";
import Cactuss from "./component/Cactuss";
import CDetail from "./component/cactusDetail";
import cac from "./component/images/cactus-removebg-preview.png"
import Trees from "./component/trees";
import Tdetail from "./component/treeDetail";
import bird from "./component/images/BIRD_S-NEST-FERN-removebg-preview.png"
import jade from "./component/images/JADE_PLANT-removebg-preview.png"
import kentia from "./component/images/KENTIAPALM-removebg-preview.png"
import philo from "./component/images/PHILODENDRON-removebg-preview.png"
import petos from "./component/images/POTHOS-removebg-preview.png"
import prayer from "./component/images/PRAYERPLANT-removebg-preview.png"
import snake from "./component/images/SNAKEPLANT-removebg-preview.png"
import trades from "./component/images/TRADESCANTIA-removebg-preview.png"
import zz from "./component/images/ZZPLANT-removebg-preview.png"

function App() {
  const [plant, setplant] = useState([
    {
      Name: "کاکتوس ماه",
      id: 1,
      water: "120ml",
      light: "متوسط",
      temp: "40℃",
      pot: "متوسط",
      time: "1/هفته",
      image: moon,
    },
    {
      Name: "بال فرشته",
      id: 2,
      water: "200ml",
      light: "متوسط",
      temp: "24℃",
      pot: "متوسط",
      time: "1/هفته",
      image: angel,
    },
    {
      Name: "بشکه ای",
      id: 3,
      water: "100ml",
      light: "زیاد",
      temp: "30℃",
      pot: "متوسط",
      time: "1/هفته",
      image: barel,
    },
    {
      Name: "تیغ ماهی",
      id: 4,
      water: "200ml",
      light: "کم",
      temp: "12℃",
      pot: "بزرگ",
      time: "2/هفته",
      image: fishbone,
    },
    {
      Name: "ملو",
      id: 5,
      water: "100ml",
      light: "متوسط",
      temp: "20℃",
      pot: "کوچک",
      time: "2/هفته",
      image: melo,
    },
    {
      Name: "تریگونا",
      id: 6,
      water: "200ml",
      light: "زیاد",
      temp: "15℃",
      pot: "متوسط",
      time: "1/هفته",
      image: milk,
    },
    {
      Name: "ساگوارو",
      id: 7,
      water: "200ml",
      light: "زیاد",
      temp: "18℃",
      pot: "بزرگ",
      time: "1/هفته",
      image: saguara,
    },
    {
      Name: "میستلتو",
      id: 8,
      water: "150ml",
      light: "متوسط",
      temp: "30℃",
      pot: "کوچک",
      time: "1/هفته",
      image: mistletoe,
    },
    {
      Name: "کاکتوس",
      id: 9,
      water: "150ml",
      light: "متوسط",
      temp: "30℃",
      pot: "کوچک",
      time: "1/هفته",
      image: cac,
    },
  ]);
  const [trees, setTrees] = useState([
    {
      Name: "آسپلنیوم ",
      id: 1,
      water: "200 ml",
      light: "کم",
      temp: "18℃",
      pot: "کوچک",
      time: "2/هفته",
      image: bird,
    },
    {
      Name: "کراسولا ",
      id: 2,
      water: "200ml",
      light: "متوسط",
      temp: "12℃",
      pot: "متوسط",
      time: "1/هفته",
      image: jade,
    },
    {
      Name: "نخل کنتیا",
      id: 3,
      water: "100ml",
      light: "متوسط",
      temp: "21℃",
      pot: "کوچک",
      time: "1/هفته",
      image: kentia,
    },
    {
      Name: " فلیودندرون",
      id: 4,
      water: "200ml",
      light: "کم",
      temp: "12℃",
      pot: "بزرگ",
      time: "2/هفته",
      image: philo,
    },
    {
      Name: "پتوس",
      id: 5,
      water: "100ml",
      light: "متوسط",
      temp: "20℃",
      pot: "کوچک",
      time: "2/هفته",
      image: petos,
    },
    {
      Name: "مارانتا",
      id: 6,
      water: "200ml",
      light: "زیاد",
      temp: "15℃",
      pot: "متوسط",
      time: "1/هفته",
      image: prayer,
    },
    {
      Name: "سانسوریا",
      id: 7,
      water: "200ml",
      light: "زیاد",
      temp: "18℃",
      pot: "بزرگ",
      time: "1/هفته",
      image: snake,
    },
    {
      Name: "برگ بیدی",
      id: 8,
      water: "150ml",
      light: "متوسط",
      temp: "30℃",
      pot: "کوچک",
      time: "1/هفته",
      image: trades,
    },
    {
      Name: "زامفولیا",
      id: 9,
      water: "150ml",
      light: "متوسط",
      temp: "30℃",
      pot: "کوچک",
      time: "1/هفته",
      image: zz,
    },
  ]);

  return (
    <>
   
      <Router>
        <Routes> 
          <Route Component={Home} path="/" />
          <Route Component={() => <CDetail plant={plant} />} path="/Detail/:productId" />
          <Route Component={() => <Cactuss plant={plant} />} path="/cactus" />
          <Route Component={Care} path="/care" />
          <Route Component={()=><Trees trees={trees}/>} path="/tree" />
          <Route Component={()=><Tdetail trees={trees} />} path="/details/:productId"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
