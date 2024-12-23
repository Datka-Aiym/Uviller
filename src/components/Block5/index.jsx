import React from 'react'
import favkor from '../../assets/fav.kor.svg'
import line2 from '../../assets/line (2).svg'
import { Link } from 'react-router-dom'
import blog from '../../assets/blog.svg'

export default function index() {
		return (
<div className='w-[1260px] h-[510px] m-auto '>
    
<div className='flex mt-[1200px]'>
<div className=' ml-[45px]'><img src={line2} alt="" /></div>
<div className='text-[#1A0F2D] text-[34px] mt-[-29px] ml-[30px]'>Новинки</div>
</div>

<div className='text-gray-500 flex ml-[400px] gap-[50px] mt-[-36px]'>
<div className='hover:text-[#26173F]'>Кольца</div>
<div>
<div className='text-[#26173F]'>Серьги</div>
<div className='ml-[-15px]'><img src={line2} alt="" /></div>
</div>
<div className='hover:text-[#26173F]'>Подвески</div>
<div className='hover:text-[#26173F]'>Цепочки</div>
<div className='hover:text-[#26173F]'>Браслеты</div>
</div>

<div>
<Link to='/rakushka'>
<div className='mt-[70px] w-[1170px] ml-[45px]'><img src={favkor} alt="" /></div>
</Link>
</div>

<div className='w-[1170px] ml-[45px] mt-[100px]'>
<Link to='/blog'>
<img src={blog} alt="" />
</Link>
</div>

</div>
		)
}
