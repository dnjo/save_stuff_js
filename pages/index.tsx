import type { NextPage } from 'next'
import React, {Component} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";

class ItemContainer extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {}
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch('/savestuff-api/items')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
    }

    render() {
        if (!this.state.data) {
            return 'Loading...'
        }

        return (
            <Grid container spacing={2}>
                {this.state.data.map((i: any) => {
                    return (
                        <Grid key={i.id} item xs={4}>
                            <a href={i.url} target="_blank" rel="noreferrer">
                                <Card sx={{ display: 'flex', minHeight: 140 }}>
                                    {i.thumbnail &&
                                    <Box>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={i.thumbnail}
                                            alt="item thumbnail"
                                            sx={{width: 140}}
                                        />
                                    </Box>
                                    }
                                    <Box>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {i.title}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </a>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}

const Home: NextPage = () => {
    return (
        <>
            <ItemContainer />
        </>
    )
}

export default Home
