import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon} from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-gray-800">
            <div className = "container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-300 text-4xl font-bold cursive tracking-widest"
                    activeClassName= "text-gray-100 bg-gray-700"
                    >
                        Jason
                    </NavLink>
                    <NavLink 
                    to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 round text-blue-100 hover:text-green-300"
                    activeClassName= "text-gray-100 bg-gray-700"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink 
                    to="/project" 
                    className="inline-flex items-center py-3 px-3 my-6 round text-blue-100 hover:text-green-300"
                    activeClassName= "text-gray-100 bg-gray-700">
                        Project
                    </NavLink>
                    <NavLink 
                    to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 round text-blue-100 hover:text-green-300"
                    activeClassName= "text-gray-100 bg-gray-700">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6"> 
                    <SocialIcon
                    url="https://www.instagram.com/j.vvei/" 
                    className="mr-4" target="_blanck" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon 
                    url="https://www.youtube.com/channel/UCNVQk3TlhQyFk9mKAMtIg4w?view_as=subscriber" 
                    className="mr-4" target="_blanck" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon 
                    url="https://www.linkedin.com/in/jason-wei-925a9111b/" 
                    className="mr-4" target="_blanck" fgColor="#fff" style={{ height:35, width: 35}} />

                </div>
            </div>
        </header>
    )
}