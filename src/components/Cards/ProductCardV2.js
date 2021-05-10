import React from 'react';
import '../../assets/css/product.css';
import i18n from '../../i18n';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  }
}));

export default function ProductCardV2(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.brand}
      />
      <CardMedia
        className={classes.media}
        image={props.img}
      />
      <CardContent>
        <Typography component="p">
        {props.description}
        </Typography>
        <Divider variant="fullWidth" className={classes.divider} />
        <Typography variant="body2" color="textSecondary" component="p">
        {i18n.t('product_specifications.price')}: €{props.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {i18n.t('product_specifications.weight')}: {props.weight} gr
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {i18n.t('product_specifications.stock')}: {props.stock} {i18n.t('product_specifications.item')}{props.stock > 1 ? 's': null}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <IconButton aria-label="shoppingcart">
          <ShoppingCartSharpIcon />
        </IconButton> */}
        <Button variant="contained" color="primary" size="small">{i18n.t('product_specifications.add_to_shoppingcart')}
        </Button>
        <TextField
          id="standard-number"
        //   label={i18n.t('product_specifications.quantity')}
          type="number"
          defaultValue={1}
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textField}
        />
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Favorite />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}


ProductCardV2.propTypes = {
    img: PropTypes.string,
    brand: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number
}
