export const initialState = {
    basket:[],
};

//building a selector

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item)  => item.price + amount, 0 )
// all the above code did is to tally up the basket and the item.price and add it to the amount and returns it

const reducer = (state, action) => {
     console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':  //this means wenevr we receive ann add to basket action
            return{
                ...state, //it means return whatever the state was orginally was
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET": 
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id);
                
                let newBasket = [...state.basket]; //copying the current basket content                 

                if (index >= 0) {
                    newBasket.splice(index, 1); //this function cutts off the found inex

                } else {
                    console.warn(`Can't remove product (id: ${action.id}) as its not in basket!`)
                }

                return{
                    ...state,
                    basket: newBasket,  
                }

            default:
                return state;
    }
};

export default reducer;


