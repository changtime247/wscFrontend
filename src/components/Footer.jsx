import Modal from './Modal'
import ESVCopyrightModal from './ESVCopyrightModal'
import { useModalContext } from '../context/modal_context'

export default function Footer() {
  const { openModal, openESVCopyrightModal } = useModalContext()

  return (
    <footer>
      <div id='footer-col-translation' className='flex justify-between'>
        <button onClick={openModal} className='btn rounded-tr-md'>
          About
        </button>
        <button onClick={openESVCopyrightModal} className='btn rounded-tl-md'>
          Translation: &#169; ESV
        </button>{' '}
      </div>
      <Modal />
      <ESVCopyrightModal />
    </footer>
  )
}
