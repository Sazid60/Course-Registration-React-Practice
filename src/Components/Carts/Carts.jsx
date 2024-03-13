
const Carts = () => {
    return (
        <div className="p-4">
            <h1 className="text-lg text-purple-500 font-bold mb-5">Credit Hour Remaining : {2} Hrs</h1> <hr />
            <h1 className="text-xl font-bold mb-2 mt-2">Course Name</h1>
            <div className="mb-7">
                <p>1. Course 1</p>
                <p>2. Course 2</p>

            </div> < hr />
            <p className="mt-4">Total Hour : {13}</p>
            <h1 className="text-lg font-bold mb-2">Total Price : {3000} USD</h1>
        </div>
    );
};

export default Carts;