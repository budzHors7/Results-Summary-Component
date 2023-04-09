import Image from 'next/image'
import localFont from 'next/font/local'
import Reaction from './assets/images/icon-reaction.svg'
import Memory from './assets/images/icon-memory.svg'
import Verbal from './assets/images/icon-verbal.svg'
import Visual from './assets/images/icon-visual.svg'

const font = localFont({
  src: './assets/fonts/HankenGrotesk-VariableFont_wght.ttf',
  display: 'swap',
})

const summaryObject = [
  {
    id: 1,
    icon: Reaction,
    name: 'Reaction',
    rating: '80',
    styleBody: 'bg-[#F55]/10 p-3 rounded-xl summaryText',
    styleText: 'text-[#F55]',
    styleNo: 'text-[--darkGrayBlue]'
  },
  {
    id: 2,
    icon: Memory,
    name: 'Memory',
    rating: '92',
    styleBody: 'bg-[#FFB21E]/10 p-3 rounded-xl summaryText',
    styleText: 'text-[#FFB21E]',
    styleNo: 'text-[--darkGrayBlue]'
  },
  {
    id: 3,
    icon: Verbal,
    name: 'Verbal',
    rating: '61',
    styleBody: 'bg-[#00BB8F]/10 p-3 rounded-xl summaryText',
    styleText: 'text-[#00BB8F]',
    styleNo: 'text-[--darkGrayBlue]'
  },
  {
    id: 4,
    icon: Visual,
    name: 'Visual',
    rating: '72',
    styleBody: 'bg-[#1125D6]/10 p-3 rounded-xl summaryText',
    styleText: 'text-[#1125D6]',
    styleNo: 'text-[--darkGrayBlue]'
  },
]

export default function Home() {
  return (
    <main className={`main ${font.className}`}>
      {/* Left Side */}
      <div className="leftSide">
        <h4 className="leftHeading">Your Results</h4>

        <div className="leftCircle">
          <h2 className="leftScore">76</h2>
          <p className="leftScoreFinal">of 100</p>
        </div>

        <div className="leftBodyText">
          <h2 className="leftBodyHeading">Great</h2>

          <p className="leftBodyParagraph">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="rightSide">
        <h4 className="rightHeading">Summary</h4>

        <div className="list">
          {
            summaryObject.map((summary) => (
              <div key={summary.id} className={`listBody ${summary.styleBody}`}>
                {/* left */}
                <div className="listBodyLeft">
                  <Image src={summary.icon} alt={summary.name} />

                  <p className={summary.styleText}>{summary.name}</p>
                </div>

                {/* right */}
                <div className="listBodyRight">
                  <p><span className={summary.styleNo}>{summary.rating}</span> / 100</p>
                </div>
            </div>
            ))
          }
        </div>

        <div className="">
          <button className="summaryButton">Continue</button>
        </div>
      </div>
    </main>
  )
}
