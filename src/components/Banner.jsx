import React from 'react'

const Banner = () => {
  return (
    <div className='section-container  bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div  className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>

      <div className='md:w-1/2'>

<img src="../../public/images/home/banner.png" alt="" />

<div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>

<div className=' bg-white py-2 px-3 rounded-2xl  flex items-center gap-3 shadow-md w-64'>
<img src="../../public/images/home/b-food1.png" alt=""  className='rounded-2xl'/>
<div className='space-y-1'>

  <h5 className='font-medium'>spicy noodles</h5>
  <div className="rating rating-sm">
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  readOnly/>
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked  readOnly />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  readOnly />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" readOnly />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" readOnly />
</div>
<p className='text-red'>$18.00</p>
</div>


</div>

<div className='sm:flex hidden  bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
<img src="../../public/images/home/b-food1.png" alt=""  className='rounded-2xl'/>
<div className='space-y-1'>

  <h5 className='font-medium'>spicy noodles</h5>
  <div className="rating rating-sm">
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  readOnly />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked readOnly />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  readOnly/>
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  readOnly />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  readOnly/>
</div>
<p className='text-red'>$18.00</p>
</div>


</div>



</div>  
    
    
    
    </div>
<div className='md:w-1/2 space-y-7 px-4'>
  <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
  Lorem ipsum dolor sit amet consectetur <sapn className='text-green'>adipisicing elit</sapn>
  </h2>
  <p className='text-xl text-[#4A4AAA]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid, atque sequi quos saepe, molestiae dolorem quasi quisquam minus quis magni consequatur esse ducarchitecto aliquam temporibus obcaecati.</p>
  <button className=' font-semibold text-white rounded-full btn bg-green px8 py-3'>Order Now</button>
  </div>




      
  </div>




  </div> 
  )
}

export default Banner