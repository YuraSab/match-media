import {useState, useLayoutEffect} from "react";

// useLayoutEffect - хук відпрацьовує ще до відмальовки (робить всі розрахунки) в браузері


const queries = [
    '(max-width: 766px)',
    '(min-width: 767px) and (max-width: 1199px)',
    '(min-width: 1200px)',

];

export const useMatchMedia = () => {
    const mediaQueryLists = queries.map(query => matchMedia(query));

//     потрібні тільки поля matches (boolean)
//     повертати акуальні значення matches
//     console.log(mediaQueryLists);

    const getValues = () =>  mediaQueryLists.map(mql => mql.matches);
    // const getValues =  mediaQueryLists.map(mql => mql.matches);
    // console.log(getValues);
    const [ values, setValues ] = useState(getValues);
    // console.log('values', values)

    useLayoutEffect(() => {
       //  даний хендлер обновляє значення values
       const handler = () => setValues(getValues);

       mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

       // ф-я очистки для того щоб не накопичувати
       return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    });

    // в пусти об'єкт додаємо...
    // screen - актуальне значення
    // index - index скріна
    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {});
};