import React from "react";


export default function BusinessCardRound(props) {
    const {avatar, title, width} = props;
    return (
        <div className="cursor-pointer" style={{width: `${width}`}}>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <img src={avatar} alt="" className="rounded-circle" style={{width: "90px", height: "90px", objectFit: "cover", border : "2px solid #00ADB5"}} />
                </div>
                <div className="">
                    <p className="textPrimary text-bold textSmall mt-2 text-center">{title}</p>
                </div>
            </div>
        </div>
    )
}