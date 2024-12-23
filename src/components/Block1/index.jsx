// import React, { useState } from 'react';
// import img from '../../assets/Rectangle 30.svg'
// import image1 from '../../assets/kolso2.svg'
// import image2 from '../../assets/sergi2.svg'
// import image3 from '../../assets/podveski2.svg'
// import image4 from '../../assets/kole2.svg'
// import image5 from '../../assets/braslety2.svg'
// import image6 from '../../assets/sepochki2.svg'
// import image7 from '../../assets/detiam2.svg'
// import image8 from '../../assets/komplekty2.svg'
// // import img from '../../assets/Rectangle 30.svg'
// import { Link } from 'react-router-dom';

// const Card = ({ image, text, buttonText }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isCtrlClicked, setIsCtrlClicked] = useState(false);

//   const handleMouseDown = (event) => {
//     // Проверка, был ли нажат Ctrl
//     if (event.ctrlKey) {
//       setIsCtrlClicked(true);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsCtrlClicked(false);
//   };

//   return (
//       <div
//       className="relative w-90 h-80 overflow-hidden m-4"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}>
//       {/* Изображение карточки */}
   
// 						<img
//         src={image}
//         alt="Card image"
//         className="object-cover w-full h-full"/>
						
//       {/* Кнопка с разным текстом */}
//       <button className={`absolute bottom-0 left-0 w-full bg-[#FFFFFF99] text-[#1A0F2D] text-[20px] duration-500 hover:text-[#A96777]  
//       transform ${isHovered || isCtrlClicked ? 'translate-y-0 h-full' : 'translate-y-[-20%] h-[50px]'} 
//       opacity-75 hover:opacity-100`}>
//       {buttonText}
//       </button>
					
//       </div>
//   );
// };

// // Основной компонент App
// const App = () => {
//   // Массив данных для карточек с уникальными текстами для кнопок
// const cardsData = [
//     { id: 1, image: image1, buttonText: 'Кольца' },
//     { id: 2, image: image2, buttonText: 'Серьги' },
//     { id: 3, image: image3, buttonText: 'Подвески' },
//     { id: 4, image: image4, buttonText: 'Колье' },
//     { id: 5, image: image5, buttonText: 'Браслеты' },
//     { id: 6, image: image6, buttonText: 'Сепочки' },
//     { id: 7, image: image7, buttonText: 'Детям' },
//     { id: 8, image: image8, buttonText: 'Комплекты' },
//   ];

//   return (
//     <div>
// 					{/* <div className='m-auto'>
// 			<div className='absolute mt-[-480px]'> 
// 				<img src={img} alt="" /> </div>
// 			</div>	 */}

// <div className='relative flex justify-center items-center'>
//   <div className='absolute mt-[680px]'>
//     <img src={img} alt="" />
//   </div>
// </div>

						
// 					<div className="flex flex-wrap justify-center items-center min-h-screen mt-[600px] gap-[12px]">
//       {cardsData.map((card) => (
//         <Card key={card.id} image={card.image} text={card.text} buttonText={card.buttonText} />
//       ))}
//     </div>
		
// 		  {/* <div className="relative">
//   <div className="absolute top-1/2 left-1/2 mt-[-1230px] w-[1260px] h-[500px] transform -translate-x-1/2">
//     <img src={img} alt="" className="w-full h-full object-contain" />
//   </div>
// </div> */}



// 				</div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для переходов
import img from '../../assets/Rectangle 30.svg';
import image1 from '../../assets/kolso2.svg';
import image2 from '../../assets/sergi2.svg';
import image3 from '../../assets/podveski2.svg';
import image4 from '../../assets/kole2.svg';
import image5 from '../../assets/braslety2.svg';
import image6 from '../../assets/sepochki2.svg';
import image7 from '../../assets/detiam2.svg';
import image8 from '../../assets/komplekty2.svg';

const Card = ({ image, text, buttonText, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCtrlClicked, setIsCtrlClicked] = useState(false);

  const handleMouseDown = (event) => {
    // Проверка, был ли нажат Ctrl
    if (event.ctrlKey) {
      setIsCtrlClicked(true);
    }
  };

  const handleMouseUp = () => {
    setIsCtrlClicked(false);
  };

  return (
    <div
      className="relative w-90 h-80 overflow-hidden m-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Обернули картинку в Link для перехода */}
      <Link to='./cards'>
        <img
          src={image}
          alt="Card image"
          className="object-cover w-full h-full"
        />
      </Link>

      {/* Кнопка с разным текстом */}
      <button
        className={`absolute bottom-0 left-0 w-full bg-[#FFFFFF99] text-[#1A0F2D] text-[20px] duration-500 hover:text-[#A96777]  
      transform ${isHovered || isCtrlClicked ? 'translate-y-0 h-full' : 'translate-y-[-20%] h-[50px]'} 
      opacity-75 hover:opacity-100`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const App = () => {
  // Массив данных для карточек с уникальными текстами для кнопок и ссылками
  const cardsData = [
    { id: 1, image: image1, buttonText: 'Кольца', link: '/rings' },
    { id: 2, image: image2, buttonText: 'Серьги', link: '/earrings' },
    { id: 3, image: image3, buttonText: 'Подвески', link: '/pendants' },
    { id: 4, image: image4, buttonText: 'Колье', link: '/necklaces' },
    { id: 5, image: image5, buttonText: 'Браслеты', link: '/bracelets' },
    { id: 6, image: image6, buttonText: 'Сепочки', link: '/chains' },
    { id: 7, image: image7, buttonText: 'Детям', link: '/kids' },
    { id: 8, image: image8, buttonText: 'Комплекты', link: '/sets' },
  ];

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="absolute mt-[680px]">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center min-h-screen mt-[600px] gap-[12px]">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            buttonText={card.buttonText}
            link={card.link} // передаем ссылку в компонент Card
          />
        ))}
      </div>
    </div>
  );
};

export default App;
