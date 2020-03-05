import React from "react";
import { Spinner } from "react-bootstrap";
import '../App.css'
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div >
 <Spinner className="spiner" animation="border" variant="primary" />
      </div>
    );
  };
}
export default WithLoading;