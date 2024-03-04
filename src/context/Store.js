import { action } from "easy-peasy";


const store = {
    business : {},
    setBusiness : action((state, payload) => {
        state.business = payload;
    }),
    selectedMenuBusiness : "myproducts",
    setSelectedMenuBusiness : action((state, payload) => {
        state.selectedMenuBusiness = payload;
    }),

};

export default store;