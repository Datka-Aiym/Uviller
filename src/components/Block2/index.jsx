import React from 'react'
import line from '../../assets/line (2).svg'
import { Link } from 'react-router-dom'
import cards2 from '../../assets/cards2.svg'

export default function index() {
		return (
				<div className='w-[1260px] h-[500px] m-auto'>
				<div className='mt-[100px] ml-[45px]'>
				<img src={line} alt="" />
				</div>
    <div className='text-[#1A0F2D] text-[34px] ml-[160px] mt-[-30px]'>Sale</div>
				<div className='text-gray-500 text-[17px] flex ml-[340px] mt-[-35px] gap-[70px]'>
				<div className='hover:text-[#26173F]'>Кольца</div>
				<div className='hover:text-[#26173F]'>Серьги </div>
				<div className='hover:text-[#26173F]'>Подвески</div>
			 <div>
			 <div className='text-[#26173F]'>Цепочки</div>
				<div className='w-[68px]'><img src={line} alt="" /></div>
			 </div>
				<div className='hover:text-[#26173F]'>Браслеты</div>
				</div>
				<div>
				<Link to='./cards'>	
				<div className='w-[1170px] ml-[45px] mt-[60px]'>
				<img src={cards2} alt="" />
				</div>
					</Link>
				</div>
				</div>
		)
}
