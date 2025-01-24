import React from 'react'
import {
    Box,
    Typography,
    List,
    ListItem,
    Card,
    CardContent,
} from '@mui/material'

export default function MovieList({ title, movies }) {
    return (
        <Box py={3}>
            <Box maxWidth="lg" mx="auto">
                <Card>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold">
                            {title}
                        </Typography>
                        <List>
                            {movies.map(movie => (
                                <ListItem key={movie.id} sx={{ mt: 2 }}>
                                    <Box>
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        />
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold">
                                            {movie.title}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}