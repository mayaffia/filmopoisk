
import {FilterBox} from "../../features/filterBox/filterBox";
import {Search} from "../../features/search/search";
import {Films} from "../../widgets/films/films";
import {Header} from "../../widgets/header/header";

export const MainPage = () => {
    return (
        <div>
            <Header />
            <FilterBox/>
            <Search />
            <Films />
        </div>
    );
}

