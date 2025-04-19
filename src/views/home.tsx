import { Hero } from '@components/home/hero'
import { About } from '@components/home/about'
import { HowWorks } from '@components/home/how-works'
import { ForWho } from '@components/home/for-who'
import { JoinList } from '@components/home/join-list'
import { Qa } from '@components/home/qa'

export function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Hero />
      <About />
      <HowWorks />
      <ForWho />
      <JoinList />
      <Qa />
    </div>
  )
}
