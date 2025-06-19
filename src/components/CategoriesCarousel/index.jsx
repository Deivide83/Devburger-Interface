


import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title, ContainerItems, CategoryButton } from "./styles";
import { useNavigate } from "react-router-dom";

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
        console.log(response);
      } catch (error) {
        console.error("Erro ao carregar categorias:", {
          message: error.message,
          code: error.code,
          response: error.response ? error.response.data : null,
        });
        setError("Não foi possível carregar as categorias. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
    tablet: { breakpoint: { max: 1280, min: 690 }, items: 3 },
    mobile: { breakpoint: { max: 690, min: 0 }, items: 2 },
  };

  if (loading) return <Container>Carregando...</Container>;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} $imageUrl={category.url}>
            <CategoryButton 
            onClick={()=>{
              navigate(
                {
                   pathname: '/cardapio',
                   search:`?categoria=${category.id}`,
                }
              )
            }}
            >
              
              {category.name}
            </CategoryButton>
            
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}

