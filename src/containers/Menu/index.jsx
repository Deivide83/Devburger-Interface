import { useState, useEffect }from 'react';
import{ api } from '../../services/api'
import {formatPrice} from '../../utils/formatPrice'

import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton, GoBackButton } from "./styles";
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';


export function Menu (){
   
      const [categories, setCategories] = useState([]);
      const [ products,   setProducts] = useState([]);
      const [filteredProducts, setFilteredProducts] = useState([]);
      


     const navigate = useNavigate();

     const{search} = useLocation();

     const queryParams = new URLSearchParams(search);

     const [activeCategory, setActiveCategory] = useState(()=>{
       const categoryId = +queryParams.get('categoria');

       if(categoryId){
        return categoryId;
       }
       return 0;
     })
     

     
     

    useEffect(() => {
        async function loadCategories() {
         
            const {data} = await api.get("/categories");

            const newCategories =[{id : 0,   name: 'Todas',  } , ...data];
                
              
            
            

            setCategories(newCategories);
        }       

   async function loadProducts() {
     
        const { data } = await api.get("/products");

      
       
        const newProducts =  data.map(product => ({
        currencyValue : formatPrice(product.price),
        ...product,
       
        
        }  ));    
      
       setProducts(newProducts );   
            
    }

    loadCategories();
    loadProducts();                          
      }, []);

      useEffect(()=>{
        if(activeCategory ===0){
          setFilteredProducts(products)
          }else{
           const newFilterdProducts = products.filter(
            (product) => product.category_id === activeCategory
           ) 

           setFilteredProducts(newFilterdProducts);

          }
        
      },[products,activeCategory]);

      const handleGoBack = () => {
      navigate(-1);
      };

    return(
          <Container>
              <GoBackButton onClick={handleGoBack}>
              <IoArrowBack /> 
              Voltar
              </GoBackButton>

            <Banner>
                <h1>O MELHOR
                <br />
                HAMBURGER
                <br />
                DA REGIÃO
                <span>Esse cardárdapio está irresitível! </span>
                </h1>
                
            </Banner>
            <CategoryMenu>
             {categories.map((category)=> (
               <CategoryButton 
               key={category.id} 
               $isActiveCategory ={category.id === activeCategory}
               onClick={() =>{
                navigate(
                  {
                    pathname: '/cardapio',
                    search:`?categoria=${category.id}`,
                  },
                  {
                    replace: true,
                  },
                );
                 setActiveCategory(category.id)
               } }
               >
               {category.name}  
                </CategoryButton>  
             ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map( product => (
                    <CardProduct key={product.id} product={product}/>
                ))}
            </ProductsContainer>
            
            
           </Container>
          
    
    );
}

