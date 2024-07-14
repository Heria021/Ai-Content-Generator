import React from 'react'

function PrivacyAndPolicy() {
  return (
    <div className="my-2 p-2 md:p-4">
      <div className="  max-w-4xl m-auto p-4 md:p-10 border-border border shadow-md rounded-md">
        <h1 className=" text-lg md:text-2xl font-medium md:font-bold mb-1">Privacy Policy</h1>
        <p className=" text-xs md:text-sm text-gray-600">Last Updated: 07/13/2024</p>

        <p className="mt-3 text-sm md:text-base">At Trend Script AI, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>

        <h2 className="md:text-lg text-base font-semibold mt-3">1. Information We Collect</h2>
        <p className='text-sm md:text-base'>We collect the following personal information from users:</p>
        <ul className="list-disc ml-6 text-sm">
          <li>Name</li>
          <li>Email Address</li>
          <li>Username</li>
          <li>Password</li>
        </ul>

        <h2 className="md:text-lg text-base font-semibold mt-3">2. How We Use Your Information</h2>
        <p className='text-sm md:text-base'>We use your information to:</p>
        <ul className="list-disc ml-6 text-sm">
          <li>Provide and improve our services.</li>
          <li>Store data related to your account and preferences.</li>
        </ul>

        <h2 className="md:text-lg text-base font-semibold mt-3">3. Data Sharing</h2>
        <p className='text-sm md:text-base'>We do not sell or share your personal information with third parties, except with service providers that assist us in operating our website and services (e.g., authentication and database services).</p>

        <h2 className="md:text-lg text-base font-semibold mt-3">4. User Rights</h2>
        <p className='text-sm md:text-base'>You have the right to update or delete your account information at any time. Your personal information will be retained as long as you maintain an account with us.</p>

        <h2 className="md:text-lg text-base font-semibold mt-3">5. Cookies</h2>
        <p className='text-sm md:text-base'>We use cookies to enhance your experience on our website. Cookies help us provide a more personalized experience and improve our services.</p>

        <h2 className="md:text-lg text-base font-semibold mt-3">6. Contact Us</h2>
        <p className='text-sm md:text-base'>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p className='text-sm md:text-base'>Email: <a href="mailto:hariomsuthar7143@gmail.com" className="hover:text-blue-500 hover:underline">hariomsuthar7143@gmail.com</a></p>
        <p className='text-sm md:text-base'>Website: <a href="trendscriptai/contact" className="hover:text-blue-500 hover:underline">trendscriptai/contact</a></p>

        <h2 className="md:text-lg text-base font-semibold mt-3">7. Age Restriction</h2>
        <p className='text-sm md:text-base'>Our services are available to users of all ages.</p>

        <h2 className="md:text-lg text-base font-semibold mt-3">8. Updates to This Policy</h2>
        <p className='text-sm md:text-base'>We may update this Privacy Policy periodically. We will notify you of significant changes through our website.</p>

        <p className="mt-3">Thank you for choosing Trend Script AI!</p>
      </div>
    </div>


  )
}

export default PrivacyAndPolicy