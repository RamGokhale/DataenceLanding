import React from 'react'
import policy from '../assets/policy.png'

const PrivacyPolicy = () => {
  return (
    <div className='w-full sm:px-9 px-5 py-4'>
      <div className='w-full sm:w-11/12 mx-auto bg-[#E2F4FE] flex items-center justify-between rounded-4xl font-[poppins] pt-10 relative'>
        <div className='w-full pr-10 md:pr-0  lg:pl-16 pl-10 pb-10'>
            <h1 className='sm:text-3xl text-2xl font-semibold text-black/80'>Privacy Policy</h1>
            <div className='text-[#787878]/90 mt-10 '>
                Welcome to Detance. Your privacy is important to us, and <br className='hidden xl:block'  />
                we are committed to protecting your personal data. This <br className='hidden xl:block'  />
                Privacy Policy explains how we collect, use, and safeguard <br className='hidden xl:block'  />
                your information when you use our website and services.
            </div>
        </div>
        <div className='w-1/2 pr-16 hidden md:block'> 
            <img src={policy} alt="policy" className='object-contan ' />
        </div>
      </div>

      <div className='w-full grid  md:w-10/12 mx-auto my-12 sm:my-24 gap-y-10'>
        <div className='flex flex-col sm:flex-row justify-between'>
            <div className='text-[#253E52] text-lg'>1. Information we collect</div>
            <div className='w-full sm:w-1/2 text-[#787878]/90'>
                <p className=''>We may collect the following types of information:</p>
                <div className='pl-2'>
                    <li>Personal Information: Name, email address, phone number, and other identifying details when you register or contact us.</li>
                <li>Usage Data: Information about your interaction with our website, including IP address, browser type, pages visited, and time spent on the site.
                </li>
                <li>
                Cookies and Tracking Technologies: We use cookies to enhance your experience and analyze site traffic
                </li>
                </div>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between'>
            <div className='text-[#253E52] text-lg'>2. How We Use Your Information</div>
             <div className='w-full sm:w-1/2 text-[#787878]/90'>
                <p className=''>We may collect the following types of information:</p>
                <div className='pl-2'>
                    <li>Personal Information: Name, email address, phone number, and other identifying details when you register or contact us.</li>
                <li>Usage Data: Information about your interaction with our website, including IP address, browser type, pages visited, and time spent on the site.
                </li>
                <li>
                Cookies and Tracking Technologies: We use cookies to enhance your experience and analyze site traffic
                </li>
                </div>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between'>
            <div className='text-[#253E52] text-lg'>3. Data Security</div>
            <div className='w-full sm:w-1/2 text-[#787878]/90'>
                <p className=''>We implement security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no online platform is 100% secure, and we cannot guarantee absolute security.</p>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between'>
            <div className='text-[#253E52] text-lg'>4. Third-Party Links</div>
            <div className='w-full sm:w-1/2 text-[#787878]/90'>
                <p className=''>Our website may contain links to external sites. We are not responsible for their privacy practices, so we encourage you to review their policies.</p>    
            </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between'>
            <div className='text-[#253E52] text-lg'>5. Children's Privacy</div>
            <div className='w-full sm:w-1/2 text-[#787878]/90'>
                <p className=''>Detance is not intended for children under 13. We do not knowingly collect personal data from minors.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
