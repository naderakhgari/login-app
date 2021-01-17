import React from "react";

const Policy = ({ policyData }) => {
    const { policy_ref, cover } = policyData.policy
    const { line_1, line_2, postcode } = policyData.policy.address
    const { make, model, colour, reg } = policyData.vehicle
    return (
        <div className="App">
            <h2>My Policy</h2>
            <hr />
            <h4>Policy refrence:</h4>
            <p>{policy_ref}</p>
            <h4>Cover type</h4>
            <p>{cover}</p>
            <h4>Car</h4>
            <p>{make}, {model}, {colour}, {reg}</p>
            <h4>Address</h4>
            <p>{line_1}, {line_2}, {postcode}</p>
        </div>
    )
}
export default Policy