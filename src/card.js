function Card({ v, addTocart, cartItems }) {

    return (

      <>
        <div className="col-lg-5 border mt-2 mr-2"> 

          <div className="row">

            <div className="col-lg-12">

              <img src={v.img} className="img-fluid" />

            </div>


            <div className="col-lg-12">

              <h2>{v.name}</h2>

              <h5>Price Rs.{v.price}</h5>

              <button disabled ={cartItems.some(obj=>obj.id===v.id)}

                onClick={() => {

                  addTocart(v);

                }}

                className="btn btn-sm btn-primary"
              >
               {cartItems.some(obj=>obj.id===v.id)?'Added to Cart' :'Add to Cart'}

              </button>

            </div>

          </div>

        </div>

      </>

    );

  }
  
  export default Card;