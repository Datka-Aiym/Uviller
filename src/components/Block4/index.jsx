import React from 'react'
import { Link } from 'react-router-dom'
import line2 from '../../assets/line (2).svg'
import blok from '../../assets/blok4.svg'
import N1 from '../../assets/N1.svg'
import N2 from '../../assets/N2.svg'
import N3 from '../../assets/N3.svg'
import strelka from '../../assets/strelka.svg'
import strelka2 from '../../assets/strelka2.svg'

export default function index() {
		return (
				<div className='w-[1260px] h-[422px] m-auto'>
				<div className='flex'>
				<div className='flex ml-[45px]'><img src={line2} alt="" /></div>
				<dir className='text-[34px] text-[#1A0F2D]'>Хиты</dir>
				</div>
				<div><img src={blok} alt="" /></div>
				<div className='h-[1184px] mt-[100px] relative'>
    <div className='ml-[45px] mt-[50px] absolute'><img src={line2} alt="" /></div>
				<div className='text-[#1A0F2D] text-[34px] ml-[160px] mt-[20px] absolute'>Коллекции</div>
				<div>
				<Link to='/rakushka'>
		  <div className='w-[553px] mt-[100px] ml-[45px] absolute group'>
    <img src={N1} alt="" className='object-cover w-full h-full transition-all duration-300'/>
    <div className="absolute inset-0 bg-[#FFFFFF] opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
    </div>
				<div className='flex mt-[910px] ml-[90px] absolute'>
				<div className='text-[#1A0F2D] text-[20px] hover:text-[#A96777]'>Нежность </div>
				<div className='mt-[9px] ml-[20px] '> <img src={strelka} alt="" /> 
				</div>
				</div>
				<div className='group w-[572px] absolute ml-[650px] mt-[70px]'> 
				<img src={N2} alt="" className='object-cover w-full h-full transition-all duration-300'/> 
    <div className="absolute inset-0 bg-[#FFFFFF] opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
    </div>
				<div className='w-[572px] ml-[650px] absolute mt-[600px] group'>
				<img src={N3} alt=""/> 
				<div className="absolute inset-0 bg-[#FFFFFF] opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
				</div>
				<div className='flex ml-[1095px] absolute mt-[517px]'>
				<div className='text-[#A96777] text-[20px]'>Ethnic_Gem </div>
				<div className='mt-[10px] ml-[15px]'> <img src={strelka2} alt="" /> 
				</div>
				</div>
				<div className='flex absolute ml-[970px] mt-[990px]'>
				<div className='text-[#1A0F2D] text-[20px] hover:text-[#A96777] '>Религиозная_символика</div>
				<div className='mt-[10px] ml-[15px]'><img src={strelka} alt="" />
				</div>
				</div>
				</Link>
				</div>
				<div className='flex ml-[90px] absolute mt-[955px] '>
				<div className='text-[#A96777]'>Посмотреть_все_коллекции</div>
				<div className='mt-[8px] ml-[15px]'><img src={strelka2} alt="" />
				</div>
				</div>
				</div>
				</div>
		)
}
