import Image from 'next/image';
import Link from 'next/link'
import errorImage from "@/assets/error.jpg"
 
function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h2 className='font-bold text-4xl text-yellow-500'># Not Found</h2>
      <h2 className='font-bold text-2xl'>404</h2>
      <Image src={errorImage} alt="Error" height={200} width={400}></Image>
      <Link href="/" className='btn bg-yellow-400 rounded-xl border-none shadow-lg'>Return Home</Link>
    </div>
  )
}

export default NotFound;