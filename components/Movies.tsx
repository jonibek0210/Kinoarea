import * as React from 'react';

export interface IMoviesProps {
}

export function Movies(props: IMoviesProps) {
   return (
      <div>
         <div className="">
            <div className="">
               <h1>Сейчас в кино</h1>
            </div>
            <div className=""></div>
            <div className="">
               <ul>
                  <li>Все</li>
                  <li>Боевики</li>
                  <li>Приключения</li>
                  <li>Комедии</li>
                  <li>Фантастика</li>
                  <li>Триллеры</li>
                  <li>Драма</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
