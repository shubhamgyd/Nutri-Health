export const Card = ({name, imageUrl, alt}) => {

  return <>
  <div className="main-card">
    <div className="card">
    <img src={imageUrl} alt={alt} />
    </div>
    <h3>{name}</h3>
  </div>
  </>
}