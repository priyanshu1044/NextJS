import Link from 'next/link';

import './PageNotFound.css';


export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <img src="/images/arpit-bala.gif" 
      alt="hum-pe-to-hai-hi-no-arpit-bala" className='page-not-found-image' />
      <h1 className='page-not-found-header'>404: Hum Pe To Hai Hi No</h1>
      <p className='page-not-found-text'>The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className='button-color rounded p-1 mt-3'>Return Home</Link>
    </div>
  )
}