import { useModalContext } from '../context/modal_context'

const ESVCopyrightModal = () => {
  const { isESVCopyrightModalOpen, closeESVCopyrightModal } = useModalContext()

  return (
    <div
      className={`${
        isESVCopyrightModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container w-5/6 p-3 pt-7 text-gray-100'>
        <p>
          Scripture quotations are from the ESV Bible (The Holy Bible, English
          Standard Version®), copyright © 2001 by Crossway, a publishing
          ministry of Good News Publishers. Used by permission. All rights
          reserved. The ESV text may not be quoted in any publication made
          available to the public by a Creative Commons license. The ESV may not
          be translated into any other language. Users may not copy or download
          more than 500 verses of the ESV Bible or more than one half of any
          book of the ESV Bible.
          <a href='http://www.esv.org' className='block underline'>
            esv.org
          </a>
        </p>
        <button
          className='close-modal-btn text-red-600 hover:text-red-800'
          onClick={closeESVCopyrightModal}
        >
          &#215;
        </button>
      </div>
    </div>
  )
}

export default ESVCopyrightModal
