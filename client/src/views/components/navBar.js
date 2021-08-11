const NavBar = () => {
    return (
        <header className="nav-container">
            <div className="nav-container__header">
                <a href="/"><div className="nav-container__logo">MOVIESLOG</div></a>
                <div className="nav-container__navigation">
                    <a href="/search">Search</a>
                    <a href="/login">Login</a>
                    <a href="/join">Join</a>
                </div>
            </div>
        </header>  
    )
};
export default NavBar;