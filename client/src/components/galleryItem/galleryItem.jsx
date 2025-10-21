import './galleryItem.css'
import { Link } from 'react-router'
import Img from '../img/img'

const GalleryItem = ({item}) => {

const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div className='galleryItem' 
    style={{gridRowEnd: `span ${Math.ceil(item.height / 100)}`}} >
      {/* <img src={item.media} alt=''/> */}
      <Img src={item.media} alt="" w={372} h={optimizedHeight} />
      <Link to={`/pin/${item._id}`} className='overlay' ></Link>
      <button className='saveButton'>Save</button>
      <div className="overlayIcons">
        <button>
          <Img src="/general/share.svg" alt="" />
        </button>
        <button>
          <Img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  )
}
export default GalleryItem