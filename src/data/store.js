import { reactive } from "vue"

export const store = reactive({
    apiUrl :                        "https://api.themoviedb.org/3/search/movie",
    api_key :                       "1c555d01e2b22b5cb83a63ec360a1234",
    resultApiCall :                  [],
    titleToSearch:                  "Interstellar ",
    language:                       "it-IT",
})