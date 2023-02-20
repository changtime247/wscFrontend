import { topics } from '../data/allQues'
import { useAppContext } from '../context/app_context'

function Header() {
  const { list, id, setContent, setIndex, index, setShowAnswer, setShowProof } =
    useAppContext()

  function handleSelect(e) {
    e.preventDefault()
    setIndex(+e.target.value - 1)
    setContent(list[+e.target.value - 1])
    setShowAnswer(false)
    setShowProof(false)
  }

  return (
    <>
      <h1 className='title pt-5 font-semibold'>Westminster Shorter Catechism</h1>
      <nav className='flex justify-center'>
        <button
          className='btn rounded-l-md'
          onClick={() => {
            setShowAnswer(false)
            setShowProof(false)
            index > 0 && setIndex(index - 1)
            index > 0 && setContent(list[index - 1])
          }}
        >
          Prev
        </button>
        <select onChange={handleSelect} value={id} className='pl-1'>
          {topics.map(({ topic, id }) => (
            <option key={id} value={id} className='text-black'>
              {topic}
            </option>
          ))}
        </select>
        <button
          className='btn rounded-r-md'
          onClick={() => {
            setShowAnswer(false)
            setShowProof(false)
            index < list.length - 1 && setIndex(index + 1)
            index < list.length - 1 && setContent(list[index + 1])
          }}
        >
          Next
        </button>
      </nav>
    </>
  )
}

export default Header
