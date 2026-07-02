import PromoHeading from "./PromoHeading"

function Promo2() { // parent component

    const data = {
        heading: "99% off all items!",
        callToAction: "Everything must go!"
    }

    return (
        <div>
            {/* child component */}
            <PromoHeading
                heading={data.heading}
                callToAction={data.callToAction}
                />
        </div>
    )
}

export default Promo2