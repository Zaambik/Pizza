import React from 'react';

function Categories() {
   const [activeIndex, setActiveIndex] = React.useState(2);

   const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

   const onClickCategory = (index) => {
      setActiveIndex(index);
   };

   console.log(activeIndex)

   return (
      <div class="categories">
         <ul>
            {categories.map((value, i) => (
            <li onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
               {value}
            </li>
            ))}
         </ul>
      </div>
   );
}

export default Categories;
