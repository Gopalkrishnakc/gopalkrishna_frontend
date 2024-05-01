
import Nav from 'react-bootstrap/Nav';



function CollapsibleExample() {
  return (

    
    
    <div className="nav-container d-flex mt-4" style={{ marginLeft:'-15px' }}>
    <h2 style={{color:'grey', marginLeft:'60px'}}>J. ALISSA</h2>
    <div style={{marginLeftleft:'85px'}}>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
    <Nav.Link eventKey="link-1" style={{ color: 'black' ,marginLeft:'400px'}} >Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" style={{ color: 'black' }}>Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3" style={{ color: 'black' }}>About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-4" style={{ color: 'black' }}>Books</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-5" style={{ color: 'black' }}>Blog</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-6" style={{ color: 'black' }}>ClientAlbum</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-7" style={{ color: 'black' }}>Contact</Nav.Link>
    </Nav.Item>
    </Nav>
    </div>
  </div>
  );
}

export default CollapsibleExample;