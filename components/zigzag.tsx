import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
<section>
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="py-12 md:py-20 border-t border-gray-800">

      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h2 mb-4">One product, unlimited solutions</h1>
        <p className="text-xl text-gray-400">Examples of AI assistants</p>
      </div>

      {/* Items */}
      <div className="grid md:grid-cols-2 gap-20">

        {/* 1st item */}
        <div className="max-w-xl mx-auto" data-aos="fade-right">
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
    
            <h3 className="h3 mb-3">Consultant</h3>
            <p className="text-xl text-gray-400 mb-4">The assistant will be a consultant for your clients. Train him on your data and he will answer your customers' questions. If you have an operator, then he can see all the correspondence and interfere in the dialogues</p>
          
          </div>
        </div>

        {/* 2nd item */}
        <div className="max-w-xl mx-auto" data-aos="fade-left">
          <div className="md:pl-4 lg:pl-12 xl:pl-16">
          
            <h3 className="h3 mb-3">Technical support</h3>
            <p className="text-xl text-gray-400 mb-4">Create an assistant for technical support and unload the technical support department. It will close most requests without operator involvement</p>
          </div>
        </div>

        {/* 3rd item */}
        <div className="max-w-xl mx-auto" data-aos="fade-right">
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <h3 className="h3 mb-3">Onboarding Assistant</h3>
            <p className="text-xl text-gray-400 mb-4">An assistant that helps new employees understand their roles, provides training modules, and answers questions about company policies, reducing the time and resources needed for onboarding.</p>
          </div>
        </div>

        {/* 4th item */}
        <div className="max-w-xl mx-auto" data-aos="fade-left">
          <div className="md:pl-4 lg:pl-12 xl:pl-16">
            <h3 className="h3 mb-3">Corporate Assistant</h3>
            <p className="text-xl text-gray-400 mb-4">Create an assistant for your employees. He can advise them on any issues, help them write texts for your company and much more</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

  )
}
