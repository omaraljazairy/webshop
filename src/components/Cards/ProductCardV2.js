import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/product.css';
import i18n from '../../i18n';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Stars from '../Ratings/Stars';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: '12%'
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  divider: {
    backgroundColor: '#5454e9',
    marginTop: '3%',
    marginBottom: '3%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25%',
  },
  button: {
      width: '100%'
  }
}));

export default function ProductCardV2(props) {
  const classes = useStyles();
  const stars = Math.floor(Math.random() * 5) + 1
  const product = props.product
  

  return (
    <Card className={classes.root}>
      <CardHeader
        title={product.brand.name}
      />
      <CardMedia
        className={classes.media}
        image={product.image}
      />
      <CardContent>
        <Typography component="p">
        {product.description}
        </Typography>
        <Divider variant="fullWidth" className={classes.divider} />
        <Typography variant="body2" color="textSecondary" component="p">
        {i18n.t('product_specifications.price')}: €{product.price}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
        {i18n.t('product_specifications.weight')}: {props.weight} gr
        </Typography> */}
        <Typography variant="body2" color="textSecondary" component="p">
        {i18n.t('product_specifications.stock')}: {product.stock} {i18n.t('product_specifications.item')}{product.stock > 1 ? 's': null}
        </Typography>
        <Stars rate={stars}/>
      </CardContent>
        <Link to={{
            pathname: props.basePath,
            state: {product: product}
            }}>
            <Button variant="contained" color="primary" className={classes.button}>
                {i18n.t('product_specifications.view_item')}
            </Button>
        </Link>
    </Card>
  );
}


ProductCardV2.propTypes = {
    basePath: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired
}
