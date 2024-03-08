import { action } from "easy-peasy";


const store = {
    business : {},
    setBusiness : action((state, payload) => {
        state.business = payload;
    }),
    business_id : null,
    setBusinessId : action((state, payload) => {
        state.business_id = payload;
    }),
    selectedMenuBusiness : "myproducts",
    setSelectedMenuBusiness : action((state, payload) => {
        state.selectedMenuBusiness = payload;
    }),

};

export default store;