import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img
                src={`/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="location">
                <span><img src="https://img.icons8.com/windows/32/null/marker.png" className="ziemia"/>{props.location}   </span>
                <span><a href="${props.googleMapsUrl">View on Google Maps</a></span>
            </div>
            <div className="name">
                <span><h1>{props.title}</h1></span>
            </div>
            <div className="date">
                <span>{props.startDate} - </span>
                <span>{props.endDate}</span>
            </div>
            <p className="desc">
                {props.description}
            </p> 
        </div>
    )
}