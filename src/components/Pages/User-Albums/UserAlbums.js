import * as React from 'react';
import './UserAlbums.css'
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import {albumActions} from "../../../redux/actions";
import {photoActions} from "../../../redux/actions";
import {useEffect, useState} from 'react';
import AlbumPhotos from "./AlbumPhotos";
/*------------------MUI imports-----------------*/
import {Accordion, AccordionSummary, AccordionDetails} from "../../MUI-Styles/MUI-Accordion/MUI_Accordion";
import Typography from '@mui/material/Typography';

/*----------------------------------------Component------------------------------------------------*/
function UserAlbums({albums, getAlbums, photos, getPhotos, deletePhoto}) {

    const {id} = useParams();
    const [activeAlbumId, setActiveAlbumId] = useState(null);

    useEffect(() => {
        getAlbums(id);
    }, []);

    function panelChange(id) {
        if (activeAlbumId === id) {
            setActiveAlbumId(null)
        } else {
            getPhotos(id).then(() => {
                setActiveAlbumId(id)
            });
        }
    }

    function photoDeleter(id) {
        deletePhoto(id);
    }

    return (
        <div className='albums_wrapper'>
            <div className='albums_container'>
                {albums.map((album) => {
                    return (<div className='album_item' key={album.id}>
                        <Accordion
                            expanded={activeAlbumId === album.id}
                            onChange={() => panelChange(album.id)}>
                            <AccordionSummary>
                                <Typography>{album.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {photos && photos.length
                                && activeAlbumId === album.id
                                    ?
                                    <AlbumPhotos
                                        photos={photos}
                                        photoDeleter={photoDeleter}
                                    /> : null}
                            </AccordionDetails>
                        </Accordion>
                    </div>)
                })
                }
            </div>
        </div>)
}

const mapStateToProps = state => {
    return {
        albums: state.albumReducer.albums,
        photos: state.photoReducer.photos
    };
};

const mapDispatchToProps = dispatch => ({
    getAlbums: (id) => dispatch(albumActions.getUserAlbums(id)),
    getPhotos: (id) => dispatch(photoActions.getUserPhotos(id)),
    deletePhoto: (id) => dispatch(photoActions.deleteUserPhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums);

