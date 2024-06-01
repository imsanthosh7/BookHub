import React, { useState, useEffect, useContext } from 'react'
import { useCallback } from 'react'
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setbooks] = useState([]);
    const [loding, setloding] = useState(true);
    const [resultTitle, setresultTitle] = useState("");


    const fetchBooks = useCallback(async () => {
        setloding(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;
            console.log(docs);

            if (docs) {
                const newbooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title

                    }
                });
                setbooks(newbooks);

                if (newbooks.length > 1) {
                    setresultTitle("Your Search Result");
                } else {
                    setresultTitle("No Search Result Found!")
                }
            } else {
                setbooks([]);
                setresultTitle("No Search Result Found");
            }
            setloding(false)

        } catch (error) {
            console.log(error);
            setloding(false)
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{
            loding, books, setSearchTerm, resultTitle, setresultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider }
