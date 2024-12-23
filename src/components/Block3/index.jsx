import React from 'react'
import line2 from '../../assets//line (2).svg'
import rak from '../../assets/rak.svg'
import strelka from '../../assets/strelka.svg'
import rak3 from '../../assets/rak3.svg'
import { Link } from 'react-router-dom'
import strelka2 from '../../assets/strelka2.svg'

export default function index() {
		return (
				<div className='h-[998px] w-[1260px] m-auto'>
    <div className='ml-[45px] mt-[50px] absolute'><img src={line2} alt="" /></div>
				<div className='text-[#1A0F2D] text-[34px] ml-[160px] mt-[20px] absolute'>Комплекты</div>
				<div>
				<Link to='/rakushka'>
		 <div className='w-[653px] mt-[100px] ml-[45px] absolute group'>
    <img src={rak} alt="" className='object-cover w-full h-full transition-all duration-300'/>
    <div className="absolute inset-0 bg-[#FFFFFF] opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
    </div>
				<div className='flex mt-[750px] ml-[90px] absolute'>
				<div className='text-[#1A0F2D] text-[20px] hover:text-[#A96777]'>Море и ракушки </div>
				<div className='mt-[9px] ml-[20px] '> <img src={strelka} alt="" /> 
				</div>
				</div>
				<div className='group w-[483px] absolute ml-[740px] mt-[30px]'> 
				<img src="https://uvilers.ru/UserFiles/Image/kits/653h710-yarkie-kraski.jpg" 
        alt="" 
        className='object-cover w-full h-full transition-all duration-300'/> 
         <div className="absolute inset-0 bg-[#FFFFFF] opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
    </div>
				<div className='w-[483px] ml-[740px] absolute mt-[590px] group'>
				<img src={rak3} alt=""/> 
				<div className="absolute inset-0 bg-[#FFFFFF] opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
				</div>
				<div className='flex ml-[1005px] absolute mt-[500px]'>
				<div className='text-[#1A0F2D] text-[20px] hover:text-[#A96777]'>Звезды и бусины </div>
				<div className='mt-[10px] ml-[15px]'> <img src={strelka} alt="" /> 
				</div>
				</div>
				<div className='flex absolute ml-[1005px] mt-[900px]'>
				<div className='text-[#1A0F2D] text-[20px] hover:text-[#A96777] '>Жемчуг и золото</div>
				<div className='mt-[10px] ml-[15px]'><img src={strelka} alt="" />
				</div>
				</div>
				</Link>
				</div>
				<div className='flex ml-[470px] absolute mt-[935px]'>
				<div className='text-[#A96777]'>Посмотреть все комплекты</div>
				<div className='mt-[8px] mt
				ml-[15px]'><img src={strelka2} alt="" /></div>
				</div>
				</div>
		)
}
