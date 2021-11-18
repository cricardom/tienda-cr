import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';
//import { makeStyles } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Levis
          </Avatar>
        }
        action={
          <Typography
          className={ClassNames.action}
          variant='h5'
          color='textSecondary'
          >
              {accounting.formatMoney(200000)}
          </Typography>
        }
        title="Levis 501 azul"
        subheader="in stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.assetsdelivery.com/compings_v2/norgal/norgal1802/norgal180200019.jpg"
        alt="Levis 501"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Pantalones Levis 501 originales
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" >
          <AddShoppingCart frontSize='large' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Historia:</Typography>
          <Typography paragraph>
          Resulta curioso pensar hoy en día en una prenda tan común y democrática como el pantalón vaquero. Está tan integrado en nuestro día a día que ni siquiera llegamos a echarle cuenta. ¿O acaso tú has cogido unos jeans una mañana cualquiera y, antes de ponértelos, te has preguntado de dónde vienes y a dónde irán? Sin embargo, si reparásemos por un segundo lo que esta pieza ha vivido hasta llegar al siglo XXI, nos sorprenderíamos por su curiosa historia.

            Para llegar al origen de los jeans debemos viajar a 1851, cuando el alemán Levi Strauss emigró a Estados Unidos, primero a Nueva York y, dos años después, a San Francisco (California). Aprovechando la fiebre del oro desarrollada en los States, Strauss comenzó a fabricar ropa de trabajo resistente para los mineros.Al principio fueron pantalones confeccionados con las mismas lonas que se utilizaban para fabricar tiendas de campaña o toldos, por eso todos los pantalones Levi's –que se podían adquirir por 1,50 dólares– eran de color marrón y sin bolsillos traseros. No es hasta en 1860 cuando Strauss descubre un material de algodón fabricado en Nîmes, Francia –y que terminó dando lugar al término denim–, mucho más adecuado para la confección de sus jeans. 

          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
             
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
