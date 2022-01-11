import Modal from 'react-modal'
import Success from '../data/Success.png'
import Fail from '../data/Cross.png'

Modal.setAppElement('#root')

export const EndGameModal = ({
  isOpen,
  handleClose,
  styles,
  darkMode,
  gameState,
  state,
  currentStreak,
  longestStreak,
  answer,
  playAgain,
}) => {
  const PlayAgainButton = () => {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <button
          type="button"
          className="rounded-lg px-6 py-2 mt-8 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    )
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={styles}
      contentLabel="Game End Modal"
    >
      <div className={darkMode ? 'dark' : ''}>
        <div className="h-full flex flex-col items-center justify-center max-w-[300px] mx-auto text-primary dark:text-primary-dark">
          {gameState === state.won && (
            <>
              <img src={Success} alt="success" height="auto" width="auto" />
              <h1 className=" text-3xl">Selamat!</h1>
              <p className="mt-6">
                Menang berturut-turut: <strong>{currentStreak}</strong> {currentStreak > 4 && '🔥'}
              </p>
              <p>
                Menang berturut-turut terpanjang: <strong>{longestStreak}</strong>
              </p>
            </>
          )}
          {gameState === state.lost && (
            <>
              <img src={Fail} alt="success" height="auto" width="80%" />
              <div className="text-primary dark:text-primary-dark text-4xl text-center">
                <p>Waduh!</p>
                <p className="mt-3 text-2xl">
                  Katanya adalah <strong>{answer}</strong>
                </p>
                <p className="mt-6 text-base">
                Menang berturut-turut: <strong>{currentStreak}</strong> {currentStreak > 4 && '🔥'}
                </p>
                <p className="text-base">
                Menang berturut-turut terpanjang: <strong>{longestStreak}</strong>
                </p>
              </div>
            </>
          )}
          <PlayAgainButton />
        </div>
      </div>
    </Modal>
  )
}
