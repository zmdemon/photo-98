import React, {useEffect, useState} from 'react';
import {FilterMenuWrapper, Wrapper} from "./photosPageStyles";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import {BasePagination} from "../../components/Pagination/paginationStyles";
import {useHttp} from "../../hooks/http.hook";
import BaseSelect from "../../components/Select/BaseSelect";

const pageSize = 12

export const PhotosPage = () => {
    const {loading, request} = useHttp()
    const [allPhotos, setAllPhotos] = useState([])
    const [filteredPhotos, setFilteredPhotos] = useState([])
    const [shownPhotos, setShownPhotos] = useState([])
    const [albumIds, setAlbumIds] = useState([])
    const [filterAlbumId, setFilterAlbumId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const loadPhotos = async () => {
        const allPhotos = await request("http://jsonplaceholder.typicode.com/photos")
        setAllPhotos(allPhotos)
        setFilteredPhotos(allPhotos)
        const uniqueAlbumIds = [...new Set(allPhotos.map(item => item.albumId))];
        setAlbumIds(uniqueAlbumIds)
    }

    useEffect(() => {
        loadPhotos()
    }, [])

    useEffect(() => {
        setFilteredPhotos(allPhotos.filter(item => filterAlbumId ? item.albumId === filterAlbumId : true))
    }, [allPhotos, filterAlbumId])

    useEffect(() => {
        setShownPhotos(filteredPhotos.slice((currentPage - 1) * (pageSize), (currentPage - 1) * (pageSize) + pageSize))
    }, [filteredPhotos, currentPage])

    const handlePageChange = (current) => {
        setCurrentPage(current);
    };

    const handleImageDeleteClick = (id) => () => {
        setAllPhotos(prevState => prevState.filter(item => item.id !== id))
    };

    const handleFilterValueChange = (albumId) => {
        setFilterAlbumId(albumId)
    };

    return (
        <>
            <Wrapper>

                <FilterMenuWrapper>
                    <label htmlFor="filterByAlbumId">Filter by album id:</label>
                    <BaseSelect
                        id={"filterByAlbumId"}
                        placeholder={"Album ID"}
                        optionItems={albumIds}
                        onSelectValueChange={handleFilterValueChange}
                    />
                </FilterMenuWrapper>
                {!loading && <>
                    <ImageGrid
                        images={shownPhotos}
                        onImageDeleteClick={handleImageDeleteClick}
                    />
                    <BasePagination
                        total={filteredPhotos.length || 1}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                        defaultPageSize={pageSize}
                    />
                </>}
                {loading && <h3>Loading...</h3>}
            </Wrapper>
        </>

    );
}

export default PhotosPage
