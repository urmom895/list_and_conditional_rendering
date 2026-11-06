import "../styles/OrderTracker.css";
const steps = ["placed", "preparing", "on_the_way", "delivered"];
const stepNames = ["Placed", "Preparing", "On the way", "Delivered"];

function OrderTracker({ restaurant, status, etaMinutes, driverName }) {
  const currentStep = steps.indexOf(status);

  let message = "";

  if (status === "placed") {
    message = "Order received";
  } else if (status === "preparing") {
    message = "The kitchen is preparing your food";
  } else if (status === "on_the_way") {
    message = `${driverName} is on the way`;
  } else if (status === "delivered") {
    message = "Delivered. Enjoy your meal!";
  } else if (status === "cancelled") {
    message = "Order cancelled";
  }

  return (
    <div className="order-tracker">
      <h3>{restaurant}</h3>

      <p>{message}</p>

      {status !== "cancelled" && (
        <div className="progress">
          {stepNames.map((name, i) => (
            <div
              key={name}
              className={i <= currentStep ? "done" : "upcoming"}
            >
              {i <= currentStep ? "✓" : ""}
              <p>{name}</p>
            </div>
          ))}
        </div>
      )}

      {status === "on_the_way" && (
        <p>Arrives in {etaMinutes} min</p>
      )}

      {status === "delivered" && (
        <div>
          <p>Rate your order</p>

          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star}>⭐</button>
          ))}
        </div>
      )}

      {status === "cancelled" && (
        <button>Reorder</button>
      )}
    </div>
  );
}

export default OrderTracker;