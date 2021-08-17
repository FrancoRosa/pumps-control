import CalibConstants from "./CalibConstansts"

const CalibModal = ({ showModal, setShowModal }) => {
  return (
    <div className={`modal ${showModal && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <CalibConstants />
      </div>
      <button 
        className="modal-close is-large"
        onClick={() => setShowModal(false)} 
        aria-label="close">
      </button>
    </div>
  )
}

export default CalibModal;