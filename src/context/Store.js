import { action } from "easy-peasy";


const store = {
    business : {},
    setBusiness : action((state, payload) => {
        state.business = payload;
    }),
    business_user : localStorage.getItem("business_user") ? JSON.parse(localStorage.getItem("business_user")) : {},
    setBusinessUser : action((state, payload) => {
        state.business_user = payload;
    }),
    selectedMenuBusiness : "myproducts",
    setSelectedMenuBusiness : action((state, payload) => {
        state.selectedMenuBusiness = payload;
    }),

};

export default store;