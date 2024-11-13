import React from 'react'

const FeaturesSection = () => {
  return (
    <div className='w-[1242px] mx-auto bg-black relative '>
        <div>
            <h1>Features</h1>
            <p>This section highlights all the key features of our website, offering a clear overview of what you can expect. It's designed to help you quickly understand how the platform works and its benefits.</p>
        </div>


        <div>

            {/* map function will be used to denote number of features */}
            <div>
                <h1>01</h1>
                <p>Easily reserve sports grounds for your games with just a few clicks, ensuring you get your preferred spot without any hassle. </p>
            </div>

            <div>
                <h1>02</h1>
                <p>Easily reserve sports grounds for your games with just a few clicks, ensuring you get your preferred spot without any hassle. </p>
            </div>

            <div>
                <h1>03</h1>
                <p>Easily reserve sports grounds for your games with just a few clicks, ensuring you get your preferred spot without any hassle. </p>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection