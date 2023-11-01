import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {

    if(title.length>50){
        title=title.slice(0,50)+"..."
    }

  return (
    <div className="cardContainer flex-gap-6" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey cardCam'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://www.shutterstock.com/image-photo/passport-photo-cute-well-dressed-260nw-1816206689.jpg" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 600}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;