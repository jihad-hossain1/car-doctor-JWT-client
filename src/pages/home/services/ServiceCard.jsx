import React from "react";
import { FaArrowRight, FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title">{title}</h2>
              <p>{price}</p>
            </div>
            <div className="card-actions">
              <Link to={`/checkout/${_id}`}>
                <FaArrowRight className="text-xl text-warning"></FaArrowRight>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
