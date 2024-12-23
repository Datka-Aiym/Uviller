import React from 'react'
import log from '../../assets/лого.svg'
import mir from '../../assets/mir.svg'
import visa from '../../assets/visa.svg'
import mastercard from '../../assets/mastercard.svg'
import wk from '../../assets/vk.svg'
import tg from '../../assets/telegram.svg'
import line from '../../assets/line (2).svg'
import { Link } from 'react-router-dom'
import two from '../../assets/2.svg'
import tw from '../../assets/podrobnee.svg'


export default function index() {
		return (
			
				<div>

<div className='w-[1260px] h-[600px] mt-[460px] m-auto'>
				<div className='text-[#A96777] text-[30px] ml-[45px] mt-[-80px] absolute'>Uvilers – самый удобный ювелирный интернет-магазин!</div>
				<div className='text-[#1A0F2D] text-[20px] w-[1170px] ml-[45px]'>Uvilers – особенный гипермаркет ювелирных украшений. Мы не стремимся исключительно продавать ювелирные изделия. «Злато.Юа» продвигает целую культуру: <br /> 
				как выбирать, как носить и ухаживать за украшениями из драгоценных камней и металлов. Это целая философия правильного сервиса и любви к клиентам, <br /> 
				основанная не на пустых словах. <br />
				Цель Uvilers не просто довольный, а счастливый клиент уже сейчас, в момент покупки. Для этого большое внимание уделяется как ассортименту, так и уровню <br /> 
				обслуживания. Мы представляем на сайте ведущие украинские ювелирные бренды и заводы. Товароведы отбирают только достойные предложения, которые <br /> 
				действительно заслуживают внимания благодаря качеству и дизайну. И главное – у нас удобно и просто выбирать украшения как для себя, так и на .... </div>
				<div className='flex w-[1170px] mt-[100px] gap-[70px] ml-[45px]'>
				<div className=''><img src={two} alt="" /></div>
				<div>
				<Link to='/home'>
				<img src={tw} alt="" />
				</Link>
				</div>	
				</div>
				</div>

<div className='w-[1260px] h-[440px] m-auto bg-[#D9D9D9]         mt-[220px]'>  
    <div className='absolute'>
				<div className='w-[330px] ml-[40px] mt-[35px]'><img src={log} alt="" /></div>
				<div className='flex ml-[45px] gap-[30px] mt-[50px]'>
					<div><img src={mir} alt="" /></div>
					<div><img src={visa} alt="" /></div>
					<div><img src={mastercard} alt="" /></div>
				</div>
				<div className='ml-[45px] flex gap-[40px] mt-[20px]'>
					<div><img src={wk} alt="" /></div>
					<div><img src={tg} alt="" /></div>
				</div>
				<div className=
				'ml-[45px] text-[#1A0F2D] text-[20px] mt-[21px]'>
					Доставляем по всему Кыргызстану</div>
				<div className='text-[#1A0F2D] text-[27px] ml-[450px] flex gap-[100px] mt-[-270px]'>
					<div>Компания</div>
					<div className='ml-[-30px]'>Клиентам</div>
					<div>Услуги</div>
					<div className='ml-[10px]'>Контакты</div>
				</div>
				<div className='flex ml-[450px] gap-[110px] mt-[10px]'>
	 		<div className='w-[125px] bg-[#A96777]'>
				 <img src={line} alt=""/></div>
				<div className='w-[125px] bg-[#A96777] ml-[-40px]'>
				 <img src={line} alt="" /></div>
				<div className='w-[85px] bg-[#A96777] ml-[-20px]'>
					<img src={line} alt="" /></div>
				<div className='w-[117px] absolu bg-[#A96777]'>
					<img src={line} alt="" /></div>
					 </div>
				<div className='text-[#1A0F2D] text-[18px] ml-[450px] flex flex-col gap-[13px] mt-[30px]'>
						<span>О нас</span>
						<span>Акции и скидки</span>
						<span>Каталог</span>
						<span>Карта сайта</span>
						<span>Сотрудничество</span>
					</div>
					<div className='text-[#1A0F2D] text-[18px] ml-[646px] flex flex-col gap-[13px] mt-[-187px]'>
						<span>Доставка и оплата</span>
						<span>Гарантия</span>
						<span>Правила эксплуатации</span>
						<span>Контакты</span>
					</div>
					<div className='text-[#1A0F2D] text-[18px] ml-[865px] flex flex-col gap-[13px] mt-[-147px]'>
      <span>Купить в кредит </span>
      <span>Подарочные с-ты</span>
      <span>Помощь (FAQ) </span>
      <span>Отзывы клиентов </span>
					</div>
					<div className='text-[#1A0F2D] text-[18px] ml-[1055px] flex flex-col gap-[13px] mt-[-147px]'>
						<span className='text-[#A96777] text-[21px] ml-[-8px]'>+7 495 995 69 39</span>
						<span>График работы <br /> call-центра:</span>
						<span>Пн - Вс: 9 - 18</span>
						<span className='text-[#A96777]'>info@uvilers.ru</span>
						<div className='w-[120px] mt-[-10px] h-[3px] bg-[#A96777]'></div>
					</div>
					<div className='w-[1130px] h-[3px] bg-[#A96777] mt-[30px] ml-[45px]'></div>
					<div className='flex ml-[45px] gap-[30px] mt-[35px] text-[#1A0F2D]'>
						<div>@ Uvilers2023</div>
						<div>Политика конфиденциальности</div>
						<div>Пользовательское соглашение</div>
						<div>Публичная оферта</div>
					</div>
				</div>
				</div>
				</div>
		)
}
