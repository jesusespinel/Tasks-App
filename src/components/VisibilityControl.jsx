
export const VisibilityControl = ({isChecked,setShowCompleted,cleanTasks}) =>{

    const handleDelete = () =>{
        cleanTasks()
    }
    return(   
        <div className= "d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div className="form-check form-switch">
        <input
        className="form-check-input"
        type="checkbox"
         onChange={(e)=>setShowCompleted(e.target.checked)}
         checked={isChecked}
        />{" "}
        <label htmlFor="form-check-label">Show Task Done</label>
        </div>
        <button className="btn btn-danger btn-sm"  onClick={handleDelete}>
            Clear 
        </button>
      </div>
    )
}