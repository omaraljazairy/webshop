import React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import { listMarkets } from '../graphql/queries';
import { onCreateMarket } from '../graphql/subscriptions';
import Error from './Error';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import shoe1 from '../assets/img/shoes1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    root: {
      maxWidth: 445,
    },
    media: {
      height: 140,
    },
  });


const MarketList = (props) => {
    const classes = useStyles();

    const onNewMarket = (prevQuery, newData) => {
        let updatedQuery = { ...prevQuery };
        const updatedMarketList = [
            newData.onCreateMarket,
            ...prevQuery.listMarkets.items
        ]

        updatedQuery.listMarkets.items = updatedMarketList
        return updatedQuery

    }

    return (
        <Connect 
          
            query={graphqlOperation(listMarkets)} 
            subscription={graphqlOperation(onCreateMarket)}
            onSubscriptionMsg={onNewMarket}
          
          >
            {({ data, loading, error }) => {
                if (error && error.length > 0) return <Error errors={error} />
                if (loading || !data.listMarkets) return <CircularProgress color="secondary" />
                console.log("props searchResult data: ", props.searchResults)
                const markets = props.searchResults.length > 0 ? props.searchResults: data.listMarkets.items

                return (
                    <>
                     {markets.map(market => (
                         <div key={market.id} margin="10px">
                             <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={shoe1}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {market.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="h3">
                                        <div style={{ color: "var(--lightSquidInk"}}>
                                            Market Owner: {market.owner}
                                        </div>
                                        {market.tags && market.tags.map(tag => (
                                            <div key={tag}>
                                                <h3>{tag}</h3>
                                            </div>
                                        ))}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link className="link" to={`/markets/${market.id}`}>
                                        {market.name}
                                    </Link>
                                    <Button size="small" color="primary">
                                    Buy item
                                    </Button>
                                </CardActions>
                             </Card>
                             <Divider light />
                         </div>
                     ))}

                    </>
                )
            }}

        </Connect>
    )
}


export default MarketList;