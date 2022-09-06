import './index.css'

const ImageItem = props => {
  const {TabDetails, onSelectThumbnail} = props
  const {id, thumbnailUrl} = TabDetails

  const onThumbnail = () => {
    onSelectThumbnail(id)
  }

  return (
    <li className="images-list-container">
      <button className="thumbnail-button" type="button" onClick={onThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="fruits-imgs" />
      </button>
    </li>
  )
}
export default ImageItem
