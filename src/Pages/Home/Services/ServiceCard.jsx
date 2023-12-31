import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="card-actions">
                    <p className="text-base text-orange-600 font-bold">Price: ${price}</p>

                    <Link to={`/checkout/${_id}`}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;