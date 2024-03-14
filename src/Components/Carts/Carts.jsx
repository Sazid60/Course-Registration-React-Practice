import PropTypes from 'prop-types';
import { maxCredits } from '../../App';


const Carts = ({ carts }) => {
    const credits = carts.reduce((p, c) => p + c.credit, 0);
    return (
        <div className="p-4">
            <h1 className="text-lg text-purple-500 font-bold mb-5">Credit Hour Remaining : {maxCredits-credits} Hrs</h1> <hr />
            <h1 className="text-xl font-bold mb-2 mt-2">Course Name</h1>
            <div className="mb-7">
                <ol className='list-decimal list-inside'>
                    {
                        carts.map(cart => <li key={cart.id}>{cart.name}</li>)
                    }
                </ol>
            </div> < hr />
            <p className="mt-4">Total Hour : {credits}</p>

            <h1 className="text-lg font-bold mb-2">Total Price : {carts.reduce((p, c) => p + c.price, 0)} USD</h1>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array,
}
export default Carts;