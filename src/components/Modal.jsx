import { useModalContext } from '../context/modal_context'

const Modal = () => {
  const { isModalOpen, closeModal } = useModalContext()

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container w-5/6 p-3 pt-7 text-gray-100'>
        <p>What is the Westminster Shorter Catechism?</p>
        <p>
          The WSC is for anyone curious about Christianity. It faithfully and
          logically explains the core Christian tenets{' '}
          <i>with Scriptural proof texts</i>. For a deeper and more
          comprehensive study, please read the Westminster Confession of Faith
          and the Larger Catechism. Thanks for reading. Soli Deo gloria.
        </p>
        <button
          className='close-modal-btn text-red-600 hover:text-red-800'
          onClick={closeModal}
        >
          &#215;
        </button>
      </div>
    </div>
  )
}

export default Modal
