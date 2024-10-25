import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero2() {
  return (
    <section className="bg-[#f8f5f1] min-h-screen flex items-center justify-center p-4 pb-10">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <Image
            src="/images/hero2.jpg"
            width={400}
            height={400}
            alt="Woman with arms outstretched in a field of yellow flowers"
            className="rounded-lg object-cover  "
          />
        </div>
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl lg:text-5xl font-serif text-[#6b5c3e] leading-tight">
            your inner peace awaits
          </h1>
          <p className="text-lg text-[#6b5c3e] leading-relaxed">
            You deserve to have a space dedicated to what you think, feel and need. Everbe offers individual, virtual therapy for women who want profound healing and change.
          </p>
          <Button className="bg-[#e8c8c1] text-[#6b5c3e] hover:bg-[#d1b0a8] px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
            BOOK TODAY
          </Button>
        </div>
      </div>
    </section>
  )
}