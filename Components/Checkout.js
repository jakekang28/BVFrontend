import { useEffect, useRef } from "react"
import { loadPaymentWidget} from "@tosspayments/payment-widget-sdk"


function Checkout(){
    const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"
    const customerKey = "YbX2HuSlsC9uVJW6NMRMj"


    const paymentWidgetRef = useRef(null)
    const price = 50_000


    useEffect(() => {
        (async () => {
          const paymentWidget = await loadPaymentWidget(clientKey, customerKey)
    
          paymentWidget.renderPaymentMethods("#payment-widget", price)
    
          paymentWidgetRef.current = paymentWidget
        })()
      }, [])
    
      return (
        <div className="App">
          <h1>주문서</h1>
          <div id="payment-widget" />
        </div>
      )
}

export default Checkout;