import React from "react";

const TableRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const {
    _id,
    customerName,
    email,
    date,
    price,
    service_id,
    service,
    image,
    status,
  } = booking;

  return (
    <div>
      <tr>
        <th>
          <button
            className="btn btn-sm btn-circle"
            onClick={() => handleDelete(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td className="font-semibold">{customerName}</td>
        <td className="text-gray-600 underline">{service}</td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          {status ? (
            <span className="font-semibold text-green-600">Confirmd</span>
          ) : (
            <button
              onClick={() => handleBookingConfirm(_id)}
              className="btn btn-ghost btn-xs"
            >
              Please Confirm
            </button>
          )}
        </th>
      </tr>
    </div>
  );
};

export default TableRow;
