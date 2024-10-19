import {Navbar} from "../components/Navbar"
export const DiseaseForm = () => {

  const handleDragOver = () => {
    document.getElementById("drag-area").classList.add("drag-over")
  }

  return (
  <>
    <Navbar />
    <div className="drag-container">
      <div className="drag-area" id="drag-area" onDragOver={handleDragOver}>
        
      </div>
    </div>
  </>
  )
}