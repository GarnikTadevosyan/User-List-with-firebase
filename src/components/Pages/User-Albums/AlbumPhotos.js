import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function AlbumPhotos({photos,photoDeleter}) {
    return (
        <ImageList
            sx={{
                width: 1850,
                height: 400,
                transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={0}
        >
            {photos.map((item) => {
                return (
                    <ImageListItem key={item.id} >
                        <img
                            {...srcset(item.url, 200, 150)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            title={item.title}
                            position="top"
                            actionIcon={
                                <IconButton
                                    style={{ color: 'gray' }}
                                    aria-label={`star ${item.title}`}
                                    onClick={ () => photoDeleter(item.id)}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
}

export default AlbumPhotos;