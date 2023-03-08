import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faTshirt, faPersonDress, faChildDress, faShoePrints, faPhone, faTelevision, faGamepad, faGolfBall, faTimesCircle,faHeartPulse, faWalking, faBook, faClock, faRadio} from "@fortawesome/free-solid-svg-icons";

interface obj {
    id:string|number,
    name:string,
    icon:IconProp,
    link:string,
    list1:string[],
    list2:string[],
    list3:string[],
    list4:string[],
}

const Categories:obj[] = [
     {
        id:1,
        name:'Women Fashion',
        icon:faPersonDress,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:2,
        name:'Men Fashion',
        icon:faTshirt,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:3,
        name:'Children Fashion',
        icon:faChildDress,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:4,
        name:'Shoes',
        icon:faShoePrints,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:5,
        name:'Wrist Watch',
        icon:faClock,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:6,
        name:'Consumer Electronics',
        icon:faTelevision,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:7,
        name:'Gaming',
        icon:faGamepad,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:8,
        name:'Sport',
        icon:faGolfBall,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:9,
        name:'Phones and Laptops',
        icon:faPhone,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:10,
        name:'Health Care',
        icon:faHeartPulse,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:11,
        name:'Lifestyle',
        icon:faWalking,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:12,
        name:'Books',
        icon:faBook,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
    {
        id:13,
        name:'Home Appliance',
        icon:faRadio,
        link:'',
        list1:[],
        list2:[],
        list3:[],
        list4:[],
    },
]

export default Categories

                        
// import { useState, useEffect } from 'react';

// interface UseCategoriesReturn {
//     data: string[] | null;
//     error: Error | null;
//     loading: boolean;
//   }

// const useCategories = ():UseCategoriesReturn =>{
//     const [data, setData] = useState<string[] | null>(null);
//     const [error, setError] = useState<Error|null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(()=>{

//         const getData = async () => {
//             try{

//                 const result = await fetch('https://fakestoreapi.com/products/categories');
//                 if(!result.ok){
//                     throw new Error(`there was an error of status code ${result.status}`)
//                 }
//                 const Categories = result.json();
//                 const myData : [] = Categories;

//                 setData(myData);
//                 setError(null);
//             }catch(err){
//                 setError(err as Error);
//                 setData(null);
//             }finally{
//                 setLoading(false)
//             }
//         }

//         getData()
//     }, [])

// return {data, loading, error}
// }

// export default useCategories;

// import { useState, useEffect } from 'react';

// interface Category {
//   id: number;
//   name: string;
// }

// interface UseCategoriesReturn {
//   data: Category[] | null;
//   error: Error | null;
//   loading: boolean;
// }

// const useCategories = (): UseCategoriesReturn => {
//   const [data, setData] = useState<Category[]| null>(null);
//   const [error, setError] = useState<Error | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetch('https://fakestoreapi.com/products/categories');
//         if (!result.ok) {
//           throw new Error(`there was an error of status code ${result.status}`);
//         }
//         const categories: Category[] = await result.json();
//         setData(categories);
//         setError(null);
//       } catch (err) {
//         setError(err as Error);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   return { data, loading, error };
// };

// export default useCategories;