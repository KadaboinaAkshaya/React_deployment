import "./TopNavbar.css"
const TopNavbar = () =>{
    return<nav style={{ backgroundColor:"white",height:"100px", color:"black", display:"flex",justifyContent:"space-around"}}>
        <div>
            <h5>FREE SHIPPINGOVER $99</h5>
        </div>

        <center style={{backgroundColor:"white", color:"black", display:"flex", justifyContent:"center"}}>
            <h2>CloneShop</h2>
        </center>

        <div className="top-navbar-container">
            <p>Shipping</p>
            <p>Faq</p>
            <p>Contact</p>
        </div>
    </nav>
}
export default TopNavbar;