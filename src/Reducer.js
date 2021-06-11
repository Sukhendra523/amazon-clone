export const initialState ={
     basket:[],
     user:null
}

export const getBasketTotal=(basket)=>basket?.reduce((amount,item)=>item.price+amount,0)
const reducer=(state,action)=>{
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            //LOGIC for adding item in basket
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //LOGIC for removing item from basket

            //cloned basket
            let newBasket =[...state.basket];
            //check product exits
            const index = state.basket.findIndex(basketItem=>basketItem.id===action.id)
            if(index>=0){
                //item exits in basket
                newBasket.splice(index,1)
            }else{
                console.warn(
                    `cant remove the product(id: ${action.id}) as not found`
                )
            }

            return {...state,basket:newBasket}
        default:
            return state
    }
}

export default reducer