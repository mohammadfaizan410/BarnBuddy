import React from "react";
import { CiSearch } from "react-icons/ci";


export default function Search() {
    return (
        <div class="input-group d-flex flex-grow" >
        <input type="text" placeholder="Search" className="form-control"  />
        <div class="input-group-addon border-top border-bottom border-end px-2 cursor" style={{cursor: "pointer"}}>
            <CiSearch size={22}/>
        </div>
    </div>
    );
}