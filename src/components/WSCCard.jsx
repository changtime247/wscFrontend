import { useEffect } from 'react'
import axios from 'axios'
import { topics } from '../data/allQues'
import parse from 'html-react-parser'
import faEarthAfrica from '../data/earth-africa.svg'
import {
  faSkullCrossbones,
  faCross,
  faBookOpen,
  faChurch,
  faPersonPraying,
} from '../data'
import { stripESV } from '../util/utils'
import { useAppContext } from '../context/app_context'

const WSCCard = () => {
  const {
    index,
    content,
    isLoading,
    setIsLoading,
    proofTextState,
    setProofTextState,
    showAnswer,
    setShowAnswer,
    showProof,
    setShowProof,
  } = useAppContext()

  const restEndpoint = 'https://shy-tan-whale-veil.cyclic.app/'

  useEffect(() => {
    const fetchProofText = async ({ proofText }) => {
      setIsLoading(true)
      const proofs = proofText.join`;`
      try {
        const response = await axios(`${restEndpoint}/`, {
          headers: {
            'Content-Type': 'application/json',
          },
          params: { proofs: JSON.stringify(proofs) },
        })
        setProofTextState([...response.data.passages])
        setIsLoading(false)
      } catch (error) {
        console.log('Something went wrong')
        setIsLoading(false)
      }
    }
    fetchProofText(content)
  }, [content, showProof])

  useEffect(() => {
    if (!proofTextState) return
    if (isLoading) return
  }, [index, content, showProof, proofTextState])

  return (
    <div className='container w-fit min-w-[50%] xl:w-8/12 mx-auto'>
      <div className='main-card'>
        <div className='flex justify-center'>
          {content.id < topics[1].id ? (
            <img className='faIcon' src={faEarthAfrica} alt='EarthAfrica' />
          ) : content.id < topics[2].id ? (
            <img
              className='faIcon'
              src={faSkullCrossbones}
              alt='SkullCrossbones'
            />
          ) : content.id < topics[3].id ? (
            <img className='faIcon' src={faCross} alt='Cross' />
          ) : content.id < topics[4].id ? (
            <img className='faIcon' src={faBookOpen} alt='BookOpen' />
          ) : content.id < topics[5].id ? (
            <img className='faIcon' src={faChurch} alt='Church' />
          ) : (
            <img className='faIcon' src={faPersonPraying} alt='PersonPraying' />
          )}
        </div>
        <p>
          Q{content.id}. {content.question}
        </p>
        <button
          size='sm'
          className='btn rounded-md flex justify-center'
          onClick={() => {
            setShowAnswer(!showAnswer)
            showProof && setShowProof(!showProof)
          }}
        >
          {showAnswer ? 'Hide answer' : 'Show answer'}
        </button>
        {showAnswer && (
          <div className='show-answer'>
            <p>
              A{content.id}. {content.answer}
            </p>
            <button
              size='sm'
              className='btn rounded-md flex justify-center'
              onClick={() => setShowProof(!showProof)}
            >
              {showProof ? 'Hide proof' : 'Show proof'}
            </button>
          </div>
        )}
        <div className='div-proof-text'>
          {showProof && <h3 className='underline'>Proof-text</h3>}
          {showProof &&
            proofTextState.map((p, idx) => (
              <div key={idx}>
                <span className='text-sm'>{`(${idx + 1})`}&nbsp;</span>
                {parse(stripESV(p))}
                <br />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default WSCCard
