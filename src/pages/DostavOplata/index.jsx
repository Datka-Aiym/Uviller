import React from 'react'
import str from '../../assets/strelka2.svg'
import line3 from '../../assets/line (2).svg'

export default function index() {
		return (
				<div className='h-[800px] w-[1260px] m-auto'>
				 <div className='flex ml-[45px] gap-[10px] mt-[160px]'>
				  <div className='text-[#1A0F2D99]'>Ювелирный магазин</div>
				  <div className='mt-[7px]'><img src={str} alt="" /></div>
						<div className='text-[#A96777]'>Доставка и оплата</div>
				 </div>
					<div className='flex ml-[45px] mt-[25px] gap-[32px]'>
						<div className='mt-[20px]'><img src={line3} alt="" /></div>
						<div className='text-[#26173F] text-[27px]'>
							Доставка и оплата</div>
					</div>
					<div className='flex'>
						<div className='w-[471px] h-[691px] bg-[#F2F2F2] mt-[33px] ml-[45px]'>
							<div className='flex ml-[39px] mt-[56px] absolute gap-[9px]'>
							<div className='mt-[6px]'><img src={str} alt="" /></div>
							<div className='text-[#A96777]'>Доставка/Оплата</div>
							</div>
							<div className='flex flex-col mt-[88px] ml-[45px] text-[#1A0F2D] gap-[10px] absolute'>
								<div>Гарантия</div>
								<div>Производители/Бренды</div>
								<div>Упаковка и хранение</div>
								<div>Правила эксплуатации украшений</div>
								<div>Подарочные сертификаты</div>
								<div>Сотрудничество (поставщикам)</div>
								<div>СМИ о нас</div>
								<div>Ювелирный словарь</div>
								<div>Положение о защите персональных данных</div>
								<div>Пользовательское соглашение</div>
								<div>Публичная оферта</div>
								<div>Политика конфиденциальности</div>
								<div>Помощь FAQ</div>
								<div>Отзывы клиентов</div>
								<div>Точки выдачи</div>
								<div>Контакты</div>
							</div>
						</div>
						<div className='ml-[83px] mt-[25px] text-[#1A0F2D] text-[20px]'>
					<div>Ювелирные изделия возврату и обмену не подлежат.</div>
					<div className='mt-[20px]'>В случае возникновения вопросов вы можете написать нам на почту <br /> info@uvilers.ru или позвонить по телефон:+7 495-995-69-39</div>
					<div className='mt-[20px]'>Правила доставки товараДоставка по РоссииДоставка осуществляется по <br /> всей России (служба СДЭК, курьером до двери или самовывоз из ПВЗ). <br /> Стоимость доставки будет автоматически рассчитана при оформлении заказа.</div>
						</div>
					</div>
				</div>
		)
}
