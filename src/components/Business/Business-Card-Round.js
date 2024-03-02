import React from "react";


export default function BusinessCardRound(props) {
    const {avatar, title} = props;
    return (
        <div className="cursor-pointer" style={{width: "110px"}}>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <img src={avatar} alt="" className="rounded-circle" style={{width: "90px", height: "90px", objectFit: "cover", border : "2px solid #00ADB5"}} />
                </div>
                <div className="">
                    <p className="textPrimary text-bold textSmall mt-2">{title}</p>
                </div>
            </div>
        </div>
    )
}