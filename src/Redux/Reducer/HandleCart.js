const cart = [];

const handleCart = (state = cart, action => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Product Already Exists
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the Count(number/quantity)
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state, {
                        ...product,
                        qty:1,
                    }
                ]
            }
            break;
        
        case "DELITEM":
            const inCart = state.find((x) => x.id === product.id);
            if (inCart.qty === 1) {
                return state.filter((x) => x.id !== inCart.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

            break;
    
        default:
            return state;
            break;
    }
})