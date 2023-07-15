import { makeAutoObservable, observable } from "mobx"
import { getSearch } from "../api/getSearch"

class SearchStore {
    search = ''
    result = []
    searchInfo = {}
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }


    getResultSearch = async (e) => {
        e.preventDefault();
        if (this.search === '') return;

        try {
            this.isLoading = true

            this.setResult(await (await getSearch(this.search)).search)
            this.setsearchInfo(await (await getSearch(this.search)).searchinfo)

            this.isLoading = false

        }
        catch (error) {
            console.error(error.massage)
            this.isLoading = true
        }
    }

    setSearch(search) {
        this.search = search
    }

    setsearchInfo(CountSearchInfo) {
        this.searchInfo = CountSearchInfo
    }

    setResult(results) {
        this.result = results
    }
}

export default observable(new SearchStore());