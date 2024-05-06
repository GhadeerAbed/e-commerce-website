import React from 'react'

const styles ={
first_div : 'flex flex-col justify-center  items-center  bg-[#fce3fe] w-full  ',
second_div: 'w-[500] h-[600] bg-white  sm:px-12 px-5  py-10 my-16',
input_styles:'flex flex-col gap-6',
content_input:'h-[72] w-full pl-2 border border-[#c9c9c9] outline-none text-[#5c5c5c] py-4 font-[18px] font-poppies rounded-[5px]',
content_button:'w-full py-3 bg-secondary my-6  rounded-full font-[400] text-[22px] text-white border-none cursor-pointer',
content_paragraph:'text-[#5c5c5c] font-[400]  sm:text-[16px] text-[14px]'
}

const Login = () => {
  return (
    <div className={styles.first_div}>
        <div className={styles.second_div}>
            <h1 className=' mb-7 font-poppins font-bold text-[30px]'>Sign Up</h1>
            <div className={styles.input_styles}>
                <input type='text' placeholder='Your Name' className={styles.content_input}/>
                <input type='email' placeholder='Your Email Address' className={styles.content_input}/>
                <input type='password' placeholder='Password' className={styles.content_input}/>
            </div>
            <button type='submit' className={styles.content_button}>Continue</button>
            <p className={styles.content_paragraph}>Already Have An Account ? <span className='font-[500] text-[#ff4141]'>Login Here</span></p>
            <div className='flex items-center justify-center gap-3 mt-7'>
                <input type='checkbox' name='' id=''  />
                <p className={styles.content_paragraph}>By Continuing , I Agree To The Term Of Use & Privacy Policy .</p>
            </div>
        </div>
    </div>
  )
}

export default Login