import React from "react";
import {BookmarksResponse} from "../services/models";
import Bookmark from "./Bookmark";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";

interface BookmarksProps {
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<BookmarksProps> = ({bookmarks}) => (
    <div>
        <SearchForm/>
        <Pagination bookmarks={bookmarks}/>
        {bookmarks.data.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)}
    </div>
);

export default Bookmarks