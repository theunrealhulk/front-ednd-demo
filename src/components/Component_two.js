
import Header from "./Header"
import Carousel from "react-elastic-carousel";
import CItem from "./CItem";

import icon6 from "./assets/icon6.png"
import icon1 from "./assets/icon1.png"
import icon4 from "./assets/icon4.png"
import icon5 from "./assets/icon5.png"
import icon7 from "./assets/icon7.png"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  
const Component_two = () => {
    return (
        <div>
            <Header headding="NOTRE EXPERTISE EN 6 ETAPES" />
            <Carousel pagination= {false} breakPoints={breakPoints}>

          <CItem
           src = {icon6}
           title ='Diagnostic' 
           text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta perferendis sint eos, harum voluptatum debitis. Facilis pariatur laboriosam impedit.'/>

           <CItem
           src = {icon1}
           title ='Nettoyage' 
           text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta perferendis sint eos, harum voluptatum debitis. Facilis pariatur laboriosam impedit.'/>

           <CItem
           src = {icon7}
           title ='Soins experts' 
           text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta perferendis sint eos, harum voluptatum debitis. Facilis pariatur laboriosam impedit.'/>

           <CItem
           src ={icon4}
           title ='title 04' 
           text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta perferendis sint eos, harum voluptatum debitis. Facilis pariatur laboriosam impedit.'/>

           <CItem
           src ={icon5}
           title ='title 05' 
           text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta perferendis sint eos, harum voluptatum debitis. Facilis pariatur laboriosam impedit.'/>

           <CItem
           src ={icon6}
           title ='title 06' 
           text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta perferendis sint eos, harum voluptatum debitis. Facilis pariatur laboriosam impedit.'/>

        </Carousel>
        </div>
    )
}

export default Component_two
