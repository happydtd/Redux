import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
//import { uiActions } from './store/ui-slice';
import Notification from '../src/components/UI/Notification'

import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { SendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state=>state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart);
  const notification = useSelector(state=>state.ui.notification);

  //使用useEffect去同步数据库
  // useEffect(()=>{
  //   console.log('call sendCartData')
  //   const sendCartData = async ()=>{
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'pending',
  //         title:'Sending...',
  //         message:'Sending cart data!',
  //       })
  //     )
  //     const response = await fetch('https://react-http-5a2ef-default-rtdb.firebaseio.com/cartjson', {method: 'PUT', body: JSON.stringify(cart)});
  //     if (!response.ok){
  //       throw new Error('Sending cart data failed.')
  //     }
  //     //const responseData = await response.json();
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'success',
  //         title:'Success!',
  //         message:'Send cart data successfully!',
  //       })
  //     )
      
  //   }
    
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch(error=>{
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'error',
  //         title:'Error!',
  //         message:'Send cart data failed!',
  //       })
  //     )
  //   })
  // },[cart, dispatch])
  
  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(()=>{
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed){
      //dispatch一个function里会return另一个function
      dispatch(SendCartData(cart));
    }

  },[cart, dispatch])

  return (
    <>
      {notification && <Notification status = {notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart &&<Cart />}
        <Products />
      </Layout>
    </>

  );
}

export default App;
