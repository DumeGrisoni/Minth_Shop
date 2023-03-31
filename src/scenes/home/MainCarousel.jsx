import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from '../../theme';

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace('./', '')] = r(item);
    return acc;
  }, {});

const heroImages = importAll(
  require.context('../../assets', false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const carouselTexts = [
    'Promos de la semaine',
    'Top des ventes',
    'En ce moment',
    'Frais de port offerts',
    "Promos d'été",
  ];
  const carouselHighlights = [
    '--Nouveautés--',
    'Nos meilleures ventes !',
    'En Avance sur la mode ?',
    "Moins de frais c'est mieux",
    "L'été sera chaud !",
  ];

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '0',
            color: 'white',
            padding: '5px',
            zIndex: '10',
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '0',
            color: 'white',
            padding: '5px',
            zIndex: '10',
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroImages).map((image, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={image}
            alt={`carousel-${index}`}
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgba(0,0,0,0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? '10%' : '0'}
            right={isNonMobile ? undefined : '0'}
            margin={isNonMobile ? undefined : '0 auto'}
            maxWidth={isNonMobile ? undefined : '240px'}
          >
            <Typography color={shades.secondary[200]} fontSize="20px">
              {carouselHighlights[index]}
            </Typography>
            <Typography variant="h1">
              {carouselTexts[index].toUpperCase()}
            </Typography>
            <Typography
              color={shades.secondary[300]}
              fontWeight="bold"
              sx={{ textDecoration: 'underline' }}
            >
              Voir d'avantage
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
