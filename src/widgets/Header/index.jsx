import React from 'react'
import search from '../../assets/search (2).svg'
import phone from '../../assets/phone-call 1.svg'
import kab from '../../assets/kab.svg'
import line from '../../assets/line.svg'
import logo from '../../assets/лого.svg'
import eye from '../../assets/eyes.svg'
import favorite from '../../assets/favorite.svg'
import shopping from '../../assets/shopping-cart.svg'
// import img from '../../assets/Rectangle 30.svg'
import { Link } from 'react-router-dom'

export default function index() {
	return (
		<div className=' h-[320px] m-auto'>
			<div className='bg-[#F8F8F880] w-[1260px] h-[75px]'></div>

			<div className='w-[1260px] m-auto'>
				<div className=' w-[1260px] h-[45px] text-[#26173F] text-[17px] flex gap-[31px] mt-[-50px] absolute ml-[px] '>
					<div>
						<Link to='/onas'>О нас</Link>
					</div>
					<div>
						<Link to='dostav-oplata'>Доставка и оплата</Link>
					</div>
					<div>
						<Link to='loialnost'>Лояльность</Link>
					</div>
					<div>
						<Link to='contact'>Контакты</Link>
					</div>
					<div>
						<div className='text-[#A96777]'>Например, золотое кольцо</div>
						<div className='mt-[5px] w-[260px]'>
							<img src={line} alt='' />
						</div>
					</div>
					<div className='ml-[-77px] mt-[-4px]'>
						<img src={search} alt='' />
					</div>
					<div className='flex'>
						<div className='mt-[5px] ml-[-5px]'>
							<img src={phone} alt='' />
						</div>
						<div className='ml-[10px]'>+7 495 995 69 39</div>
					</div>
					<div className='flex'>
						<div>
							<img src={kab} alt='' />
						</div>
						<div className='ml-[10px]'>Войти в личный кабинет</div>
					</div>
				</div>
			</div>
			<div className='w-[1260px] m-auto'>
				<div className='ml-[330px] mt-[106px] absolute'>
					<Link to='/' className='flex'>
						<img src={logo} alt='Logo' />
					</Link>
				</div>
			</div>
			<div className='animate-gradient h-[290px] flex justify-center items-center font-bold text-3xl'></div>

			<div className='w-[1260px] m-auto h-[75px] bg-[#F8F8F8] '>
				<div className='text-[#1A0F2D] flex gap-[51px] ml-[47px] mt-[25px] absolute'>
					<div>Кольца</div>
					<div>Серьги</div>
					<div>Подвески</div>
					<div>Колье</div>
					<div>Браслеты</div>
					<div>Цепи</div>
					<div>Детям</div>
					<div>Комплекты</div>
					<div className='w-[66px] h-[23px] bg-[#e88098] shadow-lg'>
						<div className='text-white ml-[18px] mt-[-2px]'>Sale</div>
					</div>
					<div>
						<img src={eye} alt='' />
					</div>
					<div className='mt-[5px]'>
						<img src={favorite} alt='' />
					</div>
					<div>
						<img src={shopping} alt='' />
					</div>
				</div>{' '}
			</div>
			<div>{/* <img src={img} alt='' />/ */}</div>
		</div>
	)
}
