const Modal = ({imgUrl, setModal}) => {
  const ocultarModal = ()=>{
    setModal(false);
  }
  return (
    <div className="overlay">
      <span onClick={ocultarModal}>&times;</span>
      <img src={imgUrl}/>
    </div>
  )
}

export default Modal
