import Card from 'react-bootstrap/Card';
import FOOD1 from './Images/FOOD1.webp'
import Button from 'react-bootstrap/Button';


function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={FOOD1} alt="Card image" />
      <Card.ImgOverlay  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       
        <Card.Text style={{justifyContent:"center",position:"absolute"}}>
          
          <h2 class="wixui-rich-text__text" style={{letterSpacing:"0.1em",textAlign:"center",font:"70px cinzel,serif",position:"relative"}}>THE ART OF FOOD</h2>
          <h4 style={{textAlign:"center",letterSpacing:"0.2rem",position:"relative"}}>PHOTOGRAPHY</h4>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <a href='#Viewmore'> <Button variant="outline-secondary"  style={{display:"flex",justifyContent:"center"}}>View More</Button>{' '}</a>
         </div>
          
        </Card.Text>
         
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;