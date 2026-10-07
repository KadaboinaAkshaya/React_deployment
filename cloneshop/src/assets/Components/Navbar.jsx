import "./Navbar.css"
function Navbar(){
    return <nav>
        <div className="navbar-container">
        <p>Home</p>
        <p>Shop By Category</p>
        <p>Best Sellers</p>
        <p>New In</p>
        <p>Guide</p>
        <h4 style={{position:"relative",position:"right"}}>Search Here</h4>
    </div>
</nav>
}
export default Navbar