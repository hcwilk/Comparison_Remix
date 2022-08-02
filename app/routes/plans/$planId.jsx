import {useParams} from "@remix-run/react";

function Plan() {
	const params = useParams()
  return (
	<div>Plan {params.planId}</div>
  )
}

export default Plan