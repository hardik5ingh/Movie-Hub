import "./Navbar.css"
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar({ searchMovies, setSearchMovies, search }) {
    const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0()

    return (
        <header className=" d-flex justify-content-between align-items-center position-relative">
            <img src="/movieHub.png" alt="movies hub" />

            <div className="searchTab d-flex justify-content-center align-items-center">
                <input className=" w-100" type="text" placeholder="Search for movies"
                    value={searchMovies} onChange={(val) => setSearchMovies(val.target.value)} />
                <button onClick={() => search(searchMovies)} ><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></button>
            </div>
            
            

            <div className="loginLogoutBtn d-flex flex-column justify-content-center align-content-center gap-2">
                {isAuthenticated&&<div className="userName">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#FA0203" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></span>
                    <span className="ps-3">{user.name}</span>
                    </div>}
                {
                    isAuthenticated ? (
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                    ) :
                        (
                            <button onClick={() => loginWithRedirect()}>Login</button>
                        )
                }
            </div>
        </header>
    )
}