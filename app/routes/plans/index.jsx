import {useLoaderData} from "@remix-run/react";

export const loader = () => {
	console.log("testing here as well gentlemen")
	return{}
}

function PlanItems() {
  return (
	<div>PlanItems</div>
  )
}

export default PlanItems