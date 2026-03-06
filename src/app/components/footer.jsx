import Link from "next/link";

const Footer = () => {
  return (
        <footer className="w-full bg-gray-800 text-gray-400 py-12 mt-20">
      
      <div className="max-w-4xl mx-auto text-center space-y-6">

       
        <div className="flex justify-center gap-8 text-white ">
          <Link href="#top" className="hover:text-gray-300">Home</Link>
          <Link href="#" className="hover:text-gray-300">Redeem</Link>
          <Link href="#" className="hover:text-gray-300">My Movies</Link>
        </div>

        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="#" className="hover:text-white">Help Center & Contact Us</Link>
          <Link href="#" className="hover:text-white">Legal Notices</Link>
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Use</Link>
          <Link href="#" className="hover:text-white">Activate Your Device</Link>
          <Link href="#" className="hover:text-white">Interest-Based Ads</Link>
          <Link href="#" className="hover:text-white">Your US State Privacy Rights</Link>
          <Link href="#" className="hover:text-white">Do Not Sell or Share My Personal Information</Link>
          <Link href="#" className="hover:text-white">Closed Captioning Inquiries</Link>
        </div>

       
        <div className="text-sm text-gray-500 pt-4">
          © 2025 Movies Anywhere. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer